import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Flame, Sparkles } from "lucide-react";
import { ACTIVITIES, DAILY_AARTI, IMAGES } from "@/lib/data";
import { Overline, Reveal } from "@/components/primitives";

export const Activities = () => (
  <section id="activities" className="relative py-24 md:py-36 bg-paper" data-testid="activities">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-2xl">
          <Reveal>
            <Overline>Seva in action</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink">
              Community activities, all year round
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <p className="text-ink-soft max-w-sm">
            Devotion made practical — cleaning the river, saving lives, greening
            the city and standing with families in crisis.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ACTIVITIES.map((a, i) => {
          const Icon = a.icon;
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border/70 bg-white hover:-translate-y-1.5 hover:shadow-lift transition-[transform,box-shadow] duration-500"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                <span className="absolute bottom-3 left-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-saffron backdrop-blur-sm shadow-soft">
                  <Icon className="h-6 w-6" strokeWidth={1.6} />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-ink">{a.title}</h3>
                <p className="mt-2.5 text-sm text-ink-soft leading-relaxed">
                  {a.text}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export const DailyAarti = () => (
  <section id="daily-aarti" className="relative overflow-hidden bg-ink text-white" data-testid="daily-aarti">
    <img
      src={IMAGES.aarti}
      alt=""
      aria-hidden
      className="absolute inset-0 h-full w-full object-cover opacity-25"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
    <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-36 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm uppercase tracking-[0.28em] font-semibold text-gold">
            <Flame className="h-4 w-4" /> {DAILY_AARTI.overline}
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight">
            {DAILY_AARTI.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 text-lg text-white/70 leading-relaxed max-w-xl">
            {DAILY_AARTI.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link
            to="/book/aarti"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 text-white hover:bg-saffron-600 transition-colors"
            data-testid="daily-aarti-book"
          >
            Sponsor an Aarti Seva
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="glass rounded-3xl p-8 md:p-10 border border-white/10 bg-white/5">
          <div className="text-sm uppercase tracking-[0.2em] text-white/50">
            Daily Schedule
          </div>
          <ul className="mt-6 divide-y divide-white/10">
            {DAILY_AARTI.schedule.map((s) => (
              <li key={s.label} className="flex items-center justify-between py-4">
                <span className="flex items-center gap-3 text-white/90">
                  <Clock className="h-4 w-4 text-gold" /> {s.label}
                </span>
                <span className="font-display text-xl text-gold">{s.time}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-white/50">
            Open to all devotees. No fee to attend — bring your prayers.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export const SevaCTA = () => (
  <section className="relative py-24 md:py-32 bg-paper" data-testid="seva-cta">
    <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-2 gap-6">
      {[
        {
          to: "/book/aarti",
          tag: "Tapi Aarti Booking",
          title: "Book a Tapi Aarti",
          body: "Sponsor the sacred evening aarti in your family's name and receive a blessing certificate.",
          icon: Flame,
          testid: "seva-card-aarti",
        },
        {
          to: "/book/pooja",
          tag: "Tapi Pooja Booking",
          title: "Book a Tapi Pooja",
          body: "Vedic jal abhishek, havan and anushthan performed by temple priests for your wellbeing.",
          icon: Sparkles,
          testid: "seva-card-pooja",
        },
      ].map((c) => {
        const Icon = c.icon;
        return (
          <Link
            key={c.to}
            to={c.to}
            data-testid={c.testid}
            className="group relative overflow-hidden rounded-[2rem] border border-border/70 bg-gradient-to-br from-white to-sand/50 p-9 md:p-11 hover:shadow-lift transition-shadow duration-500"
          >
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-saffron/5 group-hover:scale-125 transition-transform duration-700" />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-saffron text-white">
              <Icon className="h-6 w-6" />
            </span>
            <div className="relative mt-6 text-xs uppercase tracking-[0.22em] text-saffron font-semibold">
              {c.tag}
            </div>
            <h3 className="relative mt-2 font-display text-3xl md:text-4xl text-ink">
              {c.title}
            </h3>
            <p className="relative mt-4 text-ink-soft leading-relaxed max-w-sm">
              {c.body}
            </p>
            <span className="relative mt-7 inline-flex items-center gap-2 text-ink font-medium group-hover:text-saffron transition-colors">
              Choose a package
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        );
      })}
    </div>
  </section>
);
