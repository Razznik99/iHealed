import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { DisclaimerCallout } from "@/components/disclaimer-callout";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/intake")({
    head: () => ({
        meta: [
            { title: "New Patient Intake — iHealed" },
            { name: "description", content: "Complete your new patient health history and wellness goals." },
            { property: "og:title", content: "New Patient Intake — iHealed" },
            { property: "og:description", content: "Help us understand your full picture before our first visit." },
        ],
    }),
    component: IntakePage,
});

function IntakePage() {
    const [done, setDone] = useState(false);

    if (done) {
        return (
            <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center px-4 py-20 md:px-8">
                <div className="w-full rounded-[2rem] border border-sage/30 bg-card p-12 text-center">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary text-sage-deep">
                        <CheckCircle2 className="h-7 w-7" />
                    </span>
                    <h1 className="mt-6 font-serif text-4xl">Thank you.</h1>
                    <p className="mt-3 text-muted-foreground">Your intake has been received. We'll review thoroughly before your visit.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background bg-grain">
            <section className="mx-auto max-w-3xl px-4 pt-20 text-center md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sage">New Patient</p>
                <h1 className="mt-5 font-serif text-5xl md:text-6xl">Your story, listened to fully.</h1>
                <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                    The deeper your intake, the more precise our care. Every field is held in confidence.
                </p>
            </section>

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const data = Object.fromEntries(new FormData(e.currentTarget));
                    if (!data.fullName || !String(data.email).includes("@")) {
                        return toast.error("Please complete required fields.");
                    }
                    setDone(true);
                    toast.success("Intake submitted with care.");
                }}
                className="mx-auto mt-14 max-w-3xl space-y-8 px-4 pb-20 md:px-8"
            >
                <fieldset className="space-y-5 rounded-3xl border border-border bg-card p-8 md:p-10">
                    <legend className="px-2 font-serif text-2xl">Personal</legend>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label htmlFor="fullName">Full name *</Label>
                            <Input id="fullName" name="fullName" required maxLength={100} className="mt-2 rounded-xl" />
                        </div>
                        <div>
                            <Label htmlFor="email">Email *</Label>
                            <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 rounded-xl" />
                        </div>
                        <div>
                            <Label htmlFor="dob">Date of birth</Label>
                            <Input id="dob" name="dob" type="date" className="mt-2 rounded-xl" />
                        </div>
                        <div>
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" name="phone" type="tel" maxLength={20} className="mt-2 rounded-xl" />
                        </div>
                    </div>
                </fieldset>

                <fieldset className="space-y-5 rounded-3xl border border-border bg-card p-8 md:p-10">
                    <legend className="px-2 font-serif text-2xl">Health History</legend>
                    <div>
                        <Label htmlFor="conditions">Diagnosed conditions or chronic concerns</Label>
                        <Textarea id="conditions" name="conditions" rows={3} maxLength={2000} className="mt-2 rounded-xl" />
                    </div>
                    <div>
                        <Label htmlFor="meds">Current medications & supplements</Label>
                        <Textarea id="meds" name="meds" rows={3} maxLength={2000} className="mt-2 rounded-xl" />
                    </div>
                    <div>
                        <Label htmlFor="surgeries">Past surgeries or hospitalizations</Label>
                        <Textarea id="surgeries" name="surgeries" rows={2} maxLength={2000} className="mt-2 rounded-xl" />
                    </div>
                    <div>
                        <Label htmlFor="allergies">Allergies & sensitivities</Label>
                        <Input id="allergies" name="allergies" maxLength={500} className="mt-2 rounded-xl" />
                    </div>
                </fieldset>

                <fieldset className="space-y-5 rounded-3xl border border-border bg-card p-8 md:p-10">
                    <legend className="px-2 font-serif text-2xl">Lifestyle & Goals</legend>
                    <div>
                        <Label htmlFor="goals">What brought you to naturopathic care, and what does vibrant health look like for you? *</Label>
                        <Textarea id="goals" name="goals" rows={5} required maxLength={2000} className="mt-2 rounded-xl" />
                    </div>
                    <div>
                        <Label htmlFor="diet">Current diet & relationship with food</Label>
                        <Textarea id="diet" name="diet" rows={3} maxLength={1500} className="mt-2 rounded-xl" />
                    </div>
                    <div className="grid gap-5 md:grid-cols-2">
                        <div>
                            <Label htmlFor="sleep">Average sleep (hours)</Label>
                            <Input id="sleep" name="sleep" type="number" min={0} max={24} className="mt-2 rounded-xl" />
                        </div>
                        <div>
                            <Label htmlFor="movement">Movement practice</Label>
                            <Input id="movement" name="movement" maxLength={200} className="mt-2 rounded-xl" />
                        </div>
                    </div>
                    <label className="flex items-start gap-3 pt-2 text-sm text-muted-foreground">
                        <Checkbox name="consent" required className="mt-0.5" />
                        <span>I understand this intake is for educational naturopathic care and is not a substitute for medical advice.</span>
                    </label>
                </fieldset>

                <DisclaimerCallout />

                <Button type="submit" size="lg" className="w-full rounded-full">
                    Submit Intake
                </Button>
            </form>
        </div>
    );
}
