"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, Target, Users, Award } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function AboutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      category: formData.get("category"),
      feedback: formData.get("feedback"),
    }

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Feedback submitted successfully!",
          description: "Thank you for helping us improve our services.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to submit feedback")
      }
    } catch (error) {
      toast({
        title: "Error submitting feedback",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about our mission, values, and the team behind the PCOS Health Club at McMaster University.
          </p>
        </div>

        {/* Mission & Vision */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="h-8 w-8 text-rose-600 mb-2" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To create a supportive and inclusive community for individuals affected by PCOS, providing education,
                  resources, advocacy, and a platform for sharing experiences while promoting awareness and
                  understanding of this complex condition.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Heart className="h-8 w-8 text-rose-600 mb-2" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  A world where every person with PCOS feels supported, informed, and empowered to manage their health
                  and live their best life, free from stigma and with access to comprehensive care and resources.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Story</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                The PCOS Health Club was founded by a group of passionate McMaster University students who recognized
                the need for better support and awareness around Polycystic Ovary Syndrome. Having witnessed friends and
                family members struggle with PCOS diagnosis and management, our founders were motivated to create a
                space where individuals could find community, education, and support.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                What started as informal support meetings has grown into a comprehensive organization that serves not
                only the McMaster community but also reaches individuals across the region. We believe that through
                education, advocacy, and community building, we can make a meaningful difference in the lives of those
                affected by PCOS.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Today, we continue to expand our programs, resources, and outreach efforts, always staying true to our
                core values of compassion, inclusivity, and evidence-based support.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Our Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Building connections and fostering a supportive environment where everyone feels welcome.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Providing high-quality, evidence-based information and resources to our community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Approaching every interaction with empathy, understanding, and genuine care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-rose-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Advocacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Fighting for better healthcare, awareness, and support for the PCOS community.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* What We Do */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">What We Do</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Education & Awareness</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Workshops on PCOS management</li>
                    <li>• Research compilation and sharing</li>
                    <li>• Awareness campaigns</li>
                    <li>• Educational resource development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Community Support</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Support group meetings</li>
                    <li>• Peer mentorship programs</li>
                    <li>• Story sharing platform</li>
                    <li>• Online community forums</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advocacy</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Healthcare system advocacy</li>
                    <li>• Policy awareness initiatives</li>
                    <li>• Collaboration with medical professionals</li>
                    <li>• Research support and promotion</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Resources</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Helpline directory</li>
                    <li>• Healthcare provider recommendations</li>
                    <li>• Lifestyle management guides</li>
                    <li>• Emergency support resources</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Feedback Form */}
        <section>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>We Value Your Feedback</CardTitle>
              <CardDescription>Help us improve our services and better serve the PCOS community.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input id="name" name="name" placeholder="Your name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Feedback Category</Label>
                  <Select name="category" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select feedback type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Feedback</SelectItem>
                      <SelectItem value="website">Website Experience</SelectItem>
                      <SelectItem value="resources">Resources & Content</SelectItem>
                      <SelectItem value="events">Events & Programs</SelectItem>
                      <SelectItem value="suggestion">Suggestion</SelectItem>
                      <SelectItem value="complaint">Complaint</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Please share your thoughts, suggestions, or concerns..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
