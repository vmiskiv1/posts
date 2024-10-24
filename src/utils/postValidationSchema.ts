import * as Yup from 'yup';

export const postValidationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  imageUrl: Yup.mixed().nullable(),
  // TODO: Validate image format if needed
  // .test('fileFormat', 'Unsupported image format', (value) => {
  //   if (!value) return true;

  //   if (value instanceof File) {
  //     const supportedFormats = ['image/jpeg', 'image/png'];

  //     return supportedFormats.includes(value.type);
  //   }
  // }),
  content: Yup.string().required('Content is required'),
});
