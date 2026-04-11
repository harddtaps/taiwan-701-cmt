import SectionWrapper from "./SectionWrapper";

const divisions = [
  { icon: "🛡️", name: "Agência Nacional de Polícia", desc: "Órgão central subordinado ao Ministério do Interior, responsável pela coordenação de toda a segurança pública de Taiwan. Supervisiona mais de 70.000 policiais em toda a ilha." },
  { icon: "⚔️", name: "Polícia Militar (CGA)", desc: "A Administração da Guarda Costeira atua na defesa marítima, combate ao contrabando e resgate marítimo. Protege mais de 1.500 km de litoral taiwanês." },
  { icon: "🎯", name: "Forças Especiais (Thunder Squad)", desc: "Unidade de elite antiterrorismo inspirada nas forças SWAT. Treinamento intensivo em resgate de reféns, combate urbano e resposta a ameaças de alto risco." },
  { icon: "🚔", name: "Polícia de Trânsito", desc: "Responsável pelo controle do tráfego em uma ilha com alta densidade urbana. Utiliza tecnologia avançada com câmeras de IA e sistemas inteligentes de multas." },
  { icon: "🔍", name: "Agência de Investigação Criminal", desc: "Equivalente ao FBI, investiga crimes organizados, fraudes cibernéticas e tráfico internacional. Reconhecida pela eficiência em crimes digitais." },
  { icon: "👮", name: "Polícia Comunitária", desc: "Taiwan é famosa pela segurança. Os policiais comunitários trabalham em postos de bairro (Paichusuo), ajudando com desde direções até pequenos conflitos." },
];

const PoliciaSection = () => (
  <SectionWrapper title="Forças Policiais" subtitle="Segurança pública e organização policial em Taiwan">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {divisions.map((d) => (
        <div key={d.name} className="glass-card p-6 hover-lift">
          <div className="text-4xl mb-4">{d.icon}</div>
          <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{d.name}</h3>
          <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
        </div>
      ))}
    </div>
    <div className="mt-10 glass-card p-6 md:p-8">
      <h3 className="text-xl font-bold text-foreground mb-3 font-sans">Treinamento e Organização</h3>
      <p className="text-muted-foreground leading-relaxed">
        Os policiais taiwaneses passam por rigoroso treinamento na Academia Central de Polícia, com duração de 4 anos para oficiais. O sistema policial é altamente informatizado, utilizando inteligência artificial para prevenção de crimes. Taiwan é considerada um dos países mais seguros da Ásia, com taxas de criminalidade extremamente baixas.
      </p>
    </div>
  </SectionWrapper>
);

export default PoliciaSection;
