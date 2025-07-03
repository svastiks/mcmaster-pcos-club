import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    return NextResponse.json({
      success: true,
      message: "Feedback submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting feedback:", error)
    return NextResponse.json({ success: false, message: "Failed to submit feedback" }, { status: 500 })
  }
}
