"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Jivanjor hero thumbnail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/30 to-black/90" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-md space-y-8 pt-80">
          <h1 className="text-4xl font-amethysta tracking-[0%] text-white sm:text-5xl">
            Dependable Bonds for Indian Homes
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="#product-section"
              className="min-w-36 rounded-full bg-white px-6 py-2 text-sm font-medium text-black shadow-lg shadow-black/20 transition hover:bg-white/90"
            >
              Explore Products
            </a>
            <a
              href="#about-section"
              className="min-w-36 rounded-full border-2 border-white/30 px-6 py-2 text-sm font-medium text-white transition hover:border-white hover:bg-white/5"
            >
              About Jivanjor
            </a>
          </div>

          {/* <div className="relative flex items-center justify-center">
            <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-4xl border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/50">
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero.png"
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-black shadow-xl transition hover:scale-105"
                >
                  <span className="text-3xl font-bold">▶</span>
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
