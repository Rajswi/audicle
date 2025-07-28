import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  { title: "Features", href: "#" },
  { title: "Pricing", href: "#" },
  { title: "FAQs", href: "#" },
];
export default function Footer() {
  return (
    <footer className="bg-black text-gray-400  pb-10 pt-8 md:pt-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* --- Top Section: Logo, Links, and QR Code --- */}
        <div className="flex flex-col items-center justify-between gap-8 border-b border-white/10 pb-8 md:flex-row">
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">AUDICLE</h3>
            <p className="mt-2 text-sm">Record, edit, and publish perfectly.</p>
            <div className="mt-6 flex justify-center gap-6 md:justify-start">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-sm hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: QR Code */}
          <div className="flex items-center gap-4 text-left">
            {/* IMPORTANT: You need to generate a QR code that links to your app store page
              and save it in your /public/img folder.
            */}
            <img
              src="/img/download.png"
              alt="QR code for app download"
              className="h-24 w-24 rounded-lg bg-white p-1"
            />
            <div>
              <h4 className="font-semibold text-white">Download the app</h4>
              <p className="text-sm">
                Scan the QR code to download the app from the App Store.
              </p>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Copyright and Newsletter --- */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 sm:flex-row">
          <small className="text-sm text-gray-500">
            © {new Date().getFullYear()} Audicle, All rights reserved
          </small>

          <form className="flex w-full max-w-sm items-center gap-2">
            <Input
              type="email"
              placeholder="Email address"
              className="h-10 flex-grow border-white/20 bg-white/5 text-white placeholder:text-gray-500"
            />
            <Button
              size="sm"
              className="bg-red-500 text-white hover:bg-red-700"
            >
              Join our newsletter
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
