'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-[#0B1121]">
      <div className="container-width">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Feel free to reach out for collaborations, opportunities, or just a friendly hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {/* Phone */}
              <a
                href="tel:+19296238307"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium">(929) 623-8307</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:sahan@dickinson.edu"
                className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">sahan@dickinson.edu</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">Carlisle, PA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Connect with me
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/niloy-saha-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/niloysaha24/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-blue-500" />
                </a>
                <a
                  href="https://www.facebook.com/niloy.24.2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <Facebook className="w-6 h-6 text-blue-600" />
                </a>
                <a
                  href="https://www.instagram.com/__niloy__06/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl hover:shadow-lg transition-all duration-300"
                >
                  <Instagram className="w-6 h-6 text-pink-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-5 h-5" />
            </button>

            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm">Failed to send message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;