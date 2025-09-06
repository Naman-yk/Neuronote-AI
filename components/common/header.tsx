"use client";

import { ClipboardList } from "lucide-react";
import { Button } from "../ui/button";
import NavLink from "./navlink";
import Link from "next/link";
import {
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

export default function Header() {
  const { user } = useUser();

  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      {/* Logo */}
      <div className="flex lg:flex-1">
        <Link
          href="/"
          className="flex items-center gap-1 lg:gap shrink-0 group transition"
        >
          <ClipboardList className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Neuronote
          </span>
        </Link>
      </div>

      {/* Center Nav */}
      <div className="flex justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/dashboard">Your Summaries</NavLink>
        </SignedIn>
      </div>

      {/* Right Side */}
      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload a PDF</NavLink>
            <div className="px-2 py-0.5 bg-rose-100 text-rose-600 rounded-md text-sm font-medium">
              Pro
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>

        <SignedOut>
          <Link href="/sign-in">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
}
