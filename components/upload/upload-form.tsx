"use client";

import { useUploadThing } from "@/utils/uploadthings";
import UploadFormInput from "./upload-form-input";
import { generatePdfSummary, storePdfSummaryAction,  } from "@/actions/upload-action";
import { z } from "zod";
import { toast } from "sonner";
import {useRef,useState} from 'react';
import { useRouter } from "next/navigation";

export interface PdfSummaryType {
  id: string,
  pdf_name: string;
  pdf_url: string;
  summary_text: string;
}



const Schema = z.object({
  file: z
    .instanceof(File, { message: "Invalid file" })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed.",
    })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size should not exceed 20MB.",
    }),
});

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const [isLoading, setIsLoading]  = useState(false);

  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      toast.success("File uploaded successfully",);
    },
    onUploadError: (err) => {
      console.error("Error uploading file", err);
      toast.error("Upload error");
    },
    onUploadBegin: (file) => {
      toast.info(`Uploading ${file}...`);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("file");

    if (!(file instanceof File)) {
      toast.error("No valid file selected");
      return;
    }

    const validated = Schema.safeParse({ file });
    if (!validated.success) {
      toast.error(validated.error.flatten().fieldErrors.file?.[0] || "Invalid file");
      return;
    }

    // ✅ Upload the file
    const response = await startUpload([file]);
    if (!response || response.length === 0) {
      toast.error("Upload failed");
      return;
    }

    // ✅ Use ufsUrl from top-level
    const fileUrl = response[0].ufsUrl;
    if (!fileUrl) {
      toast.error("Upload finished but no file URL returned");
      return;
    }

    try {
      const summary = await generatePdfSummary([
        { ufsUrl: fileUrl, name: file.name }
      ]);
    
      const data = summary?.data || null;
    
      if (data?.text) {
        const storeResult = await storePdfSummaryAction({
          pdf_name: file.name,         // use original uploaded file name
          pdf_url: fileUrl,            // file URL
          summary_text: String(data.text),// summary text from API
         
        });
    
        toast.success("Summary saved.");
        formRef.current?.reset();

        router.push(`/summaries/${storeResult.data.id}`);




        console.log("Stored result:", storeResult);
      } else {
        toast.error("No summary returned.");
      }
    } catch (error) {
      console.error("Summary generation failed", error);
      toast.error("Failed to generate summary");
    }
    // this will catch the error and then parse it into the 
    finally{
      setIsLoading(false);
   

    }
    
    

 
}
return (
  <div className="w-full max-w-xl">
    <UploadFormInput onSubmit={handleSubmit} />
  </div>
);
}

