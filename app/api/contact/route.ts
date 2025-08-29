import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, priority } = await request.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const contactSubmission = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      priority: priority || "medium",
      status: "received",
      createdAt: new Date().toISOString(),
    }

    console.log("Contact form submission:", contactSubmission)

    return NextResponse.json({
      success: true,
      message: "Your message has been received. We will respond within 24 hours.",
      ticketId: contactSubmission.id,
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
