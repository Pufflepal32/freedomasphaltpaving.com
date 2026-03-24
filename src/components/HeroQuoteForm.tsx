'use client';

import { useState } from 'react';

export default function HeroQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! This is a demo form - no data was submitted.');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/95 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-2xl"
    >
      <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary uppercase mb-1">
        Get Your Free Quote
      </h3>
      <p className="text-gray-600 text-sm mb-5">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>
      <div className="space-y-3">
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
          placeholder="Your Name *"
        />
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
          placeholder="Phone Number *"
        />
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-sm"
          placeholder="Email Address *"
        />
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded text-secondary focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-sm"
          placeholder="Tell us about your project..."
        />
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-4 rounded font-bold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wider"
        >
          Request My Free Quote
        </button>
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">
        No obligation. Free estimates on all services.
      </p>
    </form>
  );
}
