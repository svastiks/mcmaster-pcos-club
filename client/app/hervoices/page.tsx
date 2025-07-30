"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

export default function HerVoicesPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      age: formData.get("age"),
      story: formData.get("story"),
      anonymous: formData.get("anonymous") === "on",
      consent: formData.get("consent") === "on",
    }

    try {
      const response = await fetch("/api/stories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Story submitted successfully!",
          description: "Thank you for sharing your experience with our community.",
        })
        e.currentTarget.reset()
      } else {
        throw new Error("Failed to submit story")
      }
    } catch (error) {
      toast({
        title: "Error submitting story",
        description: "Please try again later or contact us for support.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">HerVoices</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Share your PCOS journey to inspire and support others in our community
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Main Story Form - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <Card className="shadow-lg">
              <CardHeader className="pb-8">
                <CardTitle className="text-2xl font-bold text-center">Share Your Story</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-medium">
                        Name
                      </Label>
                      <Input id="name" name="name" placeholder="Your name" required className="h-12" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-base font-medium">
                      Age (Optional)
                    </Label>
                    <Input
                      id="age"
                      name="age"
                      type="number"
                      placeholder="Your age"
                      min="13"
                      max="100"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="story" className="text-base font-medium">
                      Your PCOS Story
                    </Label>
                    <Textarea
                      id="story"
                      name="story"
                      placeholder="Share your experience with PCOS - your diagnosis journey, challenges, victories, tips, or anything you'd like others to know..."
                      className="min-h-[300px] text-base"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox id="anonymous" name="anonymous" />
                      <Label htmlFor="anonymous" className="text-base">
                        Share my story anonymously
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Checkbox id="consent" name="consent" required />
                      <Label htmlFor="consent" className="text-base">
                        I consent to sharing my story with the community
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-700 h-12 text-base font-medium"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Share My Story"}
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    We prioritize your privacy and safety by allowing anonymous sharing, reviewing all stories before publication, keeping your email confidential, and honouring removal requests at any time.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Takes up 1 column */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rewrite the narrative by sharing your experience!</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">• Help others feel less alone</p>
                <p className="text-sm text-gray-600">• Share valuable insights</p>
                <p className="text-sm text-gray-600">• Build community support</p>
                <p className="text-sm text-gray-600">• Raise PCOS awareness</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Privacy & Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-gray-600">• Anonymous sharing available</p>
                <p className="text-sm text-gray-600">• Stories reviewed before publication</p>
                <p className="text-sm text-gray-600">• Email kept private</p>
                <p className="text-sm text-gray-600">• Request removal anytime</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
