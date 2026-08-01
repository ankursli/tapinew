import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TAPI_STORY, HERITAGE, TIMELINE, IMAGES } from "@/lib/data";
import { Overline, Reveal } from "@/components/primitives";
import { Check } from "lucide-react";

export const RiverStory = () => (
  <section id="story" className="relative py-24 md:py-36 bg-sand/50" data-testid="story">
    <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
      <div className="lg:col-span-6">
        <Reveal>
          <Overline>{TAPI_STORY.overline}</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink">
            {TAPI_STORY.title}
          </h2>
        </Reveal>
        <div className="mt-8 space-y-6">
          {TAPI_STORY.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="text-lg text-ink-soft leading-relaxed max-w-xl">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 lg:sticky lg:top-28">
        <Reveal delay={0.1}>
          <div className="relative rounded-[2rem] overflow-hidden shadow-lift">
            <img
              src={IMAGES.heritage}
              alt="Tapi river heritage"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <blockquote className="absolute bottom-0 p-8 md:p-10">
              <p className="font-display italic text-2xl md:text-3xl text-white leading-snug">
                “Her waters purify sins and grant moksha.”
              </p>
              <cite className="mt-3 block text-sm not-italic text-white/70">
                — Skanda Purana & Agni Purana
              </cite>
            </blockquote>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export const Heritage = () => (
  <section id="heritage" className="relative py-24 md:py-36 bg-paper" data-testid="heritage">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="max-w-3xl">
        <Reveal>
          <Overline>{HERITAGE.overline}</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink text-balance">
            {HERITAGE.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 text-lg md:text-xl text-ink-soft leading-relaxed">
            {HERITAGE.body}
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-5">
        {HERITAGE.points.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-6"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron/10 text-saffron">
              <Check className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <p className="text-ink leading-snug">{point}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TimelineRow = ({ item, index }) => {
  const left = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative md:grid md:grid-cols-2 md:gap-16"
    >
      {/* dot */}
      <span className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-2 h-3.5 w-3.5 rounded-full bg-saffron ring-4 ring-saffron/15 z-10" />
      <div
        className={`pl-8 md:pl-0 ${
          left ? "md:text-right md:pr-4" : "md:col-start-2 md:pl-4"
        }`}
      >
        <div className="text-xs uppercase tracking-[0.25em] text-saffron font-semibold">
          {item.era}
        </div>
        <h3 className="mt-2 font-display text-2xl md:text-3xl text-ink">
          {item.title}
        </h3>
        <p className="mt-3 text-ink-soft leading-relaxed max-w-md md:inline-block">
          {item.text}
        </p>
      </div>
    </motion.div>
  );
};

export const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-24 md:py-36 bg-sand/50" data-testid="timeline">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Overline className="justify-center">A river becomes a movement</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
              From Tapi to Surat to the Trust
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20 space-y-16 md:space-y-24">
          {/* track */}
          <div className="absolute left-[0px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />
          <motion.div
            style={{ height }}
            className="absolute left-[0px] md:left-1/2 md:-translate-x-1/2 top-0 w-px bg-gradient-to-b from-saffron via-gold to-river origin-top"
          />
          {TIMELINE.map((item, i) => (
            <TimelineRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
