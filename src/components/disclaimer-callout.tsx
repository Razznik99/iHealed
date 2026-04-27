import { ShieldAlert } from "lucide-react";

export function DisclaimerCallout({ compact = false }: { compact?: boolean }) {
    return (
        <aside
            role="note"
            className="flex gap-4 rounded-2xl border border-clay/30 bg-clay/5 p-5 text-sm leading-relaxed text-foreground/85"
        >
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-clay/15 text-clay">
                <ShieldAlert className="h-4 w-4" />
            </span>
            <div>
                <p className="font-medium uppercase tracking-[0.18em] text-clay text-[11px]">
                    Medical Disclaimer
                </p>
                <p className="mt-1.5 text-muted-foreground">
                    {compact
                        ? "Educational use only. Consult a licensed practitioner before changing any health routine."
                        : "The information shared is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any disease. Always consult a licensed healthcare provider before beginning a cleanse, supplement protocol, or dietary change."}
                </p>
            </div>
        </aside>
    );
}
