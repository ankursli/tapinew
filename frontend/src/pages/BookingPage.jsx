import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { toast } from "sonner";
import {
  Flame, Sparkles, Check, CalendarDays, ArrowLeft, Loader2,
  PartyPopper, Copy, ChevronRight,
} from "lucide-react";
import { IMAGES } from "@/lib/data";
import { getPricing, createBooking } from "@/lib/api";
import { Overline, Reveal } from "@/components/primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const CONTENT = {
  aarti: {
    label: "Tapi Aarti Booking",
    title: "Sponsor a sacred Tapi Aarti",
    blurb:
      "Offer the daily evening aarti in your family's name. Our priests perform the sankalp on the ghat and you receive a blessing certificate.",
    icon: Flame,
    slots: ["Morning Jal Puja · 6:00 AM", "Sandhya Aarti · Sunset", "Maha Aarti · 7:00 PM"],
    img: IMAGES.aarti,
  },
  pooja: {
    label: "Tapi Pooja Booking",
    title: "Book a Tapi Pooja",
    blurb:
      "Vedic jal abhishek, havan and anushthan performed by temple priests for the wellbeing and prosperity of your family.",
    icon: Sparkles,
    slots: ["Morning Muhurat", "Afternoon Muhurat", "Evening Muhurat"],
    img: IMAGES.heritage,
  },
};

