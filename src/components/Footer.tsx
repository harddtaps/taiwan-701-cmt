import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-card border-t border-border py-10">
    <div className="container mx-auto px-4 text-center">
      <Link to="/" className="text-2xl font-bold mb-2 inline-block text-foreground hover:text-primary transition-colors">
        🇹🇼 Explore Taiwan
      </Link>
      <p className="text-muted-foreground mb-4">Feira das Nações — Projeto Escolar</p>
      <div className="w-16 h-0.5 bg-primary mx-auto mb-4 rounded-full" />
      <p className="text-sm text-muted-foreground/50">
        © 2026 — Site criado para fins educacionais
      </p>
    </div>
  </footer>
);

export default Footer;
