import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StoriesCarousel } from "@/components/stories-carousel"
import { SocialMediaSection } from "@/components/social-media-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Clean title only */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-100 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 leading-tight">McMaster PCOS Club</h1>
            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
              Supporting and empowering individuals with PCOS through community, education, and advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <StoriesCarousel />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-medium text-gray-600 mb-4 tracking-wider uppercase">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              We're McMaster PCOS Club and we're here to help you find your
              <span className="text-rose-600"> support story</span>
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
