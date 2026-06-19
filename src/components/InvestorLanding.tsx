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
  TrendingUp,
} from "lucide-react";
import {
  budgetSplit,
  competitorRows,
  customerSegments,
  deckMetrics,
  financialScenarios,
  heroProof,
  investorRisks,
  investorRoadmap,
  marketContextCards,
  marketTimeline,
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
  { href: "#investor-problem", label: "Проблема туриста" },
  { href: "#market-opportunity", label: "Рынок и возможность" },
  { href: "#competitive-position", label: "Конкурентная позиция" },
  { href: "#validation-customers", label: "Пилот и клиенты" },
  { href: "#seed-business-model", label: "Раунд и бизнес-модель" },
  { href: "#risk-register", label: "Карта рисков" },
  { href: "#implementation-roadmap", label: "Дорожная карта" },
  { href: "#why-now", label: "Почему сейчас" },
  { href: "#investor-room", label: "Комната инвестора" },
];

const investorSectionActions = [
  { href: "https://t.me/USERNAME", label: "Связаться", external: true, accent: true },
  { href: "/assets/caspian-ubook-presentation.pdf", label: "Скачать презентацию", download: true },
  { href: "/developers", label: "Для разработчиков" },
  { href: "/stages", label: "Этапы реализации" },
  { href: "https://caspian-ubook-mvp.lovable.app/app.html", label: "Дизайн-макет", external: true },
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

      <section id="top" className="relative min-h-[92vh] overflow-hidden pt-[112px] md:pt-[72px]">
        <div className="absolute inset-0 bg-[url('/assets/hero-bg.png')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-milk to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(92vh-112px)] max-w-7xl content-center px-4 py-14 md:min-h-[calc(92vh-72px)] md:px-8">
          <div className="max-w-5xl">
            <p className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-cobalt/20 bg-white/75 px-3 py-2 text-sm font-semibold text-cobalt backdrop-blur">
              <Sparkles size={16} /> Caucasus travel concierge layer
            </p>
            <h1 className="font-display text-4xl leading-[1.04] text-ink sm:text-5xl md:text-7xl">
              871,7 тыс. иностранцев приехали в Азербайджан за январь-май 2026. Поездку каждый всё ещё собирает вручную.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
              Госкомстат фиксирует свежий поток из 186 стран: январь-май 2026 ниже января-мая 2025 на 11,0%, но это всё ещё сотни тысяч поездок без единого concierge flow. Жильё в Booking, гид в Telegram, трансфер через знакомых, оплата наличными, поддержка - нигде. Caspian UBook объединяет всё это в одну заявку.
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
            <p className="mt-3 max-w-4xl text-xs leading-5 text-slate-500">
              1 000+ заявок, NPS и conversion - внутренние KPI пилота. Рыночные цифры ниже отделены от модельных показателей.
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
            <Image src="/assets/hero-bg.png" alt="Icherisheher, Baku" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 max-w-xl p-6 text-white">
              <p className="text-sm font-semibold uppercase text-white/75">Concierge-first platform</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Один интерфейс переводит хаос поездки в управляемую заявку.</h2>
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

      <section id="market-opportunity" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase text-cobalt">Market opportunity</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Официальные данные показывают рынок, на котором можно запускать concierge-first пилот.</h2>
            </div>
            <div className="glass-panel relative overflow-hidden p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lagoon/15 blur-2xl" />
              <div className="relative flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-cobalt text-white">
                  <TrendingUp size={22} />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase text-cobalt">market signal</p>
                  <p className="mt-2 text-lg font-semibold leading-7 text-ink">Подтверждены иностранные прибытия, гостиничные ночи и hotel revenue. Пилот превращает этот спрос в измеряемые заявки.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {marketTimeline.map((item, index) => (
              <div key={item.year} className="metric-card signal-card p-5" style={{ animationDelay: `${index * 70}ms` }}>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-cobalt">{item.year}</p>
                  <span className="h-2 w-2 rounded-full bg-lagoon shadow-[0_0_18px_rgba(23,185,193,0.75)]" />
                </div>
                <p className="mt-3 text-4xl font-semibold text-ink md:text-5xl">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
            {deckMetrics.map((metric, index) => (
              <div key={metric.label} className="feature-card signal-card p-5" style={{ animationDelay: `${index * 60}ms` }}>
                <p className="text-3xl font-semibold text-ink md:text-4xl">{metric.value}</p>
                <p className="mt-2 font-semibold text-slate-700">{metric.label}</p>
                <p className="mt-3 text-xs leading-5 text-slate-500">{metric.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {marketContextCards.map((item) => (
              <article key={item.label} className="rounded-md border border-cobalt/15 bg-white/85 p-5 shadow-[0_18px_55px_rgba(34,48,89,0.08)]">
                <p className="text-xs font-semibold uppercase text-cobalt">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-ink">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="competitive-position" className="scroll-mt-24 bg-white px-4 py-16 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-cobalt">Competitive position</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Caspian UBook выигрывает не каталогом, а локальным support layer между туристом и поставщиком.</h2>
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
            Глобальные OTA начинают с каталога. Caspian UBook начинает с локального контекста на трёх языках, партнёрского процесса и поддержки - поэтому может стать операционным слоем поездки, а не ещё одной витриной. Локальные агентства работают сильнее в офлайне, но именно это оставляет место для управляемого digital flow.
          </p>
        </div>
      </section>

      <section id="validation-customers" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="glass-panel p-6">
            <p className="text-sm font-semibold uppercase text-cobalt">Validation plan</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Что уже подготовлено к пилоту.</h2>
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
            <p className="text-sm font-semibold uppercase text-cobalt">Customers</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">Три аудитории. Один интерфейс поездки.</h2>
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
                Раунд финансирует MVP, пилот, партнёрскую сеть, первые продажи и проверку unit economics. Деньги не тратятся на преждевременный запуск всех платформенных функций.
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
                <p className="text-sm font-semibold uppercase text-cobalt">Business model</p>
                <h2 className="mt-3 text-3xl font-semibold text-ink">Экономика показана как pilot model: числа нужны для разговора о раунде, факт появится после 90 дней.</h2>
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

          <p className="mt-4 text-xs leading-5 text-slate-500">¹ Модельные цифры до пилота. Реальные значения фиксируются после 90-дневного sprint.</p>

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
            <p className="text-sm font-semibold uppercase text-cobalt">Risk register</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Риски не скрываем. MVP построен, чтобы проверять их дешево.</h2>
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
                  <span className="font-semibold text-cobalt">Митигация: </span>
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
              <p className="text-sm font-semibold uppercase text-cobalt">Implementation roadmap</p>
              <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">От MVP к транзакционной платформе через проверяемые этапы.</h2>
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
                <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt"><Target size={16} /> PMF rule</p>
                <p className="mt-2 max-w-3xl leading-7 text-slate-700">Переход к оплатам, API, mobile, Telegram и B2B делается только после пилотных данных: заявок, конверсии, NPS, повторного спроса и юридически готовых партнёрских договоров.</p>
              </div>
              <Link href="/developers" className="inline-flex shrink-0 items-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-2 font-semibold text-cobalt transition hover:bg-cobalt hover:text-white">
                Dev spec <BarChart3 size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="why-now" className="scroll-mt-24 bg-milk px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="glass-panel relative overflow-hidden p-6">
            <div className="absolute -bottom-16 -right-12 h-40 w-40 rounded-full bg-cobalt/10 blur-3xl" />
            <p className="text-sm font-semibold uppercase text-cobalt">Why now</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight text-ink md:text-5xl">Сейчас совпали поток, локальные маршруты и потребность в управляемой поездке.</h2>
            <p className="mt-5 text-sm leading-6 text-slate-600">
              Азербайджан уже видит международный поток и гостиничную активность. Следующий шаг - единый цифровой слой между туристом и локальными поставщиками.
            </p>
            <div className="relative mt-6 rounded-md border border-cobalt/15 bg-white/70 p-4">
              <p className="text-xs font-semibold uppercase text-slate-500">timing thesis</p>
              <p className="mt-2 text-2xl font-semibold text-ink">Local-first быстрее глобального каталога там, где важны язык, доверие и ручной fallback.</p>
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




