import Image from "next/image";
import { MoveUpRight } from "lucide-react";

export default function Gallery() {
  return (
    <section className="my-10 space-y-4">
      <div className="grid grid-cols-4 gap-4 w-full">
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
      <div className="grid grid-cols-4 gap-4 w-full">
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
    </section>
  );
}
