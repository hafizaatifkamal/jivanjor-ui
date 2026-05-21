import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden my-20">
      <div className="flex flex-col items-center justify-center text-center relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <Image
          className="mb-4"
          src="/images/badge.png"
          width={40}
          height={40}
          alt="badge"
        />
        <div className="space-y-4 max-w-180">
          <h2 className="font-amethysta text-4xl md:text-5xl lg:text-6xl">
            Trusted by People Who Know the Work
          </h2>
          <p className="text-2xl">
            Hear from carpenters, contractors and dealers who rely on Jivanjor
            for real projects.
          </p>
          <button className="font-medium min-w-35 px-4 py-2 rounded-3xl text-sm bg-linear-to-tr from-[#FF0009] to-[#772571] text-white">
            Partner With Us
          </button>
        </div>
      </div>
    </section>
  );
}
