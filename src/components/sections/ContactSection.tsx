'use client';

import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Portfolio Contact Form',
        }),
      });

      if (res.ok) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputStyle = {
    background: theme === 'dark' ? '#1a1a1a' : '#ffffff',
    color: theme === 'dark' ? '#FFF8E7' : '#0D0D0D',
    border: `3px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
  };

  return (
    <section id="contact" className="py-16">
      <div
        className="p-8 sm:p-16 rounded-lg relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #FF2D7C 0%, #9B5DE5 50%, #00D4FF 100%)',
          border: `4px solid ${theme === 'dark' ? '#FFF8E7' : '#0D0D0D'}`,
          boxShadow: '8px 8px 0 rgba(0,0,0,0.3)',
          transform: 'rotate(0.5deg)'
        }}
      >
        {/* Decorative dots */}
        <div
          className="absolute top-2.5 right-2.5 w-[30px] h-[30px]"
          style={{
            background: `radial-gradient(circle, #FFE66D 30%, transparent 30%),
                        radial-gradient(circle, #FFE66D 30%, transparent 30%)`,
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0, 5px 5px'
          }}
        />

        <div className="text-center mb-10">
          <h2 className="font-bangers text-5xl mb-4 relative inline-block text-white">
            Let&apos;s Connect!
            <span
              className="absolute bottom-0 left-0 w-full h-2.5 -z-10"
              style={{
                background: '#FFE66D',
                transform: 'skewX(-10deg)'
              }}
            />
          </h2>

          <p className="font-comic text-xl max-w-[600px] mx-auto text-white">
            Got a project idea or just want to chat about tech? Drop me a message!
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-[600px] mx-auto space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg font-comic text-base outline-none transition-all duration-200 focus:translate-x-[-2px] focus:translate-y-[-2px]"
                style={{
                  ...inputStyle,
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                }}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg font-comic text-base outline-none transition-all duration-200 focus:translate-x-[-2px] focus:translate-y-[-2px]"
                style={{
                  ...inputStyle,
                  boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
                }}
              />
            </div>
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg font-comic text-base outline-none resize-none transition-all duration-200 focus:translate-x-[-2px] focus:translate-y-[-2px]"
              style={{
                ...inputStyle,
                boxShadow: '4px 4px 0 rgba(0,0,0,0.2)',
              }}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className="inline-flex items-center gap-3 font-bangers text-2xl text-white px-8 py-4 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px] hover:rotate-[-2deg] disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: '#0D0D0D',
                border: '4px solid white',
                boxShadow: '6px 6px 0 rgba(0,0,0,0.3)',
              }}
              onMouseEnter={(e) => {
                if (status !== 'sending' && status !== 'sent') {
                  e.currentTarget.style.boxShadow = '9px 9px 0 rgba(0,0,0,0.3)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '6px 6px 0 rgba(0,0,0,0.3)';
              }}
            >
              {status === 'idle' && (
                <>
                  <Send size={22} />
                  Send Message
                </>
              )}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && (
                <>
                  <CheckCircle size={22} />
                  Sent!
                </>
              )}
              {status === 'error' && 'Error — Try Again'}
            </button>
          </div>
        </form>

        {/* Email fallback */}
        <p className="text-center mt-6 font-comic text-white/80 text-sm">
          Or email me directly at{' '}
          <a
            href="mailto:sahan@dickinson.edu"
            className="underline text-white hover:text-yellow-200 transition-colors"
          >
            sahan@dickinson.edu
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;