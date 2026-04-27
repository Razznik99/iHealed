import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
    { to: "/services", label: "Services" },
    { to: "/cleansing", label: "Cleansing" },
    { to: "/hydration", label: "Hydration" },
    { to: "/shop", label: "Shop" },
    { to: "/wellness-hub", label: "Wellness Hub" },
    { to: "/quiz", label: "Wellness Quiz" },
] as const;

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b transition-all duration-300",
                scrolled
                    ? "border-border/60 bg-background/85 backdrop-blur-md"
                    : "border-transparent bg-background/40 backdrop-blur-sm"
            )}
        >
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
                <Link to="/" className="group flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-sage/40 bg-secondary text-sage-deep transition-transform group-hover:rotate-12">
                        <Leaf className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col leading-none">
                        <span className="font-serif text-xl tracking-wide text-foreground">iHealed</span>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                            Wellness Apothecary
                        </span>
                    </span>
                </Link>

                <nav className="hidden items-center gap-8 lg:flex">
                    {nav.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="group relative text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
                            activeProps={{ className: "text-foreground" }}
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 lg:flex">
                    <Button asChild variant="ghost" className="rounded-full">
                        <Link to="/intake">New Patient</Link>
                    </Button>
                    <Button asChild className="rounded-full bg-primary px-6 shadow-sm hover:bg-primary/90">
                        <Link to="/booking">Book Now</Link>
                    </Button>
                </div>

                <button
                    aria-label="Toggle menu"
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background lg:hidden"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {open && (
                <div className="border-t border-border bg-background lg:hidden">
                    <div className="flex flex-col gap-1 px-4 py-4">
                        {nav.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            to="/intake"
                            onClick={() => setOpen(false)}
                            className="rounded-lg px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                        >
                            New Patient Intake
                        </Link>
                        <Button asChild className="mt-2 rounded-full">
                            <Link to="/booking" onClick={() => setOpen(false)}>
                                Book a Consultation
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
