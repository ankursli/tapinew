import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Landmark, Send, Loader2, Heart } from "lucide-react";
import { TRUST, FAQS, NAV_LINKS } from "@/lib/data";
import { Overline, Reveal, DiyaDivider } from "@/components/primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createContact } from "@/lib/api";

export const Faq = () => (
  <section id="faq" className="relative py-24 md:py-36 bg-sand/50" data-testid="faq">
    <div className="mx-auto max-w-4xl px-5 md:px-8">
      <div className="text-center">
        <Reveal>
          <Overline className="justify-center">Good to know</Overline>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display font-light text-4xl md:text-6xl tracking-tight text-ink">
            Frequently asked questions
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border/70 bg-white px-6 data-[state=open]:shadow-soft"
              data-testid={`faq-${i}`}
            >
              <AccordionTrigger className="text-left font-display text-xl md:text-2xl text-ink hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-ink-soft text-base leading-relaxed pb-6">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export const Contact = () => {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await createContact(form);
      toast.success("Message sent! Our team will reach out soon. 🙏");
      setForm({ full_name: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "bg-white border-border/70 rounded-xl h-12 focus-visible:ring-saffron/40 focus-visible:border-saffron";

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-paper" data-testid="contact">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
        <div>
          <Reveal>
            <Overline>Reach the Trust</Overline>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 font-display font-light text-4xl md:text-6xl leading-[1.05] tracking-tight text-ink">
              Come to the ghat, or say hello
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-5">
              <a href={`tel:${TRUST.phoneRaw}`} className="flex items-start gap-4 group" data-testid="contact-phone">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/10 text-saffron"><Phone className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft">Phone</div>
                  <div className="text-ink group-hover:text-saffron transition-colors">{TRUST.phone}</div>
                </div>
              </a>
              <a href={`mailto:${TRUST.email}`} className="flex items-start gap-4 group" data-testid="contact-email">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/10 text-saffron"><Mail className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft">Email</div>
                  <div className="text-ink group-hover:text-saffron transition-colors break-all">{TRUST.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/10 text-saffron"><MapPin className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-ink-soft">Address</div>
                  <div className="text-ink max-w-xs">{TRUST.address}</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 rounded-2xl border border-border/70 bg-sand/50 p-6" data-testid="bank-details">
              <div className="flex items-center gap-2 text-saffron font-semibold text-sm">
                <Landmark className="h-4 w-4" /> Bank & UPI for direct giving
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <dt className="text-ink-soft">Account</dt>
                <dd className="text-ink text-right">{TRUST.bank.account_no}</dd>
                <dt className="text-ink-soft">IFSC</dt>
                <dd className="text-ink text-right">{TRUST.bank.ifsc}</dd>
                <dt className="text-ink-soft">Bank</dt>
                <dd className="text-ink text-right">{TRUST.bank.bank}</dd>
                <dt className="text-ink-soft">UPI</dt>
                <dd className="text-ink text-right break-all">{TRUST.bank.upi}</dd>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/70 h-64">
              <iframe
                title="Tapi Namastubhyam location"
                src={TRUST.mapEmbed}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="contact-map"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="rounded-3xl glass-card p-8 md:p-10"
            data-testid="contact-form"
          >
            <h3 className="font-display text-3xl text-ink">Send a message</h3>
            <div className="mt-6 space-y-4">
              <Input placeholder="Full name" value={form.full_name} onChange={set("full_name")} className={inputCls} data-testid="contact-name-input" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email" value={form.email} onChange={set("email")} className={inputCls} data-testid="contact-email-input" />
                <Input placeholder="Phone (optional)" value={form.phone} onChange={set("phone")} className={inputCls} data-testid="contact-phone-input" />
              </div>
              <Input placeholder="Subject" value={form.subject} onChange={set("subject")} className={inputCls} data-testid="contact-subject-input" />
              <Textarea placeholder="Your message" rows={5} value={form.message} onChange={set("message")} className="bg-white border-border/70 rounded-xl focus-visible:ring-saffron/40 focus-visible:border-saffron" data-testid="contact-message-input" />
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 text-white hover:bg-saffron-600 transition-colors disabled:opacity-60"
                data-testid="contact-submit"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
                {loading ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="relative bg-ink text-white/80" data-testid="footer">
    <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
      <DiyaDivider className="mb-12 opacity-60" />
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={TRUST.logo} alt="" className="h-12 w-12 rounded-full bg-white object-cover" />
            <div>
              <div className="font-display text-2xl text-white">Tapi Namastubhyam</div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">Charitable Trust</div>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-white/60 leading-relaxed">
            Preserving the sacred Tapi, uniting Surat in daily devotion, and
            serving humanity — one aarti, one drive, one life at a time.
          </p>
          <p className="mt-6 font-guj text-2xl text-gold">{TRUST.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <div className="text-sm uppercase tracking-[0.2em] text-white/40">Explore</div>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-saffron transition-colors">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm uppercase tracking-[0.2em] text-white/40">Get involved</div>
          <div className="mt-5 flex flex-col gap-3">
            <Link to="/donate" className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-white w-fit hover:bg-saffron-600 transition-colors" data-testid="footer-donate">
              <Heart className="h-4 w-4" /> Donate to the Trust
            </Link>
            <Link to="/book/aarti" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 w-fit hover:border-saffron hover:text-saffron transition-colors" data-testid="footer-book">
              Book an Aarti / Pooja
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/50">{TRUST.phone}<br />{TRUST.email}</p>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/40">
        <span>© {new Date().getFullYear()} {TRUST.name}. All rights reserved.</span>
        <span>Donations eligible under Section 80G • Made with devotion in Surat</span>
      </div>
    </div>
  </footer>
);
