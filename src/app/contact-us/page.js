'use client';

import React, { useState } from 'react';

import { FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

import { toast, Toaster } from 'react-hot-toast';

import ReadyToConnect from '../components/ReadyToConnect';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    text: '',
  });

  const [errors, setErrors] = useState({});

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
        text: '',
      });
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
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
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
        <div className="w-full xl:w-[35%] flex flex-col items-center lg:items-start">
          <h1 className="max-w-sm lg:w-full text-center lg:text-left text-3xl md:text-5xl xl:text-7xl font-bold">
            Where to reach us
          </h1>

          <div className="max-w-sm lg:w-full text-center lg:text-left font-instrument">
            <div className="mt-14 text-lg">
              <p className="mb-4 text-[#00000063]">Address</p>

              <p>123 Maplewood LaneSpringfield, IL 62704United States</p>
            </div>

            <div className="my-7 text-lg">
              <p className="mb-4 text-[#00000063]">Phone</p>

              <p>(312) 555-7832</p>
            </div>

            <div className="my-7 text-lg">
              <p className="mb-4 text-[#00000063]">Email</p>

              <p>support@qualitypeople.com</p>
            </div>

            <div className="my-7 text-lg">
              <p className="mb-4 text-[#00000063]">Follow us</p>

              <div className="flex justify-center lg:justify-start gap-4 text-[#000]">
                <a
                  href="#"
                  className="bg-[#f39c13] p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaInstagram className="w-4 h-4 xl:w-9 xl:h-9" />
                </a>
                <a
                  href="#"
                  className="bg-[#f39c13] p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaXTwitter className="w-4 h-4 xl:w-9 xl:h-9" />
                </a>
                <a
                  href="#"
                  className="bg-[#f39c13] p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <FaFacebookF className="w-4 h-4 xl:w-9 xl:h-9" />
                </a>
              </div>
            </div>
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

            <div>
              <textarea
                name="text"
                className="w-full h-48 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                placeholder="Enter your text here..."
                value={formData.text}
                onChange={handleChange}
              />
              <div className="text-sm text-gray-500">
                Character count: {formData.text.length}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F99B2A] hover:bg-[#e88d1f] text-white py-3 rounded-md transition-colors text-sm md:text-lg xl:text-xl "
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-[10rem]">
        <ReadyToConnect />
      </div>
    </div>
  );
};

export default Contact;
