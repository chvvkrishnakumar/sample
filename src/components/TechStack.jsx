// src/components/TechStack.jsx
import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal';
import { InfiniteMovingCards } from '@/components/aceternity/infinite-moving-cards';

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
  return (
    <section id="techstack" className="bg-background px-0 py-16 border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-6 px-6">
          <Reveal>
            <p className="mb-4 text-xs tracking-widest text-muted-foreground">
              OUR EXPERTISE
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              A modern stack behind every{" "}
              <span className="text-muted-foreground">Build · Operate · Transfer</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
              The same technologies we use to design, build, operate, and then
              cleanly transfer your products. A proven, modern stack tuned for
              SaaS, platforms, and AI powered experiences.
            </p>
          </Reveal>
        </div>

        {/* Infinite Moving Cards Marquee */}
        <InfiniteMovingCards
          items={techs}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="py-4"
        />
      </div>
    </section>
  );
}
