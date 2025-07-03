"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"

interface Story {
  id: number
  name: string
  age?: number
  preview: string
  fullStory: string
  isAnonymous: boolean
}

interface StoryModalProps {
  isOpen: boolean
  onClose: () => void
  story: Story | null
}

export function StoryModal({ isOpen, onClose, story }: StoryModalProps) {
  if (!isOpen || !story) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">
              {story.isAnonymous ? "Anonymous" : story.name}
              {story.age && `, ${story.age}`}
            </CardTitle>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{story.fullStory}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
