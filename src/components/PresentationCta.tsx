import { Download, FileText, Sparkles } from "lucide-react";

const deckHref = "/assets/caspian-ubook-presentation.pdf";

export function PresentationCta({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`presentation-cta ${compact ? "p-[1px]" : "p-[2px]"}`}>
      <div className="relative overflow-hidden rounded-[7px] bg-white/[0.94] p-5 shadow-glass backdrop-blur md:p-7">
        <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/50 to-transparent" />
        <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-start gap-4">
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-cobalt text-white shadow-glass">
              <FileText size={23} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-lagoon text-white">
                <Sparkles size={12} />
              </span>
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-xl font-semibold text-ink">Investor room</p>
                <span className="rounded-full border border-cobalt/15 bg-cobalt/5 px-2.5 py-1 text-xs font-semibold text-cobalt">Seed $520K</span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 md:text-base">
Investor deck собирает раунд, пилот, риски и модель в один документ. Этого достаточно, чтобы быстро решить, есть ли смысл переходить к разговору о $520K.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
                <span className="rounded-md bg-slate-100 px-2.5 py-1">PDF deck</span>
                <span className="rounded-md bg-slate-100 px-2.5 py-1">Seed $520K</span>
              </div>
            </div>
          </div>
          <div className="lg:min-w-[220px]">
            <a href={deckHref} download className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cobalt px-4 py-3 text-sm font-semibold text-white shadow-glass transition hover:-translate-y-0.5 hover:bg-ink">
              Скачать презентацию <Download size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
