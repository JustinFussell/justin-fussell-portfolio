export default function Home() {
  return (
    <main className="min-h-screen pt-20"> {/* pt-20 accounts for fixed navbar */}
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
    </main>
  );
}