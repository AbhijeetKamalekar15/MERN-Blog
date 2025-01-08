import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      access_key: "74e62c4b-b697-436d-ae3b-0ca535e4bb0e",
      name: data.username,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <div className="invisible mt-6">{/* <Navbar /> */}</div>

      <div>
        <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900">
          <div className="max-w-4xl w-full space-y-8 p-10 rounded-lg shadow-lg bg-white dark:bg-slate-900 dark:text-white rounded-md dark:border relative">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <div className="text-center dark:bg-slate-900">
              <h2 className="text-3xl font-extrabold text-gray-600 dark:text-white">
                Contact Us
              </h2>
            </div>
            <div className="flex flex-col gap-6 md:flex-row justify-between">
              <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4 dark:text-white">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Your Name"
                      className="bg-transparent text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:text-white"
                      {...register("username", { required: true })}
                    />
                    {errors.username && (
                      <span className="text-sm text-red-500 font-semibold">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="bg-transparent text-black  w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:text-white"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500 font-semibold">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      className="dark:text-white bg-transparent text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <span className="text-sm text-red-500 font-semibold">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full text-white px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <h3 className="text-lg font-medium text-gray-700 mb-4 dark:text-white">
                  Contact Information
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <FaPhone className="text-red-500" />
                    <span>+91 9529512659</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaEnvelope className="text-pink-500" />
                    <span>antech1527@gmail.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span>Sangli, Maharashtra, India</span>
                  </li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
