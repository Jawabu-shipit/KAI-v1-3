import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, category, priority, subject, description } = await request.json()

    if (!name || !email || !category || !subject || !description) {
      return NextResponse.json({ error: "All required fields must be provided" }, { status: 400 })
    }

    const ticket = {
      id: `TICKET-${Date.now()}`,
      name,
      email,
      category,
      priority: priority || "medium",
      subject,
      description,
      status: "open",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    console.log("Support ticket created:", ticket)

    return NextResponse.json({
      success: true,
      message: "Support ticket created successfully",
      ticket: {
        id: ticket.id,
        status: ticket.status,
        createdAt: ticket.createdAt,
      },
    })
  } catch (error) {
    console.error("Support ticket error:", error)
    return NextResponse.json({ error: "Failed to create support ticket" }, { status: 500 })
  }
}
