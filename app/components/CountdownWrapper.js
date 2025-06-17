'use client';

import dynamic from 'next/dynamic';

// Dinamički uvoz bez SSR
const Countdown = dynamic(() => import('./Countdown/page'), { ssr: false });

export default function CountdownWrapper() {
  return <Countdown />;
}