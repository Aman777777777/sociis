const SectionSystem = () => {
    return (
        <section className="py-24 sm:py-32 border-t border-border/40">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                <h2 className="font-display font-light text-4xl sm:text-5xl text-foreground mb-8 leading-tight">
                    The System
                </h2>

                <p className="font-sans text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                    SociisGroup operates across two divisions:
                </p>

                <ul className="space-y-3 font-sans text-base sm:text-lg text-muted-foreground">
                    <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">—</span>
                        <span>Sociis Impact — builds the standard</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">—</span>
                        <span>Sociis Culture — scales the standard</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SectionSystem;
