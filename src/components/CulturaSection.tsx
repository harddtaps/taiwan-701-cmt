import SectionWrapper from "./SectionWrapper";
import lanternFestival from "@/assets/lantern-festival.jpg";

const topics = [
  { title: "Tradições e Costumes", text: "A cultura taiwanesa é uma rica mistura de influências chinesas, japonesas e indígenas. O respeito aos mais velhos, a hospitalidade e a importância da família são valores centrais. É comum tirar os sapatos antes de entrar em casas e templos." },
  { title: "Festival das Lanternas", text: "Realizado no 15º dia do Ano Novo Lunar, é um dos festivais mais espetaculares da Ásia. Milhares de lanternas iluminam o céu em Pingxi, criando uma cena mágica e inesquecível." },
  { title: "Religião e Crenças", text: "Taiwan pratica uma fascinante mistura de Budismo, Taoísmo e religião popular. Existem mais de 12.000 templos na ilha — mais que lojas de conveniência!" },
  { title: "Educação e Valores Sociais", text: "A educação é extremamente valorizada na sociedade taiwanesa, com forte influência confucionista. Taiwan também é líder em igualdade de gênero na Ásia." },
];

const CulturaSection = () => (
  <SectionWrapper title="Cultura" subtitle="Tradições milenares e costumes fascinantes">
    <div className="grid lg:grid-cols-2 gap-8 mb-10">
      <div className="rounded-xl overflow-hidden shadow-lg">
        <img src={lanternFestival} alt="Festival das Lanternas em Pingxi" loading="lazy" className="w-full h-full object-cover min-h-[300px] rounded-xl" />
      </div>
      <div className="flex flex-col gap-6">
        {topics.slice(0, 2).map((t) => (
          <div key={t.title} className="glass-card p-6 hover-lift">
            <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{t.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {topics.slice(2).map((t) => (
        <div key={t.title} className="glass-card p-6 hover-lift">
          <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{t.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{t.text}</p>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default CulturaSection;
