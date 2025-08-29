"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Stethoscope,
  ArrowLeft,
  HeadphonesIcon,
  MessageSquare,
  BookOpen,
  Phone,
  Mail,
  Clock,
  Search,
  HelpCircle,
  AlertTriangle,
  CheckCircle,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
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
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-white/90 text-primary border-primary/20 shadow-lg">
              <HeadphonesIcon className="w-4 h-4 mr-2" />
              Help & Support Center
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">How Can We Help You?</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the support you need to make the most of your AI-powered medical assistant.
            </p>
          </div>

          {/* Search Bar */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mb-12">
            <CardContent className="p-6">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for help articles, tutorials, or common issues..."
                  className="pl-12 pr-4 py-4 text-lg border-0 bg-gray-50 focus:bg-white"
                />
                <Button className="absolute right-2 top-2 bg-gradient-to-r from-primary to-secondary">Search</Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Help Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Emergency Support</h3>
                <p className="text-muted-foreground mb-4">24/7 emergency technical support for critical issues</p>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary" asChild>
                  <Link href="tel:+254700000001">Call Now: +254 700 000 001</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Chat with our support team during business hours</p>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">Email Support</h3>
                <p className="text-muted-foreground mb-4">Send us a detailed message about your issue</p>
                <Button className="w-full bg-gradient-to-r from-accent to-primary" asChild>
                  <Link href="/contact">Send Email</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Support Content Tabs */}
          <Tabs defaultValue="faq" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto bg-white/90 shadow-lg">
              <TabsTrigger value="faq" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                FAQ
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                User Guides
              </TabsTrigger>
              <TabsTrigger
                value="troubleshooting"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Troubleshooting
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                Contact Info
              </TabsTrigger>
            </TabsList>

            <TabsContent value="faq" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground">Quick answers to common questions about our platform</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "How accurate is the AI diagnosis system?",
                    answer:
                      "Our AI maintains a 95% accuracy rate, validated against Kenyan medical guidelines and continuously updated with local disease patterns. However, it's designed as a decision support tool, not a replacement for clinical judgment.",
                    category: "AI & Accuracy",
                  },
                  {
                    question: "Is my patient data secure and private?",
                    answer:
                      "Yes, we use AES-256 encryption and are fully compliant with Kenya's Data Protection Act 2019. All patient data is de-identified and stored securely within Kenya's borders.",
                    category: "Privacy & Security",
                  },
                  {
                    question: "Can I use the platform offline?",
                    answer:
                      "Currently, our platform requires internet connectivity for AI processing. However, we're developing offline capabilities for essential features in our upcoming mobile app.",
                    category: "Technical",
                  },
                  {
                    question: "What's included in the free trial?",
                    answer:
                      "The 14-day free trial includes full access to AI consultations, medical calculators, reference library, and all platform features with no limitations or credit card required.",
                    category: "Billing & Plans",
                  },
                  {
                    question: "How do I cancel my subscription?",
                    answer:
                      "You can cancel anytime from your account settings. Cancellation takes effect at the end of your current billing period, and you'll retain access until then.",
                    category: "Billing & Plans",
                  },
                  {
                    question: "What medical guidelines does the AI follow?",
                    answer:
                      "Our AI is trained on Kenya Ministry of Health guidelines, WHO-AFRO protocols, KEMRI standards, and the Kenya Essential Medicines List, updated regularly to reflect current practices.",
                    category: "Medical Guidelines",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                        <Badge variant="outline" className="ml-2 flex-shrink-0">
                          {faq.category}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">User Guides & Tutorials</h2>
                <p className="text-lg text-muted-foreground">Step-by-step guides to help you master the platform</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Getting Started Guide",
                    description: "Complete walkthrough for new users",
                    icon: Zap,
                    color: "from-green-500 to-emerald-500",
                    duration: "10 min read",
                  },
                  {
                    title: "AI Console Tutorial",
                    description: "How to use AI-powered clinical consultations",
                    icon: HelpCircle,
                    color: "from-blue-500 to-indigo-500",
                    duration: "15 min read",
                  },
                  {
                    title: "Medical Calculators Guide",
                    description: "Using clinical calculators effectively",
                    icon: BookOpen,
                    color: "from-purple-500 to-violet-500",
                    duration: "8 min read",
                  },
                  {
                    title: "Reference Library Navigation",
                    description: "Finding and using medical guidelines",
                    icon: BookOpen,
                    color: "from-orange-500 to-red-500",
                    duration: "12 min read",
                  },
                  {
                    title: "Data Security Best Practices",
                    description: "Protecting patient information",
                    icon: AlertTriangle,
                    color: "from-red-500 to-pink-500",
                    duration: "6 min read",
                  },
                  {
                    title: "Account Management",
                    description: "Managing your profile and settings",
                    icon: CheckCircle,
                    color: "from-teal-500 to-cyan-500",
                    duration: "5 min read",
                  },
                ].map((guide, index) => (
                  <Card
                    key={index}
                    className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift cursor-pointer group"
                  >
                    <CardContent className="p-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <guide.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-foreground mb-2">{guide.title}</h3>
                      <p className="text-muted-foreground mb-4">{guide.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{guide.duration}</Badge>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                          Read Guide →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="troubleshooting" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Troubleshooting</h2>
                <p className="text-lg text-muted-foreground">Solutions to common technical issues</p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    issue: "AI Console not loading or showing errors",
                    solutions: [
                      "Check your internet connection and try refreshing the page",
                      "Clear your browser cache and cookies",
                      "Try using a different browser (Chrome, Firefox, Safari)",
                      "Disable browser extensions that might interfere",
                      "Contact support if the issue persists",
                    ],
                    severity: "high",
                  },
                  {
                    issue: "Login problems or account access issues",
                    solutions: [
                      "Verify you're using the correct email address",
                      "Try resetting your password using the 'Forgot Password' link",
                      "Check if your account has been temporarily locked",
                      "Ensure your medical license is still valid and verified",
                      "Contact support for account verification issues",
                    ],
                    severity: "medium",
                  },
                  {
                    issue: "Slow performance or timeouts",
                    solutions: [
                      "Check your internet speed (minimum 5 Mbps recommended)",
                      "Close other browser tabs and applications",
                      "Try accessing during off-peak hours",
                      "Use a wired connection instead of WiFi if possible",
                      "Report persistent performance issues to our team",
                    ],
                    severity: "low",
                  },
                  {
                    issue: "Medical calculator giving unexpected results",
                    solutions: [
                      "Double-check all input values for accuracy",
                      "Ensure you're using the correct units (kg, cm, etc.)",
                      "Verify the calculator is appropriate for your patient population",
                      "Compare results with manual calculations when possible",
                      "Report calculation discrepancies immediately",
                    ],
                    severity: "high",
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{item.issue}</CardTitle>
                        <Badge
                          variant={
                            item.severity === "high"
                              ? "destructive"
                              : item.severity === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className={
                            item.severity === "high"
                              ? "bg-red-100 text-red-700"
                              : item.severity === "medium"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-green-100 text-green-700"
                          }
                        >
                          {item.severity} priority
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-foreground mb-3">Recommended Solutions:</h4>
                      <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                        {item.solutions.map((solution, sIndex) => (
                          <li key={sIndex}>{solution}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground">Multiple ways to reach our support team</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                          <p className="text-muted-foreground mb-2">General Support: +254 700 000 000</p>
                          <p className="text-muted-foreground mb-2">Emergency: +254 700 000 001</p>
                          <p className="text-sm text-muted-foreground">Mon-Fri: 8AM-6PM EAT</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                          <p className="text-muted-foreground mb-2">support@kenyaaimedical.com</p>
                          <p className="text-muted-foreground mb-2">technical@kenyaaimedical.com</p>
                          <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">Support Hours</h3>
                          <div className="space-y-1 text-muted-foreground">
                            <p>Monday - Friday: 8:00 AM - 6:00 PM EAT</p>
                            <p>Saturday: 9:00 AM - 2:00 PM EAT</p>
                            <p>Sunday: Emergency support only</p>
                            <p className="text-sm text-primary font-medium">24/7 emergency technical support</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
                    <CardHeader>
                      <CardTitle>Priority Support Levels</CardTitle>
                      <CardDescription>Different support channels based on issue severity</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Critical (Emergency Line)</h4>
                          <p className="text-sm text-muted-foreground">
                            Platform down, data security issues, patient safety concerns
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">High (Phone/Chat)</h4>
                          <p className="text-sm text-muted-foreground">AI errors, login issues, calculation problems</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-foreground">Normal (Email)</h4>
                          <p className="text-sm text-muted-foreground">General questions, feature requests, training</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
