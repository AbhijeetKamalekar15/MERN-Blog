import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInFailure('Please fill all the fields'));
    }
    try {
      dispatch(signInStart());
      const res = await fetch('api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/');
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 dark:bg-slate-900">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6 dark:bg-slate-900 border">
        {/* Header */}
        <div className="text-center mb-6">
          <Link to="/" className="font-bold text-2xl text-gray-800 dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg">Byte</span>
            Blog
          </Link>
          <p className="text-xs mt-2 text-gray-500">
            For Coders By Coders. Sign in with email and password or Google.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <Label value="Your Email" className="text-sm" />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
              className="h-10 text-sm"
            />
          </div>
          <div>
            <Label value="Your Password" className="text-sm" />
            <TextInput
              type="password"
              placeholder="*******"
              id="password"
              onChange={handleChange}
              className="h-10 text-sm"
            />
          </div>
          
          {/* Sign In Button */}
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading}
            className="w-full h-10 text-sm"
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-2 text-xs">Loading...</span>
              </>
            ) : (
              'Sign In'
            )}
          </Button>
          
          {/* Google Sign In Button */}
          <div className="w-full flex justify-center items-center">
  <OAuth />
</div>

        </form>

        {/* Footer */}
        <div className="flex justify-center text-xs mt-4">
          <span>Don't have an account?</span>
          <Link to="/sign-up" className="text-blue-500 font-medium ml-1">
            Sign Up
          </Link>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <Alert className="mt-4 text-xs" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </div>
  );
}
