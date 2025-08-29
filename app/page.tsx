import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Stethoscope,
  Brain,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Zap,
  Activity,
  Heart,
  Microscope,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl flex items-center justify-center shadow-xl hover-lift animate-pulse3d">
                <Stethoscope className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg sm:text-2xl font-bold text-foreground">Kenya AI Medical Assistant</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Clinical Decision Support System</p>
              </div>
              <div className="block sm:hidden">
                <h1 className="text-base font-bold text-foreground">Kenya AI</h1>
                <p className="text-xs text-muted-foreground">Medical AI</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="ghost"
                className="hover:bg-primary/10 hover:text-primary font-medium text-sm sm:text-base px-3 sm:px-4"
                asChild
              >
                <Link href="/login">Sign In</Link>
              </Button>
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover-lift text-sm sm:text-base px-3 sm:px-4"
                asChild
              >
                <Link href="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-green-100 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute top-60 right-20 w-56 h-56 bg-gradient-to-br from-secondary/40 to-accent/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-emerald-300/40 to-green-400/30 rounded-full blur-xl animate-rotate3d"></div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="text-left animate-slideInUp3d order-2 lg:order-1">
              <Badge
                variant="secondary"
                className="mb-6 sm:mb-8 bg-white/90 text-primary border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift text-sm sm:text-base"
              >
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                Compliant with Kenya Data Protection Act
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-black mb-6 sm:mb-8 text-foreground leading-tight">
                Meet the Best
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {" "}
                  Medical Co-Pilot
                </span>
                <br />
                in Kenya
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed font-medium">
                Get evidence-based differential diagnoses, treatment recommendations, and medical calculations aligned
                with Kenyan Ministry of Health guidelines and WHO-AFRO protocols.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 hover-lift animate-pulse3d min-h-[48px]"
                  asChild
                >
                  <Link href="/ai-console">
                    <Brain className="w-5 h-5 sm:w-7 sm:h-7 mr-2 sm:mr-3" />
                    Start AI Consultation
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary/30 hover:border-primary hover:bg-primary/5 text-lg sm:text-xl px-8 sm:px-10 py-4 sm:py-6 transition-all duration-300 hover-lift bg-transparent min-h-[48px]"
                  asChild
                >
                  <Link href="/demo">Watch Demo</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm sm:text-lg text-muted-foreground">
                <div className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-secondary flex-shrink-0" />
                  <span>500+ professionals</span>
                </div>
              </div>
            </div>

            <div className="relative animate-slideInUp3d order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
              <div className="bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 max-w-lg mx-auto border border-white/30 hover-lift transform-3d">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-gray-100">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center shadow-xl animate-pulse3d">
                    <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-lg sm:text-xl">AI Medical Assistant</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                      <p className="text-xs sm:text-sm text-primary font-semibold">Online & Ready</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-5 shadow-sm hover-lift">
                    <p className="text-foreground font-medium text-base sm:text-lg">
                      Patient presents with fever, headache, and joint pain. What should I consider?
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-4 sm:p-6 ml-4 sm:ml-8 shadow-xl hover-lift">
                    <p className="font-semibold mb-3 sm:mb-4 text-base sm:text-lg">
                      Based on Kenyan epidemiology, consider:
                    </p>
                    <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                      <li className="flex items-center gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg">Malaria (high prevalence)</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg">Dengue fever</span>
                      </li>
                      <li className="flex items-center gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-lg">Typhoid fever</span>
                      </li>
                    </ul>
                    <p className="text-sm sm:text-base opacity-95 bg-white/15 rounded-xl p-2 sm:p-3">
                      Recommend rapid diagnostic test for malaria first...
                    </p>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4">
                  <Input
                    placeholder="Ask about symptoms, treatments..."
                    className="bg-gray-50 border-0 shadow-sm text-sm sm:text-lg py-2 sm:py-3 min-h-[44px]"
                  />
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl hover-lift min-h-[44px] px-4"
                  >
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </div>

              <div className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 bg-gradient-to-r from-primary to-secondary text-white px-3 sm:px-6 py-2 sm:py-3 rounded-2xl text-xs sm:text-base font-bold shadow-xl hover-lift animate-float">
                Kenya MoH Guidelines
              </div>
              <div
                className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 bg-gradient-to-r from-secondary to-accent text-white px-3 sm:px-6 py-2 sm:py-3 rounded-2xl text-xs sm:text-base font-bold shadow-xl hover-lift animate-float"
                style={{ animationDelay: "1s" }}
              >
                WHO-AFRO Protocols
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-10 bg-gradient-to-r from-accent to-primary text-white px-2 sm:px-4 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-xl hover-lift animate-rotate3d">
                Real-time AI
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-pulse3d" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Trusted by 500+ Healthcare Professionals
            </h3>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-12 sm:mb-16 max-w-3xl mx-auto">
            Leading medical institutions across Kenya choose our AI assistant for clinical decision support
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-center">
            {[
              "Kenyatta National Hospital",
              "Moi Teaching Hospital",
              "Aga Khan University",
              "Nairobi Hospital",
              "Coast General Hospital",
            ].map((hospital, index) => (
              <div
                key={hospital}
                className="bg-gradient-to-br from-card to-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-slideInUp3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-base sm:text-lg lg:text-xl font-bold text-foreground text-center">{hospital}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <Badge
              variant="secondary"
              className="mb-6 sm:mb-8 bg-white/90 text-primary border-primary/20 shadow-lg text-sm sm:text-base"
            >
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Advanced Medical Features
            </Badge>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 text-foreground">
              Revolutionary AI-Powered Healthcare
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              Experience the future of medical decision-making with our cutting-edge AI platform designed specifically
              for Kenyan healthcare
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
            {[
              {
                icon: Brain,
                title: "AI Clinical Decision Support",
                description:
                  "Get instant differential diagnoses and treatment recommendations based on patient symptoms and Kenyan medical guidelines.",
                color: "from-primary to-secondary",
              },
              {
                icon: Activity,
                title: "Medical Calculators",
                description:
                  "Access 50+ validated medical calculators including BMI, GFR, Wells Score, and more - all calibrated for Kenyan populations.",
                color: "from-secondary to-accent",
              },
              {
                icon: Heart,
                title: "Kenyan Guidelines Library",
                description:
                  "Complete reference library with Ministry of Health guidelines, WHO-AFRO protocols, and local treatment standards.",
                color: "from-accent to-primary",
              },
              {
                icon: Shield,
                title: "Data Protection & Safety",
                description:
                  "Full compliance with Kenya Data Protection Act 2019 with end-to-end encryption and secure data handling.",
                color: "from-primary to-accent",
              },
              {
                icon: Users,
                title: "Multi-User Support",
                description:
                  "Collaborative platform supporting doctors, nurses, medical students, and healthcare administrators.",
                color: "from-secondary to-primary",
              },
              {
                icon: Microscope,
                title: "Localized for Kenya",
                description:
                  "Tailored for Kenyan healthcare with local disease patterns, drug availability, and cultural considerations.",
                color: "from-accent to-secondary",
              },
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover-lift animate-slideInUp3d"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 text-center">
                  <div
                    className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center shadow-xl mx-auto mb-6 sm:mb-8 animate-pulse3d`}
                  >
                    <feature.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6">{feature.title}</h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge
              variant="secondary"
              className="mb-4 sm:mb-6 bg-primary/10 text-primary border-primary/20 shadow-lg text-sm sm:text-base"
            >
              <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto">
              See what doctors and medical students across Kenya are saying about our AI assistant
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {[
              {
                name: "Dr. Sarah Kimani",
                role: "Internal Medicine, KNH",
                initials: "SK",
                testimonial:
                  "This AI assistant has transformed my clinical practice. The differential diagnoses are spot-on and aligned with our local guidelines.",
                gradient: "from-primary to-secondary",
              },
              {
                name: "Dr. James Mwangi",
                role: "Family Medicine, Nairobi",
                initials: "JM",
                testimonial:
                  "The medical calculators are incredibly accurate and save me so much time during patient consultations.",
                gradient: "from-secondary to-accent",
              },
              {
                name: "Alice Njeri",
                role: "Medical Student, UoN",
                initials: "AN",
                testimonial:
                  "As a medical student, this platform has been invaluable for learning clinical reasoning and decision-making.",
                gradient: "from-accent to-primary",
              },
            ].map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 hover-lift animate-slideInUp3d"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex items-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed font-medium">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-5">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${testimonial.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-xl animate-pulse3d`}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-lg sm:text-xl">{testimonial.name}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="container mx-auto text-center max-w-5xl relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black mb-8 sm:mb-10 leading-tight animate-slideInUp3d">
            Ready to enhance your clinical practice?
          </h2>
          <p
            className="text-xl sm:text-2xl lg:text-3xl opacity-95 mb-12 sm:mb-16 leading-relaxed font-medium animate-slideInUp3d"
            style={{ animationDelay: "0.2s" }}
          >
            Join healthcare professionals across Kenya who trust our AI-powered decision support system
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center mb-8 sm:mb-10 animate-slideInUp3d"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 hover-lift min-h-[48px] sm:min-h-[56px]"
              asChild
            >
              <Link href="/register">
                Start Free Trial
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ml-3 sm:ml-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 sm:border-3 border-white text-white hover:bg-white/10 bg-transparent shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg sm:text-xl lg:text-2xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 hover-lift min-h-[48px] sm:min-h-[56px]"
              asChild
            >
              <Link href="/demo">Watch Demo</Link>
            </Button>
          </div>
          <p className="text-lg sm:text-xl opacity-80 animate-slideInUp3d" style={{ animationDelay: "0.6s" }}>
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg animate-pulse3d">
                  <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="font-bold text-foreground text-lg sm:text-xl">Kenya AI Medical</span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Empowering Kenyan healthcare professionals with AI-driven clinical decision support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-base sm:text-lg">Platform</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <Link href="/ai-console" className="hover:text-primary transition-colors">
                    AI Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/calculators" className="hover:text-primary transition-colors">
                    Calculators
                  </Link>
                </li>
                <li>
                  <Link href="/library" className="hover:text-primary transition-colors">
                    Reference Library
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-base sm:text-lg">Resources</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="hover:text-primary transition-colors">
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 sm:mb-6 text-foreground text-base sm:text-lg">Legal</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/compliance" className="hover:text-primary transition-colors">
                    DPA Compliance
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-sm sm:text-base text-muted-foreground">
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
