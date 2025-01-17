'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import { MdCloudUpload } from 'react-icons/md';

import { toast, Toaster } from 'react-hot-toast';

const Reffered = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    age: '',
    sex: '',
    country: '',
    state: '',
  });

  const [errors, setErrors] = useState({});
  const [files, setFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  // validate form inputs
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (Number(formData.age) < 18 || Number(formData.age) > 100) {
      newErrors.age = 'Age must be between 18 and 100';
    }

    if (!formData.sex) {
      newErrors.sex = 'Please select your sex';
    }

    if (!formData.country) {
      newErrors.country = 'Please select your country';
    }

    if (!formData.state) {
      newErrors.state = 'Please select your state';
    }

    if (files.length === 0) {
      newErrors.files = 'Please upload at least one image';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast.success('Form submitted successfully!');
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        age: '',
        sex: '',
        country: '',
        state: '',
      });
      setFiles([]);
      setErrors({});
    } else {
      toast.error('Please fix the errors in the form');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!validTypes.includes(file.type)) {
      toast.error('Please upload only PNG, JPG, or JPEG images');
      return false;
    }

    if (file.size > maxSize) {
      toast.error('File size should be less than 5MB');
      return false;
    }

    return true;
  };

  const createPreview = (file) => {
    return URL.createObjectURL(file);
  };

  const handleFiles = useCallback(
    (newFiles) => {
      const validFiles = Array.from(newFiles).filter(validateFile);

      if (validFiles.length + files.length > 5) {
        toast.error('You can only upload up to 5 images');
        return;
      }

      setFiles((prevFiles) => [
        ...prevFiles,
        ...validFiles.map((file) => ({
          file,
          preview: createPreview(file),
        })),
      ]);

      if (errors.files) {
        setErrors((prev) => ({
          ...prev,
          files: '',
        }));
      }
    },
    [files, errors.files]
  );

  const handleFileChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  // Cleanup preview URLs when component unmounts
  useEffect(() => {
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const removeFile = (indexToRemove) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const renderError = (fieldName) => {
    return errors[fieldName] ? (
      <p className="text-red-500 text-sm mt-1">{errors[fieldName]}</p>
    ) : null;
  };

  return (
    <div className="bg-[#fff]">
      <Toaster position="top-right" />
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-5 xl:gap-0 lg:justify-between px-4 md:px-8 py-8 lg:py-20 text-[#000]">
        <div className="w-full xl:w-[40%] flex flex-col items-center lg:items-start">
          <h1 className="font-playfair text-3xl md:text-5xl xl:text-7xl font-bold">
            Lets get you referred
          </h1>

          <div className="mt-8 xl:mt-20 w-[14rem] xl:w-[22rem]">
            <img
              src="/reffered_img.png"
              alt="Person smiling"
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>

        <div className="w-full xl:w-[60%] bg-[#8dceee6f] rounded-3xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6 font-instrument">
            <h2 className="text-lg md:text-xl xl:text-2xl mb-6">
              Fill in your details
            </h2>
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                className={`w-full p-4 rounded-md border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } bg-[#ffffff91]`}
                value={formData.fullName}
                onChange={handleChange}
              />
              {renderError('fullName')}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={`w-full p-4 rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } bg-[#ffffff91]`}
                value={formData.email}
                onChange={handleChange}
              />
              {renderError('email')}
            </div>

            <div>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                className={`w-full p-4 rounded-md border ${
                  errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                } bg-[#ffffff91]`}
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {renderError('phoneNumber')}
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  className={`w-full p-4 rounded-md border ${
                    errors.age ? 'border-red-500' : 'border-gray-300'
                  } bg-[#ffffff91]`}
                  value={formData.age}
                  onChange={handleChange}
                />
                {renderError('age')}
              </div>

              <div className="w-1/2">
                <select
                  name="sex"
                  className={`w-full p-4 rounded-md border ${
                    errors.sex ? 'border-red-500' : 'border-gray-300'
                  } bg-[#ffffff91]`}
                  value={formData.sex}
                  onChange={handleChange}
                >
                  <option value="">Sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {renderError('sex')}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <select
                  name="country"
                  className={`w-full p-4 rounded-md border ${
                    errors.country ? 'border-red-500' : 'border-gray-300'
                  } bg-[#ffffff91]`}
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Country</option>
                  <option value="ng">Nigeria</option>
                  <option value="us">United States</option>
                  <option value="cn">China</option>
                </select>
                {renderError('country')}
              </div>

              <div className="w-1/2">
                <select
                  name="state"
                  className={`w-full p-4 rounded-md border ${
                    errors.state ? 'border-red-500' : 'border-gray-300'
                  } bg-[#ffffff91]`}
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">State</option>
                  <option value="lg">Lagos</option>
                  <option value="ny">New York</option>
                  <option value="hk">Hong Kong</option>
                </select>
                {renderError('state')}
              </div>
            </div>

            <div>
              <div
                className={`bg-[#ffffff91] rounded-xl p-8 text-center ${
                  errors.files ? 'border-2 border-red-500' : ''
                }`}
              >
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  id="file"
                  className="hidden"
                  onChange={handleFileChange}
                  multiple
                />

                <label
                  htmlFor="file"
                  className={`w-full min-h-[10vh] cursor-pointer ${
                    dragging ? 'bg-blue-500' : 'bg-transparent'
                  } flex flex-col items-center justify-center`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  {files.length === 0 ? (
                    <div className="flex flex-col items-center gap-2">
                      <MdCloudUpload className="h-8 w-8 xl:w-14 xl:h-14 text-gray-400" />
                      <p className="text-sm md:text-lg xl:text-xl">
                        Drag or <span className="text-[#F99B2A]">upload</span>{' '}
                        your files
                      </p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
                      {files.map((file, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={file.preview}
                            alt={`Preview ${index + 1}`}
                            className="w-full h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              removeFile(index);
                            }}
                            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </label>
              </div>
              {renderError('files')}
              <p className="mt-1 text-xs md:text-sm xl:text-lg text-gray-400">
                Upload up to 5 images. The following file extension is accepted
                PNG, JPG, JPEG
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F99B2A] hover:bg-[#e88d1f] text-white py-3 rounded-md  transition-colors text-sm md:text-lg xl:text-xl "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="w-full  bg-[#2c3f50] rounded-t-[2rem] xl:rounded-t-[5rem] py-12 xl:py-32 px-20 flex flex-col md:flex-row justify-between items-center gap-14 md:gap-0 p-4">
        <div className="flex items-center gap-1">
          <svg
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[2rem] h-[2rem] xl:w-[3rem] xl:h-[4rem]"
          >
            <g clip-path="url(#clip0_165_4140)">
              <path
                d="M26.2254 30.8728C26.1571 30.668 26.0859 30.4514 26.0107 30.2268C25.1162 27.7795 25.1726 27.8339 24.7006 26.3719C24.6927 26.3224 24.6838 26.2759 24.6759 26.2314C24.187 24.7743 23.627 23.1144 22.9967 21.2537C22.9957 21.2557 22.9937 21.2577 22.9927 21.2596C21.1661 15.9308 19.3613 10.6652 17.5456 5.36794C17.0736 4.00679 16.5838 2.59716 16.0762 1.14005C15.531 1.07872 14.972 1.04212 14.3981 1.02926C7.24209 0.859114 0.944999 6.50653 0.138567 13.6724C-0.678749 21.0084 4.16281 27.8765 11.2564 29.3306C16.1485 30.1685 20.8604 30.6918 25.7752 31.2665C26.168 31.2982 26.0493 31.312 26.3847 31.3536C26.3669 31.3001 26.3501 31.2487 26.3323 31.1933C26.1462 30.7205 26.1917 30.8134 26.2264 30.8728H26.2254Z"
                fill="white"
              />
              <path
                d="M22.9973 21.2537C23.6276 23.1144 24.1877 24.7743 24.6765 26.2314C24.5894 25.7388 24.5379 25.5073 24.8694 25.1274C28.9679 20.4989 29.9771 15.2234 27.4925 9.57503C25.2702 4.52609 21.3231 1.72563 16.0768 1.14001C16.5844 2.59712 17.0742 4.00675 17.5462 5.36791C23.9047 6.93878 27.3649 15.2877 22.9973 21.2537Z"
                fill="white"
                stroke="white"
                stroke-width="0.193873"
                stroke-miterlimit="10"
              />
              <path
                d="M17.5447 5.36792C19.3604 10.6652 21.1652 15.9307 22.9918 21.2596C22.9928 21.2576 22.9948 21.2557 22.9958 21.2537C21.5551 17.004 19.7413 11.7038 17.5447 5.36792Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_165_4140">
                <rect
                  width="28.8871"
                  height="30.4381"
                  fill="white"
                  transform="translate(0 0.975708)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="text-[#fff] font-playfair font-bold text-sm md:text-xl xl:text-3xl ">
            <p>Quality</p>
            <p className="mt-[-4px] xl:mt-[-8px]">People</p>
          </div>
        </div>

        <div className="flex gap-4 text-[#000]">
          <a
            href="#"
            className="bg-[#fff] p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <FaInstagram className="w-4 h-4 xl:w-9 xl:h-9" />
          </a>
          <a
            href="#"
            className="bg-[#fff] p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <FaXTwitter className="w-4 h-4 xl:w-9 xl:h-9" />
          </a>
          <a
            href="#"
            className="bg-[#fff] p-2 rounded-full hover:bg-white/20 transition-colors"
          >
            <FaFacebookF className="w-4 h-4 xl:w-9 xl:h-9" />
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <a href="#" className="w-40 ">
            <Image
              src="/appStore.png"
              alt="love icon"
              width={63}
              height={48}
              className="w-full h-full object-contain"
            />
          </a>
          <a href="#" className="w-40 ">
            <Image
              src="/playStore.png"
              alt="love icon"
              width={63}
              height={48}
              className=" w-full h-full object-contain"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reffered;