export default function BookingPage() {
  const { type: rawType } = useParams();
  const type = rawType === "pooja" ? "pooja" : "aarti";
  const navigate = useNavigate();
  const meta = CONTENT[type];
  const Icon = meta.icon;

  const [packages, setPackages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const [form, setForm] = useState({
    full_name: "", email: "", phone: "", time_slot: "",
    devotee_count: 1, gotra: "", special_request: "",
  });

  useEffect(() => {
    let alive = true;
    getPricing().then((data) => {
      if (!alive) return;
      const pk = data[type] || [];
      setPackages(pk);
      setSelected(pk[1] || pk[0] || null);
    }).catch(() => toast.error("Could not load packages."));
    return () => { alive = false; };
  }, [type]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const amount = useMemo(() => (selected ? selected.price : 0), [selected]);

  const submit = async (e) => {
    e.preventDefault();
    if (!selected) return;
    if (!form.full_name || !form.email || !form.phone || !date) {
      toast.error("Please complete your details and pick a date.");
      return;
    }
    setLoading(true);
    try {
      const res = await createBooking({
        booking_type: type,
        package_id: selected.id,
        package_name: selected.name,
        amount,
        full_name: form.full_name,
        email: form.email,
        phone: form.phone,
        date: format(date, "yyyy-MM-dd"),
        time_slot: form.time_slot || null,
        devotee_count: Number(form.devotee_count) || 1,
        gotra: form.gotra || null,
        special_request: form.special_request || null,
      });
      setDone(res);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Booking failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "bg-white border-border/70 rounded-xl h-12 focus-visible:ring-saffron/40 focus-visible:border-saffron";

  if (done) return <BookingSuccess done={done} type={type} />;

  return (
    <main className="bg-paper min-h-screen pt-24" data-testid="booking-page">
      {/* Banner */}
      <section className="relative overflow-hidden">
        <img src={meta.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-paper/30" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-saffron transition-colors mb-6" data-testid="booking-back">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
          <Overline>{meta.label}</Overline>
          <h1 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight text-ink max-w-2xl">
            {meta.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">{meta.blurb}</p>
          <div className="mt-6 flex gap-3">
            <Link to="/book/aarti" className={`px-5 py-2.5 rounded-full text-sm transition-colors ${type === "aarti" ? "bg-saffron text-white" : "border border-border bg-white/60 text-ink hover:border-saffron"}`}>Aarti</Link>
            <Link to="/book/pooja" className={`px-5 py-2.5 rounded-full text-sm transition-colors ${type === "pooja" ? "bg-saffron text-white" : "border border-border bg-white/60 text-ink hover:border-saffron"}`}>Pooja</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid lg:grid-cols-12 gap-10">
        {/* Packages */}
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl text-ink flex items-center gap-2">
            <Icon className="h-6 w-6 text-saffron" /> Choose a seva package
          </h2>
          <div className="mt-6 space-y-4">
            {packages.map((p) => {
              const active = selected?.id === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelected(p)}
                  data-testid={`package-${p.id}`}
                  className={`w-full text-left rounded-3xl border p-6 md:p-7 transition-[border-color,box-shadow,transform] duration-300 ${
                    active
                      ? "border-saffron bg-saffron/5 shadow-soft -translate-y-0.5"
                      : "border-border/70 bg-white hover:border-saffron/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                      <p className="mt-2 text-ink-soft text-sm max-w-md">{p.description}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-display text-3xl text-saffron">₹{p.price.toLocaleString("en-IN")}</div>
                      <span className={`mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full border ${active ? "bg-saffron border-saffron text-white" : "border-border"}`}>
                        {active && <Check className="h-4 w-4" />}
                      </span>
                    </div>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-1.5 text-xs text-ink-soft">
                        <Check className="h-3.5 w-3.5 text-saffron" /> {f}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-5">
          <form onSubmit={submit} className="lg:sticky lg:top-28 rounded-3xl glass-card p-7 md:p-8" data-testid="booking-form">
            <h3 className="font-display text-2xl text-ink">Your details</h3>
            <div className="mt-5 space-y-4">
              <Input placeholder="Full name" value={form.full_name} onChange={set("full_name")} className={inputCls} data-testid="booking-name" />
              <Input type="email" placeholder="Email" value={form.email} onChange={set("email")} className={inputCls} data-testid="booking-email" />
              <Input placeholder="Phone" value={form.phone} onChange={set("phone")} className={inputCls} data-testid="booking-phone" />

              <Popover>
                <PopoverTrigger asChild>
                  <button type="button" className={`${inputCls} w-full flex items-center gap-2 px-3 text-left ${date ? "text-ink" : "text-ink-soft"}`} data-testid="booking-date-trigger">
                    <CalendarDays className="h-5 w-5 text-saffron" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))} initialFocus />
                </PopoverContent>
              </Popover>

              <Select value={form.time_slot} onValueChange={(v) => setForm({ ...form, time_slot: v })}>
                <SelectTrigger className={inputCls} data-testid="booking-slot">
                  <SelectValue placeholder="Preferred time" />
                </SelectTrigger>
                <SelectContent>
                  {meta.slots.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="grid grid-cols-2 gap-4">
                <Input type="number" min={1} placeholder="Devotees" value={form.devotee_count} onChange={set("devotee_count")} className={inputCls} data-testid="booking-count" />
                <Input placeholder="Gotra (optional)" value={form.gotra} onChange={set("gotra")} className={inputCls} data-testid="booking-gotra" />
              </div>
              <Textarea placeholder="Sankalp / special request (optional)" rows={3} value={form.special_request} onChange={set("special_request")} className="bg-white border-border/70 rounded-xl focus-visible:ring-saffron/40 focus-visible:border-saffron" data-testid="booking-request" />
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-sand/60 px-5 py-4">
              <span className="text-ink-soft">Amount payable</span>
              <span className="font-display text-3xl text-saffron">₹{amount.toLocaleString("en-IN")}</span>
            </div>

            <button type="submit" disabled={loading} className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 text-white hover:bg-saffron-600 transition-colors disabled:opacity-60" data-testid="booking-submit">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <ChevronRight className="h-5 w-5" />}
              {loading ? "Processing…" : "Proceed to Pay (Demo)"}
            </button>
            <p className="mt-3 text-center text-xs text-ink-soft">
              This is a demonstration checkout. No real payment is taken.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

const BookingSuccess = ({ done, type }) => (
  <main className="bg-paper min-h-screen pt-28 pb-24" data-testid="booking-success">
    <div className="mx-auto max-w-2xl px-5 md:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] glass-card p-10 md:p-12 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-saffron/10 text-saffron">
          <PartyPopper className="h-9 w-9" />
        </div>
        <Reveal delay={0.1}>
          <h1 className="mt-7 font-display font-light text-4xl md:text-5xl text-ink">
            Your {type} seva is booked!
          </h1>
        </Reveal>
        <p className="mt-4 text-ink-soft">
          Thank you, {done.full_name}. Our team will confirm the details on{" "}
          {done.email}. May Maa Tapi bless you and your family. 🙏
        </p>
        <div className="mt-8 rounded-2xl bg-sand/60 p-6 text-left space-y-2">
          <Row k="Reference" v={done.reference} />
          <Row k="Seva" v={done.package_name} />
          <Row k="Date" v={done.date} />
          <Row k="Amount" v={`₹${done.amount.toLocaleString("en-IN")}`} />
          <Row k="Status" v="Confirmed (demo)" />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="rounded-full bg-saffron px-7 py-3.5 text-white hover:bg-saffron-600 transition-colors">Back to Home</Link>
          <Link to="/donate" className="rounded-full border border-border px-7 py-3.5 text-ink hover:border-saffron transition-colors">Make a Donation</Link>
        </div>
      </motion.div>
    </div>
  </main>
);

const Row = ({ k, v }) => (
  <div className="flex items-center justify-between text-sm">
    <span className="text-ink-soft">{k}</span>
    <span className="text-ink font-medium">{v}</span>
  </div>
);
