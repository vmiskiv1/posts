import useButtonListener from '@/hooks/useButtonListener';
import { useAppSelector } from '@/redux/slices/hooks';
import { selectPost } from '@/redux/slices/post';
import { addPost, updatePost } from '@/services/posts';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';
import * as Yup from 'yup';
import { Button } from '../Button';
import { InputFile } from '../InputFile';
import { InputText } from '../InputText';
import { MCEditor } from '../MCEdior';
import { AddPostModalProps } from './types';

export const AddPostModal = ({ closeModal, postToEdit }: AddPostModalProps) => {
  useButtonListener(closeModal);

  const { postEditorMode } = useAppSelector(selectPost);

  const router = useRouter();

  const modalRoot = document.getElementById('modal-root');

  if (!modalRoot) return null;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    imageUrl: Yup.mixed().nullable(),
    content: Yup.string().required('Content is required'),
  });

  const formik = useFormik({
    initialValues: {
      title: postToEdit?.title || '',
      description: postToEdit?.description || '',
      imageUrl: postToEdit?.imageUrl || null,
      content: postToEdit?.content || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (postEditorMode) {
          const postData = {
            ...values,
            updatedAt: new Date().toISOString(),
          };

          await updatePost({
            postId: postToEdit.id,
            postData,
          });
        } else {
          await addPost({
            ...values,
            imageUrl:
              'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg',
            publishedAt: new Date().toISOString(),
          });
        }

        closeModal();
        router.push('/');
      } catch (error) {
        console.error('Failed to add post', error);
      }
    },
  });

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>
      <div className="bg-white py-4 px-4 rounded-lg shadow-lg z-10 relative max-w-[600px] w-full max-md:h-full">
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
          <div className="mt-5">
            <MCEditor
              name="content"
              value={formik.values.content}
              onChange={(value: string) =>
                formik.setFieldValue('content', value)
              }
              onBlur={formik.handleBlur}
              error={
                formik.touched.content && formik.errors.content
                  ? formik.errors.content
                  : null
              }
            />
          </div>
          <Button
            type="submit"
            className="mt-10 w-full hover:bg-blue-600 text-white"
          >
            {postEditorMode ? 'Edit ' : 'Add '}post
          </Button>
        </form>
      </div>
    </div>,
    modalRoot,
  );
};
