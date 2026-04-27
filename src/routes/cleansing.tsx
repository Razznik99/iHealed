import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Bug, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DisclaimerCallout } from "@/components/disclaimer-callout";
import cleanseImg from "@/assets/cleanse.jpg";

export const Route = createFileRoute("/cleansing")({
    head: () => ({
        meta: [
            { title: "Parasite Cleanse Protocols — iHealed" },
            { name: "description", content: "A gentle, graduated herbal cleanse protocol to restore terrain and digestive vitality." },
            { property: "og:title", content: "Parasite Cleanse Protocols — iHealed" },
            { property: "og:description", content: "Time-honored botanicals, modern guidance." },
            { property: "og:image", content: cleanseImg },
        ],
    }),
    component: CleansingPage,
});

const phases = [
    { n: "Phase I", t: "Preparation", d: "Two weeks of bitters, fiber and lymph movement to gently open elimination pathways." },
    { n: "Phase II", t: "Botanical Cleanse", d: "Targeted herbal blend (wormwood, black walnut, clove) administered in a graduated dose." },
    { n: "Phase III", t: "Restoration", d: "Mineral-rich foods, probiotics, and gut lining support to rebuild a vibrant terrain." },
];

function CleansingPage() {
    return (
        <div className="bg-background bg-grain">
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-20 md:grid-cols-2 md:px-8">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-sage-deep">
                            <Bug className="h-3 w-3" /> Cleanse Protocol
                        </span>
                        <h1 className="mt-5 font-serif text-5xl text-foreground text-balance md:text-6xl">
                            The art of <em className="text-sage-deep">restoring terrain.</em>
                        </h1>
                        <p className="mt-6 text-muted-foreground leading-relaxed">
                            For millennia, traditional medicine has understood that health begins in the gut. Our
                            parasite cleanse protocol is a graduated, gentle journey — pairing time-honored
                            botanicals with modern clinical care to support a thriving inner ecosystem.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Button asChild size="lg" className="rounded-full">
                                <Link to="/booking">Begin Your Protocol <ArrowRight className="ml-1 h-4 w-4" /></Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <Link to="/quiz">Am I a candidate?</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl">
                        <img src={cleanseImg} alt="Apothecary herbs and mortar" loading="lazy" width={1280} height={1280} className="h-full w-full object-cover" />
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
                <div className="text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-sage">The Three Phases</p>
                    <h2 className="mt-4 font-serif text-4xl md:text-5xl">A protocol that respects your pace</h2>
                </div>
                <div className="mt-14 grid gap-6 md:grid-cols-3">
                    {phases.map((p) => (
                        <div key={p.n} className="rounded-3xl border border-border bg-card p-8">
                            <span className="text-xs uppercase tracking-[0.25em] text-sage">{p.n}</span>
                            <h3 className="mt-3 font-serif text-2xl">{p.t}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-4xl px-4 md:px-8">
                <DisclaimerCallout />
            </section>

            <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    {[
                        { t: "Bioindividual dosing", d: "Every protocol is calibrated to your weight, terrain, and history — no kit medicine." },
                        { t: "Live clinical support", d: "Weekly check-ins via secure messaging through the duration of your cleanse." },
                        { t: "Nutritional companion plan", d: "A whole-food meal framework designed to amplify herbal efficacy." },
                        { t: "Gentle re-integration", d: "Phase III restores your microbiome with prebiotic-rich, mineralizing foods." },
                    ].map((item) => (
                        <div key={item.t} className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                            <Leaf className="mt-1 h-5 w-5 shrink-0 text-sage" />
                            <div>
                                <h3 className="font-serif text-xl">{item.t}</h3>
                                <p className="mt-1.5 text-sm text-muted-foreground">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
