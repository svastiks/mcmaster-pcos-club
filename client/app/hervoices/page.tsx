"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { useSearchParams } from "next/navigation"
import { StoryModal } from "@/components/story-modal"

function HerVoicesContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedStory, setSelectedStory] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { toast } = useToast()
  const searchParams = useSearchParams()

  // Stories data (same as in carousel)
  const stories = [
    {
      id: 1,
      name: "Anonymous",
      age: 17,
      preview: "In 2023, at just 17 years old, I stopped taking birth control for the first time in three years...",
      fullStory: `In 2023, at just 17 years old, I stopped taking birth control for the first time in three years. Almost immediately, I began experiencing troubling symptoms: cystic acne, dark hair growth on my chin, and intense mood swings. I tried to speak with a doctor, but due to the lack of access in my area—no family doctor and even fewer specialists—I struggled to get proper medical support.

To this day, I still haven't been able to see a gynecologist. Through virtual consultations with nurse practitioners and general practitioners, I received a tentative diagnosis of PCOS. I was told: "There's not much that can be done anyway. Just go back on birth control, and if you have fertility issues in 5–10 years—which you most likely will—see a specialist then for a proper diagnosis and treatment."

All my life, I've dreamed of becoming a mother. And in a single phone call, I was told that would likely be difficult—and that no one could really do anything about it. I was advised to return to the same medication that may have contributed to these issues in the first place, and to simply move on.

That moment broke my heart—and it still does. Every time my period arrives, I'm reminded of the pain, both physical and emotional, and of the fear that my body may fail me in the future. But I'm learning to remind myself: I am not broken. I am not a failure. The real failure lies in a healthcare system that continues to ignore and dismiss the needs of thousands of women every day.`,
      isAnonymous: true,
    },
  ]

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

  const handleStoryClick = (story: any) => {
    setSelectedStory(story)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedStory(null)
  }

  // Handle anchor links on page load
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const storyId = hash.replace('#story-', '')
      const story = stories.find(s => s.id === parseInt(storyId))
      if (story) {
        setSelectedStory(story)
        setIsModalOpen(true)
      }
    }
  }, [])

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">HerVoices</h1>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Share your PCOS journey to inspire and support others in our community
          </p>
        </div>

        {/* Stories List Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <Card key={story.id} className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer" onClick={() => handleStoryClick(story)}>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-4 mb-4">"{story.preview}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{story.isAnonymous ? "Anonymous" : story.name}</p>
                      {story.age && <p className="text-sm text-gray-500">Age {story.age}</p>}
                    </div>
                    <span className="text-rose-600 text-sm font-medium hover:text-rose-700">Read More →</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Share Your Story Section */}
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

      {/* Story Modal */}
      <StoryModal isOpen={isModalOpen} onClose={handleCloseModal} story={selectedStory} />
    </div>
  )
}

export default function HerVoicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen py-16 bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>}>
      <HerVoicesContent />
    </Suspense>
  )
}
