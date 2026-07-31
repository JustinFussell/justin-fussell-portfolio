import BackToTop from './components/BackToTop';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import MobileNav from './components/MobileNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Fussell | Student Developer & Aspiring Software Engineer',
  description: 'Computer and Information Sciences student passionate about building practical web and mobile solutions. Showcasing projects, skills, experience, and learning journey.',
  keywords: ['Justin Fussell', 'Student Developer', 'Software Engineer', 'Portfolio', 'Cape Town', 'Next.js', 'React', 'C#', '.NET', 'Kotlin'],
  authors: [{ name: 'Justin Fussell' }],
  creator: 'Justin Fussell',
  openGraph: {
    title: 'Justin Fussell | Student Developer',
    description: 'Computer and Information Sciences student passionate about building practical web and mobile solutions.',
    url: 'https://your-portfolio-url.com', // Replace this later after deploying
    siteName: 'Justin Fussell Portfolio',
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Justin Fussell | Student Developer',
    description: 'Computer and Information Sciences student passionate about building practical web and mobile solutions.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300`}>
        <ScrollProgress />
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-black/10 dark:border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-xl font-semibold">Justin Fussell</div>
            
            <div className="flex items-center gap-6">
              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
                <a href="#about" className="hover:opacity-70 transition">About</a>
                <a href="#projects" className="hover:opacity-70 transition">Projects</a>
                <a href="#experience" className="hover:opacity-70 transition">Experience</a>
                <a href="#contact" className="hover:opacity-70 transition">Contact</a>
              </div>
              
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
        </nav>

        {children}
        <BackToTop />
      </body>
    </html>
  );
}