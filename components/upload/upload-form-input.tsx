// components/upload/upload-form-input.tsx
"use client";

interface UploadFormInputProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function UploadFormInput({ onSubmit }: UploadFormInputProps) {
  return (
    <form onSubmit={onSubmit} className="p-4 bg-white rounded">
      <input name="file" type="file" accept="application/pdf" required />
      <button type="submit" className="mt-2 bg-blue-600 text-white p-2 rounded">Upload</button>
    </form>
  );
}
