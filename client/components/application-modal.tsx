"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { X, Upload } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ApplicationModalProps {
  isOpen: boolean
  onClose: () => void
  positionTitle: string
}

export function ApplicationModal({ isOpen, onClose, positionTitle }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const { toast } = useToast()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      position: positionTitle,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      resume: resumeFile,
    }

    try {
      // Replace with your actual backend endpoint
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: "We'll review your application and get back to you soon.",
        })
        onClose()
        e.currentTarget.reset()
        setResumeFile(null)
      } else {
        throw new Error("Failed to submit application")
      }
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResumeFile(file)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">Apply for {positionTitle}</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-base font-medium">
                Full Name *
              </Label>
              <Input id="name" name="name" placeholder="Your full name" required className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email *
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

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium">
                Phone Number
              </Label>
              <Input id="phone" name="phone" type="tel" placeholder="Your phone number" className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="resume" className="text-base font-medium">
                Resume Upload
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="resume" className="cursor-pointer">
                  <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {resumeFile ? resumeFile.name : "Click to upload your resume"}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PDF, DOC, or DOCX files only</p>
                </label>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 bg-rose-600 hover:bg-rose-700" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
