import { motion } from "framer-motion";
import { MARQUEE, IMAGES, TRUST } from "@/lib/data";
import { Overline, Reveal, DiyaDivider } from "@/components/primitives";
import { useLanguage } from "@/lib/i18n";

export const Marquee = () => (
  <div className="relative border-y border-border/70 bg-sand/60 py-5 overflow-hidden">
    <div className="flex whitespace-nowrap animate-marquee w-max">
      {[...MARQUEE, ...MARQUEE].map((word, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display italic text-3xl md:text-4xl text-ink/80 px-6">
            {word}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-saffron/70" />
        </span>
      ))}
    </div>
  </div>
);

export const About = () => {
  const { t } = useLanguage();

  const manifestoList = [
    { no: "01", title: t("manifesto.title1"), body: t("manifesto.body1") },
    { no: "02", title: t("manifesto.title2"), body: t("manifesto.body2") },
    { no: "03", title: t("manifesto.title3"), body: t("manifesto.body3") },
  ];

  return (
    <section id="about" className="relative py-24 md:py-36 bg-paper" data-testid="about">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <Reveal>
              <div className="relative">
                <div className="clip-arch overflow-hidden shadow-lift">
                  <img
                    src={IMAGES.heroRiver}
                    alt="The sacred Tapi river at sunrise in Surat"
                    className="w-full h-[440px] md:h-[560px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 md:-right-8 glass-card rounded-3xl px-6 py-5 max-w-[200px]">
                  <div className="font-display text-3xl text-saffron">80G</div>
                  <div className="text-xs text-ink-soft mt-1">
                    {t("about.tax")}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <Overline>{t("about.overline")}</Overline>
              <DiyaDivider align="left" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 font-display font-light text-4xl md:text-6xl leading-[1.15] tracking-tight text-ink text-balance">
                {t("about.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 text-lg md:text-xl text-ink-soft leading-relaxed max-w-2xl">
                {t("about.description")}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-sm text-ink-soft">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-saffron" /> {t("about.point1")}
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-river" /> {t("about.point2")}
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold" /> {t("about.point3")}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <DiyaDivider className="mt-24 md:mt-32" />

        {/* Manifesto — numbered chapters */}
        <div className="mt-20 md:mt-28 grid md:grid-cols-3 gap-8 md:gap-6">
          {manifestoList.map((m, i) => (
            <div
              key={m.no}
              className="group relative rounded-3xl border border-border/70 bg-white p-8 md:p-9 hover:shadow-lift hover:-translate-y-1 transition-[transform,box-shadow] duration-500"
            >
              <div className="font-display text-6xl text-saffron/20 group-hover:text-saffron/40 transition-colors">
                {m.no}
              </div>
              <h3 className="mt-3 font-display text-3xl text-ink">{m.title}</h3>
              <p className="mt-4 text-ink-soft leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
