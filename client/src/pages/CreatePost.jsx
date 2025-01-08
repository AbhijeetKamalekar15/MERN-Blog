import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useState } from 'react';
import { Alert, Progress } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(0);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    if (!imageFile) {
      setImageFileUploadError('Please select an image before uploading.');
      return;
    }
    setImageFileUploading(true);
    setImageFileUploadError(null);
    setImageFileUploadProgress(0);

    const uploadFormData = new FormData();
    uploadFormData.append('file', imageFile);
    uploadFormData.append('upload_preset', 'mern-blog');
    uploadFormData.append('cloud_name', 'duztdbp0j');

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.cloudinary.com/v1_1/duztdbp0j/image/upload', true);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const progress = Math.round((event.loaded / event.total) * 100);
        setImageFileUploadProgress(progress);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        setImageFileUrl(data.secure_url);
        setFormData((prev) => ({ ...prev, image: data.secure_url }));
        setImageFileUploading(false);
      } else {
        setImageFileUploadError('Could not upload image (File must be less than 2MB)');
        setImageFileUploading(false);
      }
    };

    xhr.onerror = () => {
      setImageFileUploadError('Could not upload image. Please try again.');
      setImageFileUploading(false);
    };

    xhr.send(uploadFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen mt-14">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
          <Select
  onChange={(e) =>
    setFormData({ ...formData, category: e.target.value })
  }
>
  <option value="uncategorized">Select a category</option>
  <option value="AI & ML">AI & ML</option>
  <option value="APIs and Integrations">APIs and Integrations</option>
  <option value="Backend Development">Backend Development</option>
  <option value="Blockchain and Web3 Development">Blockchain and Web3 Development</option>
  <option value="Cybersecurity">Cybersecurity</option>
  <option value="Data Structures and Algorithms">Data Structures and Algorithms</option>
  <option value="Database Management">Database Management</option>
  <option value="DevOps in Web Development">DevOps in Web Development</option>
  <option value="Development">Development</option>
  <option value="Emerging Trends">Emerging Trends</option>
  <option value="Frontend Development">Frontend Development</option>
  <option value="Frameworks and Libraries">Frameworks and Libraries</option>
  <option value="Fullstack Development">Fullstack Development</option>
  <option value="Machine Learning in Web Development">Machine Learning in Web Development</option>
  <option value="Mobile-Friendly Web Development">Mobile-Friendly Web Development</option>
  <option value="Open Source Contributions">Open Source Contributions</option>
  <option value="Programming Languages">Programming Languages</option>
  <option value="Programming Paradigms">Programming Paradigms</option>
  <option value="Testing and Debugging">Testing and Debugging</option>
  <option value="Web Performance Optimization">Web Performance Optimization</option>
  <option value="Other">Other</option>
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
        {imageFileUploading && (
          <div className="my-4">
            <Progress progress={imageFileUploadProgress} size="lg" color="blue" />
          </div>
        )}
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        {imageFileUrl && (
          <div className="w-full mb-12">
            <img src={imageFileUrl} alt="Uploaded preview" className="w-full h-auto object-cover rounded-md" />
          </div>
        )}
        <ReactQuill theme="snow" placeholder="Write something..." className="h-72 mb-12" onChange={(value) => {
          setFormData({ ...formData, content: value });
        }} />
        <Button type="submit" gradientDuoTone="purpleToPink" onClick={handleSubmit}>
          Publish
        </Button>
        {publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
