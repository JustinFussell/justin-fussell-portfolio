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
            {[
              { name: 'C# & .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
              { name: 'Kotlin & Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
              { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
              { name: 'ASP.NET MVC', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
              { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
              { name: 'Git & GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
              { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
              { name: 'SQL Databases', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            ].map((skill) => (
              <motion.div 
                key={skill.name} 
                className="bg-zinc-800 p-6 rounded-2xl text-center hover:bg-zinc-700 transition group flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition" 
                />
                <div className="font-medium">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Coming Soon */}
      <section id="projects" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="bg-zinc-800 rounded-3xl p-16 border border-white/10">
            <div className="text-6xl mb-6">🚧</div>
            <h3 className="text-3xl font-semibold mb-4">Projects Coming Soon</h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              I'm currently working on exciting new projects. Check back soon for live demos, GitHub repositories, and detailed case studies.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-16">
          <div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-sm text-zinc-500">July 2025 – Present</div>
                <div className="font-medium">SOUL Technology, Cape Town</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Software Development Intern – One-on-One Mentorship</h3>
                <p className="text-zinc-400 mt-3">
                  Learning directly from the owner and Software Engineer in a one-on-one mentorship environment. Gaining practical exposure to ASP.NET MVC projects using Visual Studio. Assisting with small development tasks such as UI updates, code changes, and fixing basic issues.
                </p>
                <div className="mt-4 text-sm text-zinc-500">Skills: C#, ASP.NET MVC (Beginner), Visual Studio, Git, Azure (Basic Exposure)</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-48 flex-shrink-0">
                <div className="text-sm text-zinc-500">2024</div>
                <div className="font-medium">Emeris (formerly The IIE’s Varsity College), Cape Town</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Team Leader – Website & Mobile App University Project</h3>
                <p className="text-zinc-400 mt-3">
                  Led a team of four to design and develop a web and mobile application using Agile methodology, ensuring project completion ahead of schedule. Managed tasks, conducted UX research, and delivered technical presentations to superiors. Implemented core modules using HTML, CSS, JavaScript, and Kotlin.
                </p>
                <div className="mt-4 text-sm text-zinc-500">Technologies Used: HTML, CSS, JavaScript, Kotlin, GitHub</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects */}
      <section className="py-24 px-6 bg-zinc-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Academic Software Development Projects</h2>
          <div className="prose prose-invert max-w-none text-lg text-zinc-300 space-y-6">
            <p>
              Built and deployed console, web, and mobile applications during Higher Certificate and bachelor’s programs, utilizing deep research and AI tools to enhance project efficiency.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Developed console applications and Windows Forms Apps using .NET Framework in Visual Studio, completing multiple functional prototypes.</li>
              <li>Created and deployed ASP.NET Core MVC web applications, integrating Microsoft Azure Web App Service, Azure Database Service, and Azure Blob Storage.</li>
              <li>Built mobile applications using React Native in Visual Studio Code and Android apps using emulators in Android Studio.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <img src="https://www.emeris.ac.za/img/emeris-logo-teal.svg" alt="Emeris" className="h-8" />
              Bachelor of Computer and Information Sciences in Application Development
            </h3>
            <p className="text-zinc-400">Emeris (formerly The IIE’s Varsity College), Cape Town • Expected Completion: November 2026</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <img src="https://www.emeris.ac.za/img/emeris-logo-teal.svg" alt="Emeris" className="h-8" />
              Higher Certificate in Mobile Applications and Web Development
            </h3>
            <p className="text-zinc-400">Emeris (formerly The IIE’s Varsity College), Cape Town • Completed: 2023 (Distinction)</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold flex items-center gap-3">
              <img src="https://baobabcollege.org/wp-content/uploads/2024/05/logo-removebg-preview.png" alt="Baobab College" className="h-8" />
              Cambridge International High School Certificate
            </h3>
            <p className="text-zinc-400">Baobab College, Lusaka, Zambia • 2019 – 2022</p>
            <ul className="list-disc pl-6 mt-4 text-sm text-zinc-400">
              <li>Completed IGCSE (International General Certificate of Secondary Education) with strong results across core subjects including Mathematics, English, Sciences, and Humanities.</li>
              <li>Progressed to Advanced Subsidiary (AS) Level and A-Level studies, focusing on subjects relevant to computing and analytical thinking.</li>
              <li>Developed strong foundation in academic discipline, research skills, and independent learning.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* IITPSA Membership */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-950 to-indigo-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Professional Membership</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <img src="https://www.iitpsa.org.za/wp-content/uploads/2019/03/IITPSA-LOGO-1-Hi-Res.jpg" alt="IITPSA Logo" className="mx-auto h-20 mb-6" />
            <h3 className="text-3xl font-semibold mb-4">Student Member</h3>
            <p className="text-2xl text-white/90 mb-2">Institute of Information Technology Professionals South Africa (IITPSA)</p>
            <p className="text-zinc-400">March 2026 – Present</p>
            <p className="mt-8 text-lg text-white/80">Official student member with certificate of membership.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <a href="https://linkedin.com/in/justin-fussell" target="_blank" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-8 h-8" />
            Connect on LinkedIn
          </a>
          <p className="text-zinc-400">Or email me directly</p>
          <a href="mailto:justinfussell23@gmail.com" className="inline-block bg-white text-black px-10 py-4 rounded-full font-medium hover:bg-zinc-200 transition text-lg mt-4">justinfussell23@gmail.com</a>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-white/10">
        © {new Date().getFullYear()} Justin Fussell. Built with Next.js and Tailwind CSS.
      </footer>
    </main>
  );
}