import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AboutBlock() {
  return (
    <article className="px-8 max-w-5xl mx-auto flex flex-col md:flex-row md:gap-8 md:justify-evenly items-center">
      <div className="aspect-square w-48 h-48 md:w-80 md:h-80  mb-4">
        <Image
          src="/waterSitting.png"
          alt="Hero image"
          width={1000}
          height={1000}
          className="rounded-full object-cover w-full h-full drop-shadow-lg saturate-150 "
        />
      </div>
      <div className="flex flex-col items-center md:items-start gap-2">
        <p className="italic text-center md:text-left">
          “Anything is possible if you <br className="md:hidden" /> dare to be
          curious...”
        </p>
        <h2 className="uppercase text-center md:text-left font-display font-semibold text-ogLabel-base text-4xl md:text-5xl mb-4 md:my-6">
          About August
        </h2>
        <p className="max-w-md">
          At just 19, August left Copenhagen on his bike, reaching the wild
          landscapes of France, eschewing traditional schooling for adventure,
          and teaching others in the process.
        </p>
        <Link href="/about">
          <Button variant="outline" size="sm" className="mt-4 capitalize">
            Read more
          </Button>
        </Link>
      </div>
    </article>
  );
}
