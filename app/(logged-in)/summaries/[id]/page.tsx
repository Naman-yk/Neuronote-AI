import { getSummaryById } from "@/lib/summaries";
import Chatbot from "@/components/Chatboat";

export default async function SummaryPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const summary = await getSummaryById(id);

  if (!summary) {
    return <div>No summary found for ID: {id}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Summary Page</h1>
      <div className="rounded-lg border p-4 shadow-sm bg-white">
        <h2 className="font-semibold">{summary.pdf_name}</h2>
        <p className="mt-2 text-gray-700 whitespace-pre-line">
          {summary.summary_text}
        </p>
        <Chatbot context={summary.summary_text} />
      </div>
    </div>
  );
}
