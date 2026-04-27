import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bug, Droplets, Salad, Quote, Sparkles, Calendar, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-botanicals.jpg";
import cleanseImg from "@/assets/cleanse.jpg";
import hydrationImg from "@/assets/hydration.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import practitioner from "@/assets/practitioner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "iHealed— Holistic Naturopathic Care" },
      { name: "description", content: "Personalized naturopathic consultations rooted in cleansing, alkaline hydration, and nutritional therapy." },
      { property: "og:title", content: "iHealed — Holistic Naturopathic Care" },
      { property: "og:description", content: "Begin your path to vibrant, natural health." },
    ],
  }),
  component: HomePage,
});

const philosophies = [
  {
    icon: Bug,
    title: "Parasite Cleansing",
    body: "Time-honored herbal protocols that gently restore terrain and digestive vitality.",
    to: "/cleansing",
    accent: "from-sage/20 to-transparent",
  },
  {
    icon: Droplets,
    title: "Alkaline Hydration",
    body: "Living, ionized Kangen water — the foundation of cellular energy and detoxification.",
    to: "/hydration",
    accent: "from-clay/15 to-transparent",
  },
  {
    icon: Salad,
    title: "Nutritional Therapy",
    body: "Bioindividual diet plans built from whole foods that nourish your unique constitution.",
    to: "/services",
    accent: "from-gold/15 to-transparent",
  },
];

const testimonials = [
  {
    quote: "Within six weeks I had energy I hadn't felt in a decade. The protocol was gentle, intentional and deeply personal.",
    name: "Olivia M.",
    role: "Cleanse Protocol Client",
  },
  {
    quote: "The diet plan changed my relationship with food. It feels like ritual now, not restriction.",
    name: "Daniel K.",
    role: "Nutritional Therapy",
  },
  {
    quote: "Learning the science of alkaline water was a turning point. My family will never go back.",
    name: "Sofía R.",
    role: "Kangen Education",
  },
];

function HomePage() {
  return (
    <div className="bg-background bg-grain">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-14 md:grid-cols-12 md:gap-16 md:px-8 md:pt-20">
          <div className="md:col-span-6 lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-sage-deep">
              <Sparkles className="h-3 w-3" /> Modern Apothecary
            </span>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-foreground text-balance md:text-6xl lg:text-7xl">
              Wellness, <em className="text-sage-deep">cultivated</em> from
              <br className="hidden md:block" /> the earth itself.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              Personalized naturopathic consultations grounded in cleansing, alkaline hydration,
              and nutritional therapy. A return to ancient wisdom — refined for the modern body.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="group h-12 rounded-full bg-primary px-7 text-base shadow-md hover:bg-primary/90">
                <Link to="/booking">
                  Book a Consultation
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="h-12 rounded-full px-6 text-base">
                <Link to="/quiz">Take the Wellness Quiz</Link>
              </Button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-8 border-t border-border/70 pt-8">
              {[
                ["12+", "Years Practice"],
                ["1.4k", "Lives Restored"],
                ["98%", "Return for Care"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-serif text-3xl text-foreground">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative md:col-span-6 lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-xl">
              <img
                src={hero}
                alt="Sage leaves and apothecary tincture bottles in soft natural light"
                className="h-full w-full object-cover"
                width={1920}
                height={1280}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent p-6">
                <p className="font-serif text-cream text-xl italic">"Let food be thy medicine."</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cream/80">— Hippocrates</p>
              </div>
            </div>
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-sage-soft/60 blur-2xl md:block" />
            <div className="absolute -right-8 bottom-16 hidden h-32 w-32 rounded-full bg-clay/30 blur-3xl md:block" />
          </div>
        </div>
      </section>

      {/* CORE PHILOSOPHIES */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-sage">Core Philosophies</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Three pillars of true vitality
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every protocol we design rests on a foundation of cleanse, hydrate, and nourish — the
            timeless triad of naturopathic wisdom.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {philosophies.map((p) => (
            <Link
              to={p.to}
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-sage/50 hover:shadow-lg"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity group-hover:opacity-100`} />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-sage-deep">
                <p.icon className="h-6 w-6" />
              </span>
              <h3 className="relative mt-6 font-serif text-2xl text-foreground">{p.title}</h3>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <span className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sage-deep">
                Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PRACTITIONER */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-24 md:grid-cols-2 md:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-lg">
              <img src={practitioner} alt="Naturopathic practitioner" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-background p-5 shadow-md md:block">
              <div className="flex gap-1 text-clay">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 max-w-[12rem] font-serif text-sm italic text-foreground">
                "Care that finally listened to my body."
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-sage">Your Practitioner</p>
            <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">
              Dr. Elena Hart, ND
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Twelve years of clinical naturopathy, certified in functional nutrition and Kangen
              hydration education. Elena's practice is rooted in the belief that the body is a
              garden — when we tend the soil, the bloom is inevitable.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/85">
              {[
                "Doctor of Naturopathic Medicine — Bastyr University",
                "Certified Kangen Hydration Educator",
                "Functional Nutrition Practitioner (IFNA)",
              ].map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sage" /> {c}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10 rounded-full" size="lg">
              <Link to="/booking">
                <Calendar className="mr-2 h-4 w-4" /> Schedule a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">The Path</p>
          <h2 className="mt-4 font-serif text-4xl text-foreground md:text-5xl">A gentle, four-step journey</h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Wellness Quiz", d: "Surface root patterns in five minutes." },
            { n: "02", t: "Intake & Consult", d: "A 60-minute deep listening session." },
            { n: "03", t: "Personalized Protocol", d: "A bespoke cleanse, diet, and hydration plan." },
            { n: "04", t: "Ongoing Care", d: "Seasonal adjustments as you bloom." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-serif text-3xl text-sage">{s.n}</span>
              <h3 className="mt-3 font-serif text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* IMAGERY GRID */}
      <section className="mx-auto grid max-w-7xl gap-3 px-4 md:grid-cols-3 md:px-8">
        {[
          { src: cleanseImg, label: "Cleansing botanicals", to: "/cleansing" },
          { src: hydrationImg, label: "Living water", to: "/hydration" },
          { src: nutritionImg, label: "Whole nutrition", to: "/services" },
        ].map((i) => (
          <Link to={i.to} key={i.label} className="group relative overflow-hidden rounded-2xl">
            <img src={i.src} alt={i.label} loading="lazy" width={1280} height={1280} className="aspect-square w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <p className="absolute bottom-5 left-5 font-serif text-xl text-cream">{i.label}</p>
          </Link>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-sage">Voices from the Garden</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Stories of restoration</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative rounded-3xl border border-border bg-card p-8">
              <Quote className="absolute right-6 top-6 h-8 w-8 text-sage/30" />
              <blockquote className="font-serif text-xl leading-snug text-foreground italic">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-8 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-sage/30 bg-sage-deep px-8 py-16 text-center md:px-16 md:py-24">
          <div className="absolute inset-0 bg-grain opacity-30" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-serif text-4xl text-cream text-balance md:text-6xl">
              Begin tending your inner garden today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-cream/80">
              Book your initial naturopathic consultation and step into a more vibrant, intentional
              version of your health.
            </p>
            <Button asChild size="lg" className="mt-10 h-12 rounded-full bg-cream px-8 text-base text-charcoal hover:bg-cream/90">
              <Link to="/booking">
                Book Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
