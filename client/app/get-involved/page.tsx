"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Calendar, MapPin, Clock } from "lucide-react"
import { ApplicationModal } from "@/components/application-modal"

interface Event {
  id: number
  title: string
  date: string
  time: string
  location: string
  description: string
  type: string
  registration: string
}

export default function GetInvolvedPage() {
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)

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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/events.json')
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error loading events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get Involved</h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
            Join our mission to support the PCOS community by becoming a general member, attending events, or donating to the cause.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Donation Section
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-4">Support Our Cause</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-8 text-lg">
                Every single contribution makes a difference in supporting individuals with PCOS.
              </p>
              <p className="text-gray-600 mb-8 text-base">
                Funds gathered by McMaster PCOS Society proceed towards PCOS Together at the University of Alberta. Your donations support polycystic ovarian (PCOS) research and innovation that seeks truth and solves problems.
              </p>
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 px-8 py-4 text-lg">
                <Link href="https://gofundme.com/your-campaign" target="_blank" rel="noopener noreferrer">
                  Donate on GoFundMe
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card> */}

          {/* Community Impact */}
          {/* <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold mb-4">Community Impact</CardTitle>
              <CardDescription className="text-lg">
                See how our community is making a difference
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6 text-lg">
                Read about our <Link href="/hervoices" className="text-rose-600 hover:text-rose-700 font-medium">submission successes</Link> and the stories that are inspiring change in the PCOS community.
              </p>
              <Button asChild variant="outline" className="px-6 py-3">
                <Link href="/hervoices">View Stories</Link>
              </Button>
            </CardContent>
          </Card> */}

          {/* Upcoming Events */}
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-8">
              <CardTitle className="flex items-center justify-center gap-3 text-3xl font-bold mb-4">
                <Calendar className="h-8 w-8 text-rose-600" />
                Upcoming Events
              </CardTitle>
              <CardDescription className="text-lg">
                Join us for workshops, fundraisers, and awareness events.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Loading events...</p>
                </div>
              ) : events.length > 0 ? (
                <div className="space-y-6">
                  {events.map((event) => (
                    <div key={event.id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'fundraiser' ? 'bg-green-100 text-green-800' :
                          event.type === 'support' ? 'bg-purple-100 text-purple-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{event.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(event.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-xs text-gray-500">Registration: {event.registration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 mb-4 text-lg">No upcoming events scheduled at the moment.</p>
                  <p className="text-gray-500">
                    Follow us on social media or check back soon for updates on future events!
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={handleCloseModal} positionTitle={selectedPosition || ""} />
    </div>
  )
}
