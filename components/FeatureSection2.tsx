import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Mic,
  Wand2,
  UploadCloud,
  Users,
  BarChart3,
  FileText,
} from "lucide-react";
import { ReactNode } from "react";

export default function FeaturesSection2() {
  const features = [
    {
      Icon: Mic,
      title: "High-Quality Recording",
      description:
        "Capture lossless audio with background noise cancellation for a crisp, professional sound.",
    },
    {
      Icon: Wand2,
      title: "AI-Powered Editing",
      description:
        "Automatically remove filler words, trim silences, and balance audio levels in a single click.",
    },
    {
      Icon: UploadCloud,
      title: "One-Click Publishing",
      description:
        "Distribute your finished episode to Spotify, Apple Podcasts, and all major platforms instantly.",
    },
    {
      Icon: Users,
      title: "Remote Interviews",
      description:
        "Invite guests from anywhere in the world and record each participant on a separate track.",
    },
    {
      Icon: BarChart3,
      title: "Audience Analytics",
      description:
        "Understand your listeners with detailed download stats, geographic data, and app usage.",
    },
    {
      Icon: FileText,
      title: "Automatic Transcriptions",
      description:
        "Boost your SEO and accessibility with automatically generated and time-stamped transcripts.",
    },
  ];
  return (
    <section className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything you  <span className="text-red-400">need</span>, and then some.
          </h2>
          <p className="mt-4 text-gray-400 ">
            Audicle is packed with powerful features designed to make your
            podcasting workflow seamless and professional.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group bg-transparent border-none shadow-none text-center"
            >
              <CardHeader className="pb-3">
                <CardDecorator>
                  <feature.Icon className="size-6 text-red-300" aria-hidden />
                </CardDecorator>
                <h3 className="mt-6 font-medium">{feature.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
