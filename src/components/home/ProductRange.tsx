import Image from "next/image";

const productCards = [
  {
    title: "Champion Super",
    description:
      "Provides a superior bond and strength, while being non-hazardous.",
    color: "bg-[#0083CB]",
    badge: "Super Premium",
    image: "/images/Champion Super.png",
  },
  {
    title: "Aquabond",
    description:
      "Heatproof and waterproof adhesive made with Cross Linking Polymer.",
    color: "bg-[#077937]",
    badge: "Waterproof Grade",
    image: "/images/Aquabond.png",
  },
  {
    title: "Foambond",
    description:
      "Great for upholstery, it connects foam, resin, leather, fabrics and metal.",
    color: "bg-[#F57F26]",
    badge: "Speciality",
    image: "/images/Foambond.png",
  },
  {
    title: "Watershield",
    description:
      "Provides excellent water-resistance. Its superior flow makes it smooth and easy to apply.",
    color: "bg-[#007B8A]",
    badge: "Eco Friendly",
    image: "/images/Watershield.png",
  },
];

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
    <section
      id="product-section"
      className="flex flex-col items-center justify-center text-center mx-auto my-20 max-w-6xl px-6 lg:px-8 w-full"
    >
      <Image src="/images/badge.png" width={40} height={40} alt="badge" />
      <div className="max-w-5xl my-4 pb-12">
        <h2 className="font-amethysta font-normal text-7xl">
          A Complete Adhesive Range for Modern Woodworking
        </h2>
        <div className="flex items-center justify-center gap-4 my-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${tab === activeTab ? " bg-linear-to-tr from-[#FF0009] to-[#772571] text-white" : "bg-surface"} font-medium px-4 py-2 rounded-3xl text-sm`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 pt-40">
        {productCards.map((card) => (
          <div key={card.title} className="relative">
            <Image
              src={card.image}
              alt={card.title}
              width={800}
              height={600}
              className="absolute top-0 -translate-y-1/2 max-w-xs h-auto object-contain z-100"
            />
            <div
              className={`${card.color} relative flex flex-col items-center justify-end min-w-xs max-w-sm h-100 p-8 rounded-2xl w-full text-white shadow-2xl`}
            >
              <h3 className="text-2xl font-semibold text-center">
                {card.title}
              </h3>
              <div className="w-full h-px bg-white my-4" />
              <p className="text-center text-base leading-relaxed max-w-50">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
