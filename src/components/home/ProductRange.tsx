import Image from "next/image";
import ProductCarousel from "./ProductCarousel";

export default function ProductRange() {
  const tabs = [
    "Super Premium",
    "Speciality",
    "Regular",
    "Waterproof Grade",
    "ECO",
  ];
  const activeTab = "Super Premium";

  return (
    <section id="product-section" className="relative overflow-hidden">
      {/* watermark */}
      <div className="absolute bottom-0 right-0 opacity-75 pointer-events-none">
        <Image
          src="/images/watermark.png"
          alt=""
          width={950}
          height={500}
          className="w-75 sm:w-100 lg:w-240"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center relative mx-auto my-20 max-w-6xl px-6 lg:px-8 w-full">
        <Image
          className="mb-4"
          src="/images/badge.png"
          width={40}
          height={40}
          alt="badge"
        />
        <div className="max-w-5xl my-6">
          <h2 className="font-amethysta font-normal text-5xl lg:text-6xl xl:text-7xl">
            A Complete Adhesive Range for Modern Woodworking
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 my-4">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`${tab === activeTab ? "bg-linear-to-tr from-[#FF0009] to-[#772571] text-white" : "bg-surface"} font-medium px-4 py-2 rounded-3xl text-sm`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
        <ProductCarousel />
      </div>
    </section>
  );
}
