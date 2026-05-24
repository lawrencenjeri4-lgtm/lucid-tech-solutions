const services = [
  {
    title: "Web Development",
    desc: "Modern responsive websites and web applications.",
  },
  {
    title: "AI Automation",
    desc: "Smart AI tools and automation systems.",
  },
  {
    title: "Graphic Design",
    desc: "Professional branding and creative visuals.",
  },
  {
    title: "Social Media Management",
    desc: "Helping brands grow through digital marketing.",
  },
  {
    title: "Virtual Assistance",
    desc: "Reliable remote support for businesses.",
  },
  {
    title: "Tech Support",
    desc: "Technical troubleshooting and digital solutions.",
  },
]

export default function Services() {
  return (
    <section id="services" className="px-6 py-20 bg-zinc-950">

      <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black border border-cyan-500/20 rounded-2xl p-6 hover:scale-105 transition"
          >

            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              {service.title}
            </h3>

            <p className="text-gray-400">
              {service.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}
