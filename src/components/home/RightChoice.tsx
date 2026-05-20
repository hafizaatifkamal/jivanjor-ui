import Image from "next/image";
import { PlusCircle } from "lucide-react";

const adhesiveTypes = [
  { icon: "/images/image 4.svg", title: "Furniture and Woodwork" },
  { icon: "/images/image 5.svg", title: "Kitchen Cabinets & Storage" },
  { icon: "/images/image 6.svg", title: "Laminates & Surface Finishings" },
  { icon: "/images/image 7.svg", title: "Moisture-Prone Woodwork" },
  { icon: "/images/image 8.svg", title: "PVC, Acrylic & Edge Finishing" },
  { icon: "/images/image 9.svg", title: "Home Repairs & Special Fixing" },
];

export default function RightChoice() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Rectangle 5.png"
          className="object-fill"
          alt="Right Choice"
          priority
          fill
        />
        {/* <div className="absolute inset-0 bg-linear-to-r from-[#FF0009] to-[#772571]" /> */}
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row relative mx-auto min-h-screen max-w-screen gap-10 px-6 py-24 lg:px-12">
        <div className="max-w-xl text-center md:text-start">
          <h2 className="font-amethysta text-4xl md:text-5xl lg:text-6xl text-white">
            Find The Right Adhesive
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {adhesiveTypes.map((type) => (
            <div
              key={type.title}
              className="flex flex-col items-center justify-between text-center group cursor-pointer bg-white hover:bg-linear-to-tl from-[#FF0009] to-[#772571] min-w-40 max-w-48 min-h-54 max-h-56 p-5 rounded-2xl"
            >
              <Image
                src={type.icon}
                alt={type.title}
                className="aspect-square"
                height={48}
                width={48}
              />
              <p className="font-medium text-base lg:text-lg">{type.title}</p>
              <PlusCircle
                size={24}
                className="text-primary group-hover:hidden"
              />
              <button className="cursor-pointer font-medium text-center text-xs rounded-full px-4 py-1 border border-white text-white hidden group-hover:block">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
