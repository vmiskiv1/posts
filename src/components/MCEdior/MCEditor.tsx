import { Editor } from '@tinymce/tinymce-react';

export const MCEditor = ({ value, onChange, onBlur, error }: any) => {
  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY}
        initialValue={value}
        init={{
          height: 250,
          width: '100%',
          menubar: false,
          plugins: [
            'link',
            'image',
            'advlist autolink lists charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | styleselect | bold italic backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist outdent indent | link image | ' +
            'preview code | help',
          placeholder: 'Write something...',
          image_title: true,
          automatic_uploads: true,
          file_picker_types: 'image',
          file_picker_callback: function (cb, value, meta) {
            if (meta.filetype === 'image') {
              const input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');

              input.onchange = function () {
                if (input.files && input.files.length) {
                  const file = input.files[0];
                  const reader = new FileReader();
                  reader.onload = function (e) {
                    cb(e.target?.result as string, { title: file.name });
                  };
                  reader.readAsDataURL(file);
                }
              };

              input.click();
            }
          },
        }}
        onEditorChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-500 mt-1 text-xs">{error}</p>}
    </>
  );
};
