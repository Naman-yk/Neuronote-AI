'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromGemini } from "@/lib/openai";
import { success } from "zod";
import {auth} from "@clerk/nextjs/server"
import { getDbConnection } from "@/lib/db";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { revalidatePath } from "next/cache";

interface UploadResponseItem {
  ufsUrl: string;
  name: string;
}
interface PdfSummaryType{
  userId?:string,
  pdf_name:string,
  pdf_url:string,
  summary_text: string;

}

export async function generatePdfSummary(uploadResponse: UploadResponseItem[] | null) {
  if (!uploadResponse || uploadResponse.length === 0) {
    return { success: false, message: "File upload failed", data: null };
  }

  const { ufsUrl: pdfUrl, name: fileName } = uploadResponse[0];

  if (!pdfUrl) {
    return { success: false, message: "Failed to get file URL", data: null };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(pdfUrl);
    console.log({pdfText});

    let summary;
    try{
      summary = await generateSummaryFromGemini(pdfText);
      console.log({summary});
    }catch(error){
      console.log(error);

      if(error instanceof Error && error.message === 'RATE_LIMIT_EXCEEDED') {
        try{

        }catch(geminiError){
          console.error(
            'Gemini API Failed after OpenAi Quote succeeded',
            geminiError
          );
          throw new Error('Failed to generate summary');

        }

      }
    }
    if(!summary){
      return{
        success: false,
        message: 'Failed to generate summary',
        data: null,
      }
    }

    if (!pdfText.trim()) {
      return {
        success: false,
        message: "No text extracted from PDF (possibly scanned/image-only).",
        data: null,
      };
    }

    return {
      success: true,
      message: "PDF text extracted successfully",
      data: {
        fileName,
        fileUrl: pdfUrl,
        text: summary,
      },
    };
  } catch (err) {
    console.error("Error extracting PDF text:", err);
    return { success: false, message: "Error extracting PDF text", data: null };
  }
}



// ✅ Save PDF summary into the table
async function savePdfSummary({
  userId,
  pdf_name,
  pdf_url,
  summary_text,
}: {
  userId: string;
  pdf_name: string;
  pdf_url: string;
  summary_text: string;
}) {
  try {
    const sql = await getDbConnection();

    await sql`
    INSERT INTO users (id)
    VALUES (${userId})
    ON CONFLICT (id) DO NOTHING;
    `
   

    const [savedSummary] = await sql`
    INSERT INTO pdf_summaries (userId, pdf_name, pdf_url, summary_text, updated_at)
    VALUES (${userId}, ${pdf_name}, ${pdf_url}, ${summary_text}, now())
    RETURNING *;
  `;
  return savedSummary;
  
  } catch (error) {
    console.error('Error saving PDF summary:', error);
    throw error;
  }
}
//u have to 
// Main action to store summary

type PdfSummaryInput = {
  pdf_name: string;
  pdf_url: string;
  summary_text: string;
};

export async function storePdfSummaryAction({
  pdf_name,
  pdf_url,
  summary_text,
}: PdfSummaryInput) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return {
        success: false,
        message: "User not found",
      };
    }

    // Save summary in DB
    const savedSummary = await savePdfSummary({
      userId,
      pdf_name,
      pdf_url,
      summary_text,
    });

    if (!savedSummary?.id) {
      return {
        success: false,
        message: "Failed to save, please try again.",
      };
    }

    // Revalidate the dashboard + detail page
    revalidatePath("/dashboard");
    revalidatePath(`/summaries/${savedSummary.id}`);

    // Format title
    const formattedFileName = formatFileNameAsTitle(pdf_name);

    return {
      success: true,
      data: {
        id: savedSummary.id,
        title: formattedFileName,
      },
    };
  } catch (error: unknown) {
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unexpected error while saving PDF summary",
    };
  }
}
