"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, ArrowLeft, Shield, Eye, Lock, Database, Users, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Data Protection
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your privacy and data security are fundamental to our mission of providing safe, effective healthcare AI.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: January 15, 2024</p>
          </div>

          {/* Key Highlights */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mb-8">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Key Privacy Highlights
              </CardTitle>
              <CardDescription>What you need to know about how we protect your data</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Lock className="w-5 h-5 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">End-to-End Encryption</h4>
                    <p className="text-sm text-muted-foreground">
                      All patient data is encrypted using AES-256 encryption
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">De-identified Data</h4>
                    <p className="text-sm text-muted-foreground">
                      Personal identifiers are removed from all clinical data
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Local Data Storage</h4>
                    <p className="text-sm text-muted-foreground">
                      Data stored within Kenya's borders per DPA requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Limited Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Only authorized healthcare professionals can access data
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Healthcare Professional Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Name, email address, and professional credentials</li>
                    <li>Institution affiliation and professional role</li>
                    <li>Medical license number (for verification purposes)</li>
                    <li>Usage patterns and platform interactions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Clinical Data</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>De-identified patient symptoms and clinical presentations</li>
                    <li>Diagnostic queries and AI consultation requests</li>
                    <li>Treatment decisions and clinical outcomes (anonymized)</li>
                    <li>Medical calculator inputs and results</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Device information and browser type</li>
                    <li>IP address and location data (for security purposes)</li>
                    <li>Session logs and access timestamps</li>
                    <li>Performance metrics and error reports</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Primary Uses</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Provide AI-powered clinical decision support</li>
                    <li>Maintain and improve our medical algorithms</li>
                    <li>Ensure platform security and prevent unauthorized access</li>
                    <li>Comply with medical and regulatory requirements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Secondary Uses</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Generate anonymized research insights for medical advancement</li>
                    <li>Improve user experience and platform functionality</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Send important updates about platform changes or security</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">3. Data Protection & Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technical Safeguards</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>AES-256 encryption for data at rest and in transit</li>
                    <li>Multi-factor authentication for all user accounts</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Automated threat detection and response systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Administrative Safeguards</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Role-based access controls with principle of least privilege</li>
                    <li>Regular staff training on data protection and privacy</li>
                    <li>Comprehensive audit trails for all data access</li>
                    <li>Incident response procedures for data breaches</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Physical Safeguards</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Secure data centers with 24/7 monitoring</li>
                    <li>Biometric access controls and surveillance systems</li>
                    <li>Environmental controls and backup power systems</li>
                    <li>Secure disposal of hardware and storage media</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">4. Kenya Data Protection Act Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Full DPA 2019 Compliance</h4>
                      <p className="text-green-700 text-sm">
                        We are fully compliant with Kenya's Data Protection Act 2019 and maintain registration with the
                        Office of the Data Protection Commissioner.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Rights Under DPA 2019</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Right to access your personal data</li>
                    <li>Right to rectification of inaccurate data</li>
                    <li>Right to erasure ("right to be forgotten")</li>
                    <li>Right to restrict processing</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                    <li>Right to withdraw consent at any time</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Localization</h4>
                  <p className="text-muted-foreground">
                    All personal data of Kenyan citizens is processed and stored within Kenya's borders, in compliance
                    with DPA 2019 requirements for sensitive personal data.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">5. Data Sharing & Third Parties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2">Limited Data Sharing</h4>
                      <p className="text-blue-700 text-sm">
                        We do not sell, rent, or trade your personal information. Data sharing is limited to essential
                        service providers and legal requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Authorized Third Parties</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Cloud infrastructure providers (with data processing agreements)</li>
                    <li>Security service providers for threat detection</li>
                    <li>Analytics providers for platform improvement (anonymized data only)</li>
                    <li>Legal and regulatory authorities when required by law</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Research Partnerships</h4>
                  <p className="text-muted-foreground">
                    We may share anonymized, aggregated data with approved research institutions to advance medical
                    knowledge, but only with explicit consent and ethical approval.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">6. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Protection Officer</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: dpo@kenyaaimedical.com</p>
                    <p>Phone: +254 700 000 002</p>
                    <p>Address: University of Nairobi Campus, Nairobi, Kenya</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">General Privacy Inquiries</h4>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Email: privacy@kenyaaimedical.com</p>
                    <p>Response time: Within 72 hours</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Office of the Data Protection Commissioner</h4>
                  <p className="text-muted-foreground">
                    If you have concerns about our data practices, you may also contact the Office of the Data
                    Protection Commissioner of Kenya.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer CTA */}
          <div className="text-center mt-12">
            <Card className="border-0 shadow-xl bg-gradient-to-r from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Questions About Our Privacy Policy?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our team is here to help you understand how we protect your data and privacy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    asChild
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/terms">View Terms of Service</Link>
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
