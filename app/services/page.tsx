import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Calculator,
  BookOpen,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap,
  Globe,
  TrendingUp,
  Clock,
  Database,
} from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Kenya AI Medical Assistant</h1>
                <p className="text-sm text-gray-600">Clinical Decision Support System</p>
              </div>
            </div>
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

      {/* Breadcrumb Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <nav className="flex items-center justify-center gap-2 text-white/80 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                <span className="flex items-center gap-1">
                  <span>Home</span>
                </span>
              </Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-white font-medium">Our Services</span>
            </nav>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Medical AI Services</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive AI-powered healthcare solutions designed specifically for Kenyan medical professionals
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-white/80 text-purple-700 border-purple-200">
              <Zap className="w-4 h-4 mr-2" />
              Core Services
            </Badge>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Comprehensive Medical AI Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform offers a complete suite of AI-powered tools designed to enhance clinical decision-making and
              improve patient outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Clinical Decision Support */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">AI Clinical Decision Support</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Get evidence-based differential diagnoses and treatment recommendations aligned with Kenyan medical
                  guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Differential diagnosis with confidence scores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Treatment protocol recommendations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Red flag condition detection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Clinical reasoning explanations</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                  <Link href="/ai-console">
                    Try AI Console
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Medical Calculators */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Calculator className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Medical Calculators</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Essential clinical calculators validated for Kenyan practice standards and local population data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>BMI, BSA, and GFR calculations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Wells DVT/PE and CHADS₂-VASc scores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>CURB-65 and pediatric dosing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>QTc correction formulas</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/calculators">
                    Access Calculators
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Kenyan Guidelines Library */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Kenyan Guidelines Library</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Comprehensive database of Ministry of Health, WHO-AFRO, and KEMRI clinical guidelines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Ministry of Health protocols</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Kenya Essential Medicines List</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>WHO-AFRO regional guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Local care pathways</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/library">
                    Browse Library
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Data Protection & Safety */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Data Protection & Safety</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Full compliance with Kenya's Data Protection Act and international medical safety standards
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>AES-256 encryption</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>De-identified patient data</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Audit trails and access logs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Clinical safety guardrails</span>
                  </li>
                </ul>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/compliance">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Multi-User Support */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Multi-User Support</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Role-based access control for healthcare teams, medical students, and administrators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Doctor and student accounts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Hospital administrator portals</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Team collaboration features</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Usage analytics and reporting</span>
                  </li>
                </ul>
                <Button className="w-full bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="/admin">
                    Admin Portal
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Localized for Kenya */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">Localized for Kenya</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  Tailored specifically for Kenyan healthcare context with local disease patterns and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Local disease epidemiology</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Kenya-specific drug availability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Cultural and social considerations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>Resource-appropriate recommendations</span>
                  </li>
                </ul>
                <Button className="w-full bg-teal-600 hover:bg-teal-700" asChild>
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work History Section */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Platform Analytics</h4>
                      <p className="text-sm text-gray-600">Real-time usage insights</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Active Users</span>
                      <span className="font-bold text-purple-600">500+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Consultations</span>
                      <span className="font-bold text-blue-600">25,000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Accuracy Rate</span>
                      <span className="font-bold text-green-600">95%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="font-bold text-orange-600">&lt;2s</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Badge variant="secondary" className="mb-6 bg-purple-50 text-purple-700 border-purple-200">
                <Award className="w-4 h-4 mr-2" />
                Work History
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Create Your Own AI Medical Practice With Us</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">500+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Professionals</h3>
                    <p className="text-gray-600">
                      Trusted by doctors, nurses, and medical students across Kenya's leading healthcare institutions
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">25K+</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI Consultations</h3>
                    <p className="text-gray-600">
                      Over 25,000 successful AI-powered clinical consultations with 95% accuracy rate
                    </p>
                  </div>
                </div>
              </div>
              <Button
                className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
                asChild
              >
                <Link href="/about">
                  Explore More
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 bg-white/80 text-purple-700 border-purple-200">
                <Zap className="w-4 h-4 mr-2" />
                Features
              </Badge>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Start Diagnosing Faster with AI Medical Assistant
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We've designed it carefully and simply. Combined with evidence-based medicine and local guidelines for
                better patient outcomes.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Seamless Integration with existing workflows</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Smart Clinical Decision Automation</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Top-notch Data Security & Privacy</span>
                </li>
              </ul>
              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg"
                asChild
              >
                <Link href="/ai-console">
                  Try AI Console
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-900">Real-time Analysis</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full w-4/5"></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Processing clinical data...</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-green-600" />
                    <span className="font-semibold text-gray-900">Knowledge Base</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">MoH Guidelines</span>
                      <span className="text-green-600 font-medium">✓ Updated</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">WHO-AFRO Protocols</span>
                      <span className="text-green-600 font-medium">✓ Current</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Drug Database</span>
                      <span className="text-green-600 font-medium">✓ Synced</span>
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
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">Ready to Transform Your Practice?</h2>
          <p className="text-2xl opacity-90 mb-12 leading-relaxed">
            Join hundreds of healthcare professionals who trust our AI-powered clinical decision support
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
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
          <p className="text-lg opacity-75">No credit card required • 14-day free trial • Cancel anytime</p>
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
                  <Link href="/admin" className="hover:text-purple-600">
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-gray-900">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/guidelines" className="hover:text-purple-600">
                    Clinical Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/training" className="hover:text-purple-600">
                    Training Materials
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-purple-600">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/api-docs" className="hover:text-purple-600">
                    API Documentation
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
                <li>
                  <Link href="/contact" className="hover:text-purple-600">
                    Contact Us
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
