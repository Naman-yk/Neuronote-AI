import { GoogleGenerativeAI } from "@google/generative-ai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompt";

export const generateSummaryFromGemini = async (pdfText: string) => {
  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set");
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `${SUMMARY_SYSTEM_PROMPT || "You are a helpful assistant summarizing PDFs."}\n\n${pdfText}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text() || "";
  } catch (error) {
    console.error("Error generating summary with Gemini:", error);
    if (error) {
      throw new Error("Rate limit exceeded for Gemini API");
    }
    throw new Error(`Failed to generate summary: ${error.message}`);
  }
};
