'use client';

import { useState } from 'react';

interface ContactFormProps {
  showServiceSelect?: boolean;
  showTimeSelect?: boolean;
  submitButtonText?: string;
}

const services = [
  'Sealcoating',
  'Crack Repair',
  'Striping & Parking Marking',
  'Asphalt Repair',
  'Patching',
  'Pressure Washing',
  'Other',
];

const bestTimes = [
  'Morning (8AM - 12PM)',
  'Afternoon (12PM - 5PM)',
  'Anytime',
];

export default function ContactForm({
  showServiceSelect = false,
  showTimeSelect = false,
  submitButtonText = 'Send Message',
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    address: '',
    service: '',
    bestTime: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is static for now - no action
    alert('Thank you for your inquiry! This is a demo form - no data was submitted.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            name="business"
            value={formData.business}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="Your business name"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="(919) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
          Property Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          placeholder="123 Main St, Raleigh, NC"
        />
      </div>

      {showServiceSelect && (
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Service Needed *
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      )}

      {showTimeSelect && (
        <div>
          <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-1">
            Best Time to Call
          </label>
          <select
            id="bestTime"
            name="bestTime"
            value={formData.bestTime}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          >
            <option value="">Select preferred time</option>
            {bestTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-vertical"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white px-8 py-4 rounded font-semibold hover:bg-primary-dark transition-colors text-lg uppercase tracking-wide"
      >
        {submitButtonText}
      </button>
    </form>
  );
}
