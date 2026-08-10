import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, ArrowUpRight, FileDown, ScrollText } from "lucide-react";
import { GALLERY, EVENTS, NEWS, SHLOK } from "@/lib/data";
import { Overline, Reveal, DiyaDivider } from "@/components/primitives";
import { useLanguage } from "@/lib/i18n";

export const Gallery = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = [
    t("gallery.c1"), t("gallery.c2"), t("gallery.c3"), t("gallery.c4"), t("gallery.c5"),
  ];
  // map translated label back to English key for filtering
  const catKeyMap = {
    [t("gallery.c1")]: "All",
    [t("gallery.c2")]: "River",
    [t("gallery.c3")]: "Aarti",
    [t("gallery.c4")]: "Activities",
    [t("gallery.c5")]: "Festivals",
  };
  const filterEn = catKeyMap[filter] || filter;
  const items = filterEn === "All" ? GALLERY : GALLERY.filter((g) => g.category === filterEn);

  const captionKeys = [
    "gallery.cap1","gallery.cap2","gallery.cap3","gallery.cap4","gallery.cap5",
    "gallery.cap6","gallery.cap7","gallery.cap8","gallery.cap9","gallery.cap10",
    "gallery.cap11","gallery.cap12","gallery.cap13","gallery.cap14","gallery.cap15",
  ];

  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-sand/50" data-testid="gallery">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <Overline>Moments on the ghat</Overline>
              <DiyaDivider align="left" />
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-2 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
                {t("gallery.title")}
              </h2>
            </Reveal>
          </div>

          {/* Category filter tabs */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2" data-testid="gallery-filters">
              {categories.map((cat) => {
                const on = filter === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    data-testid={`gallery-filter-${cat.toLowerCase()}`}
                    className={`px-5 py-2 rounded-full text-sm transition-colors duration-300 ${
                      on
                        ? "bg-saffron text-white shadow-soft"
                        : "bg-white border border-border/70 text-ink-soft hover:border-saffron hover:text-saffron"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.div
          layout
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((g, i) => (
              <motion.button
                key={g.url}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setActive(g)}
                className="group relative overflow-hidden rounded-2xl bg-sand"
                data-testid={`gallery-item-${i}`}
              >
                <img
                  src={g.url}
                  alt={g.caption}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-3 left-3 rounded-full bg-white/85 backdrop-blur-sm text-saffron text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider">
                  {g.category}
                </span>
                <span className="absolute bottom-3 left-4 right-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  {g.caption}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-6 bg-ink/80 backdrop-blur-md"
            onClick={() => setActive(null)}
            data-testid="gallery-lightbox"
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white"
              onClick={() => setActive(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active.url}
              alt={active.caption}
              className="max-h-[85vh] max-w-full rounded-2xl shadow-lift"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export const Events = () => {
  const { t } = useLanguage();

  const events = [
    { title: t("events.t1"), date: "July 21, 2026", time: "7:00 PM – 9:00 PM", location: t("events.loc1") },
    { title: t("events.t2"), date: "August 5, 2026", time: "6:00 AM – 12:00 PM", location: t("events.loc2") },
    { title: t("events.t3"), date: "August 15, 2026", time: "9:00 AM – 4:00 PM", location: t("events.loc3") },
  ];

  return (
    <section id="events" className="relative py-24 md:py-32 bg-paper" data-testid="events">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Overline>Mark your calendar</Overline>
          <DiyaDivider align="left" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-2 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
            {t("events.title")}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {events.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group grid md:grid-cols-12 items-center gap-4 rounded-3xl border border-border/70 bg-white p-6 md:p-7 hover:border-saffron/40 hover:shadow-soft transition-[border-color,box-shadow] duration-500"
              data-testid={`event-${i}`}
            >
              <div className="md:col-span-3 flex items-center gap-3 text-saffron">
                <Calendar className="h-5 w-5" />
                <span className="font-display text-xl text-ink">{e.date}</span>
              </div>
              <div className="md:col-span-5">
                <h3 className="font-display text-2xl text-ink group-hover:text-saffron transition-colors">
                  {e.title}
                </h3>
              </div>
              <div className="md:col-span-3 flex flex-col gap-1 text-sm text-ink-soft">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {e.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {e.location}
                </span>
              </div>
              <div className="md:col-span-1 flex md:justify-end">
                <ArrowUpRight className="h-6 w-6 text-ink/30 group-hover:text-saffron group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const News = () => {
  const { t } = useLanguage();

  const news = [
    { tag: t("news.tag1"), title: t("news.t1"), excerpt: t("news.ex1"), date: "June 2026", image: "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-07-14/spxecoqcaizq/event-temple-festival.png" },
    { tag: t("news.tag2"), title: t("news.t2"), excerpt: t("news.ex2"), date: "May 2026", image: "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-07-14/spxec5acai2a/gallery-mass-aarti-diyas.png" },
    { tag: t("news.tag3"), title: t("news.t3"), excerpt: t("news.ex3"), date: "April 2026", image: "https://mgx-backend-cdn.metadl.com/generate/images/345098/2026-07-14/spxedkacaiza/activity-community-kitchen.png" },
  ];

  return (
    <section id="news" className="relative py-24 md:py-32 bg-sand/50" data-testid="news">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Overline>{t("news.overline")}</Overline>
          <DiyaDivider align="left" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-2 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
            {t("news.title")}
          </h2>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group overflow-hidden rounded-3xl bg-white border border-border/70 hover:-translate-y-1 hover:shadow-lift transition-[transform,box-shadow] duration-500"
              data-testid={`news-${i}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={n.image}
                  alt={n.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-sm text-saffron text-xs font-semibold px-3 py-1 uppercase tracking-wider">
                  {n.tag}
                </span>
              </div>
              <div className="p-8">
                <span className="text-xs text-ink-soft">{n.date}</span>
                <h3 className="mt-2 font-display text-2xl leading-snug text-ink group-hover:text-saffron transition-colors">
                  {n.title}
                </h3>
                <p className="mt-3 text-ink-soft leading-relaxed">{n.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-saffron transition-colors">
                  Read more <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export const DownloadCenter = () => {
  const { t } = useLanguage();
  return (
    <section id="download" className="relative py-24 md:py-32 bg-paper" data-testid="download-center">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-saffron/20 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] font-semibold text-gold">
              <ScrollText className="h-4 w-4" /> {t("download.overline")}
            </span>
            <h2 className="mt-6 font-display font-light text-4xl md:text-5xl leading-tight">
              {t("download.title")}
            </h2>
            <p className="mt-5 text-white/70 leading-relaxed max-w-md">
              {t("download.body")}
            </p>
            <a
              href={SHLOK.file}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 text-white hover:bg-saffron-600 transition-colors"
              data-testid="download-shlok"
            >
              <FileDown className="h-5 w-5" />
              {t("download.btn")}
            </a>
          </div>

          <div className="relative rounded-3xl bg-white/5 border border-white/10 p-8 md:p-10 text-center">
            <div className="font-guj text-3xl md:text-4xl text-gold leading-relaxed">
              {SHLOK.gujarati}
            </div>
            <div className="mt-6 font-deva text-lg md:text-xl text-white/90 whitespace-pre-line leading-relaxed">
              {SHLOK.sanskrit}
            </div>
            <div className="mt-6 h-px w-24 mx-auto bg-white/20" />
            <p className="mt-6 text-sm text-white/60 italic leading-relaxed">
              {SHLOK.meaning}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
