import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/quiz")({
    head: () => ({
        meta: [
            { title: "Wellness Quiz — iHealed" },
            { name: "description", content: "A five-minute quiz to discover the consultation type best suited to your current health." },
            { property: "og:title", content: "Wellness Quiz — iHealed" },
            { property: "og:description", content: "Find your starting point." },
        ],
    }),
    component: QuizPage,
});

const questions = [
    {
        q: "How would you describe your energy through the day?",
        options: [
            { label: "Steady and reliable", weight: { diet: 0, cleanse: 0, hydration: 1 } },
            { label: "An afternoon crash is the norm", weight: { diet: 2, hydration: 1, cleanse: 1 } },
            { label: "Heavy and sluggish, especially in the morning", weight: { cleanse: 3, diet: 1 } },
            { label: "Wired but exhausted", weight: { hydration: 2, diet: 1 } },
        ],
    },
    {
        q: "How is your digestion lately?",
        options: [
            { label: "Smooth, daily, no complaints", weight: {} },
            { label: "Bloated or uncomfortable after meals", weight: { cleanse: 2, diet: 2 } },
            { label: "Irregular or constipated", weight: { cleanse: 3, hydration: 1 } },
            { label: "I rarely think about it", weight: { diet: 1 } },
        ],
    },
    {
        q: "How much water do you drink in a typical day?",
        options: [
            { label: "Less than 4 glasses", weight: { hydration: 3 } },
            { label: "4–6 glasses", weight: { hydration: 1 } },
            { label: "8 or more, mostly tap or bottled", weight: { hydration: 2 } },
            { label: "Plenty — already filtered or alkaline", weight: {} },
        ],
    },
    {
        q: "Which feels most true about your eating patterns?",
        options: [
            { label: "I eat intuitively and feel good", weight: {} },
            { label: "I'd love a real plan to follow", weight: { diet: 3 } },
            { label: "I overdo sugar or processed foods", weight: { diet: 2, cleanse: 1 } },
            { label: "I avoid many foods due to sensitivities", weight: { cleanse: 2, diet: 1 } },
        ],
    },
    {
        q: "What is your top wellness goal right now?",
        options: [
            { label: "Reset my system from the inside out", weight: { cleanse: 3 } },
            { label: "Eat in a way that fits my body", weight: { diet: 3 } },
            { label: "Hydrate deeper, feel more alive", weight: { hydration: 3 } },
            { label: "Just exploring — not sure yet", weight: { diet: 1, hydration: 1 } },
        ],
    },
];

const recommendations = {
    cleanse: { title: "Parasite Cleanse Protocol", desc: "A graduated herbal cleanse to restore digestive terrain.", to: "/cleansing" },
    diet: { title: "Personalized Diet Planning", desc: "A bioindividual plan crafted from whole, seasonal foods.", to: "/services" },
    hydration: { title: "Kangen Water Education", desc: "A 75-minute deep-dive into living, alkaline hydration.", to: "/hydration" },
};

function QuizPage() {
    const [step, setStep] = useState(0);
    const [scores, setScores] = useState({ diet: 0, cleanse: 0, hydration: 0 });
    const [done, setDone] = useState(false);

    const choose = (w: any) => {
        const next = { ...scores };
        for (const [k, v] of Object.entries(w)) (next as any)[k] += v;
        setScores(next);
        if (step + 1 < questions.length) setStep(step + 1);
        else setDone(true);
    };

    const winner = (Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "diet") as keyof typeof recommendations;
    const rec = recommendations[winner];

    if (done) {
        return (
            <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center px-4 py-20 md:px-8">
                <div className="w-full rounded-[2rem] border border-sage/30 bg-card p-10 text-center md:p-14">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary text-sage-deep">
                        <Sparkles className="h-7 w-7" />
                    </span>
                    <p className="mt-6 text-xs uppercase tracking-[0.3em] text-sage">Your Recommendation</p>
                    <h1 className="mt-4 font-serif text-5xl">{rec.title}</h1>
                    <p className="mx-auto mt-5 max-w-md text-muted-foreground">{rec.desc}</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-3">
                        <Button asChild size="lg" className="rounded-full">
                            <Link to={rec.to}>Explore <ArrowRight className="ml-1 h-4 w-4" /></Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full">
                            <Link to="/booking">Book a Consultation</Link>
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    const currentQ = questions[step];
    const progress = ((step) / questions.length) * 100;

    return (
        <div className="mx-auto max-w-3xl px-4 py-20 md:px-8">
            <div className="rounded-[2rem] border border-border bg-card p-8 md:p-12">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    <span>Wellness Quiz</span>
                    <span>{step + 1} / {questions.length}</span>
                </div>
                <Progress value={progress} className="mt-3 h-1" />
                <h1 className="mt-10 font-serif text-3xl text-balance md:text-4xl">{currentQ.q}</h1>
                <div className="mt-8 space-y-3">
                    {currentQ.options.map((o) => (
                        <button
                            key={o.label}
                            onClick={() => choose(o.weight)}
                            className="group flex w-full items-center justify-between rounded-2xl border border-border bg-background px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-sage hover:shadow-sm"
                        >
                            <span className="text-foreground">{o.label}</span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-sage-deep" />
                        </button>
                    ))}
                </div>
                {step > 0 && (
                    <button onClick={() => setStep(step - 1)} className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                        <ArrowLeft className="h-4 w-4" /> Previous
                    </button>
                )}
            </div>
        </div>
    );
}
