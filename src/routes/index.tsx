import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import { openCookiePreferences } from "@/lib/consent";
import toolsImg from "@/assets/tools.jpg";
import depo1 from "@/assets/depo-1.jpg";
import depo2 from "@/assets/depo-2.jpg";
import depo3 from "@/assets/depo-3.jpg";
import { Check, ShieldCheck, Sparkles, Clock, Lock, Star, ChevronDown } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { trackInitiateCheckout } from "@/lib/meta-pixel";

// Link oficial do checkout Cakto
const CHECKOUT_URL = "https://pay.cakto.com.br/hfe7h83?affiliate=aVviHmvf";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nail Designer Pro 4.0 — Aprenda Nail Design do zero" },
      {
        name: "description",
        content:
          "Curso online Nail Designer Pro 4.0: aprenda técnicas de Nail Design do zero e multiplique sua renda em até 5x trabalhando com as suas próprias clientes.",
      },
      { property: "og:title", content: "Nail Designer Pro 4.0 — Multiplique sua renda em até 5x" },
      {
        property: "og:description",
        content: "Aprenda Nail Design e transforme essa habilidade em uma nova fonte de renda. Comece hoje.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta({ children, big }: { children: ReactNode; big?: boolean }) {
  return (
    <a
      href={CHECKOUT_URL}
      onClick={trackInitiateCheckout}
      className={`cta-shine inline-flex w-full items-center justify-center bg-ink font-bold uppercase tracking-[0.2em] text-ink-foreground shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary sm:w-auto ${
        big ? "px-10 py-5 text-xs sm:text-sm" : "px-8 py-4 text-xs"
      }`}
    >
      {children}
    </a>
  );
}

function Trust({ dark }: { dark?: boolean }) {
  return (
    <ul className={`flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-semibold uppercase tracking-widest sm:justify-start ${dark ? "text-ink-foreground/70" : "text-muted-foreground"}`}>
      {["Pagamento seguro", "Garantia de 7 dias", "Acesso imediato"].map((t) => (
        <li key={t} className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          {t}
        </li>
      ))}
    </ul>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">{children}</p>
  );
}

const modules = [
  {
    num: "01",
    tag: "Base Essencial",
    title: "Fundamentos, Materiais & Biossegurança",
    desc: "Aprenda a montar seu kit de trabalho sem gastar fortunas. Regras de higiene, esterilização e anatomia da unha para trabalhar com segurança.",
    topics: [
      "Lista enxuta de materiais com o melhor custo-benefício",
      "Higienização e esterilização correta de alicates e brocas",
      "Anatomia da lâmina ungueal e prevenção de fungos",
    ],
  },
  {
    num: "02",
    tag: "Zero Infiltração",
    title: "Cutilagem & Preparação da Unha",
    desc: "O segredo de um alongamento duradouro está na preparação. Domine a técnica que evita descolamentos e não machuca a cliente.",
    topics: [
      "Cutilagem combinada (brocas e alicate) sem tirar bife",
      "Aplicação correta dos preparadores (desidratador e primer)",
      "Lixamento técnico sem danificar a lâmina natural",
    ],
  },
  {
    num: "03",
    tag: "Mais Procurado",
    title: "Alongamento em Fibra de Vidro do Zero",
    desc: "A técnica mais lucrativa e procurada nos salões. Da abertura perfeita da fibra até a curvatura C natural e super resistente.",
    topics: [
      "Abertura e fixação invisível da fibra de vidro",
      "Curvatura C simétrica que não trinca e não abre",
      "Ponto de tensão fino, resistente e com acabamento natural",
    ],
  },
  {
    num: "04",
    tag: "Agilidade em Mesa",
    title: "Gel na Tip & Molde Moderno",
    desc: "Ganhe velocidade nos seus atendimentos com técnicas modernas de aplicação rápida, economizando gel e tempo de lixamento.",
    topics: [
      "Adaptação anatômica e colagem segura de tips",
      "Controle de produto para economizar gel e lixar menos",
      "Estrutura simétrica com resistência para o dia a dia",
    ],
  },
  {
    num: "05",
    tag: "Tendência",
    title: "Esmaltação em Gel & Decorações",
    desc: "Entregue unhas perfeitas que duram mais de 20 dias com brilho espelhado, sem descascar e com acabamento de salão de luxo.",
    topics: [
      "Esmaltação uniforme rente à cutícula sem escorrer",
      "Francesinha sorriso clássica e efeito Babyboomer",
      "Encapsuladas sofisticadas com glitter e folhas de ouro",
    ],
  },
  {
    num: "06",
    tag: "Fidelização",
    title: "Manutenção Rápida, Remoção & Consertos",
    desc: "Como fidelizar suas clientes com manutenções impecáveis em menos de 1h30 e reparos práticos de unhas quebradas.",
    topics: [
      "Passo a passo da manutenção preventiva e corretiva",
      "Conserto de unhas quebradas sem precisar remover tudo",
      "Remoção segura preservando 100% da saúde da unha",
    ],
  },
  {
    num: "BÔNUS",
    tag: "Exclusivo",
    title: "Como Lotar sua Agenda & Cobrar Bem",
    desc: "Transforme sua nova habilidade em um negócio rentável. Aprenda a tirar fotos que vendem e atrair clientes no Instagram.",
    topics: [
      "Como definir seu preço para ter lucro de verdade",
      "Fotos e vídeos profissionais usando apenas o seu celular",
      "Roteiro de atendimento no WhatsApp para fechar agendamentos",
    ],
  },
];

const testimonials = [
  {
    img: depo1,
    alt: "Print de WhatsApp: aluna mostra seu primeiro alongamento de fibra de vidro",
    quote: "“Meu primeiro alongamento de fibra de vidro! Assistindo as aulas do curso 😍”",
    name: "Aluna do curso",
  },
  {
    img: depo2,
    alt: "Print de WhatsApp: Pollyanna mostra o certificado e agradece o curso",
    quote: "“Passando para agradecer o curso Nail Designer por todo suporte, gratidão. Agora sim vou dar início a essa nova etapa ❤️”",
    name: "Pollyanna",
  },
  {
    img: depo3,
    alt: "Print de WhatsApp: Liliane mostra o certificado do curso",
    quote: "“O melhor curso 😍 Super explicativo, gratidão. Não tem como errar 🥰”",
    name: "Liliane",
  },
];

const faq = [
  ["Preciso ter experiência ou dom para começar?", "Não! O curso foi desenvolvido especialmente para quem está começando do absoluto zero. Você vai aprender todo o passo a passo de forma simples e direta, desde os materiais até o acabamento profissional."],
  ["O certificado é incluso? Como recebo?", "Sim! O Certificado Profissional de Conclusão está 100% incluso, sem nenhuma taxa extra. Assim que você conclui as aulas, ele é liberado na plataforma para você baixar e imprimir em alta definição."],
  ["O curso é online? Como assisto?", "Sim, 100% online. Você recebe o acesso imediatamente por e-mail após a confirmação do pagamento e pode assistir pelo celular, computador ou tablet, no horário que melhor se encaixar na sua rotina."],
  ["Por quanto tempo tenho acesso ao curso?", "Você terá acesso durante 1 ano inteiro, incluindo todas as atualizações de aulas e novos conteúdos adicionados durante o período."],
  ["E se eu não gostar ou achar difícil? Tem garantia?", "Você tem 7 dias de garantia incondicional. Assista às aulas, conheça as técnicas e, se por qualquer razão achar que o curso não é para você, basta nos enviar um e-mail que devolveremos 100% do seu dinheiro."],
  ["Consigo começar atendendo na minha própria casa?", "Com certeza! A grande maioria das nossas alunas começa atendendo em casa ou a domicílio com um kit básico, e rapidamente conquistam clientela suficiente para ter seu próprio espaço."],
];

