import Image from "next/image";
import React from "react";

const features = [
  { icon: "/images/Asterisk.png", title: "Consistent Quality" },
  { icon: "/images/Up-and-down.png", title: "Ease of Application" },
  { icon: "/images/Connection-point.png", title: "Range of Products" },
  { icon: "/images/Tag.png", title: "Preferred by Experts" },
];

export default function Professional() {
  return (
    <section className="mx-auto max-w-7xl text-center py-20 px-6">
      <h2 className="font-amethysta text-4xl md:text-5xl lg:text-6xl mb-10">
        Why Professional Trust Jivanjor
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center bg-surface gap-12 p-8 lg:p-10 pb-20 rounded-2xl">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center space-y-4">
            <Image src={f.icon} alt={f.title} width={40} height={40} />
            <h3 className="font-amethysta text-xl lg:text-2xl">{f.title}</h3>
          </div>
        ))}
      </div>
      <div className="-mt-6">
        <Image
          src="/images/professional.png"
          alt="Professional using Jivanjor adhesive"
          width={1200}
          height={800}
          priority
          className="hidden lg:block w-full h-auto object-cover rounded-2xl"
        />
        <Image
          src="/images/professional-mobile.png"
          alt="Professional using Jivanjor adhesive"
          width={1200}
          height={800}
          priority
          className="block lg:hidden w-full h-auto object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
