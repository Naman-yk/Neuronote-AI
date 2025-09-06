import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#161616] border border-[#2a2a2a] rounded-2xl shadow-xl p-8">
        <h1 className="text-white text-3xl font-semibold text-center mb-6">
          Sign In
        </h1>
        <SignIn
          path="/sign-in"
          routing="path"
          appearance={{
            variables: {
              colorPrimary: "#6366f1",
              colorText: "#ffffff",
              colorBackground: "#161616",
              fontFamily: "Inter, sans-serif",
            },
            elements: {
              card: "bg-[#161616] text-white border-none",
              headerTitle: "text-white text-2xl",
              headerSubtitle: "text-neutral-400",
              socialButtonsBlockButton:
                "bg-[#1f1f1f] hover:bg-[#2c2c2c] text-white border border-[#2a2a2a]",
              formFieldLabel: "text-neutral-400",
              formFieldInput:
                "bg-[#0f0f0f] border border-[#2a2a2a] text-white placeholder:text-neutral-500 focus:ring-indigo-500 focus:border-indigo-500",
              formButtonPrimary:
                "bg-indigo-600 hover:bg-indigo-700 text-white",
              footerActionText: "text-neutral-400",
              footerActionLink: "text-indigo-400 hover:text-indigo-300",
              dividerText: "text-neutral-600",
            },
          }}
        />
      </div>
    </div>
  );
}
