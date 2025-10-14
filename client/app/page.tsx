import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StoriesCarousel } from "@/components/stories-carousel"
import { SocialMediaSection } from "@/components/social-media-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 w-full max-w-full overflow-x-hidden">
      {/* Hero Section - Clean title only */}
      <section className="relative py-24 overflow-hidden w-full" style={{backgroundColor: '#61000b'}}>
        <div className="container mx-auto px-0 sm:px-6 w-full max-w-full">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight" style={{fontFamily: 'Times New Roman, serif'}}>PCOS Society</h1>
            <p className="text-xl text-white font-light max-w-2xl mx-auto">
              Supporting and empowering individuals with PCOS through support, awareness and advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <StoriesCarousel />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Mission Statement */}
      <section className="py-24 bg-white w-full">
        <div className="container mx-auto px-0 sm:px-6 w-full max-w-full">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider uppercase">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              We are here to guide you towards the first step of understanding PCOS.
            </h2>
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium"
            >
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
