import './globals.scss';

export const metadata = {
  title: 'Minimalist Portfolio Website | Frontend Mentor Challenge',
  description:
    'A minimalist portfolio website created by John Phillips as a Frontend Mentor Challenge',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
