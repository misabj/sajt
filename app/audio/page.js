'use client';

import React, { useState } from 'react';

const audios = [
  { label: 'Исус - прави чокот', src: '/audio/cokot.mp3' },
  { label: 'Благословљени у благосиљању', src: '/audio/blagoslovljeni.mp3' },
  { label: 'Госпел на гитари', src: '/audio/gospel.mp3' },
  { label: 'Радника је мало - шта да радимо?', src: '/audio/korona.mp3' },
  { label: 'Нада доноси радост', src: '/audio/nada.mp3' },
  { label: 'Шта те то кошта?', src: '/audio/sta_kosta.mp3' },
  { label: 'Светло и со', src: '/audio/svetlo.mp3' },
  { label: 'Вође и завође', src: '/audio/vodje.mp3' }
];

const ITEMS_PER_PAGE = 6;

export default function AudioPlayerGrid() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(audios.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentAudios = audios.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-semibold text-gray-900 text-center mb-3">Аудио проповеди</h1>
      <p className="text-center text-gray-600 mb-12 text-lg max-w-xl mx-auto">
        Послушајте проповед у аудио формату
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        {currentAudios.map((audio, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center"
          >
            <p className="mb-4 font-medium text-gray-800">{audio.label}</p>
            <audio
              controls
              className="w-full rounded-md mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              src={audio.src}
            >
              Ваш претраживач не подржава аудио елемент.
            </audio>
            <a
              href={audio.src}
              download={audio.src.split('/').pop()}
              className="inline-block bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 px-10 py-2 rounded-full font-semibold text-white shadow-lg hover:brightness-110 transition"
            >
              Преузми
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-3">
        {[...Array(totalPages)].map((_, i) => {
          const page = i + 1;
          const isActive = page === currentPage;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md font-semibold transition
                ${isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
}
