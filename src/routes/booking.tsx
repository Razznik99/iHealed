import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DisclaimerCallout } from "@/components/disclaimer-callout";
import { toast } from "sonner";

export const Route = createFileRoute("/booking")({
    head: () => ({
        meta: [
            { title: "Book a Consultation — iHealed" },
            { name: "description", content: "Reserve your initial naturopathic consultation. Choose a service, date and time." },
            { property: "og:title", content: "Book a Consultation — iHealed" },
            { property: "og:description", content: "Step into a more vibrant version of your health." },
        ],
    }),
    component: BookingPage,
});

const services = [
    { id: "initial", name: "Initial Naturopathic Consult", duration: "60 min", price: "$185" },
    { id: "cleanse", name: "Parasite Cleanse Protocol", duration: "75 min", price: "$290" },
    { id: "kangen", name: "Kangen Water Education", duration: "75 min", price: "$140" },
    { id: "diet", name: "Personalized Diet Planning", duration: "90 min", price: "$240" },
    { id: "detox", name: "Detox & Enema Guidance", duration: "60 min", price: "$160" },
];

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM"];

function BookingPage() {
    const [service, setService] = useState(services[0].id);
    const [date, setDate] = useState<Date | undefined>();
    const [time, setTime] = useState<string | null>(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [notes, setNotes] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    const selectedService = useMemo(() => services.find((s) => s.id === service)!, [service]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!date || !time) return toast.error("Please choose a date and time.");
        if (!name || !email.includes("@")) return toast.error("Please complete your details.");
        setConfirmed(true);
        toast.success("Consultation reserved.", { description: `${format(date, "PPP")} at ${time}` });
    };

    if (confirmed) {
        return (
            <div className="mx-auto flex min-h-[70vh] max-w-2xl items-center px-4 py-20 md:px-8">
                <div className="w-full rounded-[2rem] border border-sage/30 bg-card p-10 text-center md:p-14">
                    <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-secondary text-sage-deep">
                        <CheckCircle2 className="h-7 w-7" />
                    </span>
                    <h1 className="mt-6 font-serif text-4xl">Your seat at the table is held.</h1>
                    <p className="mt-4 text-muted-foreground">
                        We've sent a confirmation to <span className="text-foreground">{email}</span> with intake forms and
                        preparation notes.
                    </p>
                    <div className="mx-auto mt-8 max-w-sm space-y-2 rounded-2xl border border-border bg-secondary/30 p-5 text-left text-sm">
                        <p><span className="text-muted-foreground">Service:</span> {selectedService.name}</p>
                        <p><span className="text-muted-foreground">When:</span> {date && format(date, "PPP")} · {time}</p>
                        <p><span className="text-muted-foreground">For:</span> {name}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background bg-grain">
            <section className="mx-auto max-w-5xl px-4 pt-20 text-center md:px-8">
                <p className="text-xs uppercase tracking-[0.3em] text-sage">Reserve Your Visit</p>
                <h1 className="mt-5 font-serif text-5xl text-foreground md:text-6xl">Book a Consultation</h1>
                <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
                    Each appointment is held with intention. Select your service, choose a time that honors
                    your rhythm, and we'll do the rest.
                </p>
            </section>

            <form onSubmit={submit} className="mx-auto mt-14 grid max-w-7xl gap-8 px-4 pb-20 md:px-8 lg:grid-cols-[1.4fr_1fr]">
                <div className="space-y-8 rounded-[2rem] border border-border bg-card p-8 md:p-10">
                    <div>
                        <h2 className="font-serif text-2xl">1. Choose your service</h2>
                        <div className="mt-5 grid gap-3 sm:grid-cols-2">
                            {services.map((s) => (
                                <button
                                    key={s.id}
                                    type="button"
                                    onClick={() => setService(s.id)}
                                    className={cn(
                                        "rounded-2xl border p-4 text-left transition-all",
                                        service === s.id
                                            ? "border-sage bg-secondary/60 shadow-sm"
                                            : "border-border bg-background hover:border-sage/50"
                                    )}
                                >
                                    <p className="font-medium text-foreground">{s.name}</p>
                                    <p className="mt-1 text-xs text-muted-foreground">{s.duration} · {s.price}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <h2 className="font-serif text-2xl">2. Pick a date</h2>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button type="button" variant="outline" className={cn("mt-5 w-full justify-start rounded-xl", !date && "text-muted-foreground")}>
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : "Select a date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={(d) => { setDate(d); setTime(null); }}
                                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0}
                                        initialFocus
                                        className={cn("p-3 pointer-events-auto")}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div>
                            <h2 className="font-serif text-2xl">3. Choose a time</h2>
                            <div className="mt-5 grid grid-cols-3 gap-2">
                                {timeSlots.map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        disabled={!date}
                                        onClick={() => setTime(t)}
                                        className={cn(
                                            "rounded-xl border px-2 py-2.5 text-sm transition-all",
                                            time === t
                                                ? "border-sage bg-sage-deep text-cream"
                                                : "border-border bg-background hover:border-sage/50",
                                            !date && "cursor-not-allowed opacity-50"
                                        )}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-serif text-2xl">4. Your details</h2>
                        <div className="mt-5 grid gap-4 md:grid-cols-2">
                            <div>
                                <Label htmlFor="bk-name">Full name</Label>
                                <Input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} className="mt-2 rounded-xl" />
                            </div>
                            <div>
                                <Label htmlFor="bk-email">Email</Label>
                                <Input id="bk-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength={255} className="mt-2 rounded-xl" />
                            </div>
                            <div className="md:col-span-2">
                                <Label htmlFor="bk-notes">Anything you'd like us to know? (optional)</Label>
                                <Textarea id="bk-notes" value={notes} onChange={(e) => setNotes(e.target.value)} maxLength={1000} rows={3} className="mt-2 rounded-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="sticky top-28 space-y-6">
                        <div className="rounded-3xl border border-border bg-card p-7">
                            <p className="text-xs uppercase tracking-[0.25em] text-sage">Your Reservation</p>
                            <h3 className="mt-3 font-serif text-2xl">{selectedService.name}</h3>
                            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                                <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {selectedService.duration}</p>
                                <p className="flex items-center gap-2"><CalendarIcon className="h-4 w-4" /> {date ? format(date, "PPP") : "No date selected"}</p>
                                <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {time ?? "No time selected"}</p>
                            </div>
                            <div className="mt-5 flex items-baseline justify-between border-t border-border pt-5">
                                <span className="text-sm text-muted-foreground">Investment</span>
                                <span className="font-serif text-2xl text-sage-deep">{selectedService.price}</span>
                            </div>
                            <Button type="submit" size="lg" className="mt-5 w-full rounded-full">
                                Confirm Booking
                            </Button>
                        </div>
                        <DisclaimerCallout compact />
                    </div>
                </aside>
            </form>
        </div>
    );
}
