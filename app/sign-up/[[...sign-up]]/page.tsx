"use client";

import { SignUp } from "@clerk/nextjs";
import { motion } from "framer-motion";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient (subtle flickering effect) */}
      <motion.div
        className="absolute inset-0 opacity-40 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute w-[600px] h-[600px] bg-purple-600/40 rounded-full top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </motion.div>

      {/* Sign-up form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative z-10 p-8 rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm"
      >
        <SignUp path="/sign-up" routing="path" />
      </motion.div>
    </div>
  );
}
