import { Button, FileInput, Select, TextInput } from 'flowbite-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import React, { useEffect, useState } from 'react';
import { Alert, Progress } from 'flowbite-react';
import { useNavigate, useParams } from 'react-router-dom';
import { current } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

export default function CreatePost() {
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(0);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const {postId} = useParams();
  const {currentUser} = useSelector((state)=> state.user);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          setPublishError(null);
          setFormData(data.posts[0]);
          // Set the image URL from the fetched post data
          setImageFileUrl(data.posts[0]?.image || null);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchPost();
  }, [postId]);
  

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
      const res = await fetch(`/api/post/updatepost/${formData._id}/${currentUser._id}`, {
        method: 'PUT',
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
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update post</h1>
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
            value={formData.title}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData.category}
          >
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
        <ReactQuill theme="snow" value={formData.content} placeholder="Write something..." className="h-72 mb-12" onChange={(value) => {
          setFormData({ ...formData, content: value });
        }} />
        <Button type="submit" gradientDuoTone="purpleToPink" onClick={handleSubmit}>
          Update post
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
