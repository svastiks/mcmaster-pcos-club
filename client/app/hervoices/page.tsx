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
      age: 24,
      preview: "Getting diagnosed with PCOS at 22 felt overwhelming, but finding this community changed everything...",
      fullStory: `Getting diagnosed with PCOS at 22 felt overwhelming, but finding this community changed everything for me.

I remember sitting in the doctor's office, hearing the words "polycystic ovary syndrome" and feeling completely lost. The irregular periods, weight gain, and mood swings suddenly had a name, but I didn't know what that meant for my future.

The first few months were tough. I felt isolated and scared about what this diagnosis meant for my dreams of having a family someday. I spent countless nights researching online, often finding conflicting information that left me more confused than before.

Then I found the McMaster PCOS Society. Walking into my first meeting, I was nervous but hopeful. Hearing other people share their experiences made me realize I wasn't alone in this journey. The education sessions helped me understand my condition better, and the support from other members gave me the strength to advocate for myself with healthcare providers.

Now, two years later, I've learned to manage my symptoms through lifestyle changes and medication. More importantly, I've found my voice in helping others who are just starting their PCOS journey. This community didn't just help me understand PCOS – it helped me understand that I'm so much more than my diagnosis.

To anyone newly diagnosed: it gets easier, you're not alone, and there's a whole community here ready to support you.`,
      isAnonymous: true,
    },
    {
      id: 2,
      name: "John Doe",
      age: 28,
      preview: "As a partner of someone with PCOS, I wanted to learn how to be more supportive...",
      fullStory: `As a partner of someone with PCOS, I wanted to learn how to be more supportive and understanding.

When my girlfriend was diagnosed with PCOS three years ago, I'll admit I didn't fully understand what it meant. I saw her struggling with symptoms, feeling frustrated with her body, and dealing with the emotional toll of the diagnosis, but I didn't know how to help.

I started attending the McMaster PCOS Society meetings with her, initially just to be supportive. But I quickly realized how much I needed to learn. The educational sessions opened my eyes to the complexity of PCOS and how it affects every aspect of daily life.

Learning about the hormonal imbalances, the increased risk of diabetes and heart disease, and the fertility concerns helped me understand why some days were harder than others. I learned that PCOS isn't just about irregular periods – it's a complex endocrine disorder that affects the whole body.

The club taught me practical ways to be supportive: helping with meal planning for insulin resistance, being patient during hormonal fluctuations, and celebrating small victories in symptom management. I also learned when to give space and when to offer help.

Most importantly, I learned to listen without trying to "fix" everything. Sometimes the best support is just acknowledging how difficult PCOS can be and being there through the ups and downs.

To other partners: educate yourself, be patient, and remember that your support means more than you know. This community welcomes everyone who wants to learn and help.`,
      isAnonymous: false,
    },
    {
      id: 3,
      name: "John Doe",
      age: 26,
      preview: "Managing PCOS while in university was challenging, but the club helped me find balance...",
      fullStory: `Managing PCOS while in university was challenging, but the club helped me find balance between my health and academic goals.

Being diagnosed with PCOS during my second year at McMaster felt like terrible timing. I was already stressed with coursework, and suddenly I had to deal with irregular periods, fatigue, and the emotional impact of a chronic condition.

The symptoms were affecting my academic performance. The fatigue made it hard to concentrate during lectures, and the mood swings from hormonal imbalances made group projects challenging. I was gaining weight despite trying to eat well, and my self-confidence was at an all-time low.

I almost didn't join the PCOS Club because I was worried about adding another commitment to my schedule. But it turned out to be one of the best decisions I made during university.

The club meetings became a safe space where I could talk about my struggles without judgment. Other students shared practical tips for managing symptoms while keeping up with academics: meal prep strategies for busy weeks, exercise routines that fit around class schedules, and stress management techniques for exam periods.

The educational workshops helped me understand how stress was worsening my PCOS symptoms, creating a vicious cycle. Learning about the connection between cortisol and insulin resistance motivated me to prioritize self-care, not just see it as "being lazy."

I also connected with healthcare providers through the club's resource network, finding doctors who understood both PCOS and the unique challenges of being a student.

Now in my final year, I've learned to manage my PCOS as part of my overall wellness routine. My grades improved once I started taking care of my health, and I've even become a peer mentor for newly diagnosed students.

University is stressful enough without dealing with PCOS alone. This club made all the difference in helping me succeed academically while taking care of my health.`,
      isAnonymous: false,
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
