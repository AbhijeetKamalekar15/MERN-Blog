import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { Alert } from 'flowbite-react';

export default function CreatePost() {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);

    const formData = new FormData();
    formData.append('file', imageFile);
    // Replace with your Cloudinary upload preset and cloud name
    formData.append('upload_preset', 'mern-blog'); 
    formData.append('cloud_name', 'duztdbp0j'); 

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/duztdbp0j/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      console.log(data.secure_url);
      
      if (response.ok) {
        setImageFileUrl(data.secure_url);
        setImageFileUploading(false);
      } else {
        setImageFileUploadError(
          'Could not upload image (File must be less than 2MB)'
        );
        setImageFileUploading(false);
      }
    } catch (error) {
      setImageFileUploadError(
        'Could not upload image (File must be less than 2MB)'
      );
      setImageFileUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your post creation logic here, including handling the uploaded image URL
    if (imageFileUrl) {
      // Use imageFileUrl in your post creation logic
      console.log('Image URL:', imageFileUrl); 
      // Example: Send imageFileUrl to your backend API for post creation
    }
    // ... rest of your form submission logic
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
          />
          <Select>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput type="file" accept="image/*" onChange={handleImageChange} />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={uploadImage}
            disabled={imageFileUploading}
          >
            {imageFileUploading ? 'Uploading...' : 'Upload Image'}
          </Button>
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        {imageFileUrl && (
          <div className="w-full mb-12">
            <img src={imageFileUrl} alt="Uploaded preview" className="w-full h-auto object-cover rounded-md" />
          </div>
        )}
        <ReactQuill theme="snow" placeholder="Write something..." className="h-72 mb-12" />
        <Button type="submit" gradientDuoTone="purpleToPink" onClick={handleSubmit}>
          Publish
        </Button>
      </form>
    </div>
  );
}