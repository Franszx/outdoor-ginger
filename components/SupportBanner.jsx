import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function SupportBanner() {
  return (
    <section className="h-[50vh] bg-ogPrimary-lightest text-ogPrimary flex flex-col md:flex-row items-center justify-evenly text-center px-4 py-6">
      <div className=" space-y-8 md:text-left">
        <h1 className="text-6xl md:text-8xl font-bold">Support August</h1>
        <p className="text-lg max-w-md text-ogPrimary-light">
          I'm dedicated to inspiring others to get out and explore nature and
          your support makes it happen.
        </p>
        <p className="text-lg text-ogPrimary-light">
          All donations are appreciated 🫶
        </p>
      </div>
      <div className="flex md:flex-col gap-4">
        <Button
          size="lg"
          className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark p-10 rounded-desktop"
        >
          <Image
            src="/buymeacoffee.svg"
            width={64}
            height={64}
            alt="Buy Me a Coffee"
            className=" w-52 pointer-events-none"
          />
        </Button>
        <Button
          size="lg"
          className="bg-ogPrimary text-ogPrimary-lightest hover:bg-ogPrimary-dark p-10 rounded-desktop"
        >
          <Image
            src="/gofundme.svg"
            width={64}
            height={64}
            alt="GoFundMe"
            className=" w-44 pointer-events-none"
          />
        </Button>
      </div>
    </section>
  );
}

export default SupportBanner;
