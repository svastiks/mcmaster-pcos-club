"use client"

import type React from "react"
import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
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
    {
      id: 2,
      name: "Anonymous",
      age: 20,
      preview: "I was diagnosed with PCOS when I was sixteen, but the story really started before a doctor ever said the words out loud...",
      fullStory: `I was diagnosed with PCOS when I was sixteen, but the story really started before a doctor ever said the words out loud.
  
  One of my close friends had PCOS, and through her, I became weirdly aware of the condition. I noticed her symptoms first. The acne, the irregular periods, the hair issues, the frustration. And then, slowly and uncomfortably, I started recognizing those same signs in myself. It was like holding up a mirror I didn’t ask for. I started connecting dots, quietly, almost nervously, and eventually did what a lot of teenage girls do when something feels off. I self-diagnosed before I ever stepped into a clinic.
  
  When I finally explained everything to my doctor, he ordered blood work and an ultrasound. That was when I learned about the Rotterdam criteria, the clinical checklist used to diagnose PCOS. A few tests later, it was official.
  
  I cried. Not in a dramatic way. In a stunned, silent, this-isn't-fair kind of way. I had barely heard of PCOS before, and suddenly I was being told I had a chronic condition with no cure. Just “management.” Lifestyle changes. Symptom control. Trial and error. For a sixteen-year-old, that felt like being handed a lifelong assignment with no instructions.
  
  Like so many girls before me, the first solution offered was birth control. It felt automatic. I was put on it and stayed on it for a year or two, and honestly, it was awful. It helped regulate my period, sure, but mentally I was constantly on edge. I was terrified of deep vein thrombosis, especially during long study sessions where I’d sit for hours. I didn’t feel informed or supported. I just felt lost, like I was doing something because I was told to, not because it actually fit my body.
  
  Once I started researching PCOS on my own, everything shifted. I learned that almost everyone with PCOS is handed the same script: birth control first, questions later. I connected with others who felt just as dismissed and confused as I did. That shared experience was comforting, but also frustrating. Why did it feel like no one was talking about how deeply this condition affects you beyond the physical symptoms?
  
  When I eventually saw an endocrinologist, I was given four options. Metformin. Spironolactone. Birth control. Another medication. Plus lifestyle changes and a very restrictive diet that felt unsustainable. That was it. No discussion of mental health. No acknowledgment of how exhausting it is to feel like your body is constantly working against you.
  
  Birth control gave me regular periods, but only while I was on it. The moment I stopped, my cycle disappeared again. Right now, I'm on spironolactone, and it's helped my acne, which I'm grateful for. But PCOS isn't just acne or periods. It's anxiety that lingers in the background. It's hair falling out when you're too young to be worrying about that. It's excessive hair growth that makes you feel like your body is betraying you in opposite directions at once.
  
  These things mess with your head. And no one really prepares you for that.
  
  So I started making quiet changes. Not dramatic transformations, just consistent ones. I work out three to four times a week. I weightlift. I do cardio. I walk whenever I can. I avoid fried food because my skin reacts almost instantly when I eat it. I get laser hair removal. I stay on spironolactone. I try to stay hydrated, even though I’m still working on that. I experiment carefully when I need to, paying attention to how my body responds.
  
  Sleep became non-negotiable. In 2025, despite being in a stressful pre-med program, I made a promise to myself to stop pulling all-nighters. I get six to seven hours of sleep a night, minimum. That alone felt like reclaiming some control.
  
  PCOS has ruined parts of my experience, and pretending otherwise would be a lie. But it has also forced me to listen to my body in a way I might never have learned otherwise. I've learned patience. I've learned self-advocacy. I've learned that managing PCOS isn't about perfection, it's about persistence.
  
  There's no cure. But there is resilience. And I'm still here, figuring it out, one quiet adjustment at a time.`,
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

        {/* Main Content Grid - Clean 2-column layout */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Stories</h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Left Column - Story card */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Story Submissions</h3>
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

            {/* Right Column - Combined Share Your Story and Instruction cards */}
            <div>
              <Card className="shadow-lg">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-center">Share Your Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Submit Button */}
                  <div className="text-center">
                    <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700 px-8 py-4 text-lg">
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdTa5eURR9WHDWTns09TvwMGScuI6oZr34zcUA2Uwt6BZlIAg/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                        Submit your story here!
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200"></div>

                  {/* Rewrite the narrative section */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Rewrite the narrative by sharing your experience!</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-gray-600">• Help others feel less alone</li>
                      <li className="text-sm text-gray-600">• Share valuable insights</li>
                      <li className="text-sm text-gray-600">• Build community support</li>
                      <li className="text-sm text-gray-600">• Raise PCOS awareness</li>
                    </ul>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200"></div>

                  {/* Privacy & Safety section */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Privacy & Safety</h4>
                    <ul className="space-y-2">
                      <li className="text-sm text-gray-600">• Anonymous sharing available</li>
                      <li className="text-sm text-gray-600">• Stories reviewed before publication</li>
                      <li className="text-sm text-gray-600">• Email kept private</li>
                      <li className="text-sm text-gray-600">• Request removal anytime</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
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
