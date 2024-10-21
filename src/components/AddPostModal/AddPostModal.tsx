import useButtonListener from '@/hooks/useButtonListener';
import { IoClose } from 'react-icons/io5';
import { InputFile } from '../InputFile';
import { InputText } from '../InputText';
import { MCEditor } from '../MCEdior';
import { AddPostModalProps } from './types';

export const AddPostModal = ({ closeModal }: AddPostModalProps) => {
  useButtonListener(closeModal);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      <div className="bg-white py-4 px-4 rounded-lg shadow-lg z-10 relative max-w-[600px] w-full mx-4">
        <div className="flex mb-6 justify-between items-center">
          <h2 className="ml-2 text-xl font-semibold">Add a Post</h2>
          <button
            className="top-4 right-2 text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            <IoClose size={30} color="#000" />
          </button>
        </div>
        <div className="flex">
          <div className="w-3/4">
            <InputText
              title="Title"
              placeholder="Enter a title"
              className="w-full focus:border-[#c0c0c0]"
            />
          </div>
          <div className="w-1/4 mt-9 flex justify-end">
            <InputFile />
          </div>
        </div>
        <InputText
          title="Description"
          placeholder="Enter a description"
          className=" focus:border-[#c0c0c0]"
        />
        <MCEditor />
      </div>
    </div>
  );
};
