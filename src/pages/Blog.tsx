import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const Blog = () => {
  return (
    <div
      className="min-h-screen antialiased selection:bg-amber-900/40 selection:text-amber-50"
      style={{
        background:
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(180, 83, 9, 0.12), transparent 55%), #0f0e0c",
        color: "#e8e4dc",
      }}
    >
      <header className="sticky top-0 z-10 border-b border-stone-800/60 bg-[#0f0e0c]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-2xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <Link
            to="/"
            className="group font-dmSans inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-500 transition-colors hover:text-amber-200/90"
          >
            <FaAngleLeft className="text-[10px] transition-transform group-hover:-translate-x-0.5" />
            Portfolio
          </Link>
          <span className="font-literata text-sm font-semibold tracking-wide text-stone-400">
            Field notes
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-5 pb-24 pt-14 sm:px-8 sm:pt-20">
        <p className="font-dmSans text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-600/90">
          Articles
        </p>
        <h1 className="font-literata mt-4 text-[2.125rem] font-semibold leading-[1.12] text-stone-50 sm:text-5xl sm:leading-[1.08]">
          Field notes
        </h1>
        <p className="font-dmSans mt-7 max-w-lg text-[1.05rem] leading-[1.65] text-stone-400">
          Longer-form, more formal writing on a range of subjects — software and
          engineering, culture and society, politics, art, religion and
          contemplative practice, books, and whatever else merits a careful
          treatment. These pieces sit apart from the portfolio above.
        </p>

        <div
          className="my-14 h-px w-full max-w-[4.5rem] bg-gradient-to-r from-amber-700/50 to-transparent"
          aria-hidden
        />

        <section aria-labelledby="archive-heading">
          <div className="flex items-baseline justify-between gap-4">
            <h2
              id="archive-heading"
              className="font-dmSans text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500"
            >
              Archive
            </h2>
            <span className="font-dmSans text-[10px] text-stone-600">
              Newest first
            </span>
          </div>

          <ul className="mt-6 divide-y divide-stone-800/70 border-t border-stone-800/70">
            <li className="grid gap-4 py-10 sm:grid-cols-[minmax(0,5.5rem)_1fr] sm:gap-10 sm:py-12">
              <span className="font-dmSans text-sm tabular-nums text-stone-600 sm:pt-1">
                —
              </span>
              <div>
                <p className="font-literata text-lg font-medium text-stone-300 sm:text-xl">
                  No articles yet
                </p>
                <p className="font-dmSans mt-3 max-w-md text-sm leading-relaxed text-stone-500">
                  The first entries will appear here with a date and title in the
                  archive list above.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <footer className="mt-20 border-t border-stone-800/60 pt-10">
          <p className="font-dmSans text-xs text-stone-600">
            Giorgi · articles and longer-form writing, separate from the portfolio.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Blog;
