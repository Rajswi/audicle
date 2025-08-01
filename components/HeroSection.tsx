import React from "react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { InfiniteSlider } from "../components/ui/infinite-slider";
import { ProgressiveBlur } from "../components/ui/progressive-blur";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 ">
            <div className="mx-auto max-w-7xl px-6 pt-17 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className=" text-center lg:text-left pt-50">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-6xl">
                  Your Studio, <br /> Anywhere
                </h1>
                <p className="mt-8 max-w-2xl text-pretty text-lg">
                  Turn your thoughts into professional-grade podcasts with
                  Audicle – the all-in-one browser-based podcast recording
                  platform.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="px-6 py-7 bg-black text-white hover:bg-gray-800"
                  >
                    <Link href="#link" className="flex items-center gap-3">
                      <FaApple className="text-3xl" />
                      <div className="flex flex-col leading-tight text-left">
                        <span className="text-xs">Download on the</span>
                        <span className="text-lg font-semibold">App Store</span>
                      </div>
                    </Link>
                  </Button>

                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="px-6 py-7 bg-black text-white hover:bg-gray-800 w-full sm:w-auto"
                  >
                    <Link href="#link" className="flex items-center gap-3 hover:text-white">
                      <FaGooglePlay className="text-2xl" />
                      <div className="flex flex-col leading-tight text-left ">
                        <span className="text-xs">GET IT ON</span>
                        <span className="text-lg font-semibold">
                          Google Play
                        </span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </div>

              <img
                className="z-0 relative h-[600px] lg:h-[400px] mt-0 lg:mt-0"
                src="/img/hero.png"
                alt="My Hero"
                height="4000"
                width="8000"
              />
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32">
          <div className="group relative m-auto max-w-6xl px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm">As featured in</p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height="20"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div>

                  <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div>
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
