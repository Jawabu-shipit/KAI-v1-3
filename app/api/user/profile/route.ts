import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const authToken = request.cookies.get("auth-token")

    if (!authToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const user = {
      id: "1",
      firstName: "Dr. John",
      lastName: "Doe",
      email: "doctor@example.com",
      role: "doctor",
      licenseNumber: "MD12345",
      institution: "Kenyatta National Hospital",
      specialization: "Internal Medicine",
      verified: true,
      createdAt: "2024-01-01T00:00:00.000Z",
    }

    return NextResponse.json({
      success: true,
      user,
    })
  } catch (error) {
    console.error("Profile fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch profile" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authToken = request.cookies.get("auth-token")

    if (!authToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const updates = await request.json()

    console.log("Profile update:", updates)

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully",
    })
  } catch (error) {
    console.error("Profile update error:", error)
    return NextResponse.json({ error: "Failed to update profile" }, { status: 500 })
  }
}
