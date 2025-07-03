"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar } from "lucide-react"
import { ApplicationModal } from "@/components/application-modal"

export default function GetInvolvedPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const availablePositions = [
    {
      title: "Social Media Coordinator",
      description: "Manage our social media presence and create engaging content",
      commitment: "5-8 hours/week",
    },
    {
      title: "Event Planning Assistant",
      description: "Help organize workshops, support groups, and awareness events",
      commitment: "3-5 hours/week",
    },
    {
      title: "Research Assistant",
      description: "Help compile and review PCOS research for our educational content",
      commitment: "4-6 hours/week",
    },
  ]

  const handlePositionClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPosition(null)
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Join our mission to support the PCOS community through volunteering or donations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Donation Section */}
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-4">Support Our Cause</CardTitle>
              <CardDescription className="text-lg">
                Your donation helps us provide resources, organize events, and support the PCOS community.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-8 text-lg">
                Every contribution, no matter the size, makes a difference in supporting individuals with PCOS.
              </p>
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 px-8 py-4 text-lg">
                <Link href="https://gofundme.com/your-campaign" target="_blank" rel="noopener noreferrer">
                  Donate on GoFundMe
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Available Positions */}
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-4">Available Positions</CardTitle>
              <CardDescription className="text-lg">
                {availablePositions.length > 0 ? "Click on any position to apply" : "No positions currently available"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {availablePositions.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {availablePositions.map((position, index) => (
                    <div
                      key={index}
                      onClick={() => handlePositionClick(position.title)}
                      className="border rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:border-rose-300 bg-white"
                    >
                      <h4 className="font-bold text-gray-900 text-lg mb-3">{position.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>
                      <p className="text-sm text-rose-600 font-medium">Commitment: {position.commitment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4 text-lg">
                    We don't have any open positions at the moment, but we'd love to hear from you!
                  </p>
                  <p className="text-gray-500">
                    Check back soon or reach out to express your interest in future opportunities.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center gap-3 text-3xl font-bold mb-4">
                <Calendar className="h-8 w-8 text-rose-600" />
                Upcoming Events
              </CardTitle>
              <CardDescription className="text-lg">
                Join us for workshops, support groups, and awareness events.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-gray-600 mb-4 text-lg">No upcoming events scheduled at the moment.</p>
                <p className="text-gray-500">
                  Follow us on social media or check back soon for updates on future events!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} positionTitle={selectedPosition || ""} />
    </div>
  )
}
