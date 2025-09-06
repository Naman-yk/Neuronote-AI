import { GoogleGenerativeAI } from "@google/generative-ai";
import { error } from "console";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message, context } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API key missing" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Use context (summary text or PDF text) to make chatbot PDF-aware
    const prompt = `
      You are a helpful assistant answering questions about a PDF summary.
      PDF Context:
      ${context}

      User Question:
      ${message}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (err) {
    console.error("Chatbot error:", err);
    return NextResponse.json({ error }, { status: 500 });
  }
}
