import SectionWrapper from "./SectionWrapper";

const timeline = [
  { year: "~6.000 a.C.", title: "Povos Originários", desc: "Os povos austronésios foram os primeiros habitantes de Taiwan. Hoje, 16 tribos indígenas são oficialmente reconhecidas, preservando línguas e tradições únicas." },
  { year: "1624–1662", title: "Colonização Europeia", desc: "Holandeses ocuparam o sul e espanhóis o norte da ilha. Estabeleceram fortes e rotas comerciais. Koxinga, um lorde sino-japonês, expulsou os holandeses em 1662." },
  { year: "1895–1945", title: "Domínio Japonês", desc: "Após a Guerra Sino-Japonesa, Taiwan foi cedida ao Japão. Os japoneses modernizaram a infraestrutura, mas impuseram sua cultura e língua sobre os taiwaneses." },
  { year: "1949", title: "Governo Nacionalista", desc: "Após perder a guerra civil para os comunistas, Chiang Kai-shek e o Kuomintang (KMT) fugiram para Taiwan, estabelecendo a República da China na ilha." },
  { year: "1987–2000", title: "Democratização", desc: "Taiwan fez uma transição pacífica da ditadura para a democracia. A lei marcial foi suspensa em 1987 e eleições diretas começaram em 1996." },
  { year: "Hoje", title: "Taiwan Moderna", desc: "Uma democracia vibrante e potência tecnológica global. Apesar das tensões com a China, Taiwan mantém governo independente, forças armadas e economia própria." },
];

const HistoriaSection = () => (
  <SectionWrapper id="historia" title="História" subtitle="Da antiguidade à democracia moderna" className="bg-muted">
    <div className="max-w-3xl mx-auto">
      {timeline.map((item, i) => (
        <div key={item.year} className="flex gap-4 md:gap-6 mb-8 last:mb-0">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-primary shrink-0 mt-1" />
            {i < timeline.length - 1 && <div className="w-0.5 flex-1 bg-border mt-1" />}
          </div>
          <div className="pb-8">
            <span className="text-sm font-semibold text-primary">{item.year}</span>
            <h3 className="text-xl font-bold text-foreground mb-1 font-sans">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default HistoriaSection;
