import Link from "next/link";
import { ArrowRight, Download, FileText, MessageCircle, Sparkles } from "lucide-react";

const deckHref = "/assets/caspian-ubook-presentation.pdf";
const telegramHref = "https://t.me/LazDmitriy";

export function PresentationCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`presentation-cta ${compact ? "p-[1px]" : "p-[2px]"}`}>
      <div className="relative overflow-hidden rounded-[7px] bg-white/[0.96] p-6 shadow-glass backdrop-blur md:p-8">
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-lagoon via-cobalt to-gold" />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.25fr] lg:items-center">
          <div className="flex items-start gap-5">
            <span className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-cobalt text-white shadow-glass md:h-24 md:w-24">
              <FileText size={34} />
              <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-lagoon text-white shadow-glass">
                <Sparkles size={18} />
              </span>
            </span>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">Комната инвестора</h2>
                <span className="rounded-full border border-cobalt/20 bg-cobalt/5 px-4 py-1.5 text-sm font-semibold text-cobalt">Seed $520K</span>
              </div>
              <p className="mt-5 max-w-md text-lg leading-8 text-slate-600">
                Быстрый доступ к прямому контакту и investor deck. Всё, что нужно для первого разговора по раунду и пилоту.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-500">
                <span className="rounded-md bg-slate-100 px-3 py-1.5">Telegram</span>
                <span className="rounded-md bg-slate-100 px-3 py-1.5">Презентация PDF</span>
                <span className="rounded-md bg-slate-100 px-3 py-1.5">Seed-раунд</span>
              </div>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <a href={telegramHref} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-cobalt px-5 py-4 text-base font-semibold text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-ink">
              Связаться <MessageCircle size={20} />
            </a>
            <a href={deckHref} download className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-cobalt/20 bg-white px-5 py-4 text-base font-semibold text-cobalt transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-cobalt/5">
              Скачать презентацию <Download size={20} />
            </a>
            <Link href="/stages" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-cobalt/20 bg-white px-5 py-4 text-base font-semibold text-cobalt transition hover:-translate-y-0.5 hover:border-cobalt/35 hover:bg-cobalt/5">
              Этапы реализации <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
