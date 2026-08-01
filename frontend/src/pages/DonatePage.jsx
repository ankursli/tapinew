import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Heart, Shield, HeartHandshake, Loader2, PartyPopper, Landmark, Check,
} from "lucide-react";
import { TRUST, IMAGES } from "@/lib/data";
import { getPricing, createDonation } from "@/lib/api";
import { Overline, Reveal } from "@/components/primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

export default function DonatePage() {
  const [presets, setPresets] = useState([251, 501, 1100, 2100, 5100, 11000]);
  const [causes, setCauses] = useState(["General Fund"]);
  const [amount, setAmount] = useState(1100);
  const [custom, setCustom] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(null);
  const [form, setForm] = useState({
    full_name: "", email: "", phone: "", cause: "General Fund",
    pan: "", anonymous: false, message: "",
  });

  useEffect(() => {
    getPricing().then((d) => {
      if (d.donation_presets) setPresets(d.donation_presets);
      if (d.donation_causes) {
        setCauses(d.donation_causes);
        setForm((f) => ({ ...f, cause: d.donation_causes[0] }));
      }
    }).catch(() => {});
  }, []);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const finalAmount = custom ? Number(custom) : amount;

  const submit = async (e) => {
    e.preventDefault();
    if (!form.full_name || !form.email || !form.phone) {
      toast.error("Please share your name, email and phone.");
      return;
    }
    if (!finalAmount || finalAmount <= 0) {
      toast.error("Please choose a donation amount.");
      return;
    }
    if (finalAmount > 10000 && !form.pan) {
      toast.error("For donations above ₹10,000, PAN is required for your 80G certificate.");
      return;
    }
    setLoading(true);
    try {
      const res = await createDonation({ ...form, amount: finalAmount });
      setDone(res);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Donation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "bg-white border-border/70 rounded-xl h-12 focus-visible:ring-saffron/40 focus-visible:border-saffron";

  if (done)
    return (
      <main className="bg-paper min-h-screen pt-28 pb-24" data-testid="donate-success">
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="rounded-[2rem] glass-card p-10 md:p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-saffron/10 text-saffron">
              <PartyPopper className="h-9 w-9" />
            </div>
            <h1 className="mt-7 font-display font-light text-4xl md:text-5xl text-ink">Thank you for your gift 🙏</h1>
            <p className="mt-4 text-ink-soft">
              {done.anonymous ? "A generous donor" : done.full_name}, your
              contribution of ₹{done.amount.toLocaleString("en-IN")} to{" "}
              <span className="text-ink">{done.cause}</span> will help keep the
              Tapi sacred and the community served.
            </p>
            <div className="mt-8 rounded-2xl bg-sand/60 p-6 text-left space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-ink-soft">Reference</span><span className="text-ink font-medium">{done.reference}</span></div>
              <div className="flex justify-between"><span className="text-ink-soft">Amount</span><span className="text-ink font-medium">₹{done.amount.toLocaleString("en-IN")}</span></div>
              <div className="flex justify-between"><span className="text-ink-soft">Cause</span><span className="text-ink font-medium">{done.cause}</span></div>
              <div className="flex justify-between"><span className="text-ink-soft">80G receipt</span><span className="text-ink font-medium">Emailed to {done.email}</span></div>
            </div>
            <Link to="/" className="mt-8 inline-block rounded-full bg-saffron px-8 py-3.5 text-white hover:bg-saffron-600 transition-colors">Back to Home</Link>
          </motion.div>
        </div>
      </main>
    );

  return (
    <main className="bg-paper min-h-screen pt-24" data-testid="donate-page">
      <section className="relative overflow-hidden">
        <img src={IMAGES.community} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/85 to-paper/40" />
        <div className="relative mx-auto max-w-7xl px-5 md:px-8 py-16 md:py-20">
          <Overline>Support the Trust</Overline>
          <h1 className="mt-4 font-display font-light text-4xl md:text-6xl tracking-tight text-ink max-w-2xl">
            Give to keep the Tapi sacred
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-soft">
            Every rupee funds the daily aarti, river cleaning, plantation, blood
            camps and disaster relief. Transparent, audited, and tax-deductible
            under Section 80G.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-ink-soft">
            <span className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-saffron" /> 80G tax benefit</span>
            <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-saffron" /> Audited & transparent</span>
            <span className="inline-flex items-center gap-2"><HeartHandshake className="h-4 w-4 text-saffron" /> 100% to seva</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <form onSubmit={submit} className="rounded-3xl border border-border/70 bg-white p-7 md:p-9" data-testid="donate-form">
            <h2 className="font-display text-3xl text-ink">Choose your gift</h2>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {presets.map((p) => {
                const active = !custom && amount === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => { setAmount(p); setCustom(""); }}
                    data-testid={`preset-${p}`}
                    className={`rounded-2xl border py-4 font-display text-2xl transition-[border-color,background,transform] duration-300 ${
                      active ? "border-saffron bg-saffron/5 text-saffron -translate-y-0.5" : "border-border/70 text-ink hover:border-saffron/40"
                    }`}
                  >
                    ₹{p.toLocaleString("en-IN")}
                  </button>
                );
              })}
            </div>

            <div className="mt-4">
              <Label className="text-sm text-ink-soft">Or enter a custom amount</Label>
              <div className="mt-2 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft font-display text-xl">₹</span>
                <Input type="number" min={1} placeholder="Custom amount" value={custom} onChange={(e) => setCustom(e.target.value)} className={`${inputCls} pl-9`} data-testid="donate-custom" />
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Select value={form.cause} onValueChange={(v) => setForm({ ...form, cause: v })}>
                <SelectTrigger className={inputCls} data-testid="donate-cause">
                  <SelectValue placeholder="Choose a cause" />
                </SelectTrigger>
                <SelectContent>
                  {causes.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Input placeholder="Full name" value={form.full_name} onChange={set("full_name")} className={inputCls} data-testid="donate-name" />
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email" value={form.email} onChange={set("email")} className={inputCls} data-testid="donate-email" />
                <Input placeholder="Phone" value={form.phone} onChange={set("phone")} className={inputCls} data-testid="donate-phone" />
              </div>
              <Input placeholder="PAN (required above ₹10,000 for 80G)" value={form.pan} onChange={set("pan")} className={inputCls} data-testid="donate-pan" />
              <Textarea placeholder="Message (optional)" rows={3} value={form.message} onChange={set("message")} className="bg-white border-border/70 rounded-xl focus-visible:ring-saffron/40 focus-visible:border-saffron" data-testid="donate-message" />

              <div className="flex items-center justify-between rounded-2xl bg-sand/60 px-5 py-4">
                <Label htmlFor="anon" className="text-ink cursor-pointer">Donate anonymously</Label>
                <Switch id="anon" checked={form.anonymous} onCheckedChange={(v) => setForm({ ...form, anonymous: v })} data-testid="donate-anon" />
              </div>
            </div>

            <button type="submit" disabled={loading} className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 text-white hover:bg-saffron-600 transition-colors disabled:opacity-60" data-testid="donate-submit">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Heart className="h-5 w-5" fill="currentColor" />}
              {loading ? "Processing…" : `Donate ₹${(finalAmount || 0).toLocaleString("en-IN")} (Demo)`}
            </button>
            <p className="mt-3 text-center text-xs text-ink-soft">
              This is a demonstration checkout. No real payment is taken.
            </p>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 space-y-6">
            <Reveal>
              <div className="rounded-3xl bg-ink text-white p-8">
                <div className="flex items-center gap-2 text-gold text-sm font-semibold"><Landmark className="h-4 w-4" /> Prefer a direct bank transfer?</div>
                <dl className="mt-5 space-y-3 text-sm">
                  <div className="flex justify-between gap-4"><dt className="text-white/50">Account Name</dt><dd className="text-right">{TRUST.bank.account_name}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-white/50">Account No.</dt><dd className="text-right">{TRUST.bank.account_no}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-white/50">IFSC</dt><dd className="text-right">{TRUST.bank.ifsc}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-white/50">Bank</dt><dd className="text-right">{TRUST.bank.bank}</dd></div>
                  <div className="flex justify-between gap-4"><dt className="text-white/50">UPI</dt><dd className="text-right break-all">{TRUST.bank.upi}</dd></div>
                </dl>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border/70 bg-sand/50 p-8">
                <h3 className="font-display text-2xl text-ink">Where your gift goes</h3>
                <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                  {["Fuels the daily Tapi Aarti on the ghat", "Funds weekly river cleaning drives", "Plants native trees along the riverbank", "Runs blood camps and disaster relief"].map((t) => (
                    <li key={t} className="flex items-start gap-2"><Check className="h-4 w-4 text-saffron mt-0.5 shrink-0" /> {t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
