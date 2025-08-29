"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stethoscope, ArrowLeft, CheckCircle, FileText, Scale } from "lucide-react"
import Link from "next/link"

export default function CompliancePage() {
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
              Legal Compliance & Regulations
            </Badge>
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Data Protection Act Compliance</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive approach to meeting Kenya's Data Protection Act 2019 requirements and international
              healthcare standards.
            </p>
          </div>

          {/* Compliance Status */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm mb-8">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-6 h-6" />
                Full Compliance Status
              </CardTitle>
              <CardDescription>Current regulatory compliance and certifications</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">Kenya Data Protection Act 2019</h4>
                      <p className="text-sm text-muted-foreground">Registered with ODPC - Certificate #DPA2024-001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">ISO 27001:2013</h4>
                      <p className="text-sm text-muted-foreground">Information Security Management System</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">SOC 2 Type II</h4>
                      <p className="text-sm text-muted-foreground">Security, Availability, and Confidentiality</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">HIPAA Aligned</h4>
                      <p className="text-sm text-muted-foreground">Healthcare data protection standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">GDPR Compatible</h4>
                      <p className="text-sm text-muted-foreground">European data protection standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <div>
                      <h4 className="font-semibold text-foreground">Medical Device Standards</h4>
                      <p className="text-sm text-muted-foreground">IEC 62304 software lifecycle processes</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Kenya Data Protection Act 2019 Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Registration & Licensing</h4>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <p className="text-green-700 mb-2">
                      <strong>Data Controller Registration:</strong> Certificate #DPA2024-001
                    </p>
                    <p className="text-green-700 mb-2">
                      <strong>Data Protection Officer:</strong> Appointed and certified
                    </p>
                    <p className="text-green-700">
                      <strong>Annual Compliance Audit:</strong> Completed December 2024
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Data Processing Principles</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Lawful, fair and transparent processing of personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Data collected for specified, explicit and legitimate purposes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Data minimization - only necessary data is collected</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Accuracy and data quality maintenance</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Data Subject Rights</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h5 className="font-medium text-blue-700 mb-2">Access & Portability</h5>
                      <p className="text-sm text-blue-600">
                        Right to access personal data and receive it in a structured format
                      </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                      <h5 className="font-medium text-purple-700 mb-2">Rectification & Erasure</h5>
                      <p className="text-sm text-purple-600">Right to correct inaccurate data and request deletion</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Our Data Protection Officer</CardTitle>
                <CardDescription>For any data protection inquiries or to exercise your rights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Data Protection Officer</h4>
                      <p className="text-muted-foreground mb-1">Dr. Sarah Kimani, CIPP/E</p>
                      <p className="text-muted-foreground mb-1">Email: dpo@kenyaai-medical.com</p>
                      <p className="text-muted-foreground">Phone: +254 700 123 456</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Office of Data Protection Commissioner</h4>
                      <p className="text-muted-foreground mb-1">P.O. Box 43137-00100</p>
                      <p className="text-muted-foreground mb-1">Nairobi, Kenya</p>
                      <p className="text-muted-foreground">Website: odpc.go.ke</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
