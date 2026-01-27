"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StoryModal } from "./story-modal";
import Link from "next/link";

interface Story {
  id: number;
  name: string;
  age?: number;
  preview: string;
  fullStory: string;
  isAnonymous: boolean;
}

const stories: Story[] = [
  {
    id: 1,
    name: "Anonymous",
    age: 17,
    preview:
      "In 2023, at just 17 years old, I stopped taking birth control for the first time in three years...",
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
    preview:
      "I was diagnosed with PCOS when I was sixteen, but the story really started before a doctor ever said the words out loud...",
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
];

export function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const handleStoryClick = (story: Story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStory(null);
  };

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + stories.length) % stories.length;
    if (diff === 0) return "center";
    if (diff === 1 || diff === -(stories.length - 1)) return "right";
    return "left";
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="w-full sm:container sm:mx-auto sm:px-6 px-0">
          <h2 className="text-center text-sm font-medium text-gray-600 mb-12 tracking-wider uppercase">
            HerVoices
          </h2>

          <div className="relative max-w-6xl mx-auto w-full">
            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hidden sm:flex"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg hidden sm:flex"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Stories Container */}
            <div className="relative h-80 flex items-center justify-center">
              {stories.map((story, index) => {
                const position = getCardPosition(index);

                return (
                  <div
                    key={story.id}
                    className={`absolute transition-all duration-500 ease-in-out cursor-pointer ${
                      position === "center"
                        ? "z-30 scale-100 opacity-100 translate-x-0"
                        : position === "left"
                          ? "z-10 scale-75 opacity-40 -translate-x-32 sm:-translate-x-64"
                          : "z-10 scale-75 opacity-40 translate-x-32 sm:translate-x-64"
                    }`}
                  >
                    <Link
                      href={`/hervoices#story-${story.id}`}
                      className="block"
                    >
                      <Card
                        className={`w-full max-w-xs sm:w-80 h-72 ${position === "center" ? "shadow-2xl" : "shadow-lg"}`}
                      >
                        <CardContent className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <p className="text-gray-700 text-sm leading-relaxed line-clamp-6 mb-4">
                              "{story.preview}"
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-gray-900">
                                {story.isAnonymous ? "Anonymous" : story.name}
                              </p>
                              {story.age && (
                                <p className="text-sm text-gray-500">
                                  Age {story.age}
                                </p>
                              )}
                            </div>
                            <span className="text-rose-600 text-sm font-medium hover:text-rose-700">
                              Read More →
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                );
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

      <StoryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        story={selectedStory}
      />
    </>
  );
}
