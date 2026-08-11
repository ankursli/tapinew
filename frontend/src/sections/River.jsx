import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IMAGES } from "@/lib/data";
import { Overline, Reveal, DiyaDivider } from "@/components/primitives";
import { Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export const RiverStory = () => {
  const { t } = useLanguage();
  return (
    <section id="story" className="relative py-24 md:py-36 bg-sand/50" data-testid="story">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <Reveal>
            <Overline>{t("story.overline")}</Overline>
            <DiyaDivider align="left" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display font-light text-4xl md:text-6xl leading-[1.15] tracking-tight text-ink">
              {t("story.title")}
            </h2>
          </Reveal>
          <div className="mt-8 space-y-6">
            {[t("story.p1"), t("story.p2"), t("story.p3")].map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p className="text-lg text-ink-soft leading-relaxed max-w-xl">{p}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <Reveal delay={0.2}>
            <div className="relative overflow-hidden rounded-3xl shadow-lift">
              <img
                src={IMAGES.ghatNight || IMAGES.aarti}
                alt="Tapi river ghat illuminated at dusk"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-display italic text-2xl md:text-3xl text-white leading-snug">
                  {t("story.quote")}
                </p>
                <p className="mt-3 text-sm text-gold tracking-widest uppercase">
                  {t("story.quoteAuthor")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export const Heritage = () => {
  const { t } = useLanguage();
  const points = [
    t("heritage.point1"),
    t("heritage.point2"),
    t("heritage.point3"),
  ];
  return (
    <section id="heritage" className="relative py-24 md:py-36 bg-paper" data-testid="heritage">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <Overline>{t("heritage.overline")}</Overline>
            <DiyaDivider align="left" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display font-light text-4xl md:text-6xl leading-[1.15] tracking-tight text-ink text-balance">
              {t("heritage.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 text-lg md:text-xl text-ink-soft leading-relaxed">
              {t("heritage.body")}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 relative overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={IMAGES.heritageSurat || IMAGES.heritage}
              alt="Surat historic riverfront"
              className="w-full h-[420px] md:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-transparent flex items-center">
              <div className="max-w-xl p-8 md:p-14 text-white">
                <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
                  {t("heritage.badge")}
                </span>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">
                  {t("heritage.bannerTitle")}
                </h3>
                <p className="mt-3 text-white/80 text-base md:text-lg">
                  {t("heritage.bannerText")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {points.map((point, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-sand/60 border border-border/50">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-saffron/15 text-saffron font-semibold text-sm">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-ink leading-snug">{point}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineRow = ({ item, index, innerRef }) => {
  const left = index % 2 === 0;
  return (
    <motion.div
      ref={innerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative md:grid md:grid-cols-2 md:gap-16"
    >
      {/* dot */}
      <span className="absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 top-2 h-3.5 w-3.5 rounded-full bg-saffron ring-4 ring-saffron/15 z-10" />
      <div
        className={`pl-8 md:pl-0 ${left ? "md:text-right md:pr-4" : "md:col-start-2 md:pl-4"
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
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const lastRowRef = useRef(null);
  const [trackHeight, setTrackHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (lastRowRef.current) {
        setTrackHeight(lastRowRef.current.offsetTop);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 50%"],
  });

  const lineHeight = useTransform(scrollYProgress, (val) => val * trackHeight);

  const timelineItems = [
    { era: t("timeline.era1"), title: t("timeline.title1"), text: t("timeline.text1") },
    { era: t("timeline.era2"), title: t("timeline.title2"), text: t("timeline.text2") },
    { era: t("timeline.era3"), title: t("timeline.title3"), text: t("timeline.text3") },
    { era: t("timeline.era4"), title: t("timeline.title4"), text: t("timeline.text4") },
    { era: t("timeline.era5"), title: t("timeline.title5"), text: t("timeline.text5") },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-sand/50" data-testid="timeline">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Overline className="justify-center">{t("timeline.overline")}</Overline>
            <DiyaDivider />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
              {t("timeline.title")}
            </h2>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative mt-20">

          {/* Track */}
          <div
            className="absolute left-[1px] md:left-1/2 md:-translate-x-1/2 top-[15px] w-px bg-border"
            style={{
              height: trackHeight ? `${trackHeight}px` : "calc(100% - 100px)",
            }}
          />

          {/* Progress */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[1px] md:left-1/2 md:-translate-x-1/2 top-[15px] w-px bg-gradient-to-b from-saffron via-gold to-river origin-top z-0"
          />

          {/* Timeline rows */}
          <div className="space-y-16 md:space-y-24">
            {timelineItems.map((item, i) => (
              <TimelineRow
                key={i}
                item={item}
                index={i}
                innerRef={i === timelineItems.length - 1 ? lastRowRef : null}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
