import SectionWrapper from "./SectionWrapper";
import beefNoodle from "@/assets/beef-noodle.jpg";
import xiaoLongBao from "@/assets/xiao-long-bao.jpg";
import stinkyTofu from "@/assets/stinky-tofu.jpg";
import bubbleTea from "@/assets/bubble-tea.jpg";

const dishes = [
  {
    name: "Beef Noodle Soup",
    image: beefNoodle,
    ingredients: "Carne bovina, macarrão de trigo, caldo de osso, soja, anis estrelado, pimenta",
    description: "O prato nacional de Taiwan. Um caldo rico e encorpado com pedaços generosos de carne cozida lentamente e macarrão artesanal. Cada região tem sua variação.",
  },
  {
    name: "Xiao Long Bao",
    image: xiaoLongBao,
    ingredients: "Farinha de trigo, carne suína, gengibre, caldo gelatinizado, molho de soja",
    description: "Bolinhos cozidos no vapor com um caldo quente e saboroso dentro. A técnica de dobrar a massa é uma arte — os melhores têm 18 dobras perfeitas.",
  },
  {
    name: "Stinky Tofu",
    image: stinkyTofu,
    ingredients: "Tofu fermentado, molho picante, repolho em conserva, ervas frescas",
    description: "O cheiro pode assustar, mas o sabor é viciante! Frito por fora e macio por dentro, é a estrela dos mercados noturnos taiwaneses.",
  },
  {
    name: "Bubble Tea",
    image: bubbleTea,
    ingredients: "Chá preto ou verde, leite, pérolas de tapioca, açúcar mascavo",
    description: "Inventado em Taiwan nos anos 1980, conquistou o mundo inteiro. As pérolas de tapioca mastigáveis são a marca registrada desta bebida icônica.",
  },
];

const CulinariaSection = () => (
  <SectionWrapper id="culinaria" title="Culinária" subtitle="Sabores irresistíveis da gastronomia taiwanesa">
    <div className="grid md:grid-cols-2 gap-8">
      {dishes.map((d) => (
        <div key={d.name} className="glass-card overflow-hidden hover-lift group">
          <div className="h-56 overflow-hidden">
            <img
              src={d.image}
              alt={d.name}
              loading="lazy"
              width={640}
              height={640}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-foreground mb-2 font-sans">{d.name}</h3>
            <p className="text-sm text-primary font-medium mb-3">🧾 {d.ingredients}</p>
            <p className="text-muted-foreground leading-relaxed">{d.description}</p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default CulinariaSection;
