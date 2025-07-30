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
