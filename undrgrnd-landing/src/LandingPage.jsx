import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Menu,
  ArrowRight,
  Star,
  Camera,
  Send,
  Share2,
  X,
  Check,
  Zap,
  Shield,
  Battery,
  Activity,
  Award,
  Droplets,
} from "lucide-react";

const capImages = [
  {
    src: "/Gemini_Generated_Image_3z30813z30813z30.jpg",
    alt: "Render do produto HALO - acabamento dourado",
    label: "Dourado",
    price: 699,
    oldPrice: 899,
    badge: "Edição Premium",
    accent: "#E5C100",
    tagline: "Para quem valoriza exclusividade e acabamento impecável",
    stock: "Últimas 32 unidades",
    shipping: "Envio em 24h",
    warranty: "3 anos",
    battery: "16h",
    waterResistance: "IP68",
    weight: "36g",
    features: [
      "Transdutor de condução óssea de alta fidelidade (Gen 3 Pro)",
      "Acabamento em titânio dourado escovado hipoalergênico",
      "Bateria de 16h (2h a mais que a versão padrão)",
      "Resistência IP68 (submersível até 3m por 30 min)",
      "Número de série gravado a laser + certificado de autenticidade",
    ],
    exclusiveKit: [
      "Estojo de carregamento em couro legítimo personalizável",
      "Gravação laser de nome ou iniciais no dispositivo",
      "Cabo de carregamento em tecido banhado a ouro 18k",
      "Garantia estendida de 3 anos + troca em 48h",
      "Acesso antecipado a novas funcionalidades (beta tester VIP)",
      "Atendimento dedicado WhatsApp 24h por gerente de conta",
      "2 pares extras de faixas intercambiáveis (caramelo + café)",
      "Convite para evento de lançamento anual HALO",
    ],
    idealFor: "Presente de luxo, colecionadores, profissionais de alto padrão",
  },
  {
    src: "/Gemini_Generated_Image_6tfbtf6tfbtf6tfb.jpg",
    alt: "Render do produto HALO - acabamento grafite",
    label: "Grafite",
    price: 349,
    oldPrice: 449,
    badge: "Sport Edition",
    accent: "#4B5563",
    tagline: "Feito para performance: corrida, bike, academia e aventura",
    stock: "Em estoque",
    shipping: "Envio em 48h",
    warranty: "2 anos",
    battery: "12h",
    waterResistance: "IP67",
    weight: "32g",
    features: [
      "Perfil esportivo com ajuste seguro anti-deslizante",
      "Tecido anti-suor, antimicrobiano e seca em 5 min",
      "Bateria de 12h dura um maratona + recuperação",
      "Resistência IP67 contra chuva forte e suor intenso",
      "Sensores de atividade (passos, calorias, FC) integrados",
    ],
    exclusiveKit: [
      "Braçadeira esportiva para celular com suporte HALO",
      "2 faixas extras respiráveis (verde neon + preto fosco)",
      "Boné esportivo HALO Dry-Fit exclusivo",
      "Assinatura 1 ano do HALO Coach (treinos de voz personalizados)",
      "Kit limpeza antimicrobiano premium (3 frascos + pincel)",
      "Pulseira de identificação para corrida (gravação inclusa)",
      "Garantia contra danos acidentais por 1 ano",
      "Comunidade privada de atletas HALO",
    ],
    idealFor: "Corredores, ciclistas, triatletas, amantes de atividades ao ar livre",
  },
  {
    src: "/Gemini_Generated_Image_44ltbz44ltbz44lt.jpg",
    alt: "Render do produto HALO - acabamento carmesim",
    label: "Carmesim",
    price: 429,
    oldPrice: 549,
    badge: "Urban Bold",
    accent: "#B91C1C",
    tagline: "Para quem vive a cidade: estilo, atitude e conexão total",
    stock: "Em estoque",
    shipping: "Envio em 24h",
    warranty: "2 anos",
    battery: "14h",
    waterResistance: "IP67",
    weight: "34g",
    features: [
      "Edição urbana com cor vibrante exclusiva e fios metálicos",
      "Tecido com 50% poliéster reciclado de garrafas PET",
      "Bateria de 14h (dia todo no trabalho + happy hour)",
      "Resistência IP67 para chuvas urbanas inesperadas",
      "Notificações LED laterais personalizáveis por cor (apps)",
    ],
    exclusiveKit: [
      "Case rígido estampado edição limitada Urban Art (colecionável)",
      "Fones TWS HALO Buds vermelhos para compartilhar áudio",
      "3 faixas intercambiáveis (vermelho, bordô, salmão matte)",
      "Skin pack autocolante (5 designs artísticos exclusivos)",
      "Assinatura 6 meses de app de navegação urbana HALO City",
      "Cabo Lightning + USB-C trançado em nylon (2 unidades)",
      "Adesivos e cartela de pins HALO Urban Culture",
      "Troca gratuita por nova cor em 12 meses (1x)",
    ],
    idealFor: "Criativos urbanos, influenciadores, jovens profissionais, amantes de cultura",
  },
  {
    src: "/Gemini_Generated_Image_73tvdz73tvdz73tv.jpg",
    alt: "Render do produto HALO - acabamento obsidiana",
    label: "Obsidiana",
    price: 549,
    oldPrice: 699,
    badge: "Stealth Pro",
    accent: "#111827",
    tagline: "Foco total: para executivos, devs e criadores de conteúdo",
    stock: "Em estoque",
    shipping: "Envio em 24h",
    warranty: "3 anos",
    battery: "18h",
    waterResistance: "IP69",
    weight: "35g",
    features: [
      "Acabamento fosco anti-digitais e anti-risco Cerakote",
      "Modo Foco Total com cancelamento ativo ambiental",
      "Bateria de 18h (um dia inteiro de trabalho intenso)",
      "Resistência IP69 (suporta jatos de alta pressão e vapor)",
      "Processador de áudio dedicado 2ª geração + 4 microfones beamforming",
    ],
    exclusiveKit: [
      "Estojo anti-roubo com rastreador GPS integrado e alarme",
      "Seguro HALO Protect contra perda e furto (1 ano incluso)",
      "Suporte VIP 24h por WhatsApp com engenheiros de produto",
      "Dock de carregamento sem fio rápido de mesa (20W Qi2)",
      "Cabo de fibra óptica USB-C blindado premium (2m)",
      "2 faixas em microfibra premium (preto fosco + grafite profundo)",
      "Modo Meeting Pro (atualização exclusiva): microfone direcional",
      "Gravação de reuniões em nuvem (1TB de espaço por 2 anos)",
    ],
    idealFor: "Executivos, freelancers, devs, criadores de conteúdo, home office",
  },
  {
    src: "/Gemini_Generated_Image_ksqc0sksqc0sksqc.jpg",
    alt: "Render do produto HALO - acabamento pérola",
    label: "Pérola",
    price: 449,
    oldPrice: 569,
    badge: "Elegance Line",
    accent: "#E5E7EB",
    tagline: "Sofisticação discreta: do escritório ao jantar",
    stock: "Em estoque",
    shipping: "Envio em 48h",
    warranty: "2 anos",
    battery: "13h",
    waterResistance: "IP66",
    weight: "33g",
    features: [
      "Acabamento perolado com brilho sutil e elegante",
      "Design minimalista perfeito para ambientes corporativos",
      "Bateria de 13h (reuniões de dia + eventos sociais)",
      "Resistência IP66 contra respingos e jatos leves",
      "Modo Reunião: microfone direcional + filtro de ruído ambiente",
    ],
    exclusiveKit: [
      "Bolsa de couro sintético para viagem (estampa padronagem exclusiva)",
      "3 faixas intercambiáveis elegantes (pérola, nude, champagne)",
      "Cabo magnético de carregamento prateado (ed. Elegance)",
      "Organizador de cabos + acessórios em veludo (cor pérola)",
      "Assinatura 1 ano do app HALO Focus (meditação guiada + foco)",
      "Pano de polimento microfibra premium (anti-risco)",
      "Cartão de garantia metalizado personalizado",
      "Troca de faixas gratuitas anual por 2 anos",
    ],
    idealFor: "Advogados, consultores, gestoras, arquitetos, público corporativo feminino",
  },
  {
    src: "/Gemini_Generated_Image_uulx61uulx61uulx.jpg",
    alt: "Render do produto HALO - acabamento índigo",
    label: "Índigo",
    price: 479,
    oldPrice: 599,
    badge: "Night Runner",
    accent: "#3730A3",
    tagline: "Segurança em trilhas e corridas noturnas: veja e seja visto",
    stock: "Em estoque",
    shipping: "Envio em 24h",
    warranty: "2 anos",
    battery: "15h",
    waterResistance: "IP67",
    weight: "35g",
    features: [
      "Faixa reflexiva 360° visível a 300m de distância",
      "Modo Segurança: 4 luzes de presença LED (180 lumens)",
      "Bateria de 15h para trilhas longas sem tomada por perto",
      "Resistência IP67 contra qualquer clima na trail",
      "GPS integrado para navegação off-grid sem celular",
    ],
    exclusiveKit: [
      "Lanterna de cabeça LED modular HALO Trail (se encaixa no headband)",
      "Colete refletivo ventilado HALO Night (tamanho inclusível)",
      "Kit primeiros socorros mini trail (curativos, tesoura, manta térmica)",
      "Seguro HALO Trail: busca e resgate (1 ano incluso)",
      "Mapas offline Brasil inteiro + atualizações de trilhas (vitalícias)",
      "2 faixas resistentes extra (azul-marinho + azul neon refletivo)",
      "Botão SOS físico: compartilha localização em tempo real para 5 contatos",
      "Comunidade de trail runners HALO + desconto em eventos parceiros",
    ],
    idealFor: "Corredores noturnos, trail runners, caminhantes, aventureiros off-road",
  },
];

