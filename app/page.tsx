'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Justin Fussell
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 mb-8">
            Student Developer &amp; Aspiring Software Engineer
          </p>
          <p className="text-lg text-zinc-400 max-w-md mx-auto mb-12">
            Building practical web and mobile solutions. Passionate about solving real problems 
            through clean code and continuous learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition">
              View My Projects
            </a>
            <a href="#contact" className="border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-24 px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="prose prose-invert max-w-none text-lg text-zinc-300">
          <p>
            I am a Computer and Information Sciences student with hands-on experience in web, 
            mobile, and desktop applications. Through academic projects and a mentorship 
            internship, I have worked with technologies like C#, .NET, React Native, Kotlin, 
            and Microsoft Azure.
          </p>
          <p className="mt-6">
            I value growth, honesty, and solving real-world problems. Currently building 
            strong foundations in full-stack development while actively learning through 
            FreeCodeCamp, Microsoft Learn, and personal projects.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        className="py-20 px-6 bg-zinc-900"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['C# & .NET', 'Kotlin & Android', 'React Native', 'ASP.NET MVC', 'Microsoft Azure', 'Git & GitHub', 'JavaScript', 'SQL Databases'].map((skill) => (
              <motion.div 
                key={skill} 
                className="bg-zinc-800 p-6 rounded-2xl text-center hover:bg-zinc-700 transition group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl mb-3">🚀</div>
                <div className="font-medium">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-white/10">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-4xl">💰</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">MoneyQuest - Budget Tracker</h3>
                <p className="text-zinc-400 mb-4">Android mobile app built in Kotlin with Jetpack Compose</p>
                <p className="text-sm text-zinc-500 mb-6">
                  Led implementation of Add Expense screen, RoomDB integration, and team collaboration using GitHub.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">Kotlin</span>
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">Jetpack Compose</span>
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">RoomDB</span>
                </div>
              </div>
            </div>

            <div className="group bg-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 border border-white/10">
              <div className="h-48 bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <span className="text-4xl">🌐</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2">ASP.NET Core MVC Web Applications</h3>
                <p className="text-zinc-400 mb-4">Deployed with Microsoft Azure</p>
                <p className="text-sm text-zinc-500 mb-6">
                  Developed and deployed full-stack web apps using C#, Azure SQL, and Blob Storage during university studies.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">C#</span>
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">.NET</span>
                  <span className="text-xs bg-zinc-700 px-3 py-1 rounded-full">Azure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-16">
          <div>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-sm text-zinc-500">Jul 2025 – Present</div>
                <div className="font-medium">SOUL Technology</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Development Intern</h3>
                <p className="text-zinc-400 mt-2">
                  One-on-one mentorship. Gaining practical exposure to ASP.NET MVC, Azure, C#, and real-world development workflows.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-sm text-zinc-500">2024</div>
                <div className="font-medium">Varsity College</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Team Leader – Website & Mobile App</h3>
                <p className="text-zinc-400 mt-2">
                  Led team of four using Agile. Delivered web and mobile application ahead of schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-zinc-400 mb-8">
            Open to internship opportunities, collaborations, or just a chat about development.
          </p>
          <a 
            href="mailto:justinfussell23@gmail.com" 
            className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-zinc-200 transition text-lg"
          >
            Email Me
          </a>
          <div className="mt-12 text-sm text-zinc-500">
            Cape Town, South Africa • LinkedIn: linkedin.com/in/justin-fussell
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-white/10">
        © {new Date().getFullYear()} Justin Fussell. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}