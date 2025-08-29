import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, password, role, licenseNumber, institution, specialization } =
      await request.json()

    if (!firstName || !lastName || !email || !password || !role) {
      return NextResponse.json({ error: "All required fields must be provided" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters long" }, { status: 400 })
    }

    const user = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      role,
      licenseNumber,
      institution,
      specialization,
      verified: false,
      createdAt: new Date().toISOString(),
    }

    console.log("User registered:", { ...user, password: "[REDACTED]" })

    return NextResponse.json({
      success: true,
      message: "Registration successful. Please check your email for verification.",
      user: { ...user, password: undefined },
    })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
