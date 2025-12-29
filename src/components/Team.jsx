export default function Team() {
  const team = [
    {
      name: "Konda Partha Saradhi",
      role: "Co-Founder, CEO & Head of R&D",
      desc: "Former head of product at multiple SaaS scale-ups, now shaping AI-first experiences.",
      image: "/1.png",
    },
    {
      name: "Yalamanchili Swarna Kumar Babu",
      role: "Co-Founder, Chairman & Managing Director",
      desc: "Leads distributed squads shipping secure, observable platforms for regulated teams.",
      image: "/2.png",
    },
    {
      name: "Muhammed Rehana Begum",
      role: "Co-Founder, President and CTO",
      desc: "Crafts systematic design languages that keep multi-product portfolios coherent.",
      image: "/3.png",
    },
  ];

  return (
    <section className="bg-black py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-xs tracking-widest text-gray-400 mb-4">
          LEADERSHIP
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          A senior team on every project
        </h2>

        {/* Subtitle */}
        <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-400">
          Strategy, product, and engineering leads who have built and scaled
          products in-house — now dedicated to your roadmap.
        </p>

        {/* Team Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-14">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-36 h-36 rounded-full overflow-hidden border border-white/10 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  onError={(e) => {
                    // prevent infinite loop
                    e.currentTarget.onerror = null;
                    // fallback to a known-good avatar
                    e.currentTarget.src = '/sample.jpg';
                    // optional: add a subtle border color to indicate fallback
                    e.currentTarget.parentElement?.classList.add('ring-1','ring-yellow-400/40');
                    // log to console for debugging
                    console.warn('Failed to load team image:', member.name, member.image);
                  }}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-white">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-xs text-gray-400">
                {member.role}
              </p>

              {/* Description */}
              <p className="mt-3 text-xs text-gray-500 leading-relaxed max-w-xs">
                {member.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
