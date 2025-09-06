export default function UploadHeader() {
  return (
    <div className="w-full max-w-xl text-center">
      <div className="bg-white border-2 border-dashed border-gray-300 rounded-t-2xl p-8 shadow-md">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            📄
          </div>
          <h1 className="text-2xl font-bold">Upload your PDF or Document</h1>
          <p className="text-gray-600">
            Drop your PDF file here or click the button below.
          </p>
        </div>
      </div>
    </div>
  );
}
