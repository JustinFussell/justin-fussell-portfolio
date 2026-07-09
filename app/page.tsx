export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
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
            <a 
              href="#projects" 
              className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition"
            >
              View My Projects
            </a>
            <a 
              href="#contact" 
              className="border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}