import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative z-0 flex flex-col items-center justify-center px-4 py-24 sm:py-28 lg:py-32 max-w-7xl mx-auto text-center space-y-6">
      {/* Badge */}
      <div className="relative p-[1px] overflow-hidden rounded-full bg-gradient-to-r from-rose-200 via-rose-500 to-rose-800 animate-gradient-x">
        <Badge className="px-6 py-2 flex items-center justify-center gap-2 bg-white bg-opacity-90 backdrop-blur-md text-sm font-medium">
          <Sparkles className="h-5 w-5 text-rose-500 animate-pulse" />
          Powered by AI
        </Badge>
      </div>

      {/* Heading */}
      <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
        Transform PDFs into concise summaries
      </h1>

      {/* Subheading */}
      <h3 className="text-lg lg:text-xl text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h3>

      {/* CTA Button */}
      <Link href="/#pricing" className="group inline-flex items-center mt-4">
        <span className="relative inline-flex items-center gap-2 px-6 py-3 text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 text-white shadow-lg hover:from-rose-600 hover:to-rose-800 transition-all duration-300">
          <span>Try Neuronote</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          <span className="absolute -inset-px rounded-full bg-gradient-to-r from-rose-400 to-rose-700 opacity-30 blur-lg z-[-1]" />
        </span>
      </Link>
    </section>
  );
}
