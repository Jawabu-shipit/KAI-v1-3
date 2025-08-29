"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Brain,
  Stethoscope,
  AlertTriangle,
  BookOpen,
  ArrowLeft,
  Loader2,
  CheckCircle,
  AlertCircle,
  Info,
  Activity,
} from "lucide-react"
import Link from "next/link"

interface PatientData {
  age: string
  gender: string
  location: string
  symptoms: string
  history: string
  bp: string
  hr: string
  temp: string
  spo2: string
  labs: string
  medications: string
  comorbidities: string
}

interface AIResponse {
  differentialDiagnoses: Array<{
    condition: string
    probability: string
    reasoning: string
    priority: "high" | "medium" | "low"
  }>
  recommendations: Array<{
    category: string
    action: string
    urgency: "immediate" | "urgent" | "routine"
  }>
  redFlags: string[]
  followUp: string
}

export default function AIConsolePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [aiResponse, setAiResponse] = useState<AIResponse | null>(null)
  const [patientData, setPatientData] = useState<PatientData>({
    age: "",
    gender: "",
    location: "",
    symptoms: "",
    history: "",
    bp: "",
    hr: "",
    temp: "",
    spo2: "",
    labs: "",
    medications: "",
    comorbidities: "",
  })

  const handleInputChange = (field: keyof PatientData, value: string) => {
    setPatientData((prev) => ({ ...prev, [field]: value }))
  }

  const generateAIResponse = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/ai/diagnose", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      })

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error("API returned error response")
      }

      const transformedResponse: AIResponse = {
        differentialDiagnoses: [
          // Add primary diagnosis as highest priority
          {
            condition: data.diagnosis.primaryDiagnosis.condition,
            probability: `High (${data.diagnosis.primaryDiagnosis.confidence}%)`,
            reasoning: `Primary diagnosis with ${data.diagnosis.primaryDiagnosis.confidence}% confidence. ICD-10: ${data.diagnosis.primaryDiagnosis.icd10}`,
            priority: "high" as const,
          },
          // Add differential diagnoses
          ...data.diagnosis.differentialDiagnoses.map((diff: any) => ({
            condition: diff.condition,
            probability: `Medium (${diff.confidence}%)`,
            reasoning: `Differential diagnosis with ${diff.confidence}% confidence. ICD-10: ${diff.icd10}`,
            priority: diff.confidence > 70 ? ("medium" as const) : ("low" as const),
          })),
        ],
        recommendations: data.diagnosis.recommendations.flatMap((rec: any) =>
          rec.items.map((item: string) => ({
            category: rec.category,
            action: item,
            urgency: rec.category === "Treatment" ? ("urgent" as const) : ("routine" as const),
          })),
        ),
        redFlags: data.diagnosis.redFlags,
        followUp:
          data.diagnosis.kenyaSpecific?.localConsiderations?.join(". ") ||
          "Follow standard clinical protocols and return if symptoms worsen.",
      }

      setAiResponse(transformedResponse)
    } catch (error) {
      console.error("Error generating AI response:", error)

      setAiResponse({
        differentialDiagnoses: [
          {
            condition: "Error Processing Request",
            probability: "N/A",
            reasoning:
              "Unable to process your request at this time. Please check your internet connection and try again.",
            priority: "high" as const,
          },
        ],
        recommendations: [
          {
            category: "System Error",
            action: "Please try again or contact support if the problem persists.",
            urgency: "routine" as const,
          },
        ],
        redFlags: ["System temporarily unavailable"],
        followUp: "Please try again in a few moments or contact technical support.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200"
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "low":
        return "text-green-600 bg-green-50 border-green-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "immediate":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case "urgent":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case "routine":
        return <Info className="w-4 h-4 text-blue-500" />
      default:
        return <Info className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hover:bg-primary/10" asChild>
                <Link href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Link>
              </Button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-xl animate-pulse3d">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-serif font-bold text-foreground">AI Clinical Console</h1>
                  <p className="text-sm text-muted-foreground">Clinical Decision Support System</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/90 text-primary border-primary/20 shadow-lg">
              <Stethoscope className="w-4 h-4 mr-2" />
              MoH Guidelines v2024.1
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Brain className="w-6 h-6 text-primary" />
                  Clinical Input Form
                </CardTitle>
                <CardDescription className="text-lg">
                  Provide patient information for AI-powered clinical decision support
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                {/* Patient Demographics */}
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-foreground flex items-center gap-2">
                    <Activity className="w-5 h-5 text-secondary" />
                    Patient Demographics
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="age" className="text-base font-medium">
                        Age
                      </Label>
                      <Input
                        id="age"
                        placeholder="e.g., 35"
                        value={patientData.age}
                        onChange={(e) => handleInputChange("age", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender" className="text-base font-medium">
                        Gender
                      </Label>
                      <Select value={patientData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location" className="text-base font-medium">
                        Location
                      </Label>
                      <Select
                        value={patientData.location}
                        onValueChange={(value) => handleInputChange("location", value)}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select county" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nairobi">Nairobi</SelectItem>
                          <SelectItem value="mombasa">Mombasa</SelectItem>
                          <SelectItem value="kisumu">Kisumu</SelectItem>
                          <SelectItem value="nakuru">Nakuru</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Chief Complaint & History */}
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-foreground">Chief Complaint & History</h3>
                  <div>
                    <Label htmlFor="symptoms" className="text-base font-medium">
                      Presenting Symptoms
                    </Label>
                    <Textarea
                      id="symptoms"
                      placeholder="Describe the patient's main symptoms, duration, and characteristics..."
                      className="min-h-[120px] mt-2"
                      value={patientData.symptoms}
                      onChange={(e) => handleInputChange("symptoms", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="history" className="text-base font-medium">
                      History of Present Illness
                    </Label>
                    <Textarea
                      id="history"
                      placeholder="Detailed history of the current illness..."
                      className="min-h-[100px] mt-2"
                      value={patientData.history}
                      onChange={(e) => handleInputChange("history", e.target.value)}
                    />
                  </div>
                </div>

                <Separator />

                {/* Vital Signs */}
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-foreground">Vital Signs</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                      <Label htmlFor="bp" className="text-base font-medium">
                        Blood Pressure
                      </Label>
                      <Input
                        id="bp"
                        placeholder="e.g., 120/80"
                        value={patientData.bp}
                        onChange={(e) => handleInputChange("bp", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="hr" className="text-base font-medium">
                        Heart Rate
                      </Label>
                      <Input
                        id="hr"
                        placeholder="e.g., 72 bpm"
                        value={patientData.hr}
                        onChange={(e) => handleInputChange("hr", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="temp" className="text-base font-medium">
                        Temperature
                      </Label>
                      <Input
                        id="temp"
                        placeholder="e.g., 37.2°C"
                        value={patientData.temp}
                        onChange={(e) => handleInputChange("temp", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="spo2" className="text-base font-medium">
                        SpO₂
                      </Label>
                      <Input
                        id="spo2"
                        placeholder="e.g., 98%"
                        value={patientData.spo2}
                        onChange={(e) => handleInputChange("spo2", e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Laboratory Results */}
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-foreground">Laboratory Results (Optional)</h3>
                  <div>
                    <Label htmlFor="labs" className="text-base font-medium">
                      Lab Values
                    </Label>
                    <Textarea
                      id="labs"
                      placeholder="Enter relevant lab results (CBC, chemistry panel, etc.)..."
                      className="min-h-[100px] mt-2"
                      value={patientData.labs}
                      onChange={(e) => handleInputChange("labs", e.target.value)}
                    />
                  </div>
                </div>

                <Separator />

                {/* Current Medications & Comorbidities */}
                <div className="space-y-4">
                  <h3 className="font-serif font-bold text-xl text-foreground">Current Medications & Comorbidities</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="medications" className="text-base font-medium">
                        Current Medications
                      </Label>
                      <Textarea
                        id="medications"
                        placeholder="List current medications and dosages..."
                        className="min-h-[100px] mt-2"
                        value={patientData.medications}
                        onChange={(e) => handleInputChange("medications", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="comorbidities" className="text-base font-medium">
                        Medical History
                      </Label>
                      <Textarea
                        id="comorbidities"
                        placeholder="Past medical history, chronic conditions..."
                        className="min-h-[100px] mt-2"
                        value={patientData.comorbidities}
                        onChange={(e) => handleInputChange("comorbidities", e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-xl text-lg py-6"
                  onClick={generateAIResponse}
                  disabled={isLoading || !patientData.symptoms.trim()}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing Patient Data...
                    </>
                  ) : (
                    <>
                      <Brain className="w-5 h-5 mr-2" />
                      Generate AI Recommendations
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* AI Response Panel */}
          <div className="space-y-6">
            {/* Safety Notice */}
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="flex items-center gap-2 text-red-700">
                  <AlertTriangle className="w-5 h-5" />
                  Clinical Safety Notice
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-sm">
                  <p className="text-muted-foreground">
                    This AI system provides clinical decision support based on Kenyan Ministry of Health guidelines.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <p className="text-red-700 font-medium">
                      ⚠️ AI outputs are decision support tools, not replacements for clinical judgment.
                    </p>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Always verify recommendations with current guidelines
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Consider patient-specific factors not captured in the input
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      Seek senior consultation for complex cases
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Reference */}
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center gap-2 text-blue-700">
                  <BookOpen className="w-5 h-5" />
                  Quick Reference
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Red Flag Conditions</span>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      SBP &lt; 90 mmHg
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      SpO₂ &lt; 90%
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      Altered mental status
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertCircle className="w-3 h-3 text-red-500" />
                      Active bleeding
                    </li>
                  </ul>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Common Conditions</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      Kenya
                    </Badge>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-center gap-2">
                      <Info className="w-3 h-3 text-blue-500" />
                      Malaria (coastal regions)
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-3 h-3 text-blue-500" />
                      TB/HIV co-infection
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-3 h-3 text-blue-500" />
                      Pneumonia
                    </li>
                    <li className="flex items-center gap-2">
                      <Info className="w-3 h-3 text-blue-500" />
                      Typhoid fever
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* AI Response */}
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Clinical Analysis
                </CardTitle>
                <CardDescription>
                  {aiResponse
                    ? "AI-powered recommendations based on patient data"
                    : "Complete the form to receive AI analysis"}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {isLoading ? (
                  <div className="text-center py-8">
                    <Loader2 className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
                    <p className="text-lg font-medium text-foreground">Analyzing patient data...</p>
                    <p className="text-sm text-muted-foreground mt-2">Processing clinical information with AI</p>
                  </div>
                ) : aiResponse ? (
                  <ScrollArea className="h-[600px] pr-4">
                    <div className="space-y-6">
                      {/* Differential Diagnoses */}
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-4 text-foreground">Differential Diagnoses</h4>
                        <div className="space-y-3">
                          {aiResponse.differentialDiagnoses.map((diagnosis, index) => (
                            <div
                              key={index}
                              className={`p-4 rounded-lg border ${getPriorityColor(diagnosis.priority)}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold">{diagnosis.condition}</h5>
                                <Badge variant="outline" className={getPriorityColor(diagnosis.priority)}>
                                  {diagnosis.probability}
                                </Badge>
                              </div>
                              <p className="text-sm">{diagnosis.reasoning}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Recommendations */}
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-4 text-foreground">Clinical Recommendations</h4>
                        <div className="space-y-3">
                          {aiResponse.recommendations.map((rec, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                              <div className="flex items-start gap-3">
                                {getUrgencyIcon(rec.urgency)}
                                <div className="flex-1">
                                  <h5 className="font-semibold text-foreground">{rec.category}</h5>
                                  <p className="text-sm text-muted-foreground mt-1">{rec.action}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      {/* Red Flags */}
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-4 text-red-700 flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Red Flag Symptoms to Monitor
                        </h4>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <ul className="space-y-2">
                            {aiResponse.redFlags.map((flag, index) => (
                              <li key={index} className="flex items-center gap-2 text-sm text-red-700">
                                <AlertCircle className="w-4 h-4" />
                                {flag}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Separator />

                      {/* Follow-up */}
                      <div>
                        <h4 className="font-serif font-bold text-lg mb-4 text-foreground">Follow-up Instructions</h4>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <p className="text-sm text-blue-700">{aiResponse.followUp}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Ready for AI Analysis</p>
                    <p className="text-sm mt-2">
                      Complete the clinical input form to receive comprehensive AI-powered recommendations
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
