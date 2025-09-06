"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-rose-100 to-teal-100 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* CTA Main */}
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Start Summarizing Smarter Today
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Upload your PDFs and let our AI generate clear, accurate summaries in seconds.
        </p>
        <Button className="text-white bg-rose-600 hover:bg-rose-700 transition rounded-full px-6 py-3 text-lg">
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

      {/* Footer with Links and Descriptions */}
      <div className="mt-16 border-t border-gray-300 pt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Left: Creator */}
        <div className="text-center md:text-left">
          <p className="font-semibold text-gray-800 mb-2">Made by</p>
          <p className="text-rose-600 font-bold">Yuktarth Naman</p>
          <p className="text-gray-600 mt-1">Crafting seamless AI tools for effortless productivity.</p>
        </div>

        {/* Center: Info Links */}
        <div className="text-center">
          <p className="font-semibold text-gray-800 mb-2">Explore</p>
          <div className="space-y-2">
            <div>
              <a href="/about" className="hover:text-rose-600 font-medium">
                About
              </a>
              <p className="text-gray-600">Learn more about our mission and values.</p>
            </div>
            <div>
              <a href="/resources" className="hover:text-rose-600 font-medium">
                Resources
              </a>
              <p className="text-gray-600">Guides, tutorials, and FAQs to help you get started.</p>
            </div>
            <div>
              <a href="/blog" className="hover:text-rose-600 font-medium">
                Blog
              </a>
              <p className="text-gray-600">Read insights on productivity, tech, and learning.</p>
            </div>
          </div>
        </div>

        {/* Right: Contact */}
        <div className="text-center md:text-right">
          <p className="font-semibold text-gray-800 mb-2">Get in Touch</p>
          <p className="text-gray-600">Need help? Reach out anytime.</p>
          <a
            href="/contact"
            className="mt-2 inline-block text-rose-600 hover:underline font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
