// components/summaries/summary-card.tsx
"use client"
import DeleteButton from "./delete-button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FileText, Clock } from "lucide-react";

type Props = {
  id: string;
  title: string;
  date: string; // preformatted string
  status: "pending" | "completed";
  text?: string | null;
  pdfUrl?: string | null;
};

export default function SummaryCard({
  id,
  title,
  date,
  status,
  text,
  pdfUrl,
}: Props) {
  const excerpt = (text || "").slice(0, 220);
  const badge =
    status === "completed"
      ? "bg-green-100 text-green-700"
      : "bg-amber-100 text-amber-700";

      const handleDelete = async () => {
        try {
          console.log("Deleting summary with id:", id);
    
          // if you have an API route:
          const res = await fetch(`/api/summaries/${id}`, {
            method: "DELETE",
          });
    
          if (res.ok) {
            // refresh the page or revalidate cache
            window.location.reload(); 
          } else {
            console.error("Failed to delete summary");
          }
        } catch (err) {
          console.error("Error deleting:", err);
        }
    };

  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <FileText size={18} />
            {title}
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 text-xs rounded-full ${badge}`}>
              {status}
            </span>
           
          </div>
        </div>
        <CardDescription className="flex items-center gap-2">
          <Clock size={14} />
          {date}
        </CardDescription>
      </CardHeader>

      <CardContent className="text-sm text-neutral-700">
        {excerpt ? (
          <p className="line-clamp-3">{excerpt}</p>
        ) : (
          <p className="italic text-neutral-500">No summary yet.</p>
        )}
        <div className="mt-3 text-xs text-neutral-500">id: {id}</div>
      </CardContent>

      {pdfUrl ? (
        <CardFooter>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline"
          >
            Open PDF
          </a>
        </CardFooter>
      ) : null}
    </Card>
  );
}
