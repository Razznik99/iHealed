import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

export function SiteFooter() {
    const [email, setEmail] = useState("");

    return (
        <footer className="mt-24 border-t border-border bg-secondary/40">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2.5">
                            <span className="grid h-9 w-9 place-items-center rounded-full border border-sage/40 bg-background text-sage-deep">
                                <Leaf className="h-4 w-4" />
                            </span>
                            <span className="font-serif text-xl">iHealed</span>
                        </div>
                        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                            A modern apothecary for holistic care — guiding you to vibrant health through
                            cleansing, hydration, and nourishment from the earth.
                        </p>

                        <form
                            className="mt-8 max-w-md"
                            onSubmit={(e) => {
                                e.preventDefault();
                                if (!email.includes("@")) return toast.error("Please enter a valid email.");
                                toast.success("Welcome to The Natural Path.", {
                                    description: "Look out for our weekly letter in your inbox.",
                                });
                                setEmail("");
                            }}
                        >
                            <p className="font-serif text-lg text-foreground">The Natural Path</p>
                            <p className="mt-1 text-xs text-muted-foreground">
                                Weekly holistic wisdom — gentle, never spammy.
                            </p>
                            <div className="mt-4 flex gap-2">
                                <Input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="rounded-full border-border bg-background"
                                />
                                <Button type="submit" size="icon" className="rounded-full">
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-sage-deep">Explore</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><Link to="/services" className="text-foreground/75 hover:text-foreground">Services</Link></li>
                            <li><Link to="/cleansing" className="text-foreground/75 hover:text-foreground">Cleansing</Link></li>
                            <li><Link to="/hydration" className="text-foreground/75 hover:text-foreground">Hydration</Link></li>
                            <li><Link to="/shop" className="text-foreground/75 hover:text-foreground">Shop</Link></li>
                            <li><Link to="/wellness-hub" className="text-foreground/75 hover:text-foreground">Wellness Hub</Link></li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-sage-deep">Begin</p>
                        <ul className="mt-4 space-y-3 text-sm">
                            <li><Link to="/booking" className="text-foreground/75 hover:text-foreground">Book a Consultation</Link></li>
                            <li><Link to="/intake" className="text-foreground/75 hover:text-foreground">New Patient Intake</Link></li>
                            <li><Link to="/quiz" className="text-foreground/75 hover:text-foreground">Wellness Quiz</Link></li>
                        </ul>
                        <div className="mt-6 flex items-center gap-3">
                            <a href="#" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background hover:bg-secondary"><span className="text-xs font-bold">IG</span></a>
                            <a href="mailto:hello@iHealed.co" className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background hover:bg-secondary"><Mail className="h-4 w-4" /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-14 rounded-2xl border border-border bg-background/70 p-6 text-xs leading-relaxed text-muted-foreground">
                    <p className="mb-2 font-medium uppercase tracking-[0.2em] text-sage-deep">Medical Disclaimer</p>
                    The information provided by iHealed is for educational purposes only and is not
                    intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified
                    healthcare practitioner before beginning any new health protocol, supplement, cleanse, or
                    dietary change — particularly if you are pregnant, nursing, taking medication, or managing
                    a medical condition. Statements have not been evaluated by the FDA.
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground md:flex-row">
                    <p>© {new Date().getFullYear()} iHealed Wellness Apothecary. All rights reserved.</p>
                    <p>Crafted with intention, in season.</p>
                </div>
            </div>
        </footer>
    );
}
