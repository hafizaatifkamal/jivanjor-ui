import Image from "next/image";

const cards = [
  {
    title: "Choosing the Right Adhesive",
    image: "/images/Rectangle 69.png",
  },
  {
    title: "Application Tips",
    image: "/images/Rectangle 70.png",
  },
  {
    title: "Fix Common Issues",
    image: "/images/Rectangle 71.png",
  },
];

export default function KnowledgeHub() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-5xl justify-center px-6">
        <h2 className="font-amethysta font-normal text-center text-4xl md:text-5xl lg:text-6xl">
          Knowledge Base & Guides
        </h2>
        <div className="flex flex-col gap-6 py-12">
          {cards.map((c) => (
            <div className="bg-surface overflow-hidden rounded-3xl">
              <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-start w-full md:w-1/2 p-10 space-y-4">
                  <h3 className="font-semibold text-4xl md:text-5xl">
                    {c.title}
                  </h3>
                  <button className="cursor-pointer font-medium text-center text-xs rounded-full px-4 py-1 border border-spacing-1.5 border-primary text-primary">
                    Learn More
                  </button>
                </div>
                <div className="relative flex-1 min-h-80">
                  <Image
                    fill
                    src={c.image}
                    alt={c.title}
                    className="object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          ))}
          {/* Blog Card */}
          <div className="bg-surface relative overflow-hidden rounded-3xl">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col items-start w-full md:w-1/2 p-10 space-y-4">
                <h3 className="font-semibold text-4xl md:text-5xl">
                  Latest Blogs
                </h3>
                <div className="absolute bottom-0 left-0 pointer-events-none">
                  <Image
                    src="/images/watermark-blog.png"
                    alt="watermark"
                    width={500}
                    height={320}
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="relative flex flex-col items-start flex-1 min-h-80 px-10 md:py-10 md:px-0 md:pr-10 space-y-4">
                <p className="text-xl">
                  Hear from the carpenters, contractors and dealers who rely on
                  Jivanjor for real projects. Hear from the carpenters,
                  contractors and dealers who rely on Jivanjor for real
                  projects.
                </p>
                <button className="font-medium min-w-35 px-4 py-2 rounded-3xl text-sm bg-linear-to-tr from-[#FF0009] to-[#772571] text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
