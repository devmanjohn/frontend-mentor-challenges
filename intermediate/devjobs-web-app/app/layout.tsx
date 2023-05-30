import Header from '@/components/Header';
import './globals.css';
import { ThemeContextProvider } from '@/context/ThemeContext';

export const metadata = {
  title: 'Devjobs Web App | Frontend Mentor Challenge',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextProvider>
      <html className='light' lang='en'>
        <body className='bg-[#F4F6F8] text-[#19202D] dark:bg-[#121721] dark:text-white'>
          <Header />
          {children}
        </body>
      </html>
    </ThemeContextProvider>
  );
}
