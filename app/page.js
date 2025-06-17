'use client';

import DynamicVideoPreview from "./video/DynamicVideoPreview";

export default function Home() {
  return (
    <>

      {/* O zajednici */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-900">О нашој заједници</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Ми смо заједница људи који верују у љубав, милосрђе и снагу молитве. Наш циљ је да ширимо Божију реч и помажемо једни другима у свакодневном животу.
            <br />
            Заједно градимо место где свако може пронаћи мир, пријатељство и духовни раст.
          </p>
        </div>
      </section>

      {/* Nadolazeći događaji */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Надолазећи догађаји</h2>
          <ul className="max-w-3xl mx-auto space-y-6 text-gray-800 text-lg">
            <li className="p-6 bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
              <strong>Библијска проучавања</strong> — Сваке прве, треће и пете среде у 18 часова
            </li>
            <li className="p-6 bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
              <strong>Недeљна служба</strong> — Недеља у 10 часова
            </li>
            <li className="p-6 bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-100 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
              <strong>Молитвени састанци</strong> — Петак у 19 часова
            </li>
          </ul>
        </div>
      </section>

      {/* Audio i Video preview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-900">Последње проповеди</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Video preview - Dinamički 3 najnovija */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Видео проповеди</h3>
                <DynamicVideoPreview />
              </div>

              {/* Audio preview - Ostaje isto */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Аудио проповеди</h3>
                <div className="space-y-6">
                  <AudioPreview title="Благословљени у благосиљању" src="/audio/blagoslovljeni.mp3" />
                  <AudioPreview title="Исус - прави чокот" src="/audio/cokot.mp3" />
                  <AudioPreview title="Госпел на гитари" src="/audio/gospel.mp3" />
                  <AudioPreview title="Радника је мало - шта да радимо?" src="/audio/korona.mp3" />
                  <AudioPreview title="Нада доноси радост" src="/audio/nada.mp3" />
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Poziv na akciju */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Желите да се укључите?</h2>
        <p className="max-w-xl mx-auto mb-8 text-lg text-gray-700">
          Придружите се волонтерима, групама за молитву и другим активностима. Заједно можемо учинити више.
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 px-10 py-4 rounded-full font-semibold text-white shadow-lg hover:brightness-110 transition"
        >
          Контактирајте нас
        </a>
      </section>
    </>
  );
}

// Komponente za audio i video preview

function AudioPreview({ title, src }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition">
      <p className="font-semibold mb-2 text-gray-900">{title}</p>
      <audio controls className="w-full rounded">
        <source src={src} type="audio/mpeg" />
        Твој претраживач не подржава аудио елемент.
      </audio>
      <a
        href={src}
        download
        className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded hover:brightness-110 transition"
      >
        Преузми
      </a>
    </div>
  );
}

function VideoPreview({ youtubeId, title }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="p-4 font-semibold text-gray-900">{title}</p>
    </div>
  );
}
