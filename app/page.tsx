import {
  ArrowDownToLine,
  Check,
  Download,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import {
  assessmentCards,
  brandValues,
  CheckIcon,
  documentUrl,
  heroChecklist,
  onlinePresenceCards,
  personalizedBullets,
  pillars,
  salesServices,
  statistics,
  whatsappUrl,
} from "@/lib/site-data";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Carousel } from "@/components/ui/Carousel";
import { Logo } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/site-assets";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Gogoup",
    description:
      "Assessoria estratégica para presença digital, atendimento, automação e vendas online.",
    email: brandValues.email,
    telephone: brandValues.phone,
    areaServed: "Brasil",
    url: "https://gogoup.com",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <HeroSection />
        <AssessmentSection />
        <OfferSection />
        <OnlinePresenceSection />
        <StatsSection />
        <PillarsSection />
        <SalesServicesSection />
        <PersonalizedSection />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#9fb0ff]/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="section-shell flex min-h-16 items-center justify-between gap-4 py-3"
      >
        <Logo />
        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink
            aria-label="Baixar documento de serviços da Gogoup"
            className="hidden px-4 text-xs sm:inline-flex"
            download
            href={documentUrl}
            variant="blue"
          >
            <Download aria-hidden className="size-4" />
            Informações e valores
          </ButtonLink>
          <ButtonLink
            aria-label="Falar com a Gogoup pelo WhatsApp"
            className="px-4 text-xs"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
            variant="yellow"
          >
            <MessageCircle aria-hidden className="size-4" />
            Contato
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-primary">
              Assessoria
            </p>
            <h1 className="text-balance text-4xl font-black leading-[0.98] tracking-tight text-primary-dark sm:text-5xl lg:text-6xl">
              <span className="text-primary">Assessoria</span> estratégica para o seu negócio{" "}
              <span className="text-yellow">crescer.</span>
            </h1>
            <p className="mt-7 max-w-md text-base font-bold leading-relaxed text-[#415070]">
              Seu negócio conquista mais clientes e cresce de forma consciente.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                <MessageCircle aria-hidden className="size-5" />
                Contato
              </ButtonLink>
              <ButtonLink download href={documentUrl} variant="blue">
                <ArrowDownToLine aria-hidden className="size-5" />
                Informações e valores
              </ButtonLink>
            </div>
          </div>
        </Reveal>
        <Reveal className="relative mt-8 lg:mt-0" delay={0.1}>
          <div className="absolute left-0 top-5 hidden rounded-2xl bg-white/90 p-4 text-xs font-bold text-[#627291] shadow-xl sm:block">
            <p className="mb-2 text-[10px] text-primary">Seu negócio:</p>
            {heroChecklist.map((item) => (
              <span className="mb-1.5 flex items-center gap-2" key={item}>
                <Check aria-hidden className="size-4 text-primary" />
                {item}
              </span>
            ))}
          </div>
          <Image
            alt="Ilustração de pessoas construindo uma estratégia digital com canais como WhatsApp, Google e redes sociais"
            className="mx-auto w-full max-w-[660px]"
            height="520"
            priority
            src={siteImages.hero}
            unoptimized
            width="680"
          />
        </Reveal>
      </div>
    </section>
  );
}

