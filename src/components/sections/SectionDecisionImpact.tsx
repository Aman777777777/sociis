const SectionDecisionImpact = () => {
    return (
        <section id="decision-impact" className="py-20 sm:py-28 border-t border-border/50">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-xs sm:text-sm tracking-[0.3em] text-muted-foreground uppercase mb-3 sm:mb-4">
                        DECISION IMPACT
                    </p>
                    <div className="w-24 h-px bg-gradient-to-r from-accent to-transparent mb-10"></div>

                    <div className="space-y-6">
                        <p className="text-body-lg text-foreground">
                            Organisations do not fail because of strategy.
                        </p>
                        <p className="text-body-lg text-foreground">
                            They fail because of decisions made every day.
                        </p>
                        <p className="text-body text-muted-foreground">
                            SociisGroup improves decision quality across operations, procurement and leadership.
                        </p>
                        <p className="text-body text-muted-foreground">
                            The result:
                        </p>
                        <ul className="space-y-2">
                            <li className="text-body text-muted-foreground flex items-start gap-3">
                                <span className="text-accent mt-0.5">–</span>
                                lower cost leakage
                            </li>
                            <li className="text-body text-muted-foreground flex items-start gap-3">
                                <span className="text-accent mt-0.5">–</span>
                                stronger alignment
                            </li>
                            <li className="text-body text-muted-foreground flex items-start gap-3">
                                <span className="text-accent mt-0.5">–</span>
                                fewer downstream problems
                            </li>
                            <li className="text-body text-muted-foreground flex items-start gap-3">
                                <span className="text-accent mt-0.5">–</span>
                                more consistent execution
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionDecisionImpact;
