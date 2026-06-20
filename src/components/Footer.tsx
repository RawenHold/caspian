import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-ink px-4 py-12 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-semibold">Caspian UBook</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Investor landing + developer specification for an Azerbaijan travel concierge platform. MVP проверяет спрос, Post-MVP расширяет сервисы после данных и договоров.
          </p>
          <p className="mt-3 max-w-md text-xs leading-5 text-white/45">
            Hero photo: AlixSaz / Wikimedia Commons, CC BY-SA 4.0.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Разделы</h3>
          <div className="mt-3 grid gap-2 text-sm text-white/70">
            <Link href="/" className="transition hover:text-white">Для инвестора</Link>
            <Link href="/developers" className="transition hover:text-white">Для разработчиков</Link>
            <Link href="/stages" className="transition hover:text-white">Этапы реализации</Link>
            <a href="/assets/caspian-ubook-presentation.pdf" target="_blank" rel="noreferrer" className="transition hover:text-white">Презентация PDF</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
