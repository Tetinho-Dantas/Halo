import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";

const capImages = [
  { src: "/Gemini_Generated_Image_3z30813z30813z30.jpg", alt: "Render do produto HALO - acabamento dourado", label: "Dourado" },
  { src: "/Gemini_Generated_Image_6tfbtf6tfbtf6tfb.jpg", alt: "Render do produto HALO - acabamento grafite", label: "Grafite" },
  { src: "/Gemini_Generated_Image_44ltbz44ltbz44lt.jpg", alt: "Render do produto HALO - acabamento carmesim", label: "Carmesim" },
  { src: "/Gemini_Generated_Image_73tvdz73tvdz73tv.jpg", alt: "Render do produto HALO - acabamento obsidiana", label: "Obsidiana" },
  { src: "/Gemini_Generated_Image_ksqc0sksqc0sksqc.jpg", alt: "Render do produto HALO - acabamento pérola", label: "Pérola" },
  { src: "/Gemini_Generated_Image_uulx61uulx61uulx.jpg", alt: "Render do produto HALO - acabamento índigo", label: "Índigo" },
];

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
            <BottomRow />
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
function BottomRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <MoreProductsCard />
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
      <h3 className="text-white font-display text-3xl">Como funciona</h3>
      <p className="mt-2 text-neutral-400">Um fluxo simples pensado para configuração rápida e uso diário.</p>

      <ol className="mt-6 space-y-3">
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

function MoreProductsCard() {
  return (
    <motion.a
      href="#more"
      className="block rounded-2xl bg-[#0E0E0E] p-5 shadow hover:scale-[1.01] transition-transform"
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
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white/6 rounded-full text-neutral-200 text-sm">
          Ver tudo <ArrowRight size={14} />
        </button>
      </div>
    </motion.a>
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