import Image from "next/image";

export default function RightChoice() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Rectangle 5.png"
          className="object-cover"
          alt="Right Choice"
          priority
          fill
        />
        {/* <div className="absolute inset-0 bg-linear-to-r from-[#FF0009] to-[#772571]" /> */}
      </div>
      <div className="flex relative mx-auto min-h-screen max-w-7xl px-6 py-24 lg:px-10">
        <div className="max-w-xl text-center md:text-start">
          <h2 className="font-amethysta text-4xl md:text-5xl lg:text-6xl text-white">
            Find The Right Adhesive
          </h2>
        </div>
      </div>
    </section>
  );
}
