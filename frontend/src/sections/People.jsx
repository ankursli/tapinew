import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { MEMBERS } from "@/lib/data";
import { Overline, Reveal, DiyaDivider } from "@/components/primitives";
import { useLanguage } from "@/lib/i18n";

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const PALETTES = [
  "from-saffron/25 via-gold/15 to-saffron/10 text-saffron-700",
  "from-river/25 via-river/10 to-sand/40 text-river-600",
  "from-gold/25 via-saffron/10 to-sand/40 text-saffron-700",
];

const Monogram = ({ name, index, className = "" }) => (
  <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${PALETTES[index % PALETTES.length]} ${className}`}>
    <span className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-white/20 blur-xl" />
    <span className="font-display text-6xl md:text-7xl font-semibold drop-shadow-sm">
      {initials(name)}
    </span>
    <svg className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-40" width="80" height="12" viewBox="0 0 80 12" fill="none">
      <path d="M0 6 C 10 0, 20 12, 30 6 S 50 0, 60 6 S 76 12, 80 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

export const Members = () => {
  const { t } = useLanguage();
  const featured = MEMBERS.find((m) => m.featured) || MEMBERS[0];
  const rest = MEMBERS.filter((m) => m !== featured);

  return (
    <section id="members" className="relative py-24 md:py-36 bg-sand/50" data-testid="members">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <Overline className="justify-center">{t("members.overline")}</Overline>
            <DiyaDivider />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
              {t("members.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-ink-soft text-lg">
              Seven dedicated trustees keeping the covenant with the Tapi.
            </p>
          </Reveal>
        </div>

        {/* Featured — President */}
        <Reveal delay={0.05}>
          <div
            className="mt-16 group grid md:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] bg-white border border-border/70 shadow-soft hover:shadow-lift transition-shadow duration-500"
            data-testid="member-featured"
          >
            <div className="md:col-span-5 lg:col-span-4 relative aspect-[4/5] md:aspect-auto md:min-h-[420px] overflow-hidden bg-sand">
              {featured.photo ? (
                <img src={featured.photo} alt={featured.name} className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              ) : (
                <Monogram name={featured.name} index={0} />
              )}
            </div>
            <div className="md:col-span-7 lg:col-span-8 p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-saffron/10 text-saffron text-xs font-semibold px-3 py-1 uppercase tracking-[0.18em]">
                Leadership
              </span>
              <h3 className="mt-5 font-display text-4xl md:text-5xl text-ink">{featured.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-saffron">{featured.role}</p>
              {featured.bio && (
                <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl">{t("members.presidentBio")}</p>
              )}
              <div className="mt-8 h-px w-24 bg-gradient-to-r from-saffron to-transparent" />
            </div>
          </div>
        </Reveal>

        {/* Remaining 6 — grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {rest.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-3xl bg-white border border-border/70 p-4 md:p-5 hover:-translate-y-1.5 hover:shadow-lift transition-[transform,box-shadow] duration-500"
              data-testid={`member-${i}`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-sand">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <Monogram name={m.name} index={i + 1} />
                )}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4">
                <h3 className="font-display text-xl md:text-2xl text-ink leading-tight">{m.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-saffron">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    { quote: t("test.q1"), name: t("test.n1"), role: t("test.r1") },
    { quote: t("test.q2"), name: t("test.n2"), role: t("test.r2") },
    { quote: t("test.q3"), name: t("test.n3"), role: t("test.r3") },
  ];

  return (
    <section className="relative py-24 md:py-36 bg-paper" data-testid="testimonials">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <Overline>{t("test.overline")}</Overline>
            <DiyaDivider align="left" />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
              {t("test.title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-3xl border border-border/70 bg-gradient-to-br from-white to-sand/40 p-8 flex flex-col"
            >
              <Quote className="h-9 w-9 text-saffron/25" fill="currentColor" />
              <blockquote className="mt-4 font-display text-xl md:text-2xl leading-snug text-ink flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border/70">
                <div className="font-medium text-ink">{t.name}</div>
                <div className="text-sm text-ink-soft">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
