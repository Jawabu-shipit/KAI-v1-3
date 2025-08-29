"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Stethoscope,
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Monitor,
  Smartphone,
  Brain,
  Calculator,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function DemoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentDemo, setCurrentDemo] = useState("ai-console")

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
              <Button
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                asChild
              >
                <Link href="/register">Start Free Trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-white/90 text-primary border-primary/20 shadow-lg">
              <Play className="w-4 h-4 mr-2" />
              Interactive Demo
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Experience the Platform</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how our AI-powered medical assistant can enhance your clinical decision-making process.
            </p>
          </div>

          {/* Demo Video/Interactive Section */}
          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-pulse3d">
                    {isPlaying ? (
                      <Pause className="w-12 h-12 text-white" />
                    ) : (
                      <Play className="w-12 h-12 text-white ml-1" />
                    )}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    {currentDemo === "ai-console" && "AI Clinical Console Demo"}
                    {currentDemo === "calculators" && "Medical Calculators Demo"}
                    {currentDemo === "library" && "Reference Library Demo"}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {currentDemo === "ai-console" && "Watch how AI assists with clinical decision-making"}
                    {currentDemo === "calculators" && "See medical calculators in action"}
                    {currentDemo === "library" && "Explore the comprehensive medical library"}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-5 h-5 mr-2" />
                          Pause Demo
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Play Demo
                        </>
                      )}
                    </Button>
                    <Button variant="outline" size="lg">
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Restart
                    </Button>
                  </div>
                </div>
              </div>

              {/* Demo Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant={currentDemo === "ai-console" ? "default" : "outline"}
                  onClick={() => setCurrentDemo("ai-console")}
                  className={currentDemo === "ai-console" ? "bg-gradient-to-r from-primary to-secondary" : ""}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  AI Console
                </Button>
                <Button
                  variant={currentDemo === "calculators" ? "default" : "outline"}
                  onClick={() => setCurrentDemo("calculators")}
                  className={currentDemo === "calculators" ? "bg-gradient-to-r from-primary to-secondary" : ""}
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculators
                </Button>
                <Button
                  variant={currentDemo === "library" ? "default" : "outline"}
                  onClick={() => setCurrentDemo("library")}
                  className={currentDemo === "library" ? "bg-gradient-to-r from-primary to-secondary" : ""}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Library
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Feature Highlights */}
          <Tabs defaultValue="features" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto bg-white/90 shadow-lg">
              <TabsTrigger value="features" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Key Features
              </TabsTrigger>
              <TabsTrigger value="workflow" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Workflow
              </TabsTrigger>
              <TabsTrigger value="benefits" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Benefits
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Platform Features</h2>
                <p className="text-lg text-muted-foreground">Comprehensive tools for modern healthcare professionals</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Brain,
                    title: "AI Clinical Decision Support",
                    description:
                      "Get evidence-based differential diagnoses with confidence scores and treatment recommendations",
                    features: [
                      "95% accuracy rate",
                      "Local disease patterns",
                      "MoH guidelines aligned",
                      "Real-time analysis",
                    ],
                  },
                  {
                    icon: Calculator,
                    title: "Medical Calculators",
                    description: "50+ validated clinical calculators calibrated for Kenyan populations",
                    features: [
                      "BMI & GFR calculations",
                      "Risk assessment scores",
                      "Pediatric dosing",
                      "QTc corrections",
                    ],
                  },
                  {
                    icon: BookOpen,
                    title: "Reference Library",
                    description: "Comprehensive database of Kenyan medical guidelines and protocols",
                    features: ["MoH protocols", "WHO-AFRO guidelines", "KEMRI standards", "Drug formulary"],
                  },
                ].map((feature, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {feature.features.map((item, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workflow" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Clinical Workflow</h2>
                <p className="text-lg text-muted-foreground">How the AI assistant integrates into your practice</p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Patient Assessment",
                    description: "Input patient symptoms, vital signs, and clinical history into the secure platform",
                    details: [
                      "De-identified data entry",
                      "Structured clinical forms",
                      "Voice-to-text support",
                      "Mobile-friendly interface",
                    ],
                  },
                  {
                    step: 2,
                    title: "AI Analysis",
                    description:
                      "Our AI processes the information using Kenyan medical guidelines and local disease patterns",
                    details: [
                      "Real-time processing",
                      "Evidence-based analysis",
                      "Local epidemiology",
                      "Confidence scoring",
                    ],
                  },
                  {
                    step: 3,
                    title: "Clinical Recommendations",
                    description: "Receive differential diagnoses, treatment options, and clinical decision support",
                    details: ["Ranked diagnoses", "Treatment protocols", "Red flag warnings", "Follow-up guidance"],
                  },
                  {
                    step: 4,
                    title: "Clinical Decision",
                    description: "Use AI insights to inform your clinical judgment and patient care decisions",
                    details: [
                      "Professional validation",
                      "Patient-specific factors",
                      "Clinical documentation",
                      "Outcome tracking",
                    ],
                  },
                ].map((step, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{step.title}</h3>
                          <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                          <div className="grid md:grid-cols-2 gap-3">
                            {step.details.map((detail, dIndex) => (
                              <div key={dIndex} className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-muted-foreground">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Clinical Benefits</h2>
                <p className="text-lg text-muted-foreground">
                  How our platform improves patient care and clinical outcomes
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-green-700">Improved Diagnostic Accuracy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">95% diagnostic accuracy rate</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Reduced diagnostic errors</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Earlier disease detection</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-700">Enhanced Clinical Efficiency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">50% faster clinical assessments</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Streamlined documentation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Reduced consultation time</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-purple-700">Better Patient Outcomes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Improved treatment adherence</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Reduced hospital readmissions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Enhanced patient satisfaction</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-orange-700">Professional Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Continuous medical education</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Evidence-based learning</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Clinical decision confidence</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-xl text-red-700">Cost Effectiveness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Reduced unnecessary tests</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Optimized treatment protocols</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-muted-foreground">Lower healthcare costs</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardContent className="p-6 text-center">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                        Ready to Experience the Benefits?
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        Start your free trial and see the difference AI can make in your practice.
                      </p>
                      <Button
                        className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                        asChild
                      >
                        <Link href="/register">
                          Start Free Trial
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Device Compatibility */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mt-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Works on All Your Devices</CardTitle>
              <CardDescription>Access your AI medical assistant anywhere, anytime</CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Monitor className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Desktop & Laptop</h4>
                      <p className="text-sm text-muted-foreground">Full-featured web application</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Smartphone className="w-8 h-8 text-secondary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Mobile & Tablet</h4>
                      <p className="text-sm text-muted-foreground">Responsive design for on-the-go access</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                    <div className="flex items-center justify-center gap-8">
                      <Monitor className="w-16 h-16 text-primary" />
                      <Smartphone className="w-12 h-12 text-secondary" />
                    </div>
                    <p className="text-muted-foreground mt-4">Seamless sync across all devices</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
