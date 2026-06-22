import Image from "next/image";
import { marketCards, marketSources } from "@/data/market";
import { SectionHeader } from "./SectionHeader";

const sourceTone: Record<string, string> = {
  official: "bg-teal-50 text-teal-800 border-teal-200",
  model: "bg-amber-50 text-amber-800 border-amber-200",
};

export function MarketSection() {
  return (
    <section className="bg-white px-4 py-20 md:px-8">
      <SectionHeader
        eyebrow="Market opportunity"
        title="Официальные данные подтверждают активный туристический рынок Азербайджана."
        text="Показываем только публично подтверждённые показатели: прибытия, гостиничные ночи и выручку отелей."
      />
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative min-h-[420px] overflow-hidden rounded-md">
          <Image src="/assets/hero-bg.png" alt="Icherisheher, Baku" fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <p className="text-sm font-semibold uppercase text-white/80">Tourism platform thesis</p>
            <h3 className="mt-2 text-3xl font-semibold">Пилотный проект упрощает поиск информации о путешествиях до одного запроса.</h3>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {marketCards.map((card) => (
            <article key={card.label} className="glass-panel p-5">
              <div className={`mb-5 inline-flex rounded-md border px-2.5 py-1 text-xs font-semibold ${sourceTone[card.source]}`}>
                {card.source}
              </div>
              <p className="text-sm font-semibold uppercase text-slate-500">{card.label}</p>
              <div className="mt-3 text-5xl font-semibold text-ink">{card.value}</div>
              <p className="mt-3 leading-6 text-slate-700">{card.detail}</p>
              <p className="mt-4 text-sm leading-6 text-slate-500">{card.note}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl rounded-md border border-slate-200 bg-slate-50 p-5 text-sm leading-6 text-slate-600">
        {marketSources.map((source) => (
          <p key={source}>{source}</p>
        ))}
      </div>
    </section>
  );
}



