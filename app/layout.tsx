import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Justin Fussell | Student Developer',
  description: 'Computer and Information Sciences student passionate about building practical web and mobile solutions. Showcasing projects, skills, and learning journey.',
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
      <body className={`${inter.className} bg-zinc-950 text-white`}>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-5 flex justify-between items-center">
            <div className="text-xl font-semibold">Justin Fussell</div>
            
            <div className="flex gap-8 text-sm uppercase tracking-widest">
              <a href="#about" className="hover:text-white/70 transition">About</a>
              <a href="#projects" className="hover:text-white/70 transition">Projects</a>
              <a href="#experience" className="hover:text-white/70 transition">Experience</a>
              <a href="#contact" className="hover:text-white/70 transition">Contact</a>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}