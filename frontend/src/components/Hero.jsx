import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, ChevronDown } from "lucide-react";
import { TRUST, IMAGES, STATS } from "@/lib/data";
import { Counter } from "@/components/primitives";
import { EASE } from "@/lib/motion";

const HEADLINE = ["We bow to the", "sacred", "river Tapi."];

const MaskLine = ({ children, delay }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.05, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-paper"
      data-testid="hero"
    >
      {/* Parallax image layer */}
      <motion.div
        style={{ y: yImg, scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.heroRiver}
          alt="The sacred Tapi river at sunrise"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/70 to-paper/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent" />
      </motion.div>

      {/* soft floating blobs */}
      <div className="pointer-events-none absolute -top-16 right-10 h-72 w-72 rounded-full bg-saffron/10 blur-3xl animate-floaty z-[1]" />
      <div className="pointer-events-none absolute bottom-24 right-1/3 h-64 w-64 rounded-full bg-river/10 blur-3xl animate-floaty z-[1]" style={{ animationDelay: "2s" }} />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-36 md:pt-44 pb-16 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs md:text-sm tracking-[0.22em] uppercase text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-saffron animate-pulse" />
            Surat • Since antiquity, reborn today
          </span>
        </motion.div>

        <h1 className="font-display font-light text-ink text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.92] tracking-tighter max-w-5xl">
          <MaskLine delay={0.25}>We bow to the</MaskLine>
          <MaskLine delay={0.4}>
            <span className="italic text-saffron">sacred</span> river
          </MaskLine>
          <MaskLine delay={0.55}>Tapi.</MaskLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 max-w-xl text-lg md:text-xl text-ink-soft leading-relaxed"
        >
          Tapi Namastubhyam Charitable Trust keeps the daily aarti alive,
          cleans the sacred river, and serves the people of Surat — honouring
          Surya Putri for the generations to come.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/donate"
            className="group inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 text-white shadow-soft hover:bg-saffron-600 transition-colors duration-300"
            data-testid="hero-donate"
          >
            <Heart className="h-5 w-5" />
            Donate to the Trust
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/book/aarti"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-7 py-4 text-ink hover:border-saffron hover:text-saffron transition-colors duration-300"
            data-testid="hero-book"
          >
            Book a Tapi Aarti
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden glass-card max-w-3xl"
        >
          {STATS.map((s) => (
            <div key={s.label} className="px-5 py-6 text-center">
              <div className="font-display text-3xl md:text-4xl text-saffron">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-ink-soft leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink-soft"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
