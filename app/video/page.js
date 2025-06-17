'use client';

import { useState, useEffect } from 'react';

const MAX_RESULTS = 6;

export default function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch('/youtube');
        const data = await res.json();
        setVideos(data);
      } catch (error) {
        console.error("Neuspelo učitavanje videa:", error);
      }
    }
    fetchVideos();
  }, []);

  const totalPages = Math.ceil(videos.length / MAX_RESULTS);

  const currentVideos = videos.slice(
    (currentPage - 1) * MAX_RESULTS,
    currentPage * MAX_RESULTS
  );

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">Видео проповеди</h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Послушајте проповед у видео формату.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentVideos.length === 0 && (
            <p className="col-span-full text-center text-gray-500">Учитавање видеа...</p>
          )}
          {currentVideos.map((video) => (
            <div key={video.videoId} className="overflow-hidden rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="p-4 font-semibold text-gray-900">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-3 mt-10">
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            const isActive = page === currentPage;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-md font-semibold transition ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}