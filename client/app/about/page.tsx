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
            Learn about our mission, values, and the team behind the McMaster PCOS Society at McMaster University.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <Target className="h-8 w-8 text-rose-600 mb-2" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                At the McMaster PCOS Society, we aim to build a safe space for those navigating PCOS through support, awareness and advocacy. Whether you're seeking answers or simply a community that gets it, we are here to rewrite the stigmatized narrative around PCOS together!
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Team Picture */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Our Team</CardTitle>
            </CardHeader>
            <CardContent>
              {/* TODO: Insert team picture component here once the image is available. */}
              <div className="bg-gray-100 rounded-lg p-12 text-center">
                <p className="text-gray-500 text-lg">Team photo coming soon...</p>
                <p className="text-gray-400 text-sm mt-2">Placeholder for team picture</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quotes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Our Team Says</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Our mission is to create a space where no one feels alone in their PCOS journey. Every story shared, every connection made, brings us closer to breaking the stigma."
                </blockquote>
                <cite className="text-gray-600 font-medium">— Sarah Chen, Co-founder</cite>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Education is empowerment. By sharing accurate, research-based information, we're helping individuals make informed decisions about their health."
                </blockquote>
                <cite className="text-gray-600 font-medium">— Dr. Emily Rodriguez, Research Lead</cite>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Community support is the foundation of everything we do. When people connect and share experiences, incredible things happen."
                </blockquote>
                <cite className="text-gray-600 font-medium">— Maya Patel, Community Coordinator</cite>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8 text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Advocacy isn't just about raising awareness—it's about creating real change in healthcare and policy for the PCOS community."
                </blockquote>
                <cite className="text-gray-600 font-medium">— Alex Thompson, Advocacy Director</cite>
              </CardContent>
            </Card>
          </div>
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
