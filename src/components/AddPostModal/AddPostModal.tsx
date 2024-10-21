import useButtonListener from '@/hooks/useButtonListener';
import { addPost } from '@/services/posts';
import { useFormik } from 'formik';
import { IoClose } from 'react-icons/io5';
import * as Yup from 'yup';
import { Button } from '../Button';
import { InputFile } from '../InputFile';
import { InputText } from '../InputText';
import { MCEditor } from '../MCEdior';
import { AddPostModalProps } from './types';

export const AddPostModal = ({ closeModal }: AddPostModalProps) => {
  useButtonListener(closeModal);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    imageUrl: Yup.mixed().nullable(),
    content: Yup.string().required('Content is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      imageUrl: null,
      content: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await addPost({ ...values, publishedAt: new Date().toISOString() });

        closeModal();
      } catch (error) {
        console.error('Failed to add post', error);
      }
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      <div className="bg-white py-4 px-4 rounded-lg shadow-lg z-10 relative max-w-[600px] w-full mx-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="flex mb-6 justify-between items-center">
            <h2 className="ml-2 text-xl font-semibold">Add a Post</h2>
            <IoClose
              size={30}
              color="#000"
              onClick={closeModal}
              className="cursor-pointer"
            />
          </div>
          <div className="flex">
            <div className="w-3/4">
              <InputText
                title="Title"
                placeholder="Enter a title"
                className="w-full focus:border-[#c0c0c0]"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.title && formik.errors.title
                    ? formik.errors.title
                    : null
                }
              />
            </div>
            <div className="w-1/4 mt-9 flex justify-end">
              <InputFile
                name="imageUrl"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  formik.setFieldValue(
                    'imageUrl',
                    event.currentTarget.files?.[0] || null,
                  );
                }}
              />
            </div>
          </div>
          <InputText
            title="Description"
            placeholder="Enter a description"
            className="focus:border-[#c0c0c0]"
            name="description"
            id="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && formik.errors.description
                ? formik.errors.description
                : null
            }
          />
          <MCEditor
            name="content"
            value={formik.values.content}
            onChange={(value: string) => formik.setFieldValue('content', value)}
            onBlur={formik.handleBlur}
            error={
              formik.touched.content && formik.errors.content
                ? formik.errors.content
                : null
            }
          />
          <Button
            type="submit"
            className="mt-10 w-full bg-green-400 hover:bg-green-500 text-white"
          >
            Add a post
          </Button>
        </form>
      </div>
    </div>
  );
};
