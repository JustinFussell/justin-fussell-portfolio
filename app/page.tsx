export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section - unchanged from before */}
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

      {/* About Section - unchanged */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-zinc-900 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1: MoneyQuest */}
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

            {/* Project 2: ASP.NET Web App */}
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
    </main>
  );
}