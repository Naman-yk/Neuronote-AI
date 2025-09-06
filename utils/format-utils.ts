 export function formatFileNameAsTitle(fileName: string): string {
    if (!fileName) return "";
  
    // 1️⃣ Remove the file extension
    const nameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
  
    // 2️⃣ Replace underscores, dashes, and multiple spaces with a single space
    const replaced = nameWithoutExt.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  
    // 3️⃣ Capitalize the first letter of each word
    const titled = replaced.replace(/\b\w/g, (char) => char.toUpperCase());
  
    return titled;
  }
  