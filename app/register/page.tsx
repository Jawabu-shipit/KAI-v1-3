"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Stethoscope, ArrowRight, Shield, CheckCircle, Eye, EyeOff, Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"

interface RegisterForm {
  firstName: string
  lastName: string
  email: string
  profession: string
  institution: string
  password: string
  confirmPassword: string
  agreeToTerms: boolean
  agreeToDataProcessing: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterForm>({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    institution: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    agreeToDataProcessing: false,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [registrationSuccess, setRegistrationSuccess] = useState(false)

  const getPasswordStrength = (password: string): { score: number; label: string; color: string } => {
    let score = 0
    if (password.length >= 8) score += 25
    if (/[A-Z]/.test(password)) score += 25
    if (/[a-z]/.test(password)) score += 25
    if (/[0-9]/.test(password)) score += 25

    if (score <= 25) return { score, label: "Weak", color: "bg-red-500" }
    if (score <= 50) return { score, label: "Fair", color: "bg-yellow-500" }
    if (score <= 75) return { score, label: "Good", color: "bg-blue-500" }
    return { score, label: "Strong", color: "bg-green-500" }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.profession) newErrors.profession = "Please select your professional role"
    if (!formData.institution.trim()) newErrors.institution = "Institution is required"

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the Terms of Service and Privacy Policy"
    }

    if (!formData.agreeToDataProcessing) {
      newErrors.agreeToDataProcessing = "You must consent to data processing to create an account"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setErrors({})

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000))

      setRegistrationSuccess(true)
      // Redirect would happen here in a real app
      setTimeout(() => {
        window.location.href = "/login"
      }, 2000)
    } catch (error) {
      setErrors({
        general: "Registration failed. Please try again.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (field: keyof RegisterForm, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear field-specific errors when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const passwordStrength = getPasswordStrength(formData.password)

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 hover-lift">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl animate-pulse3d">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold text-foreground">Kenya AI Medical Assistant</h1>
                <p className="text-sm text-muted-foreground">Clinical Decision Support System</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-6 bg-white/90 text-primary border-primary/20 shadow-lg hover-lift">
              <Shield className="w-4 h-4 mr-2" />
              Secure Registration
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Create Your Account</h1>
            <p className="text-xl text-muted-foreground">
              Join 500+ healthcare professionals using AI-powered clinical support
            </p>
          </div>

          {registrationSuccess && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                Registration successful! Redirecting to login page...
              </AlertDescription>
            </Alert>
          )}

          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm hover-lift">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardTitle className="text-3xl font-serif">Get Started</CardTitle>
              <CardDescription className="text-lg">
                Create your account to access the medical AI assistant
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-8">
              {errors.general && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{errors.general}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base font-medium">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className={`bg-gray-50 border-0 shadow-sm ${errors.firstName ? "border-red-300 bg-red-50" : ""}`}
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      disabled={isLoading}
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base font-medium">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className={`bg-gray-50 border-0 shadow-sm ${errors.lastName ? "border-red-300 bg-red-50" : ""}`}
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      disabled={isLoading}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="doctor@hospital.co.ke"
                    className={`bg-gray-50 border-0 shadow-sm ${errors.email ? "border-red-300 bg-red-50" : ""}`}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    disabled={isLoading}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="profession" className="text-base font-medium">
                    Professional Role
                  </Label>
                  <Select
                    value={formData.profession}
                    onValueChange={(value) => handleInputChange("profession", value)}
                    disabled={isLoading}
                  >
                    <SelectTrigger
                      className={`bg-gray-50 border-0 shadow-sm ${errors.profession ? "border-red-300 bg-red-50" : ""}`}
                    >
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="doctor">Medical Doctor</SelectItem>
                      <SelectItem value="nurse">Registered Nurse</SelectItem>
                      <SelectItem value="student">Medical Student</SelectItem>
                      <SelectItem value="resident">Medical Resident</SelectItem>
                      <SelectItem value="specialist">Specialist</SelectItem>
                      <SelectItem value="admin">Hospital Administrator</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.profession && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.profession}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-base font-medium">
                    Institution/Hospital
                  </Label>
                  <Input
                    id="institution"
                    placeholder="Kenyatta National Hospital"
                    className={`bg-gray-50 border-0 shadow-sm ${errors.institution ? "border-red-300 bg-red-50" : ""}`}
                    value={formData.institution}
                    onChange={(e) => handleInputChange("institution", e.target.value)}
                    disabled={isLoading}
                  />
                  {errors.institution && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.institution}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-base font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a strong password"
                      className={`bg-gray-50 border-0 shadow-sm pr-12 ${errors.password ? "border-red-300 bg-red-50" : ""}`}
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  {formData.password && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Password strength:</span>
                        <span
                          className={`font-medium ${passwordStrength.score >= 75 ? "text-green-600" : passwordStrength.score >= 50 ? "text-blue-600" : passwordStrength.score >= 25 ? "text-yellow-600" : "text-red-600"}`}
                        >
                          {passwordStrength.label}
                        </span>
                      </div>
                      <Progress value={passwordStrength.score} className="h-2" />
                    </div>
                  )}
                  {errors.password && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.password}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-base font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm your password"
                      className={`bg-gray-50 border-0 shadow-sm pr-12 ${errors.confirmPassword ? "border-red-300 bg-red-50" : ""}`}
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      disabled={isLoading}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mt-0.5 text-primary focus:ring-primary"
                        checked={formData.agreeToTerms}
                        onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                        disabled={isLoading}
                      />
                      <span className="text-muted-foreground">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:text-primary/80 font-medium">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium">
                          Privacy Policy
                        </Link>
                      </span>
                    </label>
                    {errors.agreeToTerms && (
                      <p className="text-sm text-red-600 flex items-center gap-1 ml-6">
                        <AlertCircle className="w-4 h-4" />
                        {errors.agreeToTerms}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-start gap-3 text-sm cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 mt-0.5 text-primary focus:ring-primary"
                        checked={formData.agreeToDataProcessing}
                        onChange={(e) => handleInputChange("agreeToDataProcessing", e.target.checked)}
                        disabled={isLoading}
                      />
                      <span className="text-muted-foreground">
                        I consent to data processing in accordance with Kenya's Data Protection Act 2019
                      </span>
                    </label>
                    {errors.agreeToDataProcessing && (
                      <p className="text-sm text-red-600 flex items-center gap-1 ml-6">
                        <AlertCircle className="w-4 h-4" />
                        {errors.agreeToDataProcessing}
                      </p>
                    )}
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl text-lg py-6"
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    <>
                      Create Account
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="text-center text-base text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login" className="text-primary hover:text-primary/80 font-medium">
                  Sign in here
                </Link>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <h3 className="font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                What you get with your account:
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>14-day free trial with full access</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>AI-powered clinical decision support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Access to Kenya MoH guidelines</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>Medical calculators and reference library</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