const howItWorksImage = "/Gemini_Generated_Image_4dgkp94dgkp94dgk.jpg";

const customerUseImages = [
  {
    src: "/customers/Gemini_Generated_Image_zfzwa0zfzwa0zfzw.jpg",
    alt: "Usuário usando o HALO durante o deslocamento diário",
    label: "Uso diário",
  },
  {
    src: "/customers/Gemini_Generated_Image_sowq03sowq03sowq.jpg",
    alt: "Usuário usando o HALO enquanto corre ao ar livre",
    label: "Esportivo",
  },
  {
    src: "/customers/Gemini_Generated_Image_nq34lpnq34lpnq34.jpg",
    alt: "Usuário usando o HALO durante uma sessão de treino",
    label: "Treino",
  },
  {
    src: "/customers/Gemini_Generated_Image_91gimi91gimi91gi.jpg",
    alt: "Usuário usando o HALO enquanto pedala",
    label: "Ciclismo",
  },
  {
    src: "/customers/Gemini_Generated_Image_6fjlo6fjlo6fjlo6.jpg",
    alt: "Usuário usando o HALO em um passeio pela cidade",
    label: "Relax",
  },
  {
    src: "/customers/Gemini_Generated_Image_4ok8pa4ok8pa4ok8.jpg",
    alt: "Usuário usando o HALO durante uma pausa para café",
    label: "Caminhada",
  },
];

