"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mic, Wand2, UploadCloud } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, type ElementType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BorderBeam } from "@/components/magicui/border-beam";

export default function FeaturesSection() {
  type Feature = {
    id: string;
    title: string;
    description: string;
    Icon: ElementType;
    imageSrc: string;
  };
  const features: Feature[] = [
    {
      id: "feature-1",
      title: "Studio-Quality Recording",
      description:
        "Capture crystal-clear audio right from your browser. Our background noise removal ensures every word is heard.",
      Icon: Mic,
      imageSrc: "/img/recording.png", 
    },
    {
      id: "feature-2",
      title: "AI-Powered Editing",
      description:
        "Automatically remove filler words, cut long silences, and level audio volumes with a single click. No experience needed.",
      Icon: Wand2,
      imageSrc: "/img/editing.png", // You must change this to your image path
    },
    {
      id: "feature-3",
      title: "One-Click Publishing",
      description:
        "Distribute your finished episode to Spotify, Apple Podcasts, and all major platforms without ever leaving Audicle.",
      Icon: UploadCloud,
      imageSrc: "/img/publishing.png", // You must change this to your image path
    },
  ];

  const [activeFeature, setActiveFeature] = useState<Feature>(features[0]);
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((currentFeature) => {
        const currentIndex = features.findIndex(
          (f) => f.id === currentFeature.id
        );
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex];
      });
    }, 4000); // Changes feature every 4 seconds

    return () => clearInterval(timer); // Cleans up the timer
  }, []);

  return (
    <section className=" bg-black text-whitepy-12 md:py-20 lg:py-32">
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-white text-4xl font-semibold lg:text-5xl">
            All Your Podcasting Tools in One Place
          </h2>
          <p className="text-gray-400">
            From high-fidelity recording to AI-powered editing and one-click
            distribution, Audicle provides everything you need to create a
            professional podcast.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <div className="space-y-10">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                  <feature.Icon className="h-6 w-6 text-red-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className=" relative flex overflow-hidden rounded-3xl border p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md"
                >
                  <Image
                    className="size-full object-cover object-left-top dark:mix-blend-lighten"
                    src={activeFeature.imageSrc}
                    alt={activeFeature.title}
                    objectFit="cover"
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
