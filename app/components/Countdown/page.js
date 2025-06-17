'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextSunday = new Date();

      // Nađi sledeću nedelju u 10:00
      nextSunday.setDate(now.getDate() + ((7 - now.getDay()) % 7));
      nextSunday.setHours(10, 0, 0, 0);

      if (now > nextSunday) {
        nextSunday.setDate(nextSunday.getDate() + 7); // ako je prošla
      }

      const diff = nextSunday - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return null;

  return (
    <section className="bg-[#1c1f3f] text-white text-center py-6 px-4">
      <h2 className="text-xl md:text-2xl font-bold mb-2">Следеће богослужење је за:</h2>
      <div className="flex justify-center gap-4 text-lg md:text-xl font-mono">
        <div>
          <div className="text-3xl font-bold">{timeLeft.days}</div>
          <div>дана</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{timeLeft.hours}</div>
          <div>сат</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{timeLeft.minutes}</div>
          <div>минута</div>
        </div>
        <div>
          <div className="text-3xl font-bold">{timeLeft.seconds}</div>
          <div>секунд</div>
        </div>
      </div>
    </section>
  );
}
