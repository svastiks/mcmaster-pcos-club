import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Here you would typically save to your database
    // For now, we'll just log the data and return success
    console.log("Story submission:", data)

    // Replace this with your actual database logic
    // Example: await db.stories.create({ data })

    return NextResponse.json({
      success: true,
      message: "Story submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting story:", error)
    return NextResponse.json({ success: false, message: "Failed to submit story" }, { status: 500 })
  }
}
