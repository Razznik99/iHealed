import { createFileRoute, Link } from "@tanstack/react-router";
import { Bug, Droplets, Leaf, Salad, Stethoscope, Flame, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DisclaimerCallout } from "@/components/disclaimer-callout";

export const Route = createFileRoute("/services")({
    head: () => ({
        meta: [
            { title: "Services — iHealed" },
            { name: "description", content: "Parasite cleanse protocols, Kangen water education, detox guidance, and personalized diet planning." },
            { property: "og:title", content: "Services — iHealed" },
            { property: "og:description", content: "Cleanse, hydrate, nourish — naturopathic services tailored to you." },
        ],
    }),
    component: ServicesPage,
});

const services = [
    { icon: Bug, title: "Parasite Cleanse Protocol", duration: "4–8 weeks", price: "From $290", desc: "A graduated herbal protocol using wormwood, black walnut, and clove blends to restore terrain.", to: "/cleansing" },
    { icon: Droplets, title: "Kangen Water Education", duration: "75 min", price: "$140", desc: "Learn the science of ionized alkaline water and how to integrate it into daily ritual.", to: "/hydration" },
    { icon: Flame, title: "Detox & Enema Guidance", duration: "60 min", price: "$160", desc: "A judgment-free walkthrough of safe, supported home colon hydrotherapy practices.", to: "/booking" },
    { icon: Salad, title: "Personalized Diet Planning", duration: "90 min + plan", price: "$240", desc: "A bioindividual plan built from whole foods, seasonal produce, and your unique constitution.", to: "/booking" },
    { icon: Stethoscope, title: "Initial Naturopathic Consult", duration: "60 min", price: "$185", desc: "A comprehensive intake covering history, lifestyle, terrain, and a starting protocol.", to: "/booking" },
    { icon: Leaf, title: "Seasonal Wellness Retainer", duration: "Quarterly", price: "$95/mo", desc: "Ongoing seasonal adjustments to your protocol with messaging access between visits.", to: "/booking" },
];

function ServicesPage() {
    return (
        <div className="bg-background bg-grain">
            <section className="mx-auto max-w-5xl px-4 pt-20 text-center md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sage">Service Directory</p>
                <h1 className="mt-5 font-serif text-5xl text-foreground text-balance md:text-6xl">
                    Care, in the form your body asks for.
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
                    Each offering is a doorway. Begin where you feel called — we'll meet you there with
                    intention, herbal wisdom, and a plan that bends to fit your life.
                </p>
            </section>

            <section className="mx-auto mt-16 grid max-w-7xl gap-6 px-4 md:grid-cols-2 md:px-8 lg:grid-cols-3">
                {services.map((s) => (
                    <article key={s.title} className="group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-sage/50 hover:shadow-lg">
                        <div className="flex items-start justify-between">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-sage-deep">
                                <s.icon className="h-5 w-5" />
                            </span>
                            <span className="rounded-full bg-secondary px-3 py-1 text-[11px] uppercase tracking-wider text-sage-deep">
                                {s.duration}
                            </span>
                        </div>
                        <h2 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h2>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                        <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                            <span className="font-serif text-xl text-sage-deep">{s.price}</span>
                            <Link to={s.to} className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-sage-deep">
                                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </article>
                ))}
            </section>

            <section className="mx-auto mt-24 max-w-4xl px-4 md:px-8">
                <DisclaimerCallout />
            </section>

            <section className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
                <div className="rounded-3xl border border-border bg-secondary/40 p-10 text-center md:p-16">
                    <h2 className="font-serif text-3xl md:text-4xl">Not sure where to begin?</h2>
                    <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                        Take our five-minute Wellness Quiz and we'll suggest the consultation type best suited
                        to your current season of health.
                    </p>
                    <Button asChild size="lg" className="mt-8 rounded-full">
                        <Link to="/quiz">Take the Wellness Quiz</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
