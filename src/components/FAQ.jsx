import { MotionReveal as Reveal } from '@/components/aceternity/motion-reveal'


export default function Insights() {
  const posts = [
    {
      category: "Tech",
      title: "Running Senaite LIMS Completely Offline with Docker",
      description: "",
      image: "/insite1.png",
      url: "https://www.linkedin.com/pulse/running-senaite-lims-completely-offline-ptlbc/?trackingId=YARU0b5LEvKJbiRUfPvbnA%3D%3D"
    },
    {
      category: "Tech",
      title: "Deploying a Serverless Django Application Using Zappa",
      description: "",
      image: "/insite2.png",
      url: "https://www.linkedin.com/pulse/deploying-serverless-django-application-iwkdc/?trackingId=sG54J0AgANcA2bDW65vW0g%3D%3D"
    },
    {
      category: "Tech",
      title: "WSO2 API Manager 4.1.0 Deployment on AlmaLinux 9 with MySQL Integration",
      description: "",
      image: "/insite3.png",
      url: "https://www.linkedin.com/pulse/wso2-api-manager-410-deployment-almalinux-yi1sc/?trackingId=jKXBlxrRSfHC1d0Z3iVAXw%3D%3D"
    },
  ];

  return (
    <section id="insights" className="bg-black px-6 py-24">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <Reveal y={8}>
        <p className="mb-3 text-xs tracking-widest text-gray-400">
          INSIGHTS
        </p>
        </Reveal>
        <Reveal delay={80} y={10}>
        <h2 className="text-4xl font-bold text-white">
          Thinking from the build frontlines
        </h2>
        </Reveal>
        <Reveal delay={140} y={12}>
        <p className="mt-4 text-sm text-gray-400 max-w-2xl mx-auto">
          Practical, product-led perspectives on AI, SaaS, and modern engineering
          — written by the teams shipping the work.
        </p>
        </Reveal>
      </div>

      {/* Cards */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <Reveal
            y={14}
            delay={i * 80}
            as="a"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            className="group block rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 overflow-hidden transition hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            aria-label={post.title}
          >
            {/* Image */}
            <div className=" overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-auto w-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <p className="text-xs tracking-widest text-gray-400 mb-3">
                {post.category}
              </p>

              <h3 className="text-lg font-semibold text-white leading-snug">
                {post.title}
              </h3>

              <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                {post.description}
              </p>

              <div className="mt-6">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-300 group-hover:text-white transition">
                  Read more <span aria-hidden>↗</span>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
