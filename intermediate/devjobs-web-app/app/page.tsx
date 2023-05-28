'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/jobs');
  }, []);
}

export default Home;
