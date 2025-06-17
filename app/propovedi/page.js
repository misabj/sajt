'use client';

import { useState } from 'react';

const PROPOVEDI = [
  { id: 1, title: "Богатство практичне љубави", pdfUrl: "/propovedi/Bogatstvo_prakticne_ljubavi.pdf" },
  { id: 2, title: "Христос - бескућник или прогнаник", pdfUrl: "/propovedi/Hristos beskucnik i prognanik.pdf" },
  { id: 3, title: "Бог нас прихвата", pdfUrl: "/propovedi/Bog nas prihvata.pdf" },
  { id: 4, title: "Духовна неосетљивост и небрига", pdfUrl: "/propovedi/Duhovna neosetljivost i nebriga.pdf" },
  { id: 5, title: "Црква као породица", pdfUrl: "/propovedi/Crkva kao porodica.pdf" },
  { id: 6, title: "Да људи славе Оца на небесима", pdfUrl: "/propovedi/Da ljudi slave Oca na nebesima.pdf" },
  { id: 7, title: "Десет девојака", pdfUrl: "/propovedi/Deset devojaka.pdf" },
  { id: 8, title: "Долази онај који је наша нада", pdfUrl: "/propovedi/Dolazi onaj koji je nasa nada.pdf" },
  { id: 9, title: "Дружење или служење", pdfUrl: "/propovedi/Druzenje ili sluzenje.pdf" },
  { id: 10, title: "Хришћански живот", pdfUrl: "/propovedi/Hriscanski zivot.pdf" },
  { id: 11, title: "Ко што отац храни децу", pdfUrl: "/propovedi/Ko sto otac hrani decu.pdf" },
  { id: 12, title: "Крштење наш подсетник", pdfUrl: "/propovedi/Krstenje nas podsetnik.pdf" },
  { id: 13, title: "Крштење", pdfUrl: "/propovedi/Krstenje.pdf" },
  { id: 14, title: "Кушње и радост", pdfUrl: "/propovedi/Kusnje i radost.pdf" },
  { id: 15, title: "Ми смо браћа, а јесу ли нам кесе сестре", pdfUrl: "/propovedi/Mi smo braca, a jesu li nam kese sestre.pdf" },
  { id: 16, title: "Мудрост одозго", pdfUrl: "/propovedi/Mudrost odozgo.pdf" },
  { id: 17, title: "Наочаре за Бога", pdfUrl: "/propovedi/Naocare za Boga.pdf" },
  { id: 18, title: "Наш утицај", pdfUrl: "/propovedi/Nas uticaj.pdf" },
  { id: 19, title: "Не пропустити шансу", pdfUrl: "/propovedi/Ne propusti sansu.pdf" },
  { id: 20, title: "Небески проводаџија", pdfUrl: "/propovedi/Nebeski provodadzija.pdf" },
  { id: 21, title: "Нови у Христу", pdfUrl: "/propovedi/Novi u hristu.pdf" },
  { id: 22, title: "Односи, црква, време", pdfUrl: "/propovedi/Odnosi, crkva, vreme.pdf" },
  { id: 23, title: "По чему смо познати", pdfUrl: "/propovedi/Po cemu smo poznati.pdf" },
  { id: 24, title: "Радост коју нам нико и ништа не може одузети", pdfUrl: "/propovedi/Radost koju nam niko i nista ne moze oduzeti.pdf" },
  { id: 25, title: "Радост службе Богу", pdfUrl: "/propovedi/Radost sluzbe Bogu.pdf" },
  { id: 26, title: "Шта има ново?", pdfUrl: "/propovedi/Sta ima novo.pdf" },
  { id: 27, title: "Укопани у крштењу", pdfUrl: "/propovedi/Ukopani u krstenju.pdf" },
  { id: 28, title: "Ускрс је изненађење", pdfUrl: "/propovedi/Uskrs je iznenadjenje.pdf" },
  { id: 29, title: "Више од дружења", pdfUrl: "/propovedi/Vise od druzenja.pdf" },
  { id: 30, title: "Вође и следбеници", pdfUrl: "/propovedi/Vodje i sledbenici.pdf" },
  { id: 31, title: "Вођство је испред", pdfUrl: "/propovedi/Vodjstvo je ispred.pdf" },
  { id: 32, title: "Захвалност увек и свуда", pdfUrl: "/propovedi/Zahvalnost uvek i svuda.pdf" },
  { id: 33, title: "Заједничка молитва", pdfUrl: "/propovedi/Zajednicka molitva.pdf" },
  { id: 34, title: "Заједништво", pdfUrl: "/propovedi/Zajednistvo.pdf" }
];

const ITEMS_PER_PAGE = 6;

export default function Propovedi() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PROPOVEDI.length / ITEMS_PER_PAGE);

  const currentItems = PROPOVEDI.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Текстуалне проповеди</h1>
      <p className="mb-12 text-center text-gray-700 text-lg max-w-xl mx-auto">
        Прочитајте проповеди у PDF формату.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {currentItems.map(({ id, title, pdfUrl }) => (
          <a
            key={id}
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 border border-gray-300 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between bg-white hover:bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
            <span className="inline-block bg-gradient-to-r from-indigo-600 via-purple-700 to-pink-600 px-10 py-2 rounded-full font-semibold text-white shadow-lg hover:brightness-110 transition w-fit">
              Отвори PDF
            </span>
          </a>
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
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 rounded-md font-semibold transition ${
                isActive
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
    </section>
  );
}
