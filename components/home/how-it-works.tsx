import { BrainCircuit, FileOutput, FileText } from "lucide-react";
import { ReactNode } from "react";

type Step = {
  icon: ReactNode;
  label: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: <FileText size={64} strokeWidth={1.5} />,
    label: "Upload your PDF",
    description: "Simply drag and drop your PDF document or click to upload.",
  },
  {
    icon: <BrainCircuit size={64} strokeWidth={1.5} />,
    label: "AI Analysis",
    description:
      "Our advanced AI models like Claude and GPT-4 analyze your document instantly.",
  },
  {
    icon: <FileOutput size={64} strokeWidth={1.5} />,
    label: "Get Summary",
    description:
      "Receive a clear and concise summary of your document in seconds.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden bg-gray-50">
      <div className="py-12 lg:py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-xl uppercase mb-4 text-rose-600">
            How it Works
          </h2>
          <h3 className="font-bold text-3xl sm:text-4xl max-w-2xl mx-auto text-gray-800">
            Transform any PDF into an easy-to-digest summary in three simple
            steps
          </h3>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <StepItem key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepItem({ icon, label, description }: Step) {
    return (
      <div className="relative p-6 rounded-2xl bg-white shadow-md text-center space-y-4 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-1 hover:ring-rose-600">
        <div className="flex justify-center text-rose-600">{icon}</div>
        <h4 className="text-lg font-semibold text-gray-800">{label}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    );
  }
  