import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, Database, GitPullRequestArrow, Search, ShieldCheck, TerminalSquare } from "lucide-react";
import { DeveloperSearch } from "@/components/DeveloperSearch";
import { Footer } from "@/components/Footer";
import { ServiceMatrix } from "@/components/ServiceMatrix";
import { SideSectionNav } from "@/components/SideSectionNav";
import { StageTimeline } from "@/components/StageTimeline";
import { TopNav } from "@/components/TopNav";
import { architectureNotes, azDevContext, dataEntities, dataRelations, dataRules, glossary, onboardingSteps, qaStrategy, quickNav, readyChecklist, techStack } from "@/data/developer";

const quickNavHref: Record<string, string> = {
  Backend: "#tech-stack",
  Frontend: "#tech-stack",
  Database: "#db",
  DevOps: "#tech-stack",
  QA: "#qa",
  AI: "#glossary",
  Этапы: "#stages",
  Глоссарий: "#glossary",
};

const developerSectionNav = [
  { href: "#developer-intro", label: "Введение в ТЗ" },
  { href: "#az-dev-context", label: "AZ Dev контекст" },
  { href: "#tech-stack", label: "Стек технологий" },
  { href: "#db", label: "Карта данных" },
  { href: "#stages", label: "Этапы реализации" },
  { href: "#developer-search", label: "Поиск по ТЗ" },
  { href: "#services-map", label: "Карта услуг MVP" },
  { href: "#qa", label: "Онбординг и QA" },
  { href: "#glossary", label: "Глоссарий" },
];

const developerSectionActions = [
  { href: "/stages", label: "Все этапы", accent: true },
  { href: "/", label: "Для инвестора" },
  { href: "#glossary", label: "Глоссарий" },
  { href: "https://caspian-ubook.lovable.app/", label: "Дизайн-макет", external: true },
];

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase text-cobalt">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-lg leading-8 text-slate-700">{text}</p> : null}
    </div>
  );
}

export default function DevelopersPage() {
  return (
    <main>
      <TopNav active="developers" />
      <SideSectionNav
        actions={developerSectionActions}
        ariaLabel="Разделы и действия для разработчиков"
        items={developerSectionNav}
        kicker="Разделы разработки"
      />
      <section id="developer-intro" className="scroll-mt-24 bg-ceramic px-4 pb-12 pt-32 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase text-cobalt">
              <Code2 size={16} /> Для разработчиков
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-ink md:text-6xl">Полная техническая спецификация Caspian UBook MVP.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Здесь собраны технический стек, архитектурные решения, роли, критерии приёмки и ограничения MVP.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {quickNav.map((item) => (
                <a key={item} href={quickNavHref[item]} className="rounded-md border border-cobalt/15 bg-white/80 px-3 py-2 text-sm font-semibold text-cobalt transition hover:bg-white">
                  {item}
                </a>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/stages" className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 font-semibold text-white shadow-lift transition hover:bg-ink">
                Этапы реализации <ArrowRight size={18} />
              </Link>
              <a href="#developer-search" className="inline-flex items-center gap-2 rounded-md border border-cobalt/20 bg-white/80 px-5 py-3 font-semibold text-cobalt backdrop-blur transition hover:bg-white">
                Поиск по ТЗ <Search size={18} />
              </a>
            </div>
          </div>

          <div className="rounded-md border border-red-200 bg-red-50/85 p-5 shadow-glass">
            <h2 className="text-2xl font-semibold text-ink">Главное правило MVP</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Сначала строим: заявки + admin/support + статусы + аналитика.
            </p>
            <p className="mt-3 rounded-md bg-white/80 p-3 text-sm leading-6 text-slate-700">
              Только после пилота, договоров и legal readiness: API-бронирования, онлайн-оплаты, mobile, Telegram и B2B.
            </p>
            <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
              <span className="rounded-md bg-white/75 p-3">1. Не называть информационную услугу бронированием.</span>
              <span className="rounded-md bg-white/75 p-3">2. Внешние интеграции - только через backend.</span>
              <span className="rounded-md bg-white/75 p-3">3. Каждая заявка: статус + владелец + audit log.</span>
            </div>
          </div>
        </div>
      </section>

      <section id="az-dev-context" className="scroll-mt-24 bg-white px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="AZ Dev Context"
            title="Локальный контекст, который влияет на архитектуру."
            text="Платежи, языки, персональные данные и партнёрская операционка в Азербайджане не должны быть спрятаны в сносках. Это ограничения MVP и входные данные для архитектуры."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {azDevContext.map((item) => (
              <article key={item.title} className="signal-card p-5">
                <p className="text-xs font-semibold uppercase text-cobalt">{item.value}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="tech-stack" className="bg-white px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Tech stack"
            title="Единая карта технологий для MVP."
            text="Каждый пункт показывает не только стек, но и причину выбора. Это снижает риск случайных замен архитектуры по вкусу исполнителя."
          />
          <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {techStack.map((item) => (
              <article key={item.layer} className="glass-panel p-5">
                <p className="text-sm font-semibold uppercase text-cobalt">{item.layer}</p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{item.value}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.note}</p>
                <p className="mt-3 rounded-md bg-cobalt/5 p-3 text-sm leading-6 text-slate-700">
                  <span className="font-semibold text-cobalt">Почему: </span>{item.why}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 p-5">
            <p className="text-sm font-semibold uppercase text-red-700">Платежи в MVP</p>
            <p className="mt-2 text-lg font-semibold text-ink">Система автоматически регистрирует и отслеживает платежи.</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">MVP поддерживает базовые онлайн-платежи через локальных и международных провайдеров, включая банковские карты, в псоледующем Apple Pay и Google Pay.</p>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {architectureNotes.map((item) => (
              <div key={item} className="rounded-md border border-cobalt/15 bg-cobalt/5 p-4 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="db" className="bg-milk px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Data map"
            title="Логическая карта данных."
            text="Landing не должен заменять Prisma schema. Здесь только связи, правила и доменная логика, которую нужно понимать перед задачей."
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="grid gap-3 md:grid-cols-2">
                {dataEntities.map((entity) => (
                  <article key={entity.name} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                    <h3 className="flex items-center gap-2 font-semibold text-ink">
                      <Database size={17} className="text-cobalt" /> {entity.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{entity.role}</p>
                  </article>
                ))}
              </div>
            </div>
            <aside className="glass-panel p-5">
              <h3 className="text-xl font-semibold text-ink">Связи и правила</h3>
              <div className="mt-4 grid gap-2">
                {dataRelations.map((item) => (
                  <p key={item} className="rounded-md border border-slate-200 bg-white/75 p-3 text-sm leading-6 text-slate-700">{item}</p>
                ))}
              </div>
              <div className="mt-4 grid gap-2">
                {dataRules.map((item) => (
                  <p key={item} className="rounded-md bg-cobalt/5 p-3 text-sm leading-6 text-slate-700">{item}</p>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div id="stages">
        <StageTimeline />
      </div>

      <section id="developer-search" className="bg-white">
        <DeveloperSearch />
      </section>

      <div id="services-map" className="scroll-mt-24">
        <ServiceMatrix />
      </div>

      <section id="qa" className="bg-white px-4 py-14 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle
                eyebrow="Onboarding"
                title="Первые 2 часа нового разработчика."
                text="Исполнитель не берёт задачу, пока не поднял проект, не прошёл базовый flow и не понял границы текущего этапа."
              />
              <div className="mt-6 grid gap-2">
                {onboardingSteps.map((item, index) => (
                  <div key={item} className="flex gap-3 rounded-md border border-slate-200 bg-white p-3 text-sm leading-6 text-slate-700">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cobalt text-xs font-semibold text-white">{index + 1}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-md border border-lagoon/25 bg-lagoon/5 p-4 text-sm font-semibold leading-6 text-slate-700">
                Критерий готовности: код проверен, тесты пройдены, задача соответствует требованиям и принята.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="glass-panel p-5">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                  <GitPullRequestArrow className="text-cobalt" size={20} /> Критерий готовности
                </h3>
                <div className="mt-4 grid gap-2">
                  {readyChecklist.map((item) => (
                    <p key={item} className="flex gap-2 rounded-md bg-white/75 p-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-1 shrink-0 text-lagoon" size={16} /> {item}
                    </p>
                  ))}
                </div>
              </div>
              <div className="glass-panel p-5">
                <h3 className="flex items-center gap-2 text-xl font-semibold text-ink">
                  <ShieldCheck className="text-cobalt" size={20} /> QA и тестирование
                </h3>
                <div className="mt-4 grid gap-2">
                  {qaStrategy.map((item) => (
                    <div key={item.title} className="rounded-md border border-slate-200 bg-white/75 p-3">
                      <p className="font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="glossary" className="scroll-mt-24 bg-milk px-4 py-14 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-md border border-cobalt/15 bg-white/85 p-5 shadow-glass">
              <p className="text-sm font-semibold uppercase text-cobalt">Glossary</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">Термины ниже влияют на БД, API, UI-статусы, поддержку и ожидания инвесторов.</p>
            </div>
          </aside>
          <div>
            <SectionTitle
              eyebrow="Glossary"
              title="Единый словарь для команды."
              text="Эти термины нельзя трактовать свободно: они влияют на модель данных, API, статусы услуг и Definition of Done."
            />
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {glossary.map((item) => (
                <article key={item.term} className="rounded-md border border-slate-200 bg-white p-4">
                  <h3 className="flex items-center gap-2 font-semibold text-ink">
                    <TerminalSquare size={17} className="text-cobalt" /> {item.term}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.definition}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
