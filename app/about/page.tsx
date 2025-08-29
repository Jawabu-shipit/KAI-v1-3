import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  ArrowRight,
  Shield,
  Users,
  Award,
  Target,
  Heart,
  Globe,
  CheckCircle,
  Brain,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/80 text-purple-700 border-purple-200">
              <Heart className="w-4 h-4 mr-2" />
              About Our Mission
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-gray-900 leading-tight">
              Empowering Kenyan Healthcare with
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                {" "}
                AI Innovation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
              We're on a mission to democratize access to world-class clinical decision support for every healthcare
              professional in Kenya
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide every Kenyan healthcare professional with AI-powered clinical decision support that
                  improves patient outcomes and reduces diagnostic uncertainty.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-teal-50 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A Kenya where every patient receives evidence-based care supported by AI technology, regardless of
                  their location or healthcare facility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-50 text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Patient safety, clinical excellence, data privacy, and equitable access to healthcare technology
                  across all regions of Kenya.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-white/80 text-purple-700 border-purple-200">
              <TrendingUp className="w-4 h-4 mr-2" />
              Our Impact
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Making a Difference in Kenyan Healthcare</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our launch, we've been proud to support healthcare professionals across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Healthcare Professionals</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">25K+</div>
              <div className="text-gray-600">AI Consultations</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">DPA Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Kenya Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-purple-50 text-purple-700 border-purple-200">
                <Globe className="w-4 h-4 mr-2" />
                Built for Kenya
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Why We Focus on Kenyan Healthcare</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kenya's healthcare system has unique challenges and opportunities. We've built our AI specifically to
                address the local context, disease patterns, and resource constraints.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Disease Epidemiology</h4>
                    <p className="text-gray-600">
                      Our AI understands malaria, TB, HIV, and other conditions prevalent in Kenya
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ministry of Health Guidelines</h4>
                    <p className="text-gray-600">
                      Aligned with official protocols and the Kenya Essential Medicines List
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Resource-Appropriate Care</h4>
                    <p className="text-gray-600">
                      Recommendations consider available resources in different healthcare settings
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Sensitivity</h4>
                    <p className="text-gray-600">
                      Understanding of local cultural factors that influence healthcare delivery
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="font-bold text-gray-900 mb-4">Healthcare Facilities Using Our Platform</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Kenyatta National Hospital</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Moi Teaching Hospital</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Aga Khan University</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Coast General Hospital</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Nairobi Hospital</span>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center max-w-4xl relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">Ready to Join Our Mission?</h2>
          <p className="text-2xl opacity-90 mb-12 leading-relaxed">
            Be part of the transformation of Kenyan healthcare through AI-powered clinical decision support
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-4"
              asChild
            >
              <Link href="/register">
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 bg-transparent shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-10 py-4"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <p className="text-lg opacity-75">Join 500+ healthcare professionals already using our platform</p>
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
