import Image from "next/image";
import React from "react";

export default function Ecosystem() {
  return (
    <section className="relative bg-surface py-20">
      <div className="mx-auto max-w-7xl justify-center text-center px-6">
        <div className="mx-auto max-w-4xl space-y-6 text-center w-full">
          <h2 className="font-amethysta text-4xl md:text-5xl lg:text-6xl">
            Built Around India’s Woodworking Professionals
          </h2>
          <p className="text-2xl">
            Jivanjor continues to grow through the trust of carpenters,
            contractors, dealers and channel partners across India’s woodworking
            ecosystem. 
          </p>
        </div>
      </div>
      <div className="relative p-10 my-10 bg-linear-to-r from-[#FF0009] to-[#772571] text-white">
        {/* watermark */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <Image
            src="/images/watermark.png"
            alt="watermark"
            width={900}
            height={450}
            className="w-full"
          />
        </div>
        <div className="mx-auto max-w-7xl justify-center space-y-6 ">
          <h2 className="font-amethysta text-4xl md:text-5xl">
            Grow Your Business With a Trusted Adhesive
          </h2>
          <div className="flex flex-col justify-between lg:flex-row gap-4">
            <p className="text-2xl max-w-xl">
              Work with a growing brand trusted by woodworking professionals,
              dealers and channel partners.
            </p>
            <button className="cursor-pointer font-medium text-center text-lg rounded-full min-w-48 px-4 py-2 border border-spacing-1.5 border-white">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
