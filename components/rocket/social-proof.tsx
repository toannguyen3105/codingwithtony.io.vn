export function SocialProof() {
  return (
    <section className="py-12 border-y border-border/40 bg-muted/20">
      <div className="container text-center">
        <p className="mb-8 text-sm font-medium text-muted-foreground">
          TRUSTED BY 50,000+ DEVELOPERS
        </p>
        <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
          {/* Placeholders for logos */}
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
          <div className="h-8 w-32 bg-foreground/20 rounded"></div>
        </div>
      </div>
    </section>
  );
}
