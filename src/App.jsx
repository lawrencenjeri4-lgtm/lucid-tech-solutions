export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400">
          Lucid Tech Solutions 🚀
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-2xl">
          Modern digital agency offering web development,
          AI automation, graphic design, social media management,
          virtual assistance, and tech support.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap justify-center">
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-2xl font-bold transition">
            Hire Me
          </button>

          <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 rounded-2xl font-bold transition">
            View Projects
          </button>
        </div>

      </section>

      {/* Services */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4">
              Web Development
            </h3>

            <p className="text-gray-400">
              Professional websites and web apps for businesses and creators.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4">
              AI Automation
            </h3>

            <p className="text-gray-400">
              Smart automation systems, AI tools, and digital workflows.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400 transition">
            <h3 className="text-2xl font-bold mb-4">
              Graphic Design
            </h3>

            <p className="text-gray-400">
              Logos, branding, posters, social media designs, and visuals.
            </p>
          </div>

        </div>

      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-gray-950">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-cyan-400">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4">
            Ready to start your next project?
          </p>

          <div className="mt-10 space-y-4">

            <p className="text-lg">
              📧 lucidtechsolutions@gmail.com
            </p>

            <p className="text-lg">
              📱 +254 754 938 511
            </p>

          </div>

        </div>

      </section>

    </div>
  )
}
