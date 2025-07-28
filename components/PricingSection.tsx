"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = {
  monthly: [
    {
      name: "Hobby",
      price: "$19",
      description: "For podcasters just getting started.",
      features: [
        "Unlimited Recording",
        "AI-Powered Editing (1hr/mo)",
        "5GB Storage",
        "Basic Analytics",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$49",
      description: "For serious podcasters ready to grow.",
      features: [
        "Everything in Hobby",
        "AI Editing (10hrs/mo)",
        "100GB Storage",
        "Advanced Analytics",
        "Remote Interviews",
      ],
      isPopular: true,
    },
    {
      name: "Studio",
      price: "$99",
      description: "For teams and professional studios.",
      features: [
        "Everything in Pro",
        "AI Editing (Unlimited)",
        "1TB Storage",
        "Team Seats",
        "Dedicated Support",
      ],
      isPopular: false,
    },
  ],
  annually: [
    {
      name: "Hobby",
      price: "$15",
      description: "For podcasters just getting started.",
      features: [
        "Unlimited Recording",
        "AI-Powered Editing (1hr/mo)",
        "5GB Storage",
        "Basic Analytics",
      ],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$39",
      description: "For serious podcasters ready to grow.",
      features: [
        "Everything in Hobby",
        "AI Editing (10hrs/mo)",
        "100GB Storage",
        "Advanced Analytics",
        "Remote Interviews",
      ],
      isPopular: true,
    },
    {
      name: "Studio",
      price: "$79",
      description: "For teams and professional studios.",
      features: [
        "Everything in Pro",
        "AI Editing (Unlimited)",
        "1TB Storage",
        "Team Seats",
        "Dedicated Support",
      ],
      isPopular: false,
    },
  ],
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly"
  );
  return (
    <section className="bg-black py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold text-white lg:text-5xl">
            Fair pricing, no management fees.
          </h1>
          <p className="mt-4 text-gray-400">
            Whether you're one person trying to get ahead or a big firm trying
            to take over the world, we've got a plan for you.
          </p>
        </div>
        {/* This is the new Toggle Switch */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-lg bg-white/5 p-1">
            <Button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1 text-sm font-medium transition-colors ${
                billingCycle === "monthly"
                  ? "bg-white text-black"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
            >
              Monthly
            </Button>
            <Button
              onClick={() => setBillingCycle("annually")}
              className={`px-4 py-1 text-sm font-medium transition-colors ${
                billingCycle === "annually"
                  ? "bg-white text-black"
                  : "bg-transparent text-white hover:bg-white/10"
              }`}
            >
              Annually
            </Button>
          </div>
        </div>

        {/* This is the new 3-card grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pricingPlans[billingCycle].map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col p-6 ${
                plan.isPopular
                  ? "bg-gray-900 border-2 border-red-400"
                  : "bg-white/5 border-white/10"
              }`}
            >
              <CardHeader className="p-0">
                <CardTitle className="font-medium text-white">
                  {plan.name}
                </CardTitle>
                <span className="my-4 block text-3xl font-semibold text-gray-300">
                  {plan.price}
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    / mo
                  </span>
                </span>
                <CardDescription className="text-sm text-gray-400">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 p-0 mt-6">
                <hr className="border-white/10" />
                <ul className="list-outside space-y-3 text-sm text-gray-400">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <Check className="size-4 text-red-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <Button
                asChild
                variant={plan.isPopular ? "default" : "outline"}
                className={`mt-8 w-full ${
                  plan.isPopular
                    ? "bg-red-500 hover:bg-red-700 text-white"
                    : " bg-white text-black border border-white/20 hover:bg-white/10"
                }`}
              >
                <Link href="">Get Started</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
