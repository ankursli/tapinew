import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Clock, ArrowUpRight, FileDown, ScrollText } from "lucide-react";
import { GALLERY, EVENTS, NEWS, SHLOK } from "@/lib/data";
import { Overline, Reveal } from "@/components/primitives";

const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "sm:row-span-2",
  "sm:col-span-2",
  "",
];

export const Gallery = () => {
  const [active, setActive] = useState(null);
  return (
    <section id="gallery" className="relative py-24 md:py-36 bg-sand/50" data-testid="gallery">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <Reveal>
              <Overline>Moments on the ghat</Overline>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
                Gallery
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(g)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl ${spans[i % spans.length]}`}
              data-testid={`gallery-item-${i}`}
            >
              <img
                src={g.url}
                alt={g.caption}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-3 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                {g.caption}
              </span>
            </motion.button>
          ))}
        </div>
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

export const Events = () => (
  <section id="events" className="relative py-24 md:py-32 bg-paper" data-testid="events">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <Reveal>
        <Overline>Mark your calendar</Overline>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
          Upcoming Events
        </h2>
      </Reveal>

      <div className="mt-12 space-y-4">
        {EVENTS.map((e, i) => (
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

export const News = () => (
  <section id="news" className="relative py-24 md:py-32 bg-sand/50" data-testid="news">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <Reveal>
        <Overline>News & Stories</Overline>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
          From the riverbank
        </h2>
      </Reveal>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {NEWS.map((n, i) => (
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

export const DownloadCenter = () => (
  <section id="download" className="relative py-24 md:py-32 bg-paper" data-testid="download-center">
    <div className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-white p-10 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-saffron/20 blur-3xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] font-semibold text-gold">
            <ScrollText className="h-4 w-4" /> Download Center
          </span>
          <h2 className="mt-6 font-display font-light text-4xl md:text-5xl leading-tight">
            The Tapi Aarti Shlok
          </h2>
          <p className="mt-5 text-white/70 leading-relaxed max-w-md">
            Carry the prayer with you. Download the Tapi Aarti Shlok — the verse
            of devotion we chant every evening on the ghat — beautifully typeset
            for print and recitation.
          </p>
          <a
            href={SHLOK.file}
            download
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 text-white hover:bg-saffron-600 transition-colors"
            data-testid="download-shlok"
          >
            <FileDown className="h-5 w-5" />
            Download Shlok PDF
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
