const SectionHowItWorks = () => {
    const steps = [
        { num: "01", label: "Interface", desc: "Behavioural Engine with Ethics (BEE)" },
        { num: "02", label: "Rooms", desc: "Controlled leadership environments" },
        { num: "03", label: "Culture", desc: "Film, media, distribution" },
        { num: "04", label: "Standard", desc: "Sustainable Behavioural Standard (SBS)" },
    ];

    return (
        <section className="py-24 sm:py-32 border-t border-border/40">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground mb-10 leading-tight">
                    How It Works
                </h2>

                <div className="space-y-8">
                    {steps.map((step) => (
                        <div key={step.num} className="flex items-start gap-8">
                            <span className="font-sans text-sm text-accent tracking-widest w-10 shrink-0 mt-1">
                                {step.num}
                            </span>
                            <div>
                                <p className="font-sans font-medium text-foreground mb-1">{step.label}</p>
                                <p className="font-sans text-muted-foreground">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionHowItWorks;
