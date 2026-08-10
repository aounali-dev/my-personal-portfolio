import Navbar from '@/components/Navbar';
import ThemeProvider from '@/components/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'Aoun Ali — Full-Stack Developer',
  description: 'Portfolio of Aoun Ali, Full-Stack Web Developer',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}