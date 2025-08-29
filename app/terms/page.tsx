"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, ArrowLeft, AlertTriangle, Scale } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
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
              <Button variant="ghost" size="sm" className="hover:bg-primary/10" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-white/90 text-primary border-primary/20 shadow-lg">
              <Scale className="w-4 h-4 mr-2" />
              Legal Terms & Conditions
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our AI-powered medical assistant platform.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2024</p>
          </div>

          {/* Important Notice */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mb-8">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
              <CardTitle className="flex items-center gap-2 text-red-700">
                <AlertTriangle className="w-5 h-5" />
                Important Medical Disclaimer
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium mb-2">
                  This platform provides clinical decision support tools and is NOT a substitute for professional
                  medical judgment.
                </p>
                <ul className="text-red-600 text-sm space-y-1">
                  <li>• Always verify AI recommendations with current medical guidelines</li>
                  <li>• Consider patient-specific factors not captured in the system</li>
                  <li>• Seek senior consultation for complex or uncertain cases</li>
                  <li>• The final clinical decision always rests with the healthcare professional</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using the Kenya AI Medical Assistant platform ("Service"), you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Eligibility Requirements</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>You must be a licensed healthcare professional in Kenya</li>
                    <li>You must be at least 18 years of age</li>
                    <li>You must have the authority to enter into this agreement</li>
                    <li>Your medical license must be current and in good standing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">2. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Platform Features</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>AI-powered clinical decision support and differential diagnosis</li>
                    <li>Medical calculators and clinical assessment tools</li>
                    <li>Access to Kenyan Ministry of Health guidelines and protocols</li>
                    <li>Reference library with WHO-AFRO and KEMRI resources</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Limitations</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>The Service is for clinical decision support only, not diagnosis</li>
                    <li>AI recommendations must be validated by healthcare professionals</li>
                    <li>The Service does not replace clinical judgment or patient examination</li>
                    <li>Emergency situations require immediate medical intervention, not AI consultation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Professional Obligations</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Maintain current medical licensure and professional competency</li>
                    <li>Use the Service only within your scope of practice</li>
                    <li>Verify all AI recommendations against current medical standards</li>
                    <li>Document clinical decisions and rationale in patient records</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Security Obligations</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Protect your account credentials and access information</li>
                    <li>Report any suspected security breaches immediately</li>
                    <li>Ensure patient data is de-identified before input</li>
                    <li>Comply with all applicable data protection regulations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Prohibited Uses</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Using the Service for emergency medical situations</li>
                    <li>Sharing account access with unauthorized individuals</li>
                    <li>Attempting to reverse engineer or copy our algorithms</li>
                    <li>Using the Service for non-medical or commercial purposes</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">4. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Intellectual Property</h4>
                  <p className="text-muted-foreground mb-2">
                    All content, features, and functionality of the Service are owned by Kenya AI Medical Assistant and
                    are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>AI algorithms and machine learning models</li>
                    <li>Software code, databases, and system architecture</li>
                    <li>User interface design and user experience elements</li>
                    <li>Documentation, training materials, and content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">User-Generated Content</h4>
                  <p className="text-muted-foreground">
                    By using our Service, you grant us a non-exclusive, royalty-free license to use anonymized clinical
                    data for improving our AI algorithms and advancing medical research, in compliance with all
                    applicable privacy laws.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-2">Important Liability Notice</h4>
                      <p className="text-yellow-700 text-sm">
                        The Service provides clinical decision support tools. Healthcare professionals remain fully
                        responsible for all clinical decisions and patient care.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Limitations</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>We do not guarantee the accuracy of AI recommendations</li>
                    <li>The Service may have technical limitations or temporary outages</li>
                    <li>Clinical guidelines and protocols may change without notice</li>
                    <li>Individual patient factors may not be fully captured by the AI</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Liability Exclusions</h4>
                  <p className="text-muted-foreground">
                    To the maximum extent permitted by law, Kenya AI Medical Assistant shall not be liable for any
                    indirect, incidental, special, consequential, or punitive damages, including but not limited to loss
                    of profits, data, or use, arising from your use of the Service.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">6. Subscription and Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Free Trial</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>14-day free trial with full platform access</li>
                    <li>No credit card required for trial activation</li>
                    <li>Trial automatically expires without charges</li>
                    <li>Data and settings preserved during trial period</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Subscription Plans</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Monthly and annual subscription options available</li>
                    <li>Pricing displayed in Kenyan Shillings (KES)</li>
                    <li>Automatic renewal unless cancelled</li>
                    <li>30-day money-back guarantee for new subscribers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
                  <p className="text-muted-foreground">
                    You may cancel your subscription at any time. Cancellation takes effect at the end of the current
                    billing period. No refunds for partial months, except as required by law.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">7. Governing Law and Disputes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Applicable Law</h4>
                  <p className="text-muted-foreground">
                    These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any
                    disputes arising from these Terms or your use of the Service shall be subject to the exclusive
                    jurisdiction of the courts of Kenya.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Dispute Resolution</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Initial disputes should be addressed through our customer support</li>
                    <li>Mediation may be required before formal legal proceedings</li>
                    <li>Class action lawsuits are not permitted under these Terms</li>
                    <li>Professional medical liability remains with the healthcare provider</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">8. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Legal Department</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: legal@kenyaaimedical.com</p>
                    <p>Phone: +254 700 000 003</p>
                    <p>Address: University of Nairobi Campus, Nairobi, Kenya</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Customer Support</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: support@kenyaaimedical.com</p>
                    <p>Phone: +254 700 000 000</p>
                    <p>Hours: Monday-Friday, 8:00 AM - 6:00 PM EAT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-12">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  By creating an account, you agree to these Terms of Service and our Privacy Policy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    asChild
                  >
                    <Link href="/register">Create Account</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/privacy">View Privacy Policy</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
