import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { MEMBERS, TESTIMONIALS } from "@/lib/data";
import { Overline, Reveal } from "@/components/primitives";

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

export const Members = () => (
  <section id="members" className="relative py-24 md:py-36 bg-sand/50" data-testid="members">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <Reveal>
          <Overline className="justify-center">The people behind the seva</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
            Our Trust Members
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-ink-soft text-lg">
            A dedicated family of trustees and volunteers keeping the covenant
            with the Tapi.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {MEMBERS.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-3xl bg-white border border-border/70 p-6 hover:-translate-y-1.5 hover:shadow-lift transition-[transform,box-shadow] duration-500"
            data-testid={`member-${i}`}
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-sand">
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${PALETTES[i % PALETTES.length]}`}>
                  <span className="absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-white/20 blur-xl" />
                  <span className="font-display text-6xl md:text-7xl font-semibold drop-shadow-sm">
                    {initials(m.name)}
                  </span>
                  <svg className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-40" width="80" height="12" viewBox="0 0 80 12" fill="none">
                    <path d="M0 6 C 10 0, 20 12, 30 6 S 50 0, 60 6 S 76 12, 80 6" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="mt-5">
              <h3 className="font-display text-2xl text-ink">{m.name}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.15em] text-saffron">
                {m.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const Testimonials = () => (
  <section className="relative py-24 md:py-36 bg-paper" data-testid="testimonials">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="max-w-2xl">
        <Reveal>
          <Overline>In their words</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
            Trusted by devotees & donors
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
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