function AssessmentSection() {
  return (
    <section className="bg-soft-blue py-14 sm:py-16">
      <div className="section-shell">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="text-balance text-2xl font-black uppercase tracking-wide text-primary-dark sm:text-3xl">
              Seu negócio precisa de assessoria?
            </h2>
            <span aria-hidden className="text-7xl font-black leading-none text-primary/25">
              ?
            </span>
          </div>
        </Reveal>
        <Carousel
          itemClassName="sm:min-w-[42%] lg:min-w-[31.5%]"
          label="Perguntas sobre necessidade de assessoria"
        >
          {assessmentCards.map((card, index) => (
            <article
              className="flex min-h-40 items-center gap-4 bg-[#5367bc] p-8 text-white shadow-lg even:bg-[#4c5fb1]"
              key={card}
            >
              <span className="text-7xl font-black leading-none text-white/18">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm font-bold leading-relaxed">{card}</p>
            </article>
          ))}
        </Carousel>
        <p className="mt-3 rounded-full border border-primary/40 bg-white/25 px-5 py-3 text-center text-xs font-extrabold text-primary-dark">
          Se você respondeu não para uma ou mais perguntas, a Gogoup pode ajudar o seu negócio a
          crescer com segurança e tornando-se referência no seu segmento.
        </p>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <section className="bg-white pt-16">
      <div className="section-shell">
        <Reveal>
          <h2 className="mb-9 text-lg font-black uppercase tracking-wide text-primary">
            O que oferecemos:
          </h2>
        </Reveal>
        <div className="relative border-t-4 border-[#9c85d6] bg-panel pb-12 pt-16">
          <span className="absolute -top-8 left-6 grid size-16 place-items-center rounded-2xl bg-[#8c78cf] text-lg font-black text-white">
            01
          </span>
          <div className="px-6 sm:px-10">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8193b8]">
              Presença online.
            </p>
            <h3 className="mt-6 text-balance text-2xl font-black text-[#191d31]">
              Tudo que seu negócio precisa para ser destaque online
            </h3>
            <p className="mt-4 max-w-3xl text-sm font-semibold leading-relaxed text-[#61708e]">
              Estruturamos a presença digital do seu negócio (WhatsApp, redes sociais, Google...)
              para aumentar sua visibilidade, transmitir credibilidade e facilitar o contato com
              novos clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OnlinePresenceSection() {
  return (
    <section aria-labelledby="presenca-online" className="bg-panel pb-16 pt-4">
      <div className="section-shell">
        <h2 className="sr-only" id="presenca-online">
          PRESENÇA ONLINE
        </h2>
        <Carousel
          itemClassName="sm:min-w-[46%] lg:min-w-[23.5%]"
          label="Serviços de presença online"
        >
          {onlinePresenceCards.map((card) => (
            <article
              className="h-full rounded-xl bg-white p-5 shadow-[0_16px_45px_rgba(40,54,128,0.12)]"
              key={card.title}
            >
              <div className={`mb-4 h-1.5 rounded-full bg-gradient-to-r ${card.accent}`} />
              <Image
                alt={`Ilustração do serviço ${card.title}`}
                className="mb-5 h-52 w-full rounded-lg object-contain sm:h-56"
                height="601"
                src={card.image}
                unoptimized
                width="460"
              />
              <div className="mb-3 flex items-center gap-2">
                <span className="grid size-9 place-items-center rounded-full bg-primary/10 text-primary">
                  <card.icon aria-hidden className="size-5" />
                </span>
                <h3 className="text-sm font-black text-[#171a2f]">{card.title}</h3>
              </div>
              <p className="mb-4 text-xs font-bold leading-relaxed text-[#66728d]">{card.text}</p>
              <ul className="space-y-2 text-xs font-semibold leading-snug text-[#3f485f]">
                {card.bullets.map((bullet) => (
                  <li className="flex gap-2" key={bullet}>
                    <span aria-hidden className="mt-1 size-1.5 rounded-full bg-[#9ca8de]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function StatsSection() {
  return (
    <section className="bg-primary-dark py-12 text-white">
      <div className="section-shell grid gap-8 sm:grid-cols-3">
        {statistics.map((stat) => (
          <Reveal className="text-center" key={stat.value}>
            <p className="text-5xl font-black text-white">{stat.value}</p>
            <p className="mx-auto mt-3 max-w-56 text-sm font-extrabold leading-tight text-white">
              {stat.text}
            </p>
            <p className="mt-4 text-[10px] font-semibold text-white/55">{stat.source}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="bg-panel py-16">
      <div className="section-shell">
        <Carousel itemClassName="sm:min-w-[48%] lg:min-w-[31%]" label="Pilares da assessoria">
          {pillars.map((pillar) => (
            <article className="relative h-full pt-10" key={pillar.title}>
              <div className={`absolute left-0 top-0 grid size-20 place-items-center rounded-2xl ${pillar.color} text-xl font-black text-white shadow-lg`}>
                {pillar.number}
              </div>
              <div className="h-full border-t-4 border-current bg-panel px-1 pt-14 text-[#7cacc2]">
                <div className="mb-8 flex items-center gap-3">
                  <pillar.icon aria-hidden className="size-8 text-current" />
                  <p className="text-sm font-black uppercase tracking-wider">{pillar.title}</p>
                </div>
                <h2 className="text-balance text-2xl font-black leading-tight text-[#151827]">
                  {pillar.headline}
                </h2>
                <p className="mt-6 text-sm font-semibold leading-relaxed text-[#66728d]">
                  {pillar.text}
                </p>
                <ButtonLink className="mt-7 px-7" href="#servicos" variant="green">
                  Saiba mais.
                </ButtonLink>
              </div>
            </article>
          ))}
        </Carousel>
        <div aria-hidden className="mt-3 flex justify-center gap-3">
          <span className="size-3 rounded-full bg-[#79aeb8]" />
          <span className="size-3 rounded-full bg-[#cc6aa2]" />
          <span className="size-3 rounded-full bg-[#4388bd]" />
        </div>
      </div>
    </section>
  );
}

function SalesServicesSection() {
  return (
    <section className="bg-white py-16" id="servicos">
      <div className="section-shell">
        <Reveal>
          <h2 className="mb-9 text-balance text-2xl font-black text-[#191d31] sm:text-3xl">
            Serviços especializados em vendas online:
          </h2>
        </Reveal>
        <Carousel itemClassName="sm:min-w-[48%] lg:min-w-[31%]" label="Serviços especializados">
          {salesServices.map((service) => (
            <article
              className="flex h-full flex-col rounded-3xl border border-[#e8edf4] bg-white p-7 shadow-sm"
              key={service.title}
              style={{ borderTop: `5px solid ${service.color}` }}
            >
              <div className="mb-8 flex gap-2">
                {service.icons.map((Icon, index) => (
                  <span
                    className="grid size-10 place-items-center rounded-full text-white"
                    key={`${service.title}-${index}`}
                    style={{ backgroundColor: index ? `${service.color}b8` : service.color }}
                  >
                    <Icon aria-hidden className="size-5" />
                  </span>
                ))}
              </div>
              <h3 className="text-balance text-xl font-black leading-tight text-[#20223a]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm font-semibold leading-relaxed text-[#68758f]">
                {service.description}
              </p>
              <p className="mt-6 text-xs font-black uppercase tracking-wider text-[#9ba4b5]">
                Ideal para:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {service.ideal.map((item) => (
                  <span className="rounded-full bg-[#f1f3f7] px-3 py-1 text-xs font-bold text-[#7b8496]" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs font-black uppercase tracking-wider text-[#9ba4b5]">
                Inclui:
              </p>
              <ul className="mt-3 space-y-3 text-sm font-semibold leading-snug text-[#66728d]">
                {service.includes.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <span
                      aria-hidden
                      className="mt-1.5 size-2 rounded-full"
                      style={{ backgroundColor: service.color }}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 rounded-xl bg-[#f7f8fb] p-4 text-sm font-bold text-[#616c82]">
                <strong>Objetivo:</strong> {service.objective}
              </p>
              <ButtonLink
                className="mx-auto mt-8 w-44"
                href={whatsappUrl}
                rel="noopener noreferrer"
                target="_blank"
                variant={service.color === "#f36a43" ? "orange" : service.color === "#0068c9" ? "primary" : "green"}
              >
                Contatar
              </ButtonLink>
            </article>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

function PersonalizedSection() {
  return (
    <section className="bg-[#f7fbfe] py-16 sm:py-20">
      <div className="section-shell grid items-center gap-10 rounded-[2rem] bg-white/70 p-2 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[1.7rem] bg-white p-8 shadow-[0_22px_70px_rgba(36,43,85,0.08)] sm:p-12">
          <p className="mb-5 inline-flex rounded-full bg-[#dcefea] px-5 py-2 text-sm font-black uppercase tracking-wider text-[#54717b]">
            Atendimento personalizado
          </p>
          <h2 className="text-balance text-3xl font-black leading-tight text-[#202748] sm:text-4xl">
            Uma estratégia feita sob medida para o seu negócio
          </h2>
          <p className="mt-6 text-base font-semibold leading-relaxed text-[#63718d]">
            Se você precisa de uma solução fora dos planos padrão, montamos um projeto exclusivo
            com foco no seu objetivo, no seu momento e no seu orçamento.
          </p>
          <ul className="mt-6 space-y-4 text-sm font-semibold text-[#52617a]">
            {personalizedBullets.map((bullet) => (
              <li className="flex items-start gap-3" key={bullet}>
                <CheckIcon aria-hidden className="mt-0.5 size-5 text-[#20b883]" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <ButtonLink className="mt-9 w-full justify-center sm:w-auto" href={whatsappUrl} rel="noopener noreferrer" target="_blank">
            <MessageCircle aria-hidden className="size-6" />
            Solicite seu plano personalizado
          </ButtonLink>
        </Reveal>
        <Reveal delay={0.1}>
          <Image
            alt="Ilustração de atendimento personalizado com pessoas montando blocos"
            className="mx-auto w-full max-w-[620px]"
            height="420"
            src={siteImages.personalized}
            unoptimized
            width="620"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#090b0e] py-14 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.1fr_1fr_1.1fr]">
        <div>
          <Logo className="w-36" variant="footer" />
          <p className="mt-7 max-w-xs text-sm font-extrabold leading-relaxed">
            Assessoria para ajudar negócios a crescer de forma consciente.
          </p>
        </div>
        <address className="not-italic">
          <p className="mb-5 text-sm font-black">Contato:</p>
          <a className="mb-3 flex items-center gap-3 text-sm font-semibold text-white/85" href={whatsappUrl} rel="noopener noreferrer" target="_blank">
            <Image
              alt=""
              aria-hidden
              className="size-6"
              height="24"
              src={siteImages.whatsappIcon}
              unoptimized
              width="24"
            />
            {brandValues.phone}
          </a>
          <a className="flex items-center gap-3 text-sm font-semibold text-white/85" href={`mailto:${brandValues.email}`}>
            <Image
              alt=""
              aria-hidden
              className="size-6"
              height="24"
              src={siteImages.emailIcon}
              unoptimized
              width="24"
            />
            {brandValues.email}
          </a>
        </address>
        <div>
          <p className="text-sm font-black">Responsável: Pauline Becker Hellinger</p>
          <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-white/80">
            UX/UI Designer com 20+ anos de experiência presença digital e web.
          </p>
          <div className="mt-5 flex gap-3">
            <a aria-label="LinkedIn" className="grid size-8 place-items-center" href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
              <Image alt="" aria-hidden height="28" src={siteImages.linkedinIcon} unoptimized width="28" />
            </a>
            <a aria-label="Portfólio" className="grid size-8 place-items-center" href="https://www.behance.net/" rel="noopener noreferrer" target="_blank">
              <Image alt="" aria-hidden height="28" src={siteImages.portfolioIcon} unoptimized width="28" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
