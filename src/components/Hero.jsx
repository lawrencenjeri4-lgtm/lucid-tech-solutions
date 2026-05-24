export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-black via-zinc-900 to-black">

      <h1 className="text-5xl md:text-7xl font-extrabold text-cyan-400 mb-6">
        Build Your Digital Future
      </h1>

      <p className="max-w-2xl text-gray-300 text-lg">
        We create websites, AI solutions, branding, automation systems,
        and digital experiences for businesses and creators.
      </p>

      <div className="flex gap-4 mt-8 flex-wrap justify-center">

        <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-6 py-3 rounded-xl font-semibold">
          Hire Me
        </button>

        <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition">
          View Projects
        </button>

      </div>

    </section>
  )
}
