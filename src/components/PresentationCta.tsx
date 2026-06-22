import Link from "next/link";
import { ArrowRight, Download, FileText, MessageCircle, Sparkles } from "lucide-react";

const deckHref = "/assets/caspian-ubook-presentation.pdf";
const telegramHref = "https://t.me/LazDmitriy";

export function PresentationCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`presentation-cta mx-auto max-w-6xl ${compact ? "p-[1px]" : "p-[2px]"}`}>
      <div className="relative overflow-hidden rounded-[7px] bg-white/[0.96] px-5 py-6 shadow-glass backdrop-blur md:px-8 md:py-7">
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold via-lagoon to-cobalt" />
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div className="flex items-start gap-4 md:gap-5">
            <span className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-cobalt text-white shadow-glass md:h-[74px] md:w-[74px]">
              <FileText size={28} />
              <span className="absolute -right-1.5 -top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-lagoon text-white shadow-glass">
                <Sparkles size={14} />
              </span>
            </span>
            
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xl font-semibold text-ink">Для инвестора</p>
                <span className="rounded-full border border-cobalt/15 bg-cobalt/5 px-2.5 py-1 text-xs font-semibold text-cobalt">Seed $520K</span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
                Связаться с нами для обсуждения MVP проекта.
              </p>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[560px]">
            <a href={telegramHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-cobalt px-4 py-3 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-ink">
              Связаться <MessageCircle size={16} />
            </a>
            <a href={deckHref} download className="inline-flex items-center justify-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-3 text-sm font-semibold text-cobalt transition hover:-translate-y-0.5 hover:bg-cobalt/5">
              Скачать Презентацию <Download size={16} />
            </a>
            <Link href="/stages" className="inline-flex items-center justify-center gap-2 rounded-md border border-cobalt/20 bg-white px-4 py-3 text-sm font-semibold text-cobalt transition hover:-translate-y-0.5 hover:bg-cobalt/5">
              Этапы реализации <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
