import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SupportBanner from "@/components/generel/SupportBanner";
import { Button } from "@/components/ui/button";
import Hero from "@/components/generel/Hero";
import Image from "next/image";
import Link from "next/link";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="relative">
      <Hero title="Membership" imageSrc="/membershiphero.webp" height="h-[70vh] md:h-[90vh]">
        <div id="right" className="mt-72 md:mt-0 w-dvw md:left-auto px-6 md:top-1/3 top-72 md:px-0 md:w-80 absolute left-1/2 transform -translate-x-1/2 z-40">
          <Card className="rounded-2xl z-50">
            <CardHeader>
              <CardTitle className="font-normal mb-2">Become a Member</CardTitle>
              <CardDescription className="font-light">
                Join our community of explorers <br></br> and get exclusive benefits.
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p className="text-3xl font-semibold">
                50 kr <span className="text-sm font-light text-ogLabel-muted ">/ Month </span>
              </p>
              <Link href="/signup">
                <Button size="default" className="bg-ogPrimary hover:bg-ogPrimary-dark text-base text-ogBG-base">
                  Subscribe
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </Hero>
      <div className="px-6 md:px-0 mt-52 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <Accordion type="single" collapsible className="md:w-1/2 mb-10">
            <AccordionItem value="item-1" defaultOpen={true}>
              <AccordionTrigger className="text-lg">What is a membership?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">{"What's in it for me?"}</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It comes with default styles that matches the other components&apos; aesthetic.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">What does it cost?</AccordionTrigger>
              <AccordionContent className="text-ogLabel-muted text-sm">Yes. It&apos;s animated by default, but you can disable it if you prefer.</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="md:w-1/2 md:flex md:justify-end">
            <Image src="/membershipvideo.png" width={400} height={200} alt="Your Description" className="" />
          </div>
        </div>
      </div>
      <SupportBanner />
    </main>
  );
}
