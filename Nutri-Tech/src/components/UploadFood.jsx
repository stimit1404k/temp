import { useState } from "react";

const UploadFood = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("image", file);

    // You'll call your backend API here
    console.log("Image ready to be sent to backend:", file.name);
  };

  return (
    <div className="max-w-xl p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-semibold">Upload Your Food</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Analyze Food
        </button>
      </form>
    </div>
  );
};

export default UploadFood;