function useCountdown(initialMinutes = 14, initialSeconds = 59) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60 + initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : initialMinutes * 60 + initialSeconds));
    }, 1000);
    return () => clearInterval(timer);
  }, [initialMinutes, initialSeconds]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function Index() {
  const [open, setOpen] = useState<number | null>(0);
  const countdown = useCountdown(14, 47);

  return (
    <main className="overflow-x-hidden">
      {/* Header com Fita de Promoção Integrada */}
      <header className="sticky top-0 z-30 shadow-sm backdrop-blur-md">
        {/* Fita de Promoção em Carrossel Automático Contínuo */}
        <div className="relative overflow-hidden bg-gradient-to-r from-ink via-[#240c18] to-ink border-b border-gold/30 py-2 text-xs text-ink-foreground select-none">
          {/* Fades elegantes nas extremidades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-20 bg-gradient-to-r from-ink to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-20 bg-gradient-to-l from-ink to-transparent" />

          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {[
              {
                badge: "CONDIÇÃO ESPECIAL DE LANÇAMENTO",
                text: "De R$ 297 por apenas R$ 78 à vista (ou 12x de R$ 7,78)",
              },
              {
                badge: "TEMPO LIMITADO",
                text: `Oferta promocional encerra em ${countdown}`,
              },
              {
                badge: "ECONOMIZE MAIS DE 70%",
                text: "Acesso vitalício completo liberado imediatamente",
              },
              {
                badge: "BÔNUS EXCLUSIVO INCLUSO",
                text: "Método de Atração de Clientes no Instagram",
              },
              {
                badge: "COMUNIDADE & ALUNAS",
                text: "Mais de 2.400 designers capacitadas em todo o Brasil",
              },
              {
                badge: "RISCO ZERO",
                text: "Garantia incondicional blindada de 7 dias",
              },
              {
                badge: "CONDIÇÃO ESPECIAL DE LANÇAMENTO",
                text: "De R$ 297 por apenas R$ 78 à vista (ou 12x de R$ 7,78)",
              },
              {
                badge: "TEMPO LIMITADO",
                text: `Oferta promocional encerra em ${countdown}`,
              },
              {
                badge: "ECONOMIZE MAIS DE 70%",
                text: "Acesso vitalício completo liberado imediatamente",
              },
              {
                badge: "BÔNUS EXCLUSIVO INCLUSO",
                text: "Método de Atração de Clientes no Instagram",
              },
              {
                badge: "COMUNIDADE & ALUNAS",
                text: "Mais de 2.400 designers capacitadas em todo o Brasil",
              },
              {
                badge: "RISCO ZERO",
                text: "Garantia incondicional blindada de 7 dias",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-gold border border-gold/30">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                  {item.badge}
                </span>
                <span className="text-[11px] sm:text-xs text-ink-foreground/90 font-medium">
                  {item.text}
                </span>
                <span className="text-gold/40 text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Topbar Principal */}
        <div className="border-b border-border/80 bg-background/90 px-4 py-2.5 sm:px-6 sm:py-3">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            {/* Links de navegação para Desktop */}
            <nav className="hidden sm:flex items-center gap-6 md:gap-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <a href="#conteudo" className="transition hover:text-primary">O Que Você Aprende</a>
              <a href="#depoimentos" className="transition hover:text-primary">Depoimentos</a>
              <a href="#faq" className="transition hover:text-primary">Dúvidas</a>
            </nav>

            {/* Prova social no Mobile */}
            <div className="sm:hidden flex items-center gap-1.5 text-xs font-bold text-gold">
              <span>★ 4.9</span>
              <span className="text-muted-foreground font-normal text-[11px]">(+2.400 alunas)</span>
            </div>

            {/* Ações e Prova Social Desktop */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex flex-col items-end text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                  ★ 4.9 de Avaliação
                </span>
                <span className="text-[10px] text-muted-foreground">+2.400 Alunas</span>
              </div>
              <a
                href={CHECKOUT_URL}
                onClick={trackInitiateCheckout}
                className="cta-shine rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-ink-foreground shadow-md transition hover:bg-primary sm:px-6 sm:py-2.5"
              >
                Garantir Acesso ↗
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 1. Hero */}
      <section className="bg-soft-gradient py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl xl:max-w-[1440px] items-center gap-12 px-5 sm:px-6 lg:grid-cols-12 lg:gap-10">
          <div className="animate-rise z-10 text-center sm:text-left lg:col-span-5 xl:col-span-4">
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <span className="h-px w-8 bg-gold" />
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">
                Turma aberta · Nail Designer Pro 4.0
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[0.98] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Multiplique sua <em className="font-light italic text-primary">renda em até 5x</em>
            </h1>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:mx-0 sm:text-lg">
              Enquanto você lê isso, milhares de mulheres já estão faturando com Nail Design. Sem sair de casa, sem faculdade, sem esperar a "hora certa": você aprende a técnica, monta sua agenda e atende suas próprias clientes.
            </p>
          </div>
          <div className="relative animate-rise [animation-delay:150ms] lg:col-span-7 xl:col-span-8">
            <div className="absolute -right-6 -top-6 -z-10 h-36 w-36 rounded-full bg-nude/40 sm:-right-10 sm:-top-10 sm:h-52 sm:w-52" />
            <div className="absolute -bottom-16 -right-16 -z-10 h-64 w-64 rounded-full border border-nude sm:-bottom-24 sm:-right-24 sm:h-96 sm:w-96" />
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-muted shadow-elegant sm:rounded-3xl">
              <iframe
                src="https://www.youtube-nocookie.com/embed/rxHN1RWcN84?rel=0&autoplay=1&mute=1&playsinline=1"
                title="Nail Designer Pro 4.0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="mt-4 inline-flex items-center gap-4 border-b-4 border-gold bg-card px-5 py-3.5 shadow-card sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:block sm:px-7 sm:py-5">
              <p className="font-display text-3xl sm:text-4xl italic leading-none text-primary">5x</p>
              <p className="text-[10px] sm:mt-1 sm:text-[9px] font-extrabold uppercase leading-tight tracking-[0.2em]">
                Potencial de<br className="hidden sm:inline" /> faturamento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. O que você vai aprender na prática */}
      <section id="conteudo" className="bg-ink text-ink-foreground py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center sm:text-left md:flex md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.3em] text-gold">Grade Prática e Direta</p>
              <h2 className="text-3xl font-semibold sm:text-5xl">O que você vai aprender</h2>
              <p className="mt-4 max-w-xl text-base text-ink-foreground/80 sm:text-lg">
                Do primeiro contato com os materiais até o atendimento de clientes reais. Uma metodologia testada para você aprender rápido e sem insegurança.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold">
                <Sparkles className="h-3.5 w-3.5" /> 6 Módulos + Bônus de Negócio
              </span>
            </div>
          </div>

          <div className="relative mt-12 overflow-hidden">
            {/* Gradientes de fade nas laterais estilo vitrine contínua */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 sm:w-20 bg-gradient-to-r from-ink to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 sm:w-20 bg-gradient-to-l from-ink to-transparent" />

            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1.2,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[...modules, ...modules].map((m, idx) => (
                  <CarouselItem key={`${m.num}-${idx}`} className="pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3">
                    <div className="group relative flex h-full flex-col justify-between rounded-3xl border border-ink-foreground/15 bg-ink/60 p-6 backdrop-blur-sm transition duration-300 hover:border-gold/60 hover:shadow-xl">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-display text-2xl font-bold text-gold">{m.num}</span>
                          <span className="rounded-full bg-ink-foreground/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold">
                            {m.tag}
                          </span>
                        </div>
                        <h3 className="mt-4 text-xl font-semibold leading-snug">{m.title}</h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-ink-foreground/75">{m.desc}</p>
                      </div>
                      <div className="mt-6 border-t border-ink-foreground/10 pt-4">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-gold/80">Tópicos do módulo:</p>
                        <ul className="space-y-1.5 text-xs text-ink-foreground/70">
                          {m.topics.map((t) => (
                            <li key={t} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </div>
      </section>

      {/* 3. Depoimentos */}
      <section id="depoimentos" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="text-center">
            <Eyebrow>Depoimentos</Eyebrow>
            <h2 className="text-3xl font-semibold sm:text-5xl">Quem fez, recomenda</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              Prints reais enviados pelas alunas comprovando seus primeiros resultados e certificados.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col justify-between rounded-3xl border border-border bg-card p-4 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <div className="overflow-hidden rounded-2xl border border-border/60 bg-muted/20">
                  <img
                    src={t.img}
                    alt={t.alt}
                    loading="lazy"
                    className="w-full max-h-[520px] rounded-2xl object-contain transition duration-300 hover:scale-[1.02]"
                  />
                </div>
                <div>
                  <blockquote className="mt-4 px-2 text-sm leading-relaxed text-foreground">{t.quote}</blockquote>
                  <figcaption className="mt-3 flex items-center justify-between px-2 pb-2 text-xs font-semibold uppercase tracking-widest text-primary">
                    <span>{t.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                      ✓ Aluna Verificada
                    </span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Oferta com Preço Ancorado */}
      <section id="oferta" className="bg-ink text-ink-foreground py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="mx-auto max-w-2xl rounded-[2.5rem] border border-gold/20 bg-background/5 p-8 text-center shadow-elegant backdrop-blur sm:p-12">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
              Condição Especial de Lançamento
            </span>
            <h2 className="mt-4 text-3xl font-semibold sm:text-5xl">Comece hoje sua nova carreira</h2>
            <p className="mt-2 text-base text-ink-foreground/80">Acesso completo ao Nail Designer Pro 4.0</p>

            {/* Bloco de Preço */}
            <div className="my-8 rounded-2xl border border-ink-foreground/15 bg-ink/60 p-6 text-center">
              <p className="text-xs uppercase tracking-widest text-ink-foreground/60 line-through">
                De R$ 297,00 por apenas
              </p>
              <div className="mt-2 flex items-baseline justify-center gap-1.5">
                <span className="text-xl font-bold text-gold sm:text-2xl">12x de</span>
                <span className="font-display text-5xl font-extrabold text-ink-foreground sm:text-6xl">
                  R$ 7,78
                </span>
              </div>
              <p className="mt-2 text-sm text-ink-foreground/80">
                ou apenas <strong className="text-gold">R$ 78,00 à vista</strong> (no PIX ou Cartão)
              </p>
              <p className="mt-1 text-[11px] text-ink-foreground/60">
                Menos de R$ 0,22 por dia para aprender uma profissão altamente lucrativa
              </p>
            </div>

            <ul className="mx-auto max-w-sm space-y-2.5 text-left text-sm text-ink-foreground/90">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Curso online completo (do zero ao avançado)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Certificado Profissional de Conclusão incluso</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Bônus: Guia de Materiais & Melhores Fornecedores</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Bônus: Método de Atração de Clientes no Instagram</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Suporte para tirar dúvidas diretamente na plataforma</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 shrink-0 text-gold" />
                <span>Garantia incondicional de 7 dias (Risco Zero)</span>
              </li>
            </ul>

            <div className="mt-8">
              <Cta big>Quero garantir meu acesso com desconto</Cta>
            </div>
            <div className="mt-4 flex justify-center"><Trust dark /></div>
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <div className="text-center">
            <Eyebrow>Tire Suas Dúvidas</Eyebrow>
            <h2 className="text-3xl font-semibold sm:text-5xl">Perguntas frequentes</h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Tudo o que você precisa saber antes de começar sua jornada.
            </p>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {faq.map(([q, a], i) => (
              <div key={q}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium transition hover:text-primary"
                  aria-expanded={open === i}
                >
                  <span className="text-sm font-semibold sm:text-base">{q}</span>
                  <span className={`text-xl text-primary transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {open === i && (
                  <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA final */}
      <section className="bg-rose-gradient text-primary-foreground py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 text-center">
          <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
            Sua próxima fonte de renda começa com uma habilidade que você aprende hoje.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm opacity-90 sm:text-base">
            Não espere a hora perfeita para mudar sua vida financeira. Garanta seu acesso ao Nail Designer Pro 4.0 agora mesmo.
          </p>
          <a
            href={CHECKOUT_URL}
            onClick={trackInitiateCheckout}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink px-10 py-5 text-xs font-bold uppercase tracking-wider text-ink-foreground shadow-2xl transition hover:scale-[1.02] sm:w-auto sm:text-sm"
          >
            Quero começar agora ↗
          </a>
          <p className="mt-4 text-xs opacity-80">Acesso imediato · Certificado Incluso · Garantia de 7 Dias</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-ink py-14 text-center text-xs text-ink-foreground/70">
        <div className="mx-auto max-w-6xl space-y-4 px-5 sm:px-6">
          <p className="font-display text-xl text-ink-foreground">Nail Designer Pro 4.0</p>
          <p>
            ND PRO TREINAMENTOS E DESENVOLVIMENTO PROFISSIONAL LTDA · CNPJ 48.921.734/0001-85
          </p>
          <p>
            Suporte ao Aluno: <a href="mailto:suporte@naildesignerpro.com.br" className="underline hover:text-gold">suporte@naildesignerpro.com.br</a> · Atendimento de Seg. a Sex. das 09h às 18h
          </p>
          <p className="flex flex-wrap justify-center gap-5">
            <Link to="/privacidade" className="hover:text-gold">Política de Privacidade</Link>
            <a href="#termos" className="hover:text-gold">Termos de Uso</a>
            <button onClick={openCookiePreferences} className="hover:text-gold">
              Preferências de cookies
            </button>
          </p>
          <p className="mx-auto max-w-2xl opacity-70">
            Os resultados apresentados nesta página não são garantidos e dependem da dedicação, prática e outros fatores
            individuais. © {new Date().getFullYear()} Nail Designer Pro 4.0. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
