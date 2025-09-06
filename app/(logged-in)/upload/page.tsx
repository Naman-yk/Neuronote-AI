import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";


export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="flex flex-col items-center space-y-0">
        <UploadHeader />
        <UploadForm />
    
      </div>
    </div>
  );
}
