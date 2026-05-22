import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function Gallery() {
  return (
    <section className="my-10 space-y-4">
      <div className="hidden lg:grid grid-cols-4 gap-4 w-full">
        <div className="col-span-2 rounded-2xl h-80">
          <Image
            src="/images/Rectangle 30.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
        <div className="relative bg-[#232323] h-80 rounded-2xl">
          <p className="absolute inset-4 flex items-end text-3xl text-white">
            Technical Resources <MoveUpRight size={40} />
          </p>
        </div>
        <div className="rounded-2xl h-80">
          <Image
            src="/images/Rectangle 35.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-4 gap-4 w-full">
        <div className="rounded-2xl h-80">
          <Image
            src="/images/Rectangle 79.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
        <div className="space-y-4">
          <div className="relative bg-[#232323] h-40 rounded-2xl">
            <p className="absolute inset-4 flex items-end text-3xl text-white">
              Our Market Presence <MoveUpRight size={40} />
            </p>
          </div>
          <div className="h-36 rounded-2xl">
            <Image
              src="/images/Rectangle 34.png"
              className="object-cover w-full h-full rounded-2xl"
              alt="Rectangle"
              width={1200}
              height={800}
            />
          </div>
        </div>
        <div className="col-span-2 rounded-2xl h-80">
          <Image
            src="/images/Rectangle 37.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
      </div>
      {/* Mobile view */}
      <div className="grid lg:hidden grid-flow-col grid-rows-4 grid-cols-2 gap-4">
        <div className="rounded-2xl">
          <Image
            src="/images/Rectangle 30.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
        <div className="row-span-2 rounded-2xl">
          <Image
            src="/images/Rectangle 35.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
        <div className="relative bg-[#232323] rounded-2xl min-h-30">
          <p className="absolute inset-2.5 sm:inset-6 flex items-end text-xl sm:text-2xl md:text-4xl text-white">
            Technical
            <br />
            Resources
          </p>
          <MoveUpRight
            size={40}
            className="absolute top-2.5 right-2.5 sm:top-6 sm:right-6 text-white"
          />
        </div>
        <div className="row-span-2 rounded-2xl">
          <Image
            src="/images/Rectangle 34 (1).png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
        <div className="relative bg-[#232323] rounded-2xl min-h-30">
          <p className="absolute inset-2.5 sm:inset-6 flex items-end text-xl sm:text-2xl md:text-4xl text-white">
            Our Market
            <br />
            Presence
          </p>
          <MoveUpRight
            size={40}
            className="absolute top-2.5 right-2.5 sm:top-6 sm:right-6 text-white"
          />
        </div>
        <div className="rounded-2xl">
          <Image
            src="/images/Rectangle 37.png"
            className="object-cover w-full h-full rounded-2xl"
            alt="Rectangle"
            width={1200}
            height={800}
          />
        </div>
      </div>
    </section>
  );
}
