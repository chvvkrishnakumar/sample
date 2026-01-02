export default function Footer() {
  return (
    <footer className="bg-background px-6 pt-20 text-sm text-muted-foreground border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-6">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-foreground text-xl font-semibold">
              Buildbot
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
            </div>

            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Not just about software & product development; we're your tech
              partners, crafting modern digital solutions for next-gen
              excellence!
            </p>

            <div className="mt-6 flex gap-4 text-xs">
              <a href="#" className="hover:text-foreground transition">
                Terms
              </a>
              <span>|</span>
              <a href="#" className="hover:text-foreground transition">
                Privacy
              </a>
            </div>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <span className="text-accent">☎</span>
                <a
                  href="tel:+13153080901"
                  className="hover:text-foreground transition"
                >
                  +91 7416677365

                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-accent">✉</span>
                <a
                  href="mailto:sales@chromezy.com"
                  className="hover:text-foreground transition"
                >
                  info@buildbot.tech
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>Home</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>About Us</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>Career</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>Case Study</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between pt-2 font-semibold text-foreground">
                <span>Join the Team</span>
                <span>›</span>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>AI</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>MVP</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>SaaS</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between border-b border-border pb-2">
                <span>E-commerce</span>
                <span>›</span>
              </li>
              <li className="flex items-center justify-between pt-2 font-semibold text-accent">
                <span>Work with us</span>
                <span>›</span>
              </li>
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
        <div className="mt-16 border-t border-border" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs md:flex-row">
          <p>© 2026 Buildbot. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Connect with us:</span>
            <a href="#" className="hover:text-foreground transition">
              f
            </a>
            <a href="#" className="hover:text-foreground transition">
              ◎
            </a>
            <a href="#" className="hover:text-foreground transition">
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
