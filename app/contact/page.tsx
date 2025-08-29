import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Stethoscope, ArrowRight, Mail, Phone, MapPin, Clock, MessageSquare, HeadphonesIcon } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Kenya AI Medical Assistant</h1>
                <p className="text-sm text-gray-600">Clinical Decision Support System</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="hover:bg-purple-50 hover:text-purple-700" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
                asChild
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-100 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-green-300/40 to-emerald-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-purple-300/40 to-pink-400/30 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/80 text-purple-700 border-purple-200">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Contact Our
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                Support Team
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
              We're here to help you get the most out of your AI-powered clinical decision support system
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl bg-white">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="bg-gray-50 border-0 shadow-sm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="bg-gray-50 border-0 shadow-sm" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="doctor@hospital.co.ke"
                      className="bg-gray-50 border-0 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+254 700 000 000"
                      className="bg-gray-50 border-0 shadow-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                      <SelectTrigger className="bg-gray-50 border-0 shadow-sm">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing Question</SelectItem>
                        <SelectItem value="feature">Feature Request</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="training">Training & Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="bg-gray-50 border-0 shadow-sm resize-none"
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
                    size="lg"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our team is available to help you with any questions about our AI medical assistant platform.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                        <p className="text-gray-600 mb-2">Get help via email</p>
                        <a
                          href="mailto:support@kenyaaimedical.com"
                          className="text-purple-600 hover:text-purple-700 font-medium"
                        >
                          support@kenyaaimedical.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                        <p className="text-gray-600 mb-2">Speak with our team</p>
                        <a href="tel:+254700000000" className="text-green-600 hover:text-green-700 font-medium">
                          +254 700 000 000
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Office Location</h3>
                        <p className="text-gray-600 mb-2">Visit us in person</p>
                        <address className="text-gray-700 not-italic">
                          Nairobi, Kenya
                          <br />
                          University of Nairobi Campus
                        </address>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Support Hours</h3>
                        <p className="text-gray-600 mb-2">When we're available</p>
                        <div className="text-gray-700">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                          <p>Saturday: 9:00 AM - 2:00 PM EAT</p>
                          <p>Sunday: Emergency support only</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <HeadphonesIcon className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold text-gray-900">Need Immediate Help?</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    For urgent technical issues or clinical support questions, our emergency support line is available
                    24/7.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 bg-transparent"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Support: +254 700 000 001
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-white/80 text-purple-700 border-purple-200">
              <MessageSquare className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Common Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to questions you might have about our platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">How accurate is the AI diagnosis?</h3>
                <p className="text-gray-600">
                  Our AI maintains a 95% accuracy rate, validated against Kenyan medical guidelines and continuously
                  updated with local disease patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Is my patient data secure?</h3>
                <p className="text-gray-600">
                  Yes, we use AES-256 encryption and are fully compliant with Kenya's Data Protection Act 2019. All data
                  is de-identified and stored securely.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Can I use this offline?</h3>
                <p className="text-gray-600">
                  Currently, our platform requires internet connectivity. However, we're developing offline capabilities
                  for Phase 2 of our mobile app.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What's included in the free trial?</h3>
                <p className="text-gray-600">
                  The 14-day free trial includes full access to AI consultations, medical calculators, and the reference
                  library with no limitations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">Kenya AI Medical</span>
              </div>
              <p className="text-sm text-gray-600">
                Empowering Kenyan healthcare professionals with AI-driven clinical decision support.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/ai-console" className="hover:text-purple-600">
                    AI Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="hover:text-purple-600">
                    Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/library" className="hover:text-purple-600">
                    Reference Library
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-purple-600">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-purple-600">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-purple-600">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-purple-600">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-purple-600">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/privacy" className="hover:text-purple-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-purple-600">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-purple-600">
                    DPA Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; 2024 Kenya AI Medical Assistant. All rights reserved. Compliant with Kenya Data Protection Act
              2019.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
