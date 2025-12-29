export default function Testimonials() {
  return (
    <section className="bg-black px-6 py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">
            CAREERS
          </p>

          <h2 className="text-4xl font-bold text-white leading-tight">
            Join our fast-growing team
          </h2>

          <p className="mt-6 text-sm text-gray-300 max-w-md">
            <span className="text-amber-400 font-medium">
              Work with product-first teams
            </span>{" "}
            on problems that actually matter.
          </p>

          <p className="mt-4 text-sm text-gray-400 max-w-md">
            Remote-friendly, async by default, and built for senior talent that
            wants ownership, not just tickets.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-400">
            <li>• Product-aligned squads, not siloed functions</li>
            <li>• Learning budget & dedicated maker time</li>
            <li>• Flexible location with overlapping core hours</li>
          </ul>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300">
            View open roles
            <span aria-hidden>→</span>
          </button>
        </div>

        {/* Right image collage */}
        <div className="grid grid-cols-2 gap-6">
          {/* Large left image */}
          <div className="row-span-2 overflow-hidden rounded-2xl">
            <img
              src="/sample.jpg"
              alt="Team collaborating"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Top right */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/sample.jpg"
              alt="High five moment"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Bottom right */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/sample.jpg"
              alt="Team planning session"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
