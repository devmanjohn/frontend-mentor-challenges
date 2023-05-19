'use client';

import Footer from '@/components/Footer';
// Imports
import './globals.scss';

// Components
import Header from '@/components/Header';

export const metadata = {
  title: 'Minimalist Portfolio Website | Frontend Mentor Challenge',
  description:
    'A minimalist portfolio website created by John Phillips as a Frontend Mentor Challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
