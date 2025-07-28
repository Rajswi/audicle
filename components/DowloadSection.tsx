import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaApple, FaGooglePlay } from "react-icons/fa"

export default function DownloadSection() {
    return (
        <section className="relative overflow-hidden bg-black text-white py-32">
            <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                <div className="h-[600px] w-[600px] animate-[spin_30s_linear_infinite] rounded-full border border-white/10"></div>
            </div>
            <div className=" relative z-10 mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Your Audience is Waiting</h2>
                    <p className="mt-4 text-gray-400">It takes 30 seconds to sign up. Download the app and create an account today and we’ll send you a tip guaranteed to grow your first show.</p>


                    <div className="mt-12 flex flex-wrap justify-center gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="w-full bg-white px-6 py-7 text-black hover:bg-gray-200 sm:w-auto">
                             <Link href="#link" className="flex items-center gap-3">
                                <FaApple className="text-3xl" />
                                <div className="flex flex-col text-left leading-tight">
                                    <span className="text-xs">Download on the</span>
                                    <span className="text-lg font-semibold">App Store</span>
                                </div>
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            className="w-full bg-white px-6 py-7 text-black hover:bg-gray-200 sm:w-auto">
                           <Link href="#link" className="flex items-center gap-3">
                                <FaGooglePlay className="text-2xl" />
                                <div className="flex flex-col text-left leading-tight">
                                    <span className="text-xs">GET IT ON</span>
                                    <span className="text-lg font-semibold">Google Play</span>
                                </div>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
