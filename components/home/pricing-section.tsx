import { CheckCircle } from "lucide-react";

type PricingPlan = {
  title: string;
  price: string;
  features: string[];
  highlight?: boolean;
};

const plans: PricingPlan[] = [
  {
    title: "Basic",
    price: "$9/mo",
    features: [
      "25 PDF summaries per month",
      "Standard AI summarization",
      "Email support",
    ],
  },
  {
    title: "Premium",
    price: "$19/mo",
    features: [
      "Unlimited PDF summaries",
      "Advanced AI with GPT-4",
      "Full customer support",
      "Early access to features",
    ],
    highlight: true,
  },
];

export function PricingSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-gray-100" id="pricing">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Simple & Transparent Pricing</h2>
        <p className="text-gray-600 mb-12">
          Choose the plan that fits your needs. Upgrade anytime.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl p-6 text-left bg-white shadow-md transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-1 hover:ring-rose-300 ${
                plan.highlight ? "border-2 border-rose-500" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-4">{plan.price}</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-rose-500 w-5 h-5 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-rose-500 text-white py-2 rounded-xl font-semibold hover:bg-rose-600 transition">
                {plan.title === "Basic" ? "Choose Basic" : "Go Premium"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
