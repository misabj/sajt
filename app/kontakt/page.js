'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setStatus({ type: 'error', message: 'Молимо попуните сва поља.' });
    return;
  }

  try {
    console.log('Slanje emaila...', formData);
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );
    console.log('EmailJS rezultat:', result);

    if (result.status === 200) {
      setStatus({ type: 'success', message: 'Хвала вам што сте нас контактирали!' });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus({ type: 'error', message: 'Грешка при слању поруке.' });
    }
  } catch (error) {
    console.error('EmailJS greška:', error);
    setStatus({ type: 'error', message: 'Грешка при слању поруке.' });
  }
};

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white rounded-md shadow-md my-16">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">Контакт</h1>
      <p className="mb-10 text-center text-gray-700 text-lg">
        Имаш питање или желиш да нам се обратиш? Попуни форму испод и јави нам се!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700">Име</label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ваше име"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700">Емаил</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ваш емаил"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700">Порука</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Унесите вашу поруку овде..."
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-md hover:brightness-110 transition"
        >
          Пошаљи поруку
        </button>

        {status && (
          <p
            className={`mt-4 text-center font-semibold ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}