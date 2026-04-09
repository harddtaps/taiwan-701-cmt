import SectionWrapper from "./SectionWrapper";

const stats = [
  { label: "PIB", value: "US$ 790 bi", sub: "22ª maior economia do mundo" },
  { label: "Moeda", value: "TWD", sub: "Novo Dólar Taiwanês (1 USD ≈ 32 TWD)" },
  { label: "Semicondutores", value: "63%", sub: "da produção mundial de chips" },
  { label: "Exportações", value: "US$ 480 bi", sub: "anualmente (2023)" },
];

const companies = [
  { name: "TSMC", desc: "Maior fabricante de chips do mundo. Produz processadores para Apple, AMD, NVIDIA e Qualcomm. Avaliada em mais de US$ 700 bilhões." },
  { name: "Foxconn", desc: "Maior fabricante de eletrônicos por contrato do planeta. Monta iPhones, PlayStations e computadores para as maiores marcas globais." },
  { name: "ASUS / Acer", desc: "Gigantes taiwanesas de computadores e periféricos, reconhecidas mundialmente por laptops, monitores e componentes de alta performance." },
  { name: "MediaTek", desc: "Projetista de chips para smartphones, TVs inteligentes e dispositivos IoT. Compete diretamente com a Qualcomm no mercado global." },
];

const EconomiaSection = () => (
  <SectionWrapper id="economia" title="Economia" subtitle="Uma potência tecnológica de importância global">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {stats.map((s) => (
        <div key={s.label} className="glass-card p-5 text-center hover-lift">
          <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
          <p className="text-3xl font-bold text-primary font-sans">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
        </div>
      ))}
    </div>

    <h3 className="text-2xl font-bold text-foreground mb-6 text-center font-sans">Empresas de Destaque</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {companies.map((c) => (
        <div key={c.name} className="glass-card p-6 hover-lift">
          <h4 className="text-xl font-bold text-secondary mb-2 font-sans">{c.name}</h4>
          <p className="text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-10 glass-card p-6 md:p-8 border-l-4 border-primary">
      <h4 className="text-lg font-bold text-foreground mb-2 font-sans">Por que Taiwan é tão importante?</h4>
      <p className="text-muted-foreground leading-relaxed">
        Taiwan é responsável pela fabricação da maioria dos chips avançados do mundo. Sem a TSMC, a produção global de smartphones, carros, computadores e equipamentos médicos seria paralisada. Esse domínio tecnológico torna Taiwan um dos países mais estratégicos do planeta, frequentemente chamado de "Escudo de Silício".
      </p>
    </div>
  </SectionWrapper>
);

export default EconomiaSection;
