import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/wellness-hub")({
    head: () => ({
        meta: [
            { title: "Wellness Hub — iHealed" },
            { name: "description", content: "A library of articles on holistic health, natural produce, and lifestyle practices." },
            { property: "og:title", content: "Wellness Hub — iHealed" },
            { property: "og:description", content: "Holistic wisdom for the modern body." },
        ],
    }),
    component: HubPage,
});

const articles = [
    { slug: "1", title: "The Quiet Power of Bitter Greens", category: "Nutrition", read: "6 min", excerpt: "How dandelion, arugula, and chicory awaken digestion and support the liver." },
    { slug: "2", title: "Why Alkaline Hydration Matters at the Cellular Level", category: "Hydration", read: "8 min", excerpt: "A primer on pH, ORP, and micro-clustering for the curious wellness seeker." },
    { slug: "3", title: "A Gentle Introduction to Parasite Cleansing", category: "Cleansing", read: "10 min", excerpt: "What to expect, when to consider one, and the herbs that have stood the test of time." },
    { slug: "4", title: "Seasonal Eating: An Autumn Apothecary", category: "Nutrition", read: "5 min", excerpt: "The roots, squashes, and warming spices that ground the body as the days shorten." },
    { slug: "5", title: "Mineralizing Broths for Deep Restoration", category: "Recipes", read: "4 min", excerpt: "A bone or vegetable broth recipe rich in collagen-supporting amino acids." },
    { slug: "6", title: "Lymphatic Movement: The Forgotten System", category: "Lifestyle", read: "7 min", excerpt: "Three daily practices to keep your lymph flowing and toxins clearing." },
    { slug: "7", title: "Sunlight, Circadian Rhythm & Hormonal Health", category: "Lifestyle", read: "9 min", excerpt: "Why morning sunlight may be the most undervalued wellness practice." },
    { slug: "8", title: "Adaptogenic Herbs for the Burned-Out Mind", category: "Cleansing", read: "6 min", excerpt: "Ashwagandha, rhodiola, and holy basil — when and how to use them safely." },
];

const categories = ["All", "Nutrition", "Hydration", "Cleansing", "Lifestyle", "Recipes"];

function HubPage() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState("All");

    const filtered = useMemo(
        () =>
            articles.filter(
                (a) =>
                    (cat === "All" || a.category === cat) &&
                    (a.title.toLowerCase().includes(q.toLowerCase()) ||
                        a.excerpt.toLowerCase().includes(q.toLowerCase()))
            ),
        [q, cat]
    );

    return (
        <div className="bg-background bg-grain">
            <section className="mx-auto max-w-5xl px-4 pt-20 text-center md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sage">Wellness Hub</p>
                <h1 className="mt-5 font-serif text-5xl md:text-6xl">A library for the curious.</h1>
                <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                    Slow-read essays on nutrition, hydration, cleansing, and the rituals that bring us home
                    to our bodies.
                </p>
            </section>

            <section className="mx-auto mt-12 max-w-5xl px-4 md:px-8">
                <div className="relative">
                    <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search articles…"
                        className="h-14 rounded-full border-border bg-card pl-12 text-base"
                    />
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {categories.map((c) => (
                        <button
                            key={c}
                            onClick={() => setCat(c)}
                            className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wider transition-colors ${cat === c
                                ? "border-sage bg-sage-deep text-cream"
                                : "border-border bg-card text-muted-foreground hover:text-foreground"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            <section className="mx-auto mt-14 max-w-7xl px-4 pb-20 md:px-8">
                {filtered.length === 0 ? (
                    <p className="py-16 text-center text-muted-foreground">No articles match your search.</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((a) => (
                            <Link
                                key={a.slug}
                                to="/wellness-hub"
                                className="group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-sage/50 hover:shadow-lg"
                            >
                                <div className="flex items-center justify-between">
                                    <Badge variant="secondary" className="rounded-full bg-secondary text-sage-deep">{a.category}</Badge>
                                    <span className="text-xs text-muted-foreground">{a.read}</span>
                                </div>
                                <h2 className="mt-5 font-serif text-2xl leading-snug text-foreground">{a.title}</h2>
                                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-sage-deep">
                                    Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
