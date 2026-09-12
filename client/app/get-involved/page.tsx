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
      description: "Help compile and review PMOS research for our educational content",
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
            Join our mission to support the PMOS community by becoming a general member, attending events, or donating to the cause.
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
                Every single contribution makes a difference in supporting individuals with PMOS.
              </p>
              <p className="text-gray-600 mb-8 text-base">
                Funds gathered by McMaster PMOS Society proceed towards PCOS Together at the University of Alberta. Your donations support polyendocrine metabolic ovarian (PMOS) research and innovation that seeks truth and solves problems.
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
                Read about our <Link href="/hervoices" className="text-rose-600 hover:text-rose-700 font-medium">submission successes</Link> and the stories that are inspiring change in the PMOS community.
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
                  {events.map((event) => {
                    const isLink = event.registration.startsWith("http")
                    const [year, month, day] = event.date.split("-").map(Number)
                    const dateLabel = new Date(year, month - 1, day).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                    const monthShort = new Date(year, month - 1, day).toLocaleDateString("en-US", { month: "short" })

                    const content = (
                      <>
                        <div className="flex items-start gap-5">
                          <div className="flex-shrink-0 w-16 self-start rounded-xl bg-rose-600 text-white text-center py-2.5">
                            <p className="text-xs font-medium uppercase tracking-wide opacity-90">{monthShort}</p>
                            <p className="text-2xl font-bold leading-none mt-1">{day}</p>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                              <span className={`flex-shrink-0 text-xs px-2.5 py-1 rounded-full capitalize ${
                                event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                                event.type === 'fundraiser' ? 'bg-green-100 text-green-800' :
                                event.type === 'support' ? 'bg-purple-100 text-purple-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {event.type}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3">{event.description}</p>
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-5 text-sm text-gray-600">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-rose-600" />
                                <span>{dateLabel}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-rose-600" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-rose-600" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                          {isLink ? (
                            <>
                              <span className="text-sm text-gray-500">Spots available. Register on Rubric</span>
                              <span className="inline-flex items-center gap-2 rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white group-hover:bg-rose-700 transition-colors">
                                Sign Up
                                <ExternalLink className="h-4 w-4" />
                              </span>
                            </>
                          ) : (
                            <span className="text-sm text-gray-500">Registration: {event.registration}</span>
                          )}
                        </div>
                      </>
                    )

                    return isLink ? (
                      <Link
                        key={event.id}
                        href={event.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-rose-300 hover:shadow-lg"
                      >
                        {content}
                      </Link>
                    ) : (
                      <div key={event.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        {content}
                      </div>
                    )
                  })}
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
