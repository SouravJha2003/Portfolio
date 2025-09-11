import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      {/* Starfield Background */}
      <div className="stars-container">
        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>
      </div>

      {/* Wave Background */}
      <div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <div className="min-h-screen mt-25 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 p-8">
            {/* About Section */}
            <AboutMe />

            {/* Experience Section */}
            <Experience />

            {/* Projects Section */}
            <Projects />

            {/* Skills Section */}
            <section id="skills" className="h-[80vh] bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-yellow-900 flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30">
              <div className="text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Skills</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I've developed a diverse skill set across multiple technologies and frameworks.
                  From JavaScript and React to Python and cloud technologies, I'm always eager to learn more.
                </p>
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="h-[80vh] bg-gradient-to-br from-red-50 to-pink-100 dark:from-gray-900 dark:to-red-900 flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30">
              <div className="text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Education</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  My educational journey has been focused on computer science and software engineering.
                  I believe in continuous learning and staying up-to-date with the latest industry trends.
                </p>
              </div>
            </section>

            {/* Hobbies Section */}
            <section id="hobbies" className="h-[80vh] bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-gray-900 dark:to-teal-900 flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30">
              <div className="text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Hobbies</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, reading about design,
                  and working on creative projects. I believe that diverse interests make for better developers.
                </p>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="h-[80vh] bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30">
              <div className="text-center max-w-4xl">
                <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">Contact</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm always interested in new opportunities and collaborations.
                  Feel free to reach out if you'd like to work together or just have a chat about technology!
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 p-8">
            <footer className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30">
              <div className="text-center">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-xs mt-2">
                  Built with Next.js, TypeScript, and Tailwind CSS
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
