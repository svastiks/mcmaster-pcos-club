import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Globe, Mail, MapPin, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ResourcesPage() {
  const helplines = [
    {
      name: "Pcos Together",
      description: "For updates on studies and publications research regarding PCOS",
      website: "https://pcoschallenge.org",
      type: "PCOS Support",
      availability: "Online Resources",
    },
    {
      name: "Distress Centre Hamilton",
      description: "Local crisis support and counseling services",
      phone: "905-525-8611",
      website: "https://www.distresscentrehamilton.ca",
      type: "Crisis Support",
      availability: "24/7",
    },
    {
      name: "McMaster Student Wellness Centre",
      description: "On-campus counseling and health services",
      phone: "905-525-9140 ext. 27700",
      website: "https://wellness.mcmaster.ca",
      location: "McMaster University Campus",
      type: "Student Health",
      availability: "Business Hours",
    },
    {
      name: "Good2Talk",
      description: "Post-secondary student helpline for mental health",
      phone: "1-866-925-5454",
      website: "https://good2talk.ca",
      type: "Student Support",
      availability: "24/7",
    },
    {
      name: "Ontario Telehealth",
      description: "Free, confidential health advice from registered nurses",
      phone: "1-866-797-0000",
      type: "Health Information",
      availability: "24/7",
    },
    {
      name: "Crisis Text Line",
      description: "24/7 crisis support via text message",
      contact: "Text HOME to 741741",
      type: "Crisis Support",
      availability: "24/7",
    },
  ]

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resources & Support</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access helplines and support services for PCOS and general health needs.
          </p>
        </div>

        {/* Helplines */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Helplines & Crisis Support</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {helplines.map((helpline, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{helpline.name}</CardTitle>
                      <CardDescription className="mt-1">{helpline.description}</CardDescription>
                    </div>
                    <span className="text-xs bg-rose-100 text-rose-800 px-2 py-1 rounded-full">{helpline.type}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {helpline.phone && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Phone className="h-4 w-4" />
                      <a href={`tel:${helpline.phone}`} className="hover:text-rose-600">
                        {helpline.phone}
                      </a>
                    </div>
                  )}
                  {helpline.contact && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Mail className="h-4 w-4" />
                      <span>{helpline.contact}</span>
                    </div>
                  )}
                  {helpline.website && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <Globe className="h-4 w-4" />
                      <a
                        href={helpline.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-rose-600 flex items-center gap-1"
                      >
                        Visit Website
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  )}
                  {helpline.location && (
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{helpline.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{helpline.availability}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Additional Support */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Need More Support?</CardTitle>
              <CardDescription>If you can't find what you're looking for or need additional assistance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Our team is here to help connect you with the right resources and support. Don't hesitate to reach out
                if you need assistance finding appropriate care or support services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link href="/about">Contact Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/hervoices">Share Your Experience</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Us */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Contact us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Email: <a href="mailto:macpcossociety@gmail.com" className="text-rose-600 hover:text-rose-700">macpcossociety@gmail.com</a>
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
