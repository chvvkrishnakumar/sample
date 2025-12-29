export default function Footer() {
  return (
    <footer className="bg-black px-6 pt-20 text-sm text-gray-400">
      <div className="mx-auto max-w-7xl">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white text-xl font-semibold">
              Buildbot
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              </span>
            </div>

            <p className="mt-4 max-w-md text-gray-400 leading-relaxed">
              Not just about software & product development; we’re your tech
              partners, crafting modern digital solutions for next-gen
              excellence!
            </p>

            <div className="mt-6 flex gap-4 text-xs">
              <a href="#" className="hover:text-white transition">
                Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-white transition">
                Privacy
              </a>
            </div>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-amber-400">☎</span>
                <a
                  href="tel:+13153080901"
                  className="hover:text-white transition"
                >
                  +1 315 308 0901
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-amber-400">✉</span>
                <a
                  href="mailto:sales@chromezy.com"
                  className="hover:text-white transition"
                >
                  sales@chromezy.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>Home</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>About Us</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>Career</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>Case Study</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between pt-2 font-semibold text-white">
                <span>Join the Team</span>
                <span>›</span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>AI</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>MVP</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>SaaS</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <span>E-commerce</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between pt-2 font-semibold text-amber-400">
                <span>Work with us</span>
                <span>›</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs md:flex-row">
          <p>
            © 2024 Buildbot Technologies, All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-400">Connect with us:</span>
            <a href="#" className="hover:text-white transition">
              f
            </a>
            <a href="#" className="hover:text-white transition">
              ◎
            </a>
            <a href="#" className="hover:text-white transition">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
