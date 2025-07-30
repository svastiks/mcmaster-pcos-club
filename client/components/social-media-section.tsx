import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, ExternalLink } from "lucide-react"

export function SocialMediaSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Check Out Our Social Media</h2>
          <p className="text-lg text-gray-600">Stay connected with our community and latest updates</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Instagram Section */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">Instagram</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-center">
                Follow us for PCOS-related lifestyle, research, and upcoming events.
              </p>

              {/* Instagram Feed Placeholder - You'll need to replace this with actual Instagram integration */}
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((index) => (
                  <div
                    key={index}
                    className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center"
                  >
                    <img
                      src={`/placeholder.svg?height=120&width=120&text=Post ${index}`}
                      alt={`Instagram post ${index}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              >
                <Link href="https://www.instagram.com/macpcos/" target="_blank" rel="noopener noreferrer">
                  Follow Us on Instagram
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* LinkedIn Section */}
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <Linkedin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 text-center">
                Connect with us professionally and stay updated on our initiatives
              </p>

              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h4 className="font-semibold text-gray-900 mb-2">McMaster PCOS Society</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Empowering the PCOS community through education, support, and advocacy at McMaster University.
                </p>
                <div className="text-sm text-blue-600 font-medium">
                  🎓 Student Organization
                  <br />📍 Hamilton, Ontario
                  <br />👥 Growing Community
                </div>
              </div>

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <Link href="https://www.linkedin.com/company/pcos-society/" target="_blank" rel="noopener noreferrer">
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
