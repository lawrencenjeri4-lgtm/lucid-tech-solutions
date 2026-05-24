export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-5 border-b border-cyan-500/20 bg-black sticky top-0 z-50">
      
      <h1 className="text-2xl font-bold text-cyan-400">
        Lucid Tech Solutions 🚀
      </h1>

      <div className="hidden md:flex gap-6 text-gray-300">
        <a href="#" className="hover:text-cyan-400 transition">
          Home
        </a>

        <a href="#services" className="hover:text-cyan-400 transition">
          Services
        </a>

        <a href="#projects" className="hover:text-cyan-400 transition">
          Projects
        </a>

        <a href="#contact" className="hover:text-cyan-400 transition">
          Contact
        </a>
      </div>

    </nav>
  )
}
