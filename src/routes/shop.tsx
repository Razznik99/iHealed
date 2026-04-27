import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Leaf, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import hydrationImg from "@/assets/hydration.jpg";
import cleanseImg from "@/assets/cleanse.jpg";
import nutritionImg from "@/assets/nutrition.jpg";

export const Route = createFileRoute("/shop")({
    head: () => ({
        meta: [
            { title: "Shop — Kangen & Recommended Supplements" },
            { name: "description", content: "Kangen water systems and practitioner-vetted natural supplements." },
            { property: "og:title", content: "Shop — iHealed" },
            { property: "og:description", content: "Curated tools for living wellness." },
        ],
    }),
    component: ShopPage,
});

const kangen = [
    { name: "Kangen LeveLuk K8", desc: "Eight-plate flagship for whole-family hydration.", price: "$4,980", featured: true },
    { name: "Kangen LeveLuk SD501", desc: "The trusted seven-plate workhorse — practitioner favorite.", price: "$3,980" },
    { name: "Kangen JRIV", desc: "Compact four-plate ionizer for smaller homes.", price: "$2,380" },
];

const supplements = [
    { name: "Bitter Roots Tonic", cat: "Digestion", price: "$38", img: cleanseImg },
    { name: "Cellular Mineral Blend", cat: "Hydration", price: "$42", img: hydrationImg },
    { name: "Sea Vegetable Powder", cat: "Nutrition", price: "$34", img: nutritionImg },
    { name: "Wormwood Complex", cat: "Cleansing", price: "$48", img: cleanseImg },
    { name: "Lymph Move Tincture", cat: "Lymphatic", price: "$36", img: nutritionImg },
    { name: "Gut Restoration Probiotic", cat: "Gut Health", price: "$58", img: nutritionImg },
];

function ShopPage() {
    return (
        <div className="bg-background bg-grain">
            <section className="mx-auto max-w-5xl px-4 pt-20 text-center md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sage">The Apothecary</p>
                <h1 className="mt-5 font-serif text-5xl md:text-6xl">Tools for living wellness.</h1>
                <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                    Practitioner-curated systems and supplements. Every item has been tested in clinic before
                    it ever reaches you.
                </p>
            </section>

            {/* KANGEN */}
            <section className="mx-auto mt-16 max-w-7xl px-4 md:px-8">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-sage">Kangen Water Systems</p>
                        <h2 className="mt-3 font-serif text-3xl md:text-4xl">Living water, at home.</h2>
                    </div>
                    <Link to="/hydration" className="hidden text-sm font-medium text-sage-deep hover:underline md:inline-flex md:items-center md:gap-1.5">
                        Learn the science <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {kangen.map((k) => (
                        <article key={k.name} className={`group relative overflow-hidden rounded-3xl border p-8 transition-all hover:-translate-y-1 ${k.featured ? "border-sage bg-sage-deep text-cream shadow-xl" : "border-border bg-card"
                            }`}>
                            {k.featured && (
                                <Badge className="absolute right-5 top-5 rounded-full bg-cream text-charcoal">Most Loved</Badge>
                            )}
                            <span className={`grid h-12 w-12 place-items-center rounded-2xl ${k.featured ? "bg-cream/10 text-cream" : "bg-secondary text-sage-deep"}`}>
                                <Droplets className="h-5 w-5" />
                            </span>
                            <h3 className={`mt-6 font-serif text-2xl ${k.featured ? "text-cream" : ""}`}>{k.name}</h3>
                            <p className={`mt-3 text-sm ${k.featured ? "text-cream/80" : "text-muted-foreground"}`}>{k.desc}</p>
                            <div className="mt-8 flex items-baseline justify-between">
                                <span className={`font-serif text-2xl ${k.featured ? "text-cream" : "text-sage-deep"}`}>{k.price}</span>
                                <Button asChild variant={k.featured ? "secondary" : "default"} className="rounded-full">
                                    <Link to="/hydration">Inquire</Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* SUPPLEMENTS */}
            <section className="mx-auto mt-24 max-w-7xl px-4 pb-20 md:px-8">
                <div className="flex items-end justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-sage">Recommended Supplements</p>
                        <h2 className="mt-3 font-serif text-3xl md:text-4xl">From the practitioner's shelf.</h2>
                    </div>
                </div>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {supplements.map((s) => (
                        <article key={s.name} className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg">
                            <div className="relative aspect-[5/4] overflow-hidden">
                                <img src={s.img} alt={s.name} loading="lazy" width={1280} height={1024} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <Badge className="absolute left-4 top-4 rounded-full bg-background/90 text-foreground">{s.cat}</Badge>
                            </div>
                            <div className="p-6">
                                <div className="flex items-start justify-between">
                                    <h3 className="font-serif text-xl">{s.name}</h3>
                                    <span className="font-serif text-lg text-sage-deep">{s.price}</span>
                                </div>
                                <div className="mt-2 flex items-center gap-1 text-clay">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className="h-3 w-3 fill-current" />
                                    ))}
                                    <span className="ml-2 text-xs text-muted-foreground">Practitioner picked</span>
                                </div>
                                <Button variant="outline" className="mt-5 w-full rounded-full">
                                    <Leaf className="mr-2 h-4 w-4" /> Add to ritual
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
