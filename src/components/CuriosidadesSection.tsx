import SectionWrapper from "./SectionWrapper";
import nightMarket from "@/assets/night-market.jpg";

const curiosidades = [
  { icon: "🎵", title: "Caminhões de lixo musicais", text: "Em Taiwan, os caminhões de lixo tocam a melodia de 'Für Elise' de Beethoven! Os moradores correm para fora com seus sacos quando ouvem a música." },
  { icon: "💻", title: "Potência tecnológica", text: "Taiwan produz mais de 60% dos semicondutores do mundo. A TSMC fabrica chips para Apple, NVIDIA e praticamente toda a indústria global de tecnologia." },
  { icon: "🌙", title: "Mercados noturnos", text: "São mais de 300 mercados noturnos espalhados pela ilha. É onde os taiwaneses socializam, comem e se divertem — funcionam quase toda noite." },
  { icon: "📚", title: "Educação de ponta", text: "Taiwan tem uma das maiores taxas de alfabetização do mundo (98,5%). O sistema educacional é altamente competitivo e valorizado culturalmente." },
  { icon: "🏥", title: "Saúde universal", text: "O sistema de saúde de Taiwan é considerado um dos melhores do mundo, com cobertura universal e tempo de espera mínimo." },
  { icon: "♻️", title: "Reciclagem exemplar", text: "Taiwan recicla mais de 55% do lixo doméstico, sendo chamada de 'gênio da reciclagem' por especialistas internacionais." },
];

const CuriosidadesSection = () => (
  <SectionWrapper id="curiosidades" title="Curiosidades" subtitle="Fatos surpreendentes sobre Taiwan que vão te impressionar" className="bg-muted">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {curiosidades.map((c) => (
        <div key={c.title} className="bg-background rounded-xl p-6 hover-lift border border-border">
          <div className="text-4xl mb-3">{c.icon}</div>
          <h3 className="text-lg font-bold text-foreground mb-2 font-sans">{c.title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">{c.text}</p>
        </div>
      ))}
    </div>
    <div className="rounded-xl overflow-hidden shadow-lg">
      <img src={nightMarket} alt="Mercado noturno em Taiwan" loading="lazy" width={1280} height={720} className="w-full h-64 md:h-80 object-cover" />
      <div className="bg-background p-6 text-center">
        <p className="text-muted-foreground italic">Os mercados noturnos são o coração da vida social taiwanesa — comida, jogos e cultura em cada esquina.</p>
      </div>
    </div>
  </SectionWrapper>
);

export default CuriosidadesSection;
