import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { TRUST, NAV_LINKS } from "@/lib/data";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron via-gold to-river origin-left z-[60]"
      data-testid="scroll-progress"
    />
  );
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,padding] duration-500 ${
          scrolled
            ? "py-2.5 glass shadow-[0_8px_30px_rgba(26,22,20,0.06)]"
            : "py-4 bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            data-testid="nav-logo"
          >
            <img
              src={TRUST.logo}
              alt="Tapi Namastubhyam"
              className="h-11 w-11 rounded-full object-cover ring-1 ring-saffron/20 bg-white"
            />
            <div className="leading-tight">
              <div className="font-display text-xl md:text-2xl text-ink font-semibold tracking-tight">
                Tapi Namastubhyam
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                Charitable Trust
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {onHome &&
              NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="px-3.5 py-2 text-sm text-ink-soft hover:text-saffron transition-colors duration-300 rounded-full"
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                >
                  {l.label}
                </a>
              ))}
            {!onHome && (
              <Link
                to="/"
                className="px-3.5 py-2 text-sm text-ink-soft hover:text-saffron transition-colors"
                data-testid="nav-home"
              >
                Home
              </Link>
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/book/aarti"
              className="px-4 py-2 text-sm rounded-full border border-saffron/30 text-ink hover:border-saffron hover:bg-saffron/5 transition-colors duration-300"
              data-testid="nav-book-aarti"
            >
              Book Aarti
            </Link>
            <Link
              to="/donate"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-full bg-saffron text-white shadow-soft hover:bg-saffron-600 transition-colors duration-300"
              data-testid="nav-donate"
            >
              <Heart className="h-4 w-4 group-hover:scale-110 transition-transform" />
              Donate
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-ink"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            data-testid="nav-menu-open"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] lg:hidden"
            data-testid="mobile-menu"
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 bottom-0 w-[82%] max-w-sm bg-paper p-7 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-2xl text-ink">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                  data-testid="nav-menu-close"
                >
                  <X className="h-6 w-6 text-ink" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={onHome ? l.href : `/${l.href}`}
                    onClick={() => setOpen(false)}
                    className="py-3 text-2xl font-display text-ink border-b border-border/60 hover:text-saffron transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Link
                  to="/book/aarti"
                  onClick={() => setOpen(false)}
                  className="text-center px-5 py-3 rounded-full border border-saffron/40 text-ink"
                >
                  Book Aarti / Pooja
                </Link>
                <Link
                  to="/donate"
                  onClick={() => setOpen(false)}
                  className="text-center px-5 py-3 rounded-full bg-saffron text-white"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const FloatingDonate = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/donate"
            className="group flex items-center gap-2 pl-5 pr-6 py-3.5 rounded-full bg-saffron text-white shadow-lift hover:bg-saffron-600 transition-colors"
            data-testid="floating-donate"
          >
            <span className="relative flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
              <Heart className="relative h-5 w-5" fill="currentColor" />
            </span>
            <span className="font-medium">Donate</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
