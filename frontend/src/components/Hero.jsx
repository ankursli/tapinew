import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, ChevronDown, Flame } from "lucide-react";
import { TRUST, IMAGES, STATS } from "@/lib/data";
import { Counter } from "@/components/primitives";
import { EASE } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n";

const HEADLINE = ["We bow to the", "sacred", "river Tapi."];

const MaskLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-[0.18em] mb-[-0.18em]">
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
  const { t } = useLanguage();

  const translatedStats = [
    { value: 2000, suffix: "+", label: t("stats.heritage") },
    { value: 365, suffix: "", label: t("stats.aartis") },
    { value: 48, suffix: "K", label: t("stats.diyas") },
    { value: 12, suffix: "K", label: t("stats.lives") },
  ];

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
          src={IMAGES.hero}
          alt="Devotees performing the evening Tapi Aarti on the ghat"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper/90 via-paper/60 to-paper/10" />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/10 to-transparent" /> */}
      </motion.div>

      {/* soft floating blobs */}
      <div className="pointer-events-none absolute -top-16 right-10 h-72 w-72 rounded-full bg-saffron/10 blur-3xl animate-floaty z-[1]" />
      <div className="pointer-events-none absolute bottom-24 right-1/3 h-64 w-64 rounded-full bg-river/10 blur-3xl animate-floaty z-[1]" style={{ animationDelay: "2s" }} />

      <motion.div
        style={{ y: yText, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-24 md:pt-28 pb-12 min-h-screen flex flex-col justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-5"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs md:text-sm tracking-[0.22em] uppercase text-ink-soft">
            <span className="h-2 w-2 rounded-full bg-saffron animate-pulse" />
            {t("hero.badge")}
          </span>
        </motion.div>

        <h1 className="font-display font-light text-ink text-5xl sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[1.1] tracking-tighter max-w-5xl">
          <MaskLine delay={0.25}>{t("hero.heading1")} <span className="italic text-saffron">{t("hero.heading2")},</span></MaskLine>
          {/* <MaskLine delay={0.4}>
            <span className="italic text-saffron">{t("hero.heading2")}</span>,
          </MaskLine> */}
          <MaskLine delay={0.55}>{t("hero.heading3")}</MaskLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1 }}
          className="mt-6 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/book/aarti"
            className="group inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3.5 text-white shadow-soft hover:bg-saffron-600 transition-colors duration-300"
            data-testid="hero-book"
          >
            <Flame className="h-5 w-5" />
            {t("hero.book")}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/donate"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/50 px-6 py-3.5 text-ink hover:border-saffron hover:text-saffron transition-colors duration-300"
            data-testid="hero-donate"
          >
            <Heart className="h-5 w-5" />
            {t("hero.donate")}
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden glass-card max-w-3xl"
        >
          {translatedStats.map((s) => (
            <div key={s.label} className="px-5 py-3.5 text-center">
              <div className="font-display text-2xl md:text-4xl text-saffron">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-xs md:text-sm text-ink-soft leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        style={{ opacity }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-ink cursor-pointer hover:text-saffron transition-colors duration-300 bg-transparent border-none"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