/* Main export */
export default function LandingPage() {
  const [view, setView] = useState("landing"); // "landing" | "catalog" | "product"
  const [selectedProduct, setSelectedProduct] = useState(null); // index do capImages
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollTopCatalog, setScrollTopCatalog] = useState(0);

  // Injeta Google Fonts (Anton para títulos, Inter para corpo)
  useEffect(() => {
    const id = "undrgrnd-fonts";
    if (!document.getElementById(id)) {
      const link = document.createElement("link");
      link.id = id;
      link.rel = "stylesheet";
      link.href =
        "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;600;700&display=swap";
      document.head.appendChild(link);

      // Pequeno bloco de estilos utilitários e overlay de grão
      const style = document.createElement("style");
      style.id = "undrgrnd-styles";
      style.innerHTML = `
        .font-display { font-family: 'Anton', Arial, sans-serif; letter-spacing: -0.02em; }
        .font-ui { font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        /* overlay sutil de ruído */
        .grain-overlay::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.01) 1px, transparent 1px);
          background-size: 3px 3px;
          mix-blend-mode: overlay;
          opacity: 0.12;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // Gerenciar scroll e navegação entre views
  useEffect(() => {
    if (view === "catalog") {
      setScrollTop(window.scrollY);
      window.scrollTo({ top: scrollTopCatalog || 0, behavior: "auto" });
    } else if (view === "product") {
      setScrollTopCatalog(window.scrollY);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: scrollTop, behavior: "auto" });
    }
  }, [view]);

  const openProduct = (index) => {
    setSelectedProduct(index);
    setView("product");
  };

  if (view === "product" && selectedProduct !== null) {
    return (
      <ProductDetailPage
        productIndex={selectedProduct}
        onBack={() => setView("catalog")}
        onBackHome={() => setView("landing")}
        onSelectProduct={openProduct}
      />
    );
  }

  if (view === "catalog") {
    return (
      <CatalogPage
        onBack={() => setView("landing")}
        onOpenProduct={openProduct}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 relative overflow-x-hidden">
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />

        <main className="mt-8 md:mt-12 lg:mt-16">
          {/* Grid: mobile empilha, md separa hero + sidebar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="md:col-span-2">
              <Hero />
            </section>

            <aside className="md:col-span-1 space-y-6">
              <Sidebar />
            </aside>
          </div>

          <section className="mt-8">
            <BottomRow onOpenCatalog={() => setView("catalog")} />
          </section>

          <section id="learn" className="mt-10">
            <BenefitsSection />
          </section>

          <section id="specs" className="mt-10">
            <HowItWorksSection />
          </section>

          <section id="offer" className="mt-10">
            <OfferSection />
          </section>

          <section id="faq" className="mt-10">
            <FaqSection />
          </section>

          <section className="mt-10">
            <CapsGallery />
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}

/* =========================
   NAVBAR
   ========================= */
function Navbar() {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 rounded-md text-neutral-200 hover:bg-white/5"
          aria-label="Abrir menu"
        >
          <Menu size={20} />
        </button>

        <a
          href="#"
          className="text-white font-display text-2xl md:text-3xl tracking-tight"
          aria-label="Página inicial HALO"
        >
          HALO
        </a>
      </div>

      <div className="hidden md:flex items-center gap-4 flex-1 max-w-lg mx-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <input
            id="search"
            type="search"
            placeholder="Buscar recursos, casos de uso, demos..."
            className="w-full bg-[#121212] text-sm text-neutral-200 placeholder:text-neutral-500 pl-10 pr-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4FF00]/30"
            aria-label="Pesquisar conteúdo"
          />
        </div>
      </div>

      <nav className="flex items-center gap-3">
        <button
          aria-label="Favoritos"
          className="p-2 rounded-full hover:bg-white/5 text-neutral-200"
        >
          <Heart size={18} />
        </button>
        <button
          aria-label="Carrinho"
          className="p-2 rounded-full hover:bg-white/5 text-neutral-200"
        >
          <ShoppingCart size={18} />
        </button>
        <button
          aria-label="Conta"
          className="p-1 rounded-full hover:bg-white/5"
        >
          <User size={20} />
        </button>
      </nav>
    </header>
  );
}

/* =========================
   HERO
   ========================= */
function Hero() {
  const float = {
    animate: { y: [0, -10, 0], rotate: [0, 1, 0], scale: [1, 1.02, 1] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <section
      className="relative rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#0A0A0A] to-[#070707] shadow-xl overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Pontos decorativos */}
      <div className="absolute right-6 top-6 hidden md:block" aria-hidden="true">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
          <circle cx="3" cy="3" r="3" fill="#D4FF00" />
          <circle cx="12" cy="3" r="3" fill="#FF6A00" />
          <circle cx="21" cy="3" r="3" fill="#FF2DAA" />
          <circle cx="3" cy="12" r="3" fill="#7C3AED" />
          <circle cx="12" cy="12" r="3" fill="#D4FF00" />
          <circle cx="21" cy="12" r="3" fill="#FF6A00" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Conteúdo esquerdo */}
        <div>
          <span className="inline-flex items-center gap-2 bg-white/6 text-sm text-[#D4FF00] px-3 py-1 rounded-full font-ui">
            <span className="text-xs">⚡</span>
            <span>Protótipo</span>
          </span>

          <h1 id="hero-heading" className="mt-5 text-4xl sm:text-5xl lg:text-6xl text-white font-display leading-tight">
            Mantenha a cabeça
            <br />
            no mundo.
          </h1>

          <div className="mt-4 flex items-start gap-4">
            <div className="text-[#D4FF00] font-display text-lg">01</div>
            <p className="text-neutral-300 font-ui text-sm sm:text-base max-w-lg">
              HALO é uma headband de áudio discreta — sem câmera, sem HUD — projetada para entregar navegação por voz e notificações enquanto você corre, pedala ou se move pela cidade.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#learn"
              className="inline-flex items-center gap-3 bg-[#D4FF00] text-[#0A0A0A] font-ui font-semibold rounded-full px-5 py-3 shadow-md hover:scale-[1.02] transition-transform"
            >
              Saiba mais sobre o HALO
              <ArrowRight size={16} />
            </a>

            <a
              href="#specs"
              className="inline-flex items-center gap-2 px-4 py-3 text-sm text-neutral-300 hover:text-white"
            >
              Ver especificações <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Ícones sociais */}
          <div className="mt-6 flex items-center gap-3">
            <a href="#instagram" aria-label="Instagram" className="p-2 rounded-md hover:bg-white/5">
              <Camera size={18} />
            </a>
            <a href="#twitter" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/5">
              <Send size={18} />
            </a>
            <a href="#facebook" aria-label="Facebook" className="p-2 rounded-md hover:bg-white/5">
              <Share2 size={18} />
            </a>
          </div>
        </div>

        {/* Showcase do produto */}
        <div className="relative flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* imagem principal (mockup) */}
            <motion.img
              src={capImages[0].src}
              alt={capImages[0].alt}
              className="w-full aspect-[1/1] object-contain rounded-3xl shadow-2xl bg-transparent"
              style={{ objectPosition: "50% 50%" }}
              whileHover={{ scale: 1.03 }}
              {...float}
            />

            {/* brilho sutil */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-3xl mix-blend-screen blur-[40px] opacity-40"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(212,255,0,0.12), transparent 40%), radial-gradient(closest-side, rgba(255,106,0,0.06), transparent 60%)",
              }}
            />
          </motion.div>

          {/* etiqueta pequena */}
          <div className="absolute left-4 bottom-4 bg-black/60 px-3 py-1 rounded-full text-xs text-neutral-200 font-semibold">
            HALO Proto
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   SIDEBAR
   ========================= */
function Sidebar() {
  return (
    <div className="space-y-4">
      {/* Acabamentos */}
      <div className="bg-[#0E0E0E] p-4 rounded-2xl shadow-sm">
        <h3 className="text-sm text-neutral-300 font-ui uppercase tracking-wider">Acabamentos disponíveis</h3>
        <div className="mt-4 flex items-center gap-3">
          {capImages.slice(0, 6).map((cap, i) => (
            <img key={i} src={cap.src} alt={cap.alt} className="w-10 h-10 rounded-full object-cover border-2 border-white/6 shadow-sm" />
          ))}
        </div>
      </div>

      {/* Cartão de protótipo */}
      <motion.a
        href="#drop"
        className="block bg-gradient-to-br from-[#121212] to-[#0b0b0b] rounded-2xl p-4 shadow-lg hover:scale-[1.02] transition-transform"
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-3">
          <img src={capImages[1].src} alt={capImages[1].alt} className="w-20 h-20 rounded-lg object-cover" />
          <div>
            <p className="text-sm text-neutral-300">Protótipo</p>
            <h4 className="text-white font-ui font-semibold">HALO v0.7</h4>
            <span className="mt-1 inline-flex items-center text-xs text-neutral-400">
              Ver detalhes <ArrowRight size={14} className="ml-2" />
            </span>
          </div>
        </div>
      </motion.a>

      {/* Cartão grande - uso / lifestyle */}
      <motion.div
        className="relative rounded-3xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={capImages[5].src} alt={capImages[5].alt} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
          <div>
            <h5 className="text-white font-display text-lg">Edição limitada</h5>
            <p className="text-neutral-300 text-sm">Lote de protótipos — acesso antecipado</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================
   BOTTOM ROW
   ========================= */
function BottomRow({ onOpenCatalog }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MoreProductsCard onOpenCatalog={onOpenCatalog} />
      <SocialProofCard />
      <TrendingCard />
    </div>
  );
}

function BenefitsSection() {
  const items = [
    {
      title: "Navegação discreta",
      description: "Direções por voz sem a necessidade de olhar para o celular.",
    },
    {
      title: "Sem câmera, sem tela",
      description: "Menos distração e mais privacidade no dia a dia.",
    },
    {
      title: "Projetado para movimento",
      description: "Conforto pensado para corrida, ciclismo e caminhadas urbanas.",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/8 bg-[#0B0B0B] p-6 sm:p-8">
      <h3 className="text-white font-display text-3xl">Benefícios</h3>
      <p className="mt-2 text-neutral-400">Por que o HALO pode melhorar a mobilidade urbana sem sobrecarregar sua atenção.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl bg-[#121212] p-4 border border-white/5">
            <h4 className="text-white font-semibold">{item.title}</h4>
            <p className="mt-2 text-sm text-neutral-400">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function HowItWorksSection() {
  const steps = [
    "Conecte o HALO ao seu celular via Bluetooth.",
    "Escolha perfis de navegação e notificações no aplicativo.",
    "Receba orientação por voz e alertas sutis enquanto se move.",
  ];

  return (
    <div className="rounded-3xl border border-white/8 bg-[#0B0B0B] p-6 sm:p-8">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-6">
        <div>
          <h3 className="text-white font-display text-3xl">Como funciona</h3>
          <p className="mt-2 text-neutral-400">Um fluxo simples pensado para configuração rápida e uso diário.</p>
        </div>
      </div>

      {/* Diagrama explicativo */}
      <motion.div
        className="rounded-2xl overflow-hidden border border-white/5 mb-8 bg-white"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={howItWorksImage}
          alt="Diagrama explicando o funcionamento do HALO: condução óssea, faixa de tecido de alta performance, ouvido livre para sons do ambiente"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Explicação das tecnologias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="rounded-2xl bg-[#121212] p-4 border border-white/5">
          <div className="w-10 h-10 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] flex items-center justify-center mb-3">
            <Zap size={20} />
          </div>
          <h4 className="text-white font-semibold">Transdutor de condução óssea</h4>
          <p className="mt-2 text-sm text-neutral-400">
            O som vibra diretamente através dos ossos do crânio, sem sobrepor a orelha. Isso libera seu canal auditivo para captar sons do ambiente enquanto você ouve música ou navegação.
          </p>
        </div>
        <div className="rounded-2xl bg-[#121212] p-4 border border-white/5">
          <div className="w-10 h-10 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] flex items-center justify-center mb-3">
            <Shield size={20} />
          </div>
          <h4 className="text-white font-semibold">Tecido de alta performance</h4>
          <p className="mt-2 text-sm text-neutral-400">
            Unidade de textura mista desenvolvida para conforto prolongado e áudio límpido. Resistente ao suor e ajuste ergonômico que acompanha seus movimentos.
          </p>
        </div>
        <div className="rounded-2xl bg-[#121212] p-4 border border-white/5">
          <div className="w-10 h-10 rounded-xl bg-[#D4FF00]/10 text-[#D4FF00] flex items-center justify-center mb-3">
            <Activity size={20} />
          </div>
          <h4 className="text-white font-semibold">Ouvido sempre livre</h4>
          <p className="mt-2 text-sm text-neutral-400">
            Segurança em primeiro lugar: sons do ambiente continuam entrando. Você ouve o trânsito, conversas e alertas sem perder a conexão com o seu conteúdo.
          </p>
        </div>
      </div>

      <ol className="space-y-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-3 rounded-xl bg-[#121212] p-4 border border-white/5">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#D4FF00] text-[#0A0A0A] text-sm font-bold">
              {index + 1}
            </span>
            <span className="text-neutral-200 text-sm sm:text-base">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function OfferSection() {
  const [joined, setJoined] = useState(false);

  return (
    <div className="rounded-3xl border border-[#D4FF00]/30 bg-gradient-to-br from-[#111111] to-[#090909] p-6 sm:p-8">
      <p className="text-xs uppercase tracking-[0.25em] text-[#D4FF00]">Oferta de lançamento</p>
      <h3 className="mt-2 text-white font-display text-3xl">Acesso de Fundadores HALO</h3>
      <p className="mt-2 text-neutral-300">Lote inicial de protótipos com suporte de onboarding e atualizações do roadmap.</p>

      <div className="mt-5 flex flex-wrap items-end gap-4">
        <div>
          <div className="text-neutral-500 line-through">R$ 499</div>
          <div className="text-white text-4xl font-display">R$ 349</div>
        </div>
        <div className="text-sm text-neutral-400">Limitado aos primeiros 200 inscritos</div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setJoined(true)}
          className="inline-flex items-center gap-2 rounded-full bg-[#D4FF00] px-5 py-3 text-[#0A0A0A] font-semibold hover:scale-[1.01] transition-transform"
        >
          Entrar na lista de espera
          <ArrowRight size={16} />
        </button>
        <a href="#faq" className="inline-flex items-center px-4 py-3 text-sm text-neutral-300 hover:text-white">
          Ler FAQ
        </a>
      </div>

      {joined ? (
        <p className="mt-4 text-sm text-emerald-300">
          Sucesso! Seu interesse foi registrado (CTA simulado para o protótipo).
        </p>
      ) : null}
    </div>
  );
}

function FaqSection() {
  const faqItems = [
    {
      question: "O HALO grava vídeos?",
      answer: "Não. HALO é um wearable focado em áudio e não inclui câmera neste conceito.",
    },
    {
      question: "Isso está conectado a um backend?",
      answer: "Não. Este protótipo é totalmente client-side com conteúdo simulado para demonstração.",
    },
    {
      question: "Quando começam os envios?",
      answer: "Este é um protótipo fictício. Datas e fluxo de entrega são simulados.",
    },
  ];

  return (
    <div className="rounded-3xl border border-white/8 bg-[#0B0B0B] p-6 sm:p-8">
      <h3 className="text-white font-display text-3xl">FAQ</h3>
      <div className="mt-5 space-y-3">
        {faqItems.map((item) => (
          <details key={item.question} className="rounded-xl bg-[#121212] p-4 border border-white/5">
            <summary className="cursor-pointer text-white font-medium">{item.question}</summary>
            <p className="mt-2 text-sm text-neutral-400">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

function MoreProductsCard({ onOpenCatalog }) {
  return (
    <motion.button
      type="button"
      onClick={onOpenCatalog}
      className="block w-full text-left rounded-2xl bg-[#0E0E0E] p-5 shadow hover:scale-[1.01] hover:bg-[#111111] transition-all cursor-pointer"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-label="Ver mais protótipos"
    >
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-ui font-semibold text-lg">Variações do protótipo</h4>
          <p className="text-neutral-400 text-sm mt-1">Mostrando 6 mockups visuais</p>
        </div>

        <div className="w-24 grid grid-cols-3 gap-1">
          {/* miniaturas */}
          {capImages.slice(0, 6).map((cap, i) => (
            <img key={i} src={cap.src} alt={cap.alt} className="w-12 h-12 object-cover rounded-md" />
          ))}
        </div>
      </div>

      <div className="mt-4">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white/6 rounded-full text-neutral-200 text-sm hover:border-[#D4FF00]/50 hover:text-[#D4FF00] transition-colors">
          Ver catálogo completo <ArrowRight size={14} />
        </span>
      </div>
    </motion.button>
  );
}

function SocialProofCard() {
  return (
    <motion.div
      className="rounded-2xl bg-gradient-to-br from-[#0B0B0B] to-[#0D0D0D] p-5 shadow-lg"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h4 className="text-white font-ui font-semibold">Testado em campo</h4>
      <p className="text-neutral-400 text-sm mt-1">Validado por usuários em testes urbanos</p>

      <div className="mt-4 flex items-center">
        <div className="flex -space-x-3">
          {customerUseImages.slice(0, 4).map((customer, i) => (
            <img
              key={customer.src}
              src={customer.src}
              alt={customer.alt}
              className="w-10 h-10 rounded-full object-cover border-2 border-black"
              style={{ zIndex: 4 - i }}
              title={customer.label}
            />
          ))}
        </div>

        <div className="ml-4">
          <div className="text-white font-bold text-lg">50k+</div>
          <div className="text-neutral-400 text-sm">Usuários ativos</div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <Star className="text-yellow-400" />
        <div className="text-sm text-neutral-300">4.9 avaliação média</div>
      </div>
    </motion.div>
  );
}

function TrendingCard() {
  return (
    <motion.a
      href="#trending"
      className="relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      aria-label="Em uso real"
    >
      <img src={capImages[2].src} alt={capImages[2].alt} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="text-white font-display text-lg">Em uso real</h5>
            <p className="text-neutral-300 text-sm">Deslocamentos e treinos diários</p>
          </div>
          <div className="bg-[#D4FF00] text-[#0A0A0A] px-3 py-1 rounded-full font-semibold text-sm">DEMO</div>
        </div>
      </div>
    </motion.a>
  );
}

/* =========================
   FOOTER
   ========================= */
function Footer() {
  return (
    <footer className="mt-12 pb-12">
      <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-neutral-400">© {new Date().getFullYear()} HALO. Todos os direitos reservados.</div>

        <div className="flex items-center gap-3">
          <a href="#terms" className="text-neutral-400 text-sm hover:text-white">Termos</a>
          <a href="#privacy" className="text-neutral-400 text-sm hover:text-white">Privacidade</a>
          <a href="#support" className="text-neutral-400 text-sm hover:text-white">Suporte</a>
        </div>
      </div>
    </footer>
  );
}

function CapsGallery() {
  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">Estilo de vida</p>
          <h3 className="mt-2 text-white font-display text-2xl">Pessoas usando HALO</h3>
        </div>
        <p className="text-sm text-neutral-400 max-w-md text-right">
          Momentos diários realistas onde o HALO faz parte do movimento, foco e vida urbana.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {customerUseImages.map((customer) => (
          <motion.figure
            key={customer.src}
            className="relative overflow-hidden rounded-3xl bg-[#0B0B0B] border border-white/5 shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={customer.src} alt={customer.alt} className="h-72 w-full object-cover" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="text-white font-semibold">{customer.label}</div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}

/* =========================
   CATALOG PAGE (COMPACT GRID)
   ========================= */
function CatalogPage({ onBack, onOpenProduct }) {
  const [cart, setCart] = useState([]);
  const totalCart = cart.reduce((sum, idx) => sum + capImages[idx].price, 0);
  const toggleCart = (index) => {
    setCart((prev) => {
      if (prev.includes(index)) return prev.filter((i) => i !== index);
      return [...prev, index];
    });
  };
  const isInCart = (index) => cart.includes(index);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 relative">
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-2 p-2 -ml-2 rounded-full hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                aria-label="Voltar para a página inicial"
              >
                <ArrowRight size={18} className="rotate-180" />
                <span className="hidden sm:inline text-sm">Voltar</span>
              </button>
              <a href="#" className="text-white font-display text-2xl md:text-3xl tracking-tight">
                HALO
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              {cart.length > 0 && (
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-[#D4FF00]/10 border border-[#D4FF00]/20 rounded-full">
                  <ShoppingCart size={14} className="text-[#D4FF00]" />
                  <span className="text-[#D4FF00] font-semibold text-sm">
                    {cart.length} • R$ {totalCart}
                  </span>
                </div>
              )}
              <button aria-label="Busca" className="p-2 rounded-full hover:bg-white/5 text-neutral-300">
                <Search size={18} />
              </button>
              <button aria-label="Carrinho" className="relative p-2 rounded-full hover:bg-white/5 text-neutral-200">
                <ShoppingCart size={18} />
                {cart.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-bold flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button aria-label="Conta" className="p-1 rounded-full hover:bg-white/5">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* TÍTULO SIMPLES (estilo Beats) */}
        <section className="mt-10 mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500 mb-3">Catálogo HALO</p>
          <h1 className="font-display text-white text-4xl sm:text-5xl md:text-6xl leading-tight">
            Produtos em destaque
          </h1>
          <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
            Seis variações exclusivas. Cada uma com um propósito, acessórios e diferenciais únicos.
            Clique em um produto para ver todos os detalhes.
          </p>
        </section>

        {/* TABS / CATEGORIAS */}
        <section className="mb-6 -mx-4 sm:mx-0 overflow-x-auto">
          <div className="flex items-center gap-6 md:justify-center px-4 sm:px-0 border-b border-white/5">
            {[
              { label: "Todos", active: true },
              { label: "Edição Premium" },
              { label: "Sport Edition" },
              { label: "Urban Bold" },
              { label: "Stealth Pro" },
              { label: "Elegance Line" },
              { label: "Night Runner" },
            ].map((tab) => (
              <button
                key={tab.label}
                type="button"
                className={`pb-4 text-sm whitespace-nowrap font-medium relative transition-colors ${
                  tab.active ? "text-white" : "text-neutral-500 hover:text-neutral-200"
                }`}
              >
                {tab.label}
                {tab.active && (
                  <span className="absolute -bottom-px left-0 right-0 h-0.5 bg-white" />
                )}
              </button>
            ))}
          </div>
        </section>

        {/* GRID DE PRODUTOS COMPACTO */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {capImages.map((product, i) => (
              <motion.article
                key={i}
                className={`group relative rounded-2xl overflow-hidden bg-[#101010] border border-white/5 hover:border-white/15 hover:shadow-2xl hover:shadow-black/40 transition-all cursor-pointer flex flex-col ${
                  isInCart(i) ? "ring-1 ring-[#D4FF00]/30" : ""
                }`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                onClick={() => onOpenProduct(i)}
                role="link"
                aria-label={`Ver detalhes do HALO ${product.label}`}
              >
                {/* Badge mais vendido / edição */}
                <div
                  className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[11px] font-semibold backdrop-blur-sm"
                  style={{
                    backgroundColor: `${product.accent}55`,
                    color: ["Pérola", "Dourado"].includes(product.label) ? product.accent : "#fff",
                  }}
                >
                  {i === 0 ? "Mais vendido" : product.badge}
                </div>

                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); }}
                  aria-label="Favoritar"
                  className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/30 backdrop-blur-sm text-neutral-300 hover:text-rose-400 hover:bg-black/50 transition-all"
                >
                  <Heart size={14} />
                </button>

                {/* IMAGEM */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#0d0d0d] via-[#151515] to-[#1a1a1a] flex items-center justify-center p-4 sm:p-6">
                  <motion.img
                    src={product.src}
                    alt={product.alt}
                    className="w-[75%] h-auto object-contain relative z-[1] mx-auto transition-transform"
                    whileHover={{ scale: 1.08, y: -6 }}
                    transition={{ duration: 0.45 }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none opacity-60"
                    style={{
                      background: `radial-gradient(ellipse at 50% 95%, ${product.accent}55 0%, transparent 60%)`,
                    }}
                  />
                </div>

                {/* INFO */}
                <div className="p-3 sm:p-4 flex flex-col gap-2 mt-auto border-t border-white/5 bg-[#0d0d0d]">
                  <h3 className="text-white font-ui font-semibold text-sm sm:text-base">
                    HALO {product.label}
                  </h3>
                  <p className="text-neutral-500 text-[11px] sm:text-xs line-clamp-1">
                    {product.tagline}
                  </p>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-white font-display text-lg sm:text-xl">
                      R$ {product.price}
                    </span>
                    <span className="text-neutral-600 text-[10px] line-through">
                      R$ {product.oldPrice}
                    </span>
                  </div>

                  {/* Botão inline (não abre o produto, só add carrinho) */}
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); toggleCart(i); }}
                    className={`mt-1 w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isInCart(i)
                        ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                        : "bg-[#D4FF00] text-[#0A0A0A] hover:brightness-110"
                    }`}
                  >
                    {isInCart(i) ? (
                      <><Check size={12} /> Adicionado</>
                    ) : (
                      <><ShoppingCart size={12} /> Adicionar</>
                    )}
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Benefícios rápidos (estilo benefícios do produto) */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              icon: <Zap size={20} />,
              title: "Frete rápido e grátis",
              desc: "Aproveite o frete rápido e gratuito para todos os produtos em estoque no Brasil.",
            },
            {
              icon: <Shield size={20} />,
              title: "Devoluções fáceis",
              desc: "Produtos qualificados podem ser devolvidos para a HALO em até 30 dias após o recebimento.",
            },
            {
              icon: <Award size={20} />,
              title: "Garantia HALO Plus",
              desc: "Todas as variações contam com garantia estendida e suporte técnico oficial direto da marca.",
            },
          ].map((b) => (
            <div key={b.title} className="rounded-2xl bg-[#0E0E0E] border border-white/5 p-5 sm:p-6">
              <div className="text-[#D4FF00] mb-3">{b.icon}</div>
              <h4 className="text-white font-semibold text-base">{b.title}</h4>
              <p className="text-neutral-400 text-sm mt-2 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

/* =========================
   PRODUCT DETAIL PAGE (PDP)
   ========================= */
function ProductDetailPage({ productIndex, onBack, onBackHome, onSelectProduct }) {
  const product = capImages[productIndex];
  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const [cart, setCart] = useState([]);
  const isInCart = cart.includes(productIndex);
  const toggleCart = () => {
    setCart((prev) =>
      prev.includes(productIndex)
        ? prev.filter((i) => i !== productIndex)
        : [...prev, productIndex]
    );
  };

  const featureIcons = (feature) => {
    const lower = feature.toLowerCase();
    if (lower.includes("bateria")) return <Battery size={15} />;
    if (lower.includes("resistênc") || lower.includes("ip") || lower.includes("água")) return <Droplets size={15} />;
    if (lower.includes("premium") || lower.includes("edição") || lower.includes("certificado") || lower.includes("convite")) return <Award size={15} />;
    return <Check size={15} />;
  };

  // Outros produtos (para a seção "você também pode gostar")
  const related = capImages
    .map((_, idx) => idx)
    .filter((i) => i !== productIndex);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-neutral-100 relative">
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* HEADER */}
        <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onBack}
                className="flex items-center gap-2 p-2 -ml-2 rounded-full hover:bg-white/5 text-neutral-300 hover:text-white transition-colors"
                aria-label="Voltar para o catálogo"
              >
                <ArrowRight size={18} className="rotate-180" />
                <span className="hidden sm:inline text-sm">Voltar ao catálogo</span>
              </button>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); onBackHome(); }}
                className="text-white font-display text-2xl md:text-3xl tracking-tight"
              >
                HALO
              </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <button aria-label="Busca" className="p-2 rounded-full hover:bg-white/5 text-neutral-300">
                <Search size={18} />
              </button>
              <button aria-label="Favoritos" className="p-2 rounded-full hover:bg-white/5 text-neutral-300">
                <Heart size={18} />
              </button>
              <button aria-label="Carrinho" className="relative p-2 rounded-full hover:bg-white/5 text-neutral-200">
                <ShoppingCart size={18} />
                {cart.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-[#D4FF00] text-[#0A0A0A] text-[10px] font-bold flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <button aria-label="Conta" className="p-1 rounded-full hover:bg-white/5">
                <User size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="mt-6 text-xs sm:text-sm text-neutral-500 flex items-center gap-2 flex-wrap">
          <button onClick={onBackHome} className="hover:text-neutral-200 transition-colors">Home</button>
          <span>/</span>
          <button onClick={onBack} className="hover:text-neutral-200 transition-colors">Catálogo</button>
          <span>/</span>
          <span className="text-neutral-300">{product.badge}</span>
          <span>/</span>
          <span className="text-white font-medium">HALO {product.label}</span>
        </nav>

        {/* LAYOUT PDP - IMAGEM ESQUERDA / INFORMAÇÕES DIREITA */}
        <section className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
          {/* IMAGEM GRANDE (2/5) */}
          <div className="lg:col-span-2">
            <div
              className="sticky top-24 rounded-3xl overflow-hidden border border-white/5 bg-gradient-to-br from-[#0b0b0b] via-[#131313] to-[#1a1a1a] aspect-square flex items-center justify-center p-8 sm:p-12 relative"
            >
              <div
                className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md"
                style={{
                  backgroundColor: `${product.accent}55`,
                  color: ["Pérola", "Dourado"].includes(product.label) ? product.accent : "#fff",
                  border: `1px solid ${product.accent}77`,
                }}
              >
                {product.badge}
              </div>

              <motion.img
                src={product.src}
                alt={product.alt}
                className="max-w-[80%] max-h-[80%] object-contain relative z-[1] mx-auto"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{
                  background: `radial-gradient(ellipse at 50% 90%, ${product.accent}55 0%, transparent 60%)`,
                }}
              />

              {/* Ícones de ações sobrepostos (estilo detalhe) */}
              <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-neutral-200">
                  <Zap size={11} className="text-[#D4FF00]" />
                  {product.shipping}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] text-neutral-200">
                  <Award size={11} className="text-[#D4FF00]" />
                  Garantia {product.warranty}
                </span>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md text-[11px] font-medium ${
                  product.stock.includes("Últimas")
                    ? "bg-rose-500/15 text-rose-400"
                    : "bg-emerald-500/15 text-emerald-400"
                }`}>
                  {product.stock.includes("Últimas") ? "🔥" : "✓"} {product.stock}
                </span>
              </div>
            </div>
          </div>

          {/* INFORMAÇÕES (3/5) */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Título + tagline */}
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-neutral-500 text-xs ml-1">4.9 • (2.437 avaliações)</span>
              </div>
              <h1 className="mt-3 text-white font-display text-4xl sm:text-5xl leading-tight">
                HALO {product.label}
              </h1>
              <p className="mt-2 text-neutral-400 text-base sm:text-lg">{product.tagline}</p>
            </div>

            {/* PREÇO */}
            <div className="mt-6 pb-6 border-b border-white/5">
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="text-neutral-500 line-through text-lg">de R$ {product.oldPrice}</span>
                <span className="text-white font-display text-4xl sm:text-5xl">por R$ {product.price}</span>
                <span className="text-[#D4FF00] text-xs font-bold px-2.5 py-1 bg-[#D4FF00]/10 rounded-full">
                  -{discount}% OFF
                </span>
              </div>
              <p className="text-neutral-500 text-sm mt-2">
                ou 12x de R$ {(product.price / 12).toFixed(2)} sem juros no cartão • PIX à vista: desconto extra
              </p>
            </div>

            {/* COR (SEM SELETOR - APENAS MOSTRA) */}
            <div className="mt-6 pb-6 border-b border-white/5">
              <div className="text-sm text-neutral-400 mb-2">
                Cor: <span className="text-white font-medium">{product.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="w-10 h-10 rounded-full ring-2 ring-emerald-400 ring-offset-2 ring-offset-[#0A0A0A] shadow-inner shadow-black/50"
                  style={{ backgroundColor: product.accent }}
                  title={`Cor ${product.label}`}
                />
              </div>
            </div>

            {/* CTA COLOCAR NA SACOLA (estilo Beats) */}
            <div className="mt-6 pb-6 border-b border-white/5">
              <button
                type="button"
                onClick={toggleCart}
                className={`w-full py-4 rounded-2xl font-bold text-base transition-all ${
                  isInCart
                    ? "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30"
                    : "bg-white text-[#0A0A0A] hover:brightness-95 shadow-2xl shadow-black/40"
                }`}
              >
                {isInCart ? (
                  <span className="inline-flex items-center gap-2">
                    <Check size={18} /> PRODUTO NA SACOLA
                  </span>
                ) : (
                  "COLOCAR NA SACOLA"
                )}
              </button>

              <div className="mt-5 grid grid-cols-1 gap-3">
                {[
                  {
                    icon: <Zap size={18} />,
                    title: "Frete rápido e grátis",
                    desc: "Aproveite o frete rápido e gratuito para todos os produtos em estoque.",
                  },
                  {
                    icon: <Shield size={18} />,
                    title: "Devoluções fáceis",
                    desc: "Produtos qualificados podem ser devolvidos para a HALO em até 30 dias após o recebimento.",
                  },
                  {
                    icon: <Award size={18} />,
                    title: "Garantia HALO Plus",
                    desc: `Variação ${product.label} conta com garantia de ${product.warranty} contra defeitos de fabricação.`,
                  },
                ].map((b) => (
                  <div
                    key={b.title}
                    className="flex items-start gap-3 rounded-2xl bg-[#0E0E0E] border border-white/5 p-4 sm:p-5"
                  >
                    <div className="text-[#D4FF00] mt-0.5 flex-shrink-0">{b.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold text-sm sm:text-base">{b.title}</h4>
                      <p className="text-neutral-400 text-sm mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FICHA TÉCNICA */}
            <div className="mt-6 pb-6 border-b border-white/5">
              <h2 className="text-white font-display text-2xl sm:text-3xl">Especificações</h2>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: "Bateria", value: product.battery, icon: <Battery size={14} /> },
                  { label: "Resistência", value: product.waterResistance, icon: <Droplets size={14} /> },
                  { label: "Peso", value: product.weight, icon: <Activity size={14} /> },
                  { label: "Garantia", value: product.warranty, icon: <Shield size={14} /> },
                ].map((spec) => (
                  <div key={spec.label} className="rounded-2xl bg-[#151515] border border-white/5 p-3 sm:p-4">
                    <div className="text-[#D4FF00] mb-1">{spec.icon}</div>
                    <div className="text-white font-semibold text-base sm:text-lg">{spec.value}</div>
                    <div className="text-neutral-500 text-[11px] uppercase tracking-wider mt-0.5">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CARACTERÍSTICAS PRINCIPAIS */}
            <div className="mt-6 pb-6 border-b border-white/5">
              <h2 className="text-white font-display text-2xl sm:text-3xl">O que vem incluso</h2>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                {product.features.map((feature, f) => (
                  <li key={f} className="flex items-start gap-3 text-neutral-200">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-lg flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${product.accent}25`, color: product.accent }}
                    >
                      {featureIcons(feature)}
                    </span>
                    <span className="leading-snug text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* KIT EXCLUSIVO */}
            <div className="mt-6">
              <div
                className="rounded-3xl p-5 sm:p-6 border"
                style={{ backgroundColor: `${product.accent}12`, borderColor: `${product.accent}44` }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                  <h2 className="text-lg sm:text-xl font-display flex items-center gap-2" style={{ color: product.accent }}>
                    <Award size={19} />
                    KIT EXCLUSIVO {product.label.toUpperCase()}
                  </h2>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/30 text-neutral-200">
                    {product.exclusiveKit.length} itens inclusos
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
                  {product.exclusiveKit.map((item, k) => (
                    <li key={k} className="flex items-start gap-2.5 text-neutral-100 text-sm sm:text-base">
                      <span className="text-[#D4FF00] mt-0.5 flex-shrink-0">✓</span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl bg-white/[0.02] border border-white/5 p-4 sm:p-5">
                <span className="text-xs uppercase tracking-wider text-neutral-500 mr-2">
                  Ideal para:
                </span>
                <span className="text-sm sm:text-base text-neutral-200 font-medium">
                  {product.idealFor}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* VOCÊ TAMBÉM PODE GOSTAR */}
        <section className="mt-16">
          <h2 className="text-white font-display text-2xl sm:text-3xl mb-5">Você também pode gostar</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {related.map((idx) => {
              const p = capImages[idx];
              return (
                <motion.article
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden bg-[#101010] border border-white/5 hover:border-white/15 transition-all cursor-pointer"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setTimeout(() => onSelectProduct(idx), 150);
                  }}
                  role="link"
                  aria-label={`Ver HALO ${p.label}`}
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] flex items-center justify-center p-4">
                    <img src={p.src} alt={p.alt} className="w-[70%] object-contain group-hover:scale-110 transition-transform duration-300" />
                    <div
                      className="absolute inset-0 pointer-events-none opacity-50"
                      style={{ background: `radial-gradient(ellipse at 50% 95%, ${p.accent}44 0%, transparent 60%)` }}
                    />
                  </div>
                  <div className="p-3 border-t border-white/5 bg-[#0d0d0d]">
                    <h3 className="text-white font-semibold text-sm">HALO {p.label}</h3>
                    <div className="text-neutral-500 text-[11px] line-clamp-1 mt-0.5">{p.badge}</div>
                    <div className="text-white font-display text-base mt-1">R$ {p.price}</div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}