'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    age: '',
    email: '',
    password: '',
    check: false,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('Form submitted successfully!');
        setFormData({
          name: '',
          mobile: '',
          age: '',
          email: '',
          password: '',
          check: false,
        });
      } else {
        setMessage('Something went wrong, please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Server error, please try again later.');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gray-300 overflow-hidden">
      <form
        className="p-6 shadow-lg rounded-xl bg-white w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-sm"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Page</h1>

        {/* Name */}
        <div className="mb-3">
          <label htmlFor="name" className="block font-medium mb-1">
            Enter your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            id="name"
            required
          />
        </div>

        {/* Number */}
        <div className="mb-3">
          <label htmlFor="mobile" className="block font-medium mb-1">
            Enter your Number
          </label>
          <input
            type="number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            id="mobile"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-3">
          <label htmlFor="age" className="block font-medium mb-1">
            Enter your Age
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            id="age"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="block font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            id="email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            id="password"
            required
          />
        </div>

        {/* Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="check"
            checked={formData.check}
            onChange={handleChange}
            className="mr-2"
            id="check"
          />
          <label htmlFor="check" className="text-sm">
            Check me out
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>

        {message && (
          <p className="mt-4 text-sm text-green-600 text-center">{message}</p>
        )}
      </form>
    </div>
  );
}
