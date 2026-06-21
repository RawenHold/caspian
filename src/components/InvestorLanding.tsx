import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import {
  budgetSplit,
  competitorRows,
  customerSegments,
  financialScenarios,
  heroProof,
  investorRisks,
  investorRoadmap,
  marketProofNotes,
  marketSnapshot,
  painPoints,
  problemJourney,
  revenueStreams,
  solutionPillars,
  unitEconomics,
  validationItems,
  whyNow,
} from "@/data/deck";
import { PresentationCta } from "./PresentationCta";
import { SideSectionNav } from "./SideSectionNav";

const investorSectionNav = [
  { href: "#investor-problem", label: "Проблема" },
  { href: "#market-opportunity", label: "Рынок" },
  { href: "#competitive-position", label: "Конкуренты" },
  { href: "#validation-customers", label: "Клиенты" },
  { href: "#seed-business-model", label: "Раунд" },
  { href: "#risk-register", label: "Риски" },
  { href: "#implementation-roadmap", label: "Roadmap" },
  { href: "#why-now", label: "Почему сейчас" },
  { href: "#investor-room", label: "Deck" },
];

const investorSectionActions = [
  { href: "/assets/caspian-ubook-presentation.pdf", label: "Скачать презентацию", download: true },
  { href: "/developers", label: "Для разработчиков" },
  { href: "/stages", label: "Этапы реализации" },
  { href: "https://caspian-ubook.lovable.app/", label: "Дизайн-макет", external: true },
];

function ResponsiveTable({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-md border border-slate-200 bg-white shadow-[0_18px_55px_rgba(34,48,89,0.08)]">
      <table className="min-w-[760px] w-full border-collapse text-left text-sm">{children}</table>
    </div>
  );
}

function PositionCell({ value, highlight = false }: { value: string; highlight?: boolean }) {
  const normalized = value.toLowerCase();
  const isStrong = ["✓", "да", "высокий"].includes(normalized);
  const isWeak = ["-", "нет", "низкий"].includes(normalized);
  const isPartial = normalized.includes("част") || normalized.includes("сред") || normalized.includes("огранич");
  const tone = highlight || isStrong
    ? "border-lagoon/35 bg-lagoon/10 text-cobalt"
    : isWeak
      ? "border-slate-200 bg-slate-50 text-slate-500"
      : isPartial
        ? "border-gold/40 bg-gold/10 text-ink"
        : "border-slate-200 bg-white text-slate-700";

  return <span className={"inline-flex min-w-20 justify-center rounded-md border px-2.5 py-1 text-xs font-semibold " + tone}>{value}</span>;
}

export function InvestorLanding() {
  return (
    <>
      <SideSectionNav
        actions={investorSectionActions}
        ariaLabel="Разделы и действия для инвестора"
        items={investorSectionNav}
        kicker="Разделы инвестора"
      />

      <section id="top" className="relative min-h-[88vh] overflow-hidden pt-[112px] md:pt-[72px]">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-milk to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(88vh-112px)] max-w-7xl content-center px-4 py-12 md:min-h-[calc(88vh-72px)] md:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-cobalt/20 bg-white/75 px-3 py-2 text-sm font-semibold text-cobalt backdrop-blur">
              <Sparkles size={16} /> AI travel консьерж для Азербайджана
            </p>
            <h1 className="font-display text-4xl leading-[1.04] text-ink sm:text-5xl md:text-6xl">
              Три года подряд Азербайджан принимает миллионы туристов без единой платформы бронирования.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              Стартуем с 3 core-сценариев: жильё, гиды/туры и логистика. Затем расширяем платформу до 12+ вертикалей: визы, HoReCA, страховка, финтех, события, shopping, SOS, перевод и AI-консьерж.
            </p>
            <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
              {heroProof.map((item) => (
                <div key={item.label} className="signal-card p-4">
                  <p className="text-xs font-semibold uppercase text-slate-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-semibold text-ink">{item.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 max-w-3xl text-xs leading-5 text-slate-500">
              Цифры ниже разделены просто: факт, расчёт и цель. Так TAM/SAM/SOM читаются без скрытой математики.
            </p>
          </div>
        </div>
      </section>

      <section id="investor-problem" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.84fr_1.16fr]">
          <div className="relative">
            <p className="text-sm font-semibold uppercase text-cobalt">Investor problem</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">{problemJourney.title}</h2>
            <div className="mt-6 rounded-md border border-cobalt/15 bg-white/78 p-5 shadow-glass">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-cobalt text-white">
                  <Route size={22} />
                </span>
                <p className="text-sm font-semibold uppercase text-cobalt">реальный сценарий туриста</p>
              </div>
              <p className="mt-4 text-lg leading-8 text-slate-700">{problemJourney.text}</p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {painPoints.map((point, index) => (
              <article key={point.title} className="feature-card group rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cobalt/25 hover:shadow-glass">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase text-cobalt">точка боли {index + 1}</span>
                    <h3 className="mt-2 text-xl font-semibold text-ink">{point.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cobalt/5 text-cobalt transition group-hover:bg-cobalt group-hover:text-white">
                    <Compass size={19} />
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-md bg-slate-50 p-3">
                    <p className="text-xs font-semibold uppercase text-slate-500">сейчас</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{point.now}</p>
                  </div>
                  <div className="rounded-md bg-cobalt/5 p-3">
                    <p className="text-xs font-semibold uppercase text-cobalt">стоимость проблемы</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">{point.cost}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-md">
            <Image src="https://eurasia.travel/wp-content/uploads/2025/03/2.-Maiden-Tower-Baku.jpg" alt="Maiden Tower, Baku" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-6 text-white">
              <p className="text-sm font-semibold uppercase text-white/75">Платформа управляемой поездки</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Мы продаём не список услуг, а собранную поездку с ответственным исполнением.</h2>
            </div>
          </div>
          <div className="grid content-center gap-4">
            {solutionPillars.map((pillar) => (
              <article key={pillar.title} className="glass-panel p-5">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-lagoon" size={20} />
                  <h3 className="text-xl font-semibold text-ink">{pillar.title}</h3>
                </div>
                <p className="mt-3 leading-7 text-slate-700">{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="market-opportunity" className="scroll-mt-24 bg-milk px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase text-cobalt">Рынок и разрыв</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-5xl">Размер ниши считаем через проверяемые слои: факт, онлайн-доля и доля захвата.</h2>
            </div>
            <div className="glass-panel p-5">
              <p className="text-sm font-semibold uppercase text-cobalt">вывод для инвестора</p>
              <p className="mt-2 text-lg font-semibold leading-7 text-ink">Основной TAM — $1.56B официальных доходов от въездного туризма. SAM — $608M онлайн-доступной доли, SOM 5-го года — ~$6.7-12M чистой выручки.</p>
            </div>
          </div>

          <div className="mt-8 grid gap-3 lg:grid-cols-3">
            {marketSnapshot.map((item) => (
              <article key={item.label} className="signal-card p-5">
                <p className="text-xs font-semibold uppercase text-cobalt">{item.label}</p>
                <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-1">
                  <p className="text-5xl font-semibold leading-none text-ink">{item.value}</p>
                  <p className="pb-1 text-lg font-semibold text-slate-700">{item.title}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-3 rounded-md border border-cobalt/10 bg-white/70 p-4 md:grid-cols-3">
            {marketProofNotes.map((note) => (
              <p key={note} className="text-xs leading-5 text-slate-600">{note}</p>
            ))}
          </div>

        </div>
      </section>

      <section id="competitive-position" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cobalt">Конкурентная позиция</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Booking и GetYourGuide продают список. Мы продаём результат: проверенного партнёра, понятный статус и человека, который ответит, если что-то пошло не так.</h2>
          </div>
          <div className="mt-8">
            <ResponsiveTable>
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Критерий</th>
                  <th className="px-4 py-3 text-cobalt">Caspian UBook</th>
                  <th className="px-4 py-3">Booking</th>
                  <th className="px-4 py-3">GetYourGuide</th>
                  <th className="px-4 py-3">Regional OTA</th>
                  <th className="px-4 py-3">Local agencies</th>
                </tr>
              </thead>
              <tbody>
                {competitorRows.map((row) => (
                  <tr key={row.label} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-semibold text-ink">{row.label}</td>
                    <td className="px-4 py-4"><PositionCell value={row.caspian} highlight /></td>
                    <td className="px-4 py-4"><PositionCell value={row.booking} /></td>
                    <td className="px-4 py-4"><PositionCell value={row.getYourGuide} /></td>
                    <td className="px-4 py-4"><PositionCell value={row.yandex} /></td>
                    <td className="px-4 py-4"><PositionCell value={row.agencies} /></td>
                  </tr>
                ))}
              </tbody>
            </ResponsiveTable>
          </div>
          <p className="mt-5 rounded-md border border-cobalt/15 bg-cobalt/5 p-5 leading-7 text-slate-700">
            В Азербайджане это преимущество нельзя скопировать за квартал, потому что оно строится на доверии локальных поставщиков, проверке качества и ручном fallback. Поэтому следующий вопрос не в том, есть ли рынок, а в том, как быстро проверить его в пилоте.
          </p>
        </div>
      </section>

      <section id="validation-customers" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Проверка спроса</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Пилот проверяет PMF, партнёров и первые 1 000+ заявок.</h2>
            <div className="mt-6 grid gap-3">
              {validationItems.map((item) => (
                <div key={item.title} className="rounded-md border border-slate-200 bg-white/75 p-4">
                  <h3 className="font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Клиенты</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Три клиента, один интерфейс: премиальный отдых, MICE и внутренний туризм.</h2>
            <div className="mt-6 grid gap-3">
              {customerSegments.map((segment) => (
                <div key={segment.title} className="rounded-md border border-slate-200 bg-white/75 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-ink">{segment.title}</h3>
                    <span className="rounded-md bg-cobalt/[0.08] px-2.5 py-1 text-xs font-semibold text-cobalt">{segment.check}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{segment.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="seed-business-model" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="text-cobalt" size={24} />
                <div>
                  <p className="text-sm font-semibold uppercase text-cobalt">Seed round 2026</p>
                  <h2 className="mt-1 text-4xl font-semibold text-ink">$520K</h2>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                $520K дают 18 месяцев runway: Phase 1, PMF sprint, MVP launch и подготовка к SuperApp scale.
              </p>
              <div className="mt-5 grid gap-2">
                {budgetSplit.map((item) => (
                  <div key={item.label} className="rounded-md border border-slate-200 bg-white/80 p-3">
                    <div className="flex flex-wrap justify-between gap-3 text-sm font-semibold text-slate-700">
                      <span>{item.label}</span>
                      <span>{item.amount} · {item.value}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.text}</p>
                    <div className="mt-2 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-cobalt" style={{ width: item.value }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="glass-panel p-6">
                <p className="text-sm font-semibold uppercase text-cobalt">Бизнес-модель</p>
                <h2 className="mt-3 text-3xl font-semibold text-ink">Четыре источника выручки и unit economics сверены с питчдеком: CAC, LTV, LTV/CAC и gross margin подтверждаем пилотом.</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {revenueStreams.map((stream) => (
                    <div key={stream.title} className="signal-card p-4">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-semibold text-ink">{stream.title}</h3>
                        <span className="text-2xl font-semibold text-cobalt">{stream.value}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{stream.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:grid-cols-4">
                {unitEconomics.map((item) => (
                  <div key={item.label} className="signal-card p-4">
                    <p className="text-2xl font-semibold text-ink">{item.value}</p>
                    <p className="mt-2 text-sm font-semibold text-slate-700">{item.label}</p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">¹ CAC/LTV, валовая маржа и прогноз выручки подтверждаются через пилот, retention и платную конверсию.</p>

          <div className="mt-6">
            <ResponsiveTable>
              <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3">Сценарий</th>
                  <th className="px-4 py-3">Заявки</th>
                  <th className="px-4 py-3">Конверсия</th>
                  <th className="px-4 py-3">Net revenue</th>
                </tr>
              </thead>
              <tbody>
                {financialScenarios.map((row) => (
                  <tr key={row.scenario} className="border-t border-slate-100">
                    <td className="px-4 py-4 font-semibold text-ink">{row.scenario}</td>
                    <td className="px-4 py-4 text-slate-700">{row.requests}</td>
                    <td className="px-4 py-4 text-slate-700">{row.conversion}</td>
                    <td className="px-4 py-4 font-semibold text-cobalt">{row.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </ResponsiveTable>
          </div>
        </div>
      </section>

      <section id="risk-register" className="scroll-mt-24 bg-ceramic px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-cobalt">Риски</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Мы называем риски первыми, потому что инвестор всё равно их увидит. MVP построен так, чтобы каждый риск стоил недели, а не года.</h2>
          </div>
          <div className="grid gap-3">
            {investorRisks.map((item) => (
              <article key={item.title} className="glass-panel p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-cobalt" size={20} />
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.risk}</p>
                <p className="mt-3 rounded-md bg-white/75 p-3 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-cobalt">Как закрываем: </span>
                  {item.mitigation}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="implementation-roadmap" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-cobalt">План реализации</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">18 месяцев до Series A: сначала PMF, затем MVP, затем 12 вертикалей и региональная экспансия.</h2>
            </div>
            <Link href="/stages" className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 font-semibold text-white transition hover:bg-cobalt">
              Этапы реализации <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {investorRoadmap.map((step) => (
              <article key={step.period} className="glass-panel p-5">
                <p className="text-sm font-semibold text-cobalt">{step.period}</p>
                <h3 className="mt-3 text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-md border border-cobalt/15 bg-cobalt/5 p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt"><Target size={16} /> Правило PMF</p>
                <p className="mt-2 max-w-3xl leading-7 text-slate-700">PMF подтверждаем повторным спросом, NPS, retention и платной конверсией. Только после этого расширяем API, B2B и платежный слой.</p>
              </div>
              <Link href="/developers" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-2 font-semibold text-cobalt transition hover:bg-cobalt hover:text-white">
                Техспецификация <BarChart3 size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why-now" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="glass-panel relative overflow-hidden p-6">
            <div className="absolute -bottom-16 -right-12 h-40 w-40 rounded-full bg-cobalt/10 blur-3xl" />
            <p className="text-sm font-semibold uppercase text-cobalt">Почему сейчас</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Окно открыто: государство усилило видимость страны, а цифровой слой бронирования ещё не сформирован.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Начинаем с Азербайджана, затем масштабируем модель на Южный Кавказ и Каспийский регион.
            </p>
            <div className="relative mt-6 rounded-md border border-cobalt/15 bg-white/70 p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">тезис момента</p>
              <p className="mt-2 text-2xl font-semibold text-ink">Смысл момента: спрос уже есть, партнёрская сеть ещё формируется, а локальный AI может стать точкой входа раньше глобальных игроков.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyNow.map((item, index) => (
              <div key={item} className="feature-card signal-card p-5 text-sm leading-6 text-slate-700" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cobalt text-xs font-semibold text-white">0{index + 1}</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-cobalt/20 to-transparent" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="investor-room" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-5xl">
          <PresentationCta />
        </div>
      </section>
    </>
  );
}




