export default function Footer() {
  return (
    <footer className="bg-black px-6 pt-20 text-sm text-gray-400">
      <div className="mx-auto max-w-6xl">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-2">              <img
                src="/image.png"
                alt="Buildbot logo"
                className="h-8 w-auto"
              />
            </div>

            <p className="mt-4 max-w-sm leading-relaxed">
              A premium digital product and AI studio partnering with teams who
              care about thoughtful strategy, clean execution, and long‑term
              impact.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="text-white">+91 7416677365</p>
              <p>info@buildbot.tech</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              <li>Services</li>
              <li>Products</li>
              <li>Leadership</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              <li>Insights</li>
              <li>Careers</li>
              <li>Newsletter</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <p className="mb-4">Slack & email support</p>

            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                x
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
              >
                ◎
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs md:flex-row">
          <p>© 2026 Buildbot. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
