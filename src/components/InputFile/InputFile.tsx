import { uploadPostImage } from '@/services/posts';
import Link from 'next/link';
import { useRef, useState } from 'react';

export const InputFile = ({ name, onChange, error }: any) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageLink, setImageLink] = useState('');

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

    setImageLink(imageUrl);

    onChange(imageUrl);
  };

  return (
    <div className="relative w-full flex justify-center items-center">
      <input
        type="file"
        name={name}
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
      {imageLink ? (
        <Link
          href={imageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {fileName}
        </Link>
      ) : (
        <button
          type="button"
          onClick={handleUploadImage}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none max-md:text-xs"
        >
          Choose file
        </button>
      )}
      {error && (
        <div className="absolute left-5 top-10 text-red-500 text-xs mt-1">
          {error}
        </div>
      )}
    </div>
  );
};
