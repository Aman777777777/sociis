const SectionFlywheel = () => {
  return (
    <section id="flywheel" className="py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-[720px]">
          <h2 className="font-sans font-light text-3xl sm:text-4xl text-foreground tracking-tight mb-10">
            Scale Architecture
          </h2>

          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-4 mb-10">
            {["Experience", "Evidence", "Story", "House", "Standard", "Impact"].map((step, index, arr) => (
              <span key={step} className="flex items-center">
                <span className="font-sans text-lg sm:text-xl text-foreground whitespace-nowrap">{step}</span>
                {index < arr.length - 1 && (
                  <span className="text-primary text-xl mx-2 sm:mx-4">→</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-body-lg text-muted-foreground">
            Behavioural proof is generated in controlled environments, translated into learning, and governed as standard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFlywheel;
