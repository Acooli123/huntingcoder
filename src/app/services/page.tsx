// src/app/services/page.js
'use client';

import { Code, Laptop, Globe, Database, Cpu, BookOpen } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description:
        'We build fast, responsive, and SEO-friendly websites using the latest technologies like Next.js and Tailwind CSS.',
      icon: <Globe size={40} className="text-blue-600" />,
    },
    {
      title: 'Custom Software',
      description:
        'Tailored software solutions that meet your specific business needs, from desktop to cloud-based applications.',
      icon: <Laptop size={40} className="text-green-600" />,
    },
    {
      title: 'API Development',
      description:
        'Secure and scalable API design to connect your applications and services seamlessly.',
      icon: <Database size={40} className="text-purple-600" />,
    },
    {
      title: 'Machine Learning Solutions',
      description:
        'Implementing AI models for prediction, automation, and intelligent decision-making in your applications.',
      icon: <Cpu size={40} className="text-orange-600" />,
    },
    {
      title: 'Coding Tutorials',
      description:
        'In-depth tutorials and learning resources for beginners and advanced coders alike.',
      icon: <BookOpen size={40} className="text-yellow-600" />,
    },
    {
      title: 'Code Review & Optimization',
      description:
        'Professional code audits to improve performance, security, and maintainability of your projects.',
      icon: <Code size={40} className="text-red-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At HuntingCoder, we provide top-notch coding and development services designed to help you bring your ideas to life.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
