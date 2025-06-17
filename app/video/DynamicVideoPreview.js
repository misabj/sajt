'use client';

import { useEffect, useState } from 'react';

export default function DynamicVideoPreview() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const res = await fetch('/youtube');
        const data = await res.json();
        setVideos(data.slice(0, 3)); // Samo prva 3 videa
      } catch (err) {
        console.error("Greška pri učitavanju videa:", err);
      }
    }

    fetchVideos();
  }, []);

  if (videos.length === 0) {
    return <p className="text-gray-500">Учитавање видеа...</p>;
  }

  return (
    <div className="space-y-6">
      {videos.map(video => (
        <div key={video.videoId} className="aspect-video overflow-hidden rounded-lg shadow border border-gray-200">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video.videoId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="mt-2 font-semibold text-gray-900">{video.title}</p>
        </div>
      ))}
    </div>
  );
}