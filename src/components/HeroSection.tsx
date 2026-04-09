import heroImg from "@/assets/hero-taipei101.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Taipei 101 ao entardecer"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/50 to-secondary/80" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary-foreground/80 text-lg md:text-xl font-medium mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Feira das Nações 🇹🇼
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          Descubra Taiwan
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
          Uma ilha de contrastes fascinantes — onde templos ancestrais convivem com arranha-céus futuristas, e a culinária de rua é uma experiência inesquecível.
        </p>
        <div className="flex flex-wrap gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <button
            onClick={() => scrollTo("culinaria")}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Explorar
          </button>
          <button
            onClick={() => scrollTo("historia")}
            className="px-8 py-3 rounded-full border-2 border-primary-foreground/40 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
          >
            História
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary-foreground/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
