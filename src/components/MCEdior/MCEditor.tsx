import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';

export const MCEditor = ({ name, value, onChange, onBlur, error }: any) => {
  const [content, setContent] = useState('');

  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // const response = await fetch("/api/save", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ content }),
    // });

    // if (response.ok) {
    //   console.log("Sent");
    // } else {
    //   console.error("error");
    // }
    console.log(typeof content === 'string' ? true : false);
  };

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
      {error}
    </>
  );
};
