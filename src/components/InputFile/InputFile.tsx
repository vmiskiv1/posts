import { uploadPostImage } from '@/services/posts';
import { useRef, useState } from 'react';

export const InputFile = ({ name, onChange }: any) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);

    const imageUrl = await uploadPostImage(file);

    onChange(imageUrl);
  };

  return (
    <div className="h-14">
      <input
        type="file"
        name={name}
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      <button
        onClick={handleUploadImage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
      >
        {fileName ? fileName : 'Choose file'}
      </button>
    </div>
  );
};
