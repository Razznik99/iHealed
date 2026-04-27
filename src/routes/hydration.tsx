import { createFileRoute, Link } from "@tanstack/react-router";
import { Droplets, Atom, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DisclaimerCallout } from "@/components/disclaimer-callout";
import { toast } from "sonner";
import { useState } from "react";
import hydrationImg from "@/assets/hydration.jpg";

export const Route = createFileRoute("/hydration")({
    head: () => ({
        meta: [
            { title: "Alkaline Hydration & Kangen Water — iHealed" },
            { name: "description", content: "The science of ionized alkaline water for cellular vitality, detoxification, and energy." },
            { property: "og:title", content: "Alkaline Hydration & Kangen Water" },
            { property: "og:description", content: "Living water for living bodies." },
            { property: "og:image", content: hydrationImg },
        ],
    }),
    component: HydrationPage,
});

function HydrationPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    return (
        <div className="bg-background bg-grain">
            <section className="relative overflow-hidden">
                <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-20 md:grid-cols-2 md:px-8">
                    <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl md:order-2">
                        <img src={hydrationImg} alt="Pour of clear water with mint and lemon" loading="lazy" width={1280} height={1280} className="h-full w-full object-cover" />
                    </div>
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-sage/30 bg-secondary/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-sage-deep">
                            <Droplets className="h-3 w-3" /> Living Water
                        </span>
                        <h1 className="mt-5 font-serif text-5xl text-foreground text-balance md:text-6xl">
                            The science of <em className="text-sage-deep">alkalinity.</em>
                        </h1>
                        <p className="mt-6 text-muted-foreground leading-relaxed">
                            Kangen water is ionized through medical-grade electrolysis, producing
                            micro-clustered, antioxidant-rich water with a higher pH. The result: deeper cellular
                            hydration, easier nutrient transport, and a body that detoxifies with grace.
                        </p>
                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {[["8.5–9.5", "Drinking pH"], ["−400mV", "ORP Antioxidant"], ["5x", "Smaller clusters"]].map(([k, v]) => (
                                <div key={v} className="rounded-2xl border border-border bg-card p-4 text-center">
                                    <p className="font-serif text-xl text-sage-deep">{k}</p>
                                    <p className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">{v}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        { i: Atom, t: "Ionization", d: "Electrolysis splits source water into alkaline and acidic streams, each with a purposeful use." },
                        { i: Zap, t: "Antioxidant Power", d: "Negative oxidation reduction potential helps neutralize cellular oxidative stress." },
                        { i: Droplets, t: "Micro-clustering", d: "Smaller water molecule clusters absorb more readily into the body's tissues." },
                    ].map((c) => (
                        <div key={c.t} className="rounded-3xl border border-border bg-card p-8">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-sage-deep">
                                <c.i className="h-5 w-5" />
                            </span>
                            <h3 className="mt-5 font-serif text-2xl">{c.t}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="inquire" className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
                <div className="grid gap-12 rounded-[2rem] border border-border bg-card p-8 md:grid-cols-2 md:p-14">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-sage">Machine Inquiries</p>
                        <h2 className="mt-4 font-serif text-4xl md:text-5xl">Bring living water home.</h2>
                        <p className="mt-5 text-muted-foreground leading-relaxed">
                            We offer education and onboarding for the full Enagic Kangen line. Submit an inquiry
                            and we'll send a curated comparison guide and book a private demo session.
                        </p>
                        <div className="mt-8">
                            <DisclaimerCallout compact />
                        </div>
                    </div>
                    <form
                        className="space-y-5"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (!name || !email.includes("@")) return toast.error("Please complete the form.");
                            toast.success("Inquiry received.", { description: "We'll be in touch within one business day." });
                            setName(""); setEmail(""); setMsg("");
                        }}
                    >
                        <div>
                            <Label htmlFor="kn-name">Your name</Label>
                            <Input id="kn-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} className="mt-2 rounded-xl" />
                        </div>
                        <div>
                            <Label htmlFor="kn-email">Email</Label>
                            <Input id="kn-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className="mt-2 rounded-xl" />
                        </div>
                        <div>
                            <Label htmlFor="kn-msg">What are you most curious about?</Label>
                            <Textarea id="kn-msg" value={msg} onChange={(e) => setMsg(e.target.value)} maxLength={1000} rows={4} className="mt-2 rounded-xl" />
                        </div>
                        <Button type="submit" size="lg" className="w-full rounded-full">
                            Request Comparison Guide <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
