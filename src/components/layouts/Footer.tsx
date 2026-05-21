import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Products",
    links: [
      "Super Premium Adhesive",
      "Speciality Adhesive",
      "Regular Adhesive",
      "Water Proof Grade Adhesive",
      "Wood Ancillaries",
      "ECO",
      "Wood Preservative",
    ],
  },
  {
    title: "About Jivanjor",
    links: [
      "About Jivanjor",
      "Research & Innovation",
      "Quality & Performance Promise",
      "TVCs",
      "Market Presence",
    ],
  },
  {
    title: "Support & Compliance",
    links: [
      "Technical Resources",
      "Become a Dealer",
      "Contractor Connect",
      "Privacy Policy",
      "Terms of Use",
      "Sitemap",
      "Contact Us",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden font-google-sans">
      {/* watermark */}
      <div className="absolute bottom-0 right-0 opacity-50 pointer-events-none">
        <Image
          src="/images/watermark.png"
          alt="watermark"
          width={900}
          height={450}
          className="w-55 sm:w-95 lg:w-200"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        <div
          className="
          flex
          flex-col
          lg:flex-row
          justify-between
          gap-12
          "
        >
          {/* Left section */}
          <div className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Jivanjor"
              width={260}
              height={120}
              className="w-55 md:w-65"
            />

            <div className="flex gap-5 mt-8">
              <Link href="/">
                {/* <Facebook size={30} className="hover:scale-110 transition" /> */}
              </Link>

              <Link href="/">
                {/* <Instagram size={30} className="hover:scale-110 transition" /> */}
              </Link>

              <Link href="/">
                {/* <Youtube size={30} className="hover:scale-110 transition" /> */}
              </Link>
            </div>
          </div>

          {/* Right columns */}
          <div
            className="
            flex
            flex-col
            sm:flex-row
            flex-wrap
            gap-12
            lg:gap-20
            "
          >
            {footerSections.map((section) => (
              <div key={section.title} className="min-w-55">
                <h3 className="font-bold text-2xl mb-5">{section.title}</h3>

                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="/"
                        className="
                          text-lg
                          text-black/80
                          hover:text-[#3A35C9]
                          transition
                        "
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-b border-[#2E3192]" />
      </div>
    </footer>
  );
}
