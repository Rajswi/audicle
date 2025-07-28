import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
};
const testimonials: Testimonial[] = [
  {
    name: "Sarah K.",
    role: 'Host, "Tech Unfiltered"',
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    quote:
      "\"Audicle's AI editing is like having a secret superpower. It cut my editing time in half. I can't imagine going back.\"",
    rating: 5,
  },
  {
    name: "Marcus L.",
    role: "Indie Creator",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      '"I thought starting a podcast would be expensive. With Audicle, all I needed was my laptop and an idea. The quality is incredible for the price."',
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    quote:
      '"The automatic transcriptions are a game-changer for our SEO. We\'re reaching a wider audience without any extra work."',
    rating: 5,
  },
  {
    name: "David Chen",
    role: 'Host, "The History Hour"',
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "\"The remote interview feature is flawless. My guests sound like they're in the same room, even when they're across the country.\"",
    rating: 5,
  },
  {
    name: "Jessica Nguyen",
    role: "Founder, Startup Stories",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    quote:
      '"One-click publishing saves me so much time. I can focus on creating content, not on managing RSS feeds."',
    rating: 5,
  },
  {
    name: "Tom Harding",
    role: "Audio Engineer",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      '"I was skeptical about browser-based recording, but the audio quality is pristine. Lossless audio makes my job so much easier."',
    rating: 4,
  },
  {
    name: "Emily White",
    role: "Student & Hobbyist",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    quote:
      '"I love how simple the interface is. I recorded and published my first episode on the same day. So intuitive!"',
    rating: 5,
  },
  {
    name: "Ben Carter",
    role: 'Host, "Daily Dose of Code"',
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      '"The analytics are surprisingly detailed. I finally understand who my listeners are and where they come from. Invaluable data."',
    rating: 5,
  },
  {
    name: "Chloe Park",
    role: "Corporate Comms",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    quote:
      '"We use Audicle for our internal company podcast. The team collaboration features make it incredibly easy to manage."',
    rating: 5,
  },
  {
    name: "Leo Maxwell",
    role: "True Crime Podcaster",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      '"The background noise removal is magic. It cleaned up an interview I thought was unusable. Highly recommended."',
    rating: 5,
  },
  {
    name: "Olivia Green",
    role: "Freelance Journalist",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    quote:
      '"Being able to edit by just editing the text transcript feels like the future. It\'s the fastest way to put together a narrative episode."',
    rating: 5,
  },
  {
    name: "Nathan Reed",
    role: "Growth Marketer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      '"We switched from a complicated setup to Audicle and haven\'t looked back. It streamlines our entire production workflow."',
    rating: 5,
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function TestimonialsSection() {
  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-white">
              Everyone is loving Audicle.
            </h2>
            <p className="mt-6 text-gray-600">
              Thousands of creators have supercharged their workflow in the last
              30 days.
            </p>
          </div>
          <div className="relative mt-12 grid h-[800px] gap-3 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%,black_85%,transparent_100%)] sm:grid-cols-2 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div
                key={chunkIndex}
                className={`space-y-3 animate-[marquee-y_60s_linear_infinite] ${
                  chunkIndex % 2 === 1 ? "[animation-direction:reverse]" : ""
                }`}
              >
                {chunk.map(({ name, role, quote, image, rating }, index) => (
                  <Card className="bg-white/5 border-white/10 text-white p-6">
                    <CardContent className="p-0">
                      <div className="flex">
                        {/* This renders 5 stars based on the rating */}
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg
                            key={i}
                            className={`size-4 ${
                              i < rating ? "text-red-400" : "text-gray-600"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <blockquote className="mt-4 text-gray-500">
                        <p>"{quote}"</p>
                      </blockquote>
                      <figcaption className="mt-4 text-sm text-gray-700">
                        - {name}
                      </figcaption>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
