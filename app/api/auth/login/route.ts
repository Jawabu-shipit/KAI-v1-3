import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    if (email === "doctor@example.com" && password === "password123") {
      const user = {
        id: "1",
        email: "doctor@example.com",
        name: "Dr. John Doe",
        role: "doctor",
        license: "MD12345",
      }

      const response = NextResponse.json({
        success: true,
        user,
        message: "Login successful",
      })

      // Set authentication cookie
      response.cookies.set("auth-token", "mock-jwt-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      })

      return response
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
