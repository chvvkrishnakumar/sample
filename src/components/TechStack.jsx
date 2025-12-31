// src/components/TechStack.jsx
import Reveal from "./Reveal";

const techs = [
  { name: "Node.js", src: "/tech/node.png" },
  { name: "Angular", src: "/tech/angular.png" },
  { name: "Vue", src: "/tech/vue.png" },
  { name: "Java", src: "/tech/java.png" },
  { name: "Python", src: "/tech/python.png" },
  { name: "Power BI", src: "/tech/powerbi.png" },
  { name: "Docker", src: "/tech/docker.png" },
  { name: "Kubernetes", src: "/tech/Kuberneties.png" },
  { name: "Playwright", src: "/tech/playwright.png" },
  { name: "React js", src: "/tech/React.png" },
  { name: "Mongo DB", src: "/tech/MongoDB.png" },
];

export default function TechStack() {
  // Duplicate items to create a seamless loop
  const loopItems = [...techs, ...techs];

  return (
    <section id="techstack" className="bg-black px-0 py-16 border-t border-white/10">
      <style>{`
        @keyframes techstack-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ts-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        .ts-track {
          display: flex;
          align-items: center;
          gap: 28px;
          width: max-content;
          animation: techstack-marquee 60s linear infinite;
          will-change: transform;
        }
        .ts-item { opacity: 0.85; transition: opacity 200ms ease, transform 200ms ease; }
        .ts-item:hover { opacity: 1; transform: scale(1.05); }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6 px-6">
          <Reveal>
          <p className="mb-4 text-xs tracking-widest text-gray-400">
            OUR EXPERTISE
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            A modern stack behind every{" "}
            <span className="text-white/90">Build · Operate · Transfer</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-sm md:text-base text-gray-400 max-w-3xl mx-auto">
            The same technologies we use to design, build, operate, and then
            cleanly transfer your products. A proven, modern stack tuned for
            SaaS, platforms, and AI powered experiences.
          </p>
        </Reveal>
        </div>

        <div className="relative overflow-hidden ts-mask py-4 px-4">
          {/* Automatic marquee with duplicated items for seamless loop */}
          <div className="ts-track" style={{ gap: 36 }}>
            {loopItems.map((tech, idx) => (
              <div key={`${tech.name}-${idx}`} className="ts-item shrink-0">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="h-14 md:h-16 w-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
