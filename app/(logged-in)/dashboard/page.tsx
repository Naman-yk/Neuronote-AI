// app/(logged-in)/dashboard/page.tsx
import { BgGradient } from "@/components/common/bg-gradient";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

import { getSummaries } from "@/lib/summaries";
import SummaryCard from "@/components/summaries/summary-card";
import { formatFileNameAsTitle } from "@/utils/format-utils";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user?.id) return redirect("/sign-in");

  const summaries = await getSummaries(user.id);

  return (
    <main className="min-h-screen">
      <BgGradient className="front-emerald-200 via-teal-200-to-cyan-200" />

      <div className="container mx-auto flex flex-col gap-6 py-8">
        {/* Free plan alert */}
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
          You have hit the <span className="font-semibold">Free Plan</span>.{" "}
          <Link href="/#pricing" className="underline font-medium">
            Click here to upgrade
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-800">Your Summaries</h1>
        <p className="text-lg text-gray-600">
          Transform your PDFs into concise, actionable insights
        </p>

        <div>
          <Button
            variant="link"
            className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 text-white"
          >
            <Link href="/upload" className="flex items-center">
              <Plus className="w-5 h-5 mr-2" />
              New Summary
            </Link>
          </Button>
        </div>

        {/* Summaries list (same page) */}
        <div className="grid gap-4 mt-6">
          {summaries.length > 0 ? (
            summaries.map((s) => (
              <SummaryCard
                key={s.id}
                id={s.id}
                title={formatFileNameAsTitle(s.pdf_name)}
                date={new Date(s.created_at).toLocaleString()}
                status={s.status}
                text={s.summary_text}
                pdfUrl={s.pdf_url}
              />
            ))
          ) : (
            <p className="text-gray-500">No summaries yet. Upload one!</p>
          )}
        </div>
      </div>
    </main>
  );
}
