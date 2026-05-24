const projects = [
  {
    title: "Portfolio Website",
    desc: "Professional modern website for businesses and creators.",
  },
  {
    title: "AI Chatbot",
    desc: "Smart AI assistant for customer support automation.",
  },
  {
    title: "Business Branding",
    desc: "Logos, posters, and premium branding kits.",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-black">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-cyan-500/20 rounded-2xl p-6 hover:scale-105 transition"
          >

            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400">
              {project.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}
