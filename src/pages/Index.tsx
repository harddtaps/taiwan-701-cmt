import { Link } from "react-router-dom";
import PageWrapper from "@/components/PageWrapper";
import heroImg from "@/assets/hero-taipei101.jpg";

const sections = [
  { path: "/policia", icon: "🚔", label: "Forças Policiais", desc: "Sistema policial e segurança pública" },
  { path: "/culinaria", icon: "🍜", label: "Culinária", desc: "Sabores irresistíveis da gastronomia" },
  { path: "/curiosidades", icon: "🤯", label: "Curiosidades", desc: "Fatos surpreendentes sobre Taiwan" },
  { path: "/cultura", icon: "🎎", label: "Cultura", desc: "Tradições e costumes fascinantes" },
  { path: "/historia", icon: "📜", label: "História", desc: "Da antiguidade à democracia moderna" },
  { path: "/economia", icon: "💰", label: "Economia", desc: "Potência tecnológica global" },
];

const Index = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Taipei 101 ao entardecer"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <p className="text-primary text-lg md:text-xl font-medium mb-4">
          Feira das Nações 🇹🇼
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6">
          Explore Taiwan
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Uma ilha de contrastes fascinantes — onde templos ancestrais convivem com arranha-céus futuristas, e a culinária de rua é uma experiência inesquecível.
        </p>
      </div>
    </section>

    {/* Section Buttons Grid */}
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
        Navegue pelas Seções
      </h2>
      <p className="text-muted-foreground text-center mb-12 text-lg">
        Clique para explorar cada tema sobre Taiwan
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {sections.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            className="group glass-card p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50"
          >
            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {s.icon}
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2 font-sans group-hover:text-primary transition-colors">
              {s.label}
            </h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  </PageWrapper>
);

export default Index;
