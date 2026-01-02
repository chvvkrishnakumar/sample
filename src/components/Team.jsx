import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal'

export default function Team() {
  const team = [
  
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
      {
      name: "Konda Partha Saradhi",
      role: "Co-Founder, CEO & Head of R&D",
      desc: "Former head of product at multiple SaaS scale-ups, now shaping AI-first experiences.",
      image: "/1.png",
    },
  ];

  return (
    <section id="leadership" className="bg-black py-32 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Eyebrow */}
        <p className="text-xs tracking-[0.25em] text-gray-500 mb-6 uppercase">
          Our Leadership
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
          Founders behind every Build · Operate · Transfer
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-sm md:text-base text-gray-400 leading-relaxed">
          A hands-on founding team guiding strategy, architecture, and delivery
          on every engagement — from first discovery call to long-term product operations.
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5">
          {team.map((member, i) => (
            <Reveal
              key={i}
              y={20}
              delay={i * 120}
              className="group"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 px-8 py-10 transition-all duration-300 hover:border-white/20 hover:-translate-y-1">

                {/* Avatar */}
                <div className="flex justify-center mb-8">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-black border border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = '/sample.jpg';
                        e.currentTarget.parentElement?.classList.add(
                          'ring-1',
                          'ring-yellow-400/40'
                        );
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-base font-semibold text-white text-center">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="mt-1 text-sm text-gray-400 text-center">
                  {member.role}
                </p>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-500 leading-relaxed text-center">
                  {member.desc}
                </p>

                {/* Social icons placeholder (as in image) */}
                <div className="mt-6 flex justify-center gap-4 opacity-70">
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400">
                    in
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs text-gray-400">
                    X
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
