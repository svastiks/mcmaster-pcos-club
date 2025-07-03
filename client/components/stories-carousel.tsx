"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { StoryModal } from "./story-modal"

interface Story {
  id: number
  name: string
  age?: number
  preview: string
  fullStory: string
  isAnonymous: boolean
}

const stories: Story[] = [
  {
    id: 1,
    name: "Anonymous",
    age: 24,
    preview: "Getting diagnosed with PCOS at 22 felt overwhelming, but finding this community changed everything...",
    fullStory: `Getting diagnosed with PCOS at 22 felt overwhelming, but finding this community changed everything for me.

I remember sitting in the doctor's office, hearing the words "polycystic ovary syndrome" and feeling completely lost. The irregular periods, weight gain, and mood swings suddenly had a name, but I didn't know what that meant for my future.

The first few months were tough. I felt isolated and scared about what this diagnosis meant for my dreams of having a family someday. I spent countless nights researching online, often finding conflicting information that left me more confused than before.

Then I found the McMaster PCOS Club. Walking into my first meeting, I was nervous but hopeful. Hearing other people share their experiences made me realize I wasn't alone in this journey. The education sessions helped me understand my condition better, and the support from other members gave me the strength to advocate for myself with healthcare providers.

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

I started attending the McMaster PCOS Club meetings with her, initially just to be supportive. But I quickly realized how much I needed to learn. The educational sessions opened my eyes to the complexity of PCOS and how it affects every aspect of daily life.

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

export function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + stories.length) % stories.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length)
  }

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedStory(null)
  }

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + stories.length) % stories.length
    if (diff === 0) return "center"
    if (diff === 1 || diff === -(stories.length - 1)) return "right"
    return "left"
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-sm font-medium text-gray-600 mb-12 tracking-wider uppercase">
            Community Stories
          </h2>

          <div className="relative max-w-6xl mx-auto">
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Stories Container */}
            <div className="relative h-80 flex items-center justify-center">
              {stories.map((story, index) => {
                const position = getCardPosition(index)

                return (
                  <div
                    key={story.id}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      position === "center"
                        ? "z-30 scale-100 opacity-100 translate-x-0"
                        : position === "left"
                          ? "z-10 scale-75 opacity-40 -translate-x-64"
                          : "z-10 scale-75 opacity-40 translate-x-64"
                    }`}
                    onClick={() => handleStoryClick(story)}
                  >
                    <Card className={`w-80 h-72 ${position === "center" ? "shadow-2xl" : "shadow-lg"}`}>
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <p className="text-gray-700 text-sm leading-relaxed line-clamp-6 mb-4">"{story.preview}"</p>
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">{story.isAnonymous ? "Anonymous" : story.name}</p>
                            {story.age && <p className="text-sm text-gray-500">Age {story.age}</p>}
                          </div>
                          <button className="text-rose-600 text-sm font-medium hover:text-rose-700">Read More →</button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {stories.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-rose-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <StoryModal isOpen={isModalOpen} onClose={handleCloseModal} story={selectedStory} />
    </>
  )
}
