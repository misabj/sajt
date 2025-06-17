'use client';

import {
  Mail,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Youtube
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1b2344] text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Leva strana */}
        <div className="space-y-4">
          <div>
            <img src="/logo1.png" alt="Logo" className="h-16 mb-2" />
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1" />
            <p className="leading-tight">
              Слободанке Данке Савић 33,<br />
              Београд, Србија
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <a href="tel:+381112752087" className="font-semibold hover:underline">
              +381 11 2752 087
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <a href="mailto:info@baptistickacrkva.rs" className="hover:underline">
              info@baptistickacrkva.rs
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>Недељом од 10 часова</span>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://www.facebook.com/bgbaptisti/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@hriscanskabaptistickacrkva5080" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Desna strana */}
        <div>
          <iframe
            className="w-full h-64 rounded-md border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7688771173967!2d20.481181615541867!3d44.793764879098455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7abaf7eaa59d%3A0x27184cb681de83fd!2sSlobodanke%20Danke%20Savi%C4%87%2033%2C%20Beograd!5e0!3m2!1sen!2srs!4v1718000000000"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        Copyright ©2025 Сва права задржана | Баптистичка црква Београд
      </div>
    </footer>
  );
}
