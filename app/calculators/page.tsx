"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calculator,
  Heart,
  Key as Kidney,
  Scale,
  Thermometer,
  ArrowLeft,
  Activity,
  Stethoscope,
  AlertTriangle,
  CheckCircle,
  Info,
  Brain,
  Zap,
  Baby,
  Droplets,
} from "lucide-react"
import Link from "next/link"

interface CalculatorResult {
  value: string
  interpretation: string
  category: "normal" | "abnormal" | "high-risk" | "low-risk" | "moderate-risk"
  recommendations?: string[]
}

export default function CalculatorsPage() {
  // BMI Calculator State
  const [bmiData, setBmiData] = useState({ weight: "", height: "" })
  const [bmiResult, setBmiResult] = useState<CalculatorResult | null>(null)

  // eGFR Calculator State
  const [gfrData, setGfrData] = useState({ creatinine: "", age: "", gender: "male", race: "other" })
  const [gfrResult, setGfrResult] = useState<CalculatorResult | null>(null)

  // CHADS2-VASc State
  const [chadsData, setChadsData] = useState({
    chf: false,
    hypertension: false,
    age75: false,
    diabetes: false,
    stroke: false,
    vascular: false,
    age65: false,
    female: false,
  })
  const [chadsResult, setChadsResult] = useState<CalculatorResult | null>(null)

  // Wells DVT State
  const [wellsData, setWellsData] = useState({
    cancer: false,
    paralysis: false,
    bedridden: false,
    tenderness: false,
    swelling: false,
    collateral: false,
    pitting: false,
    alternative: false,
  })
  const [wellsResult, setWellsResult] = useState<CalculatorResult | null>(null)

  // CURB-65 State
  const [curbData, setCurbData] = useState({
    confusion: false,
    urea: false,
    respiratory: false,
    bp: false,
    age65: false,
  })
  const [curbResult, setCurbResult] = useState<CalculatorResult | null>(null)

  // Pediatric Dosing State
  const [pedData, setPedData] = useState({ weight: "", dosePerKg: "", medication: "" })
  const [pedResult, setPedResult] = useState<CalculatorResult | null>(null)

  // BSA Calculator State
  const [bsaData, setBsaData] = useState({ weight: "", height: "" })
  const [bsaResult, setBsaResult] = useState<CalculatorResult | null>(null)

  // QTc Calculator State
  const [qtcData, setQtcData] = useState({ qt: "", rr: "", method: "bazett" })
  const [qtcResult, setQtcResult] = useState<CalculatorResult | null>(null)

  // Maintenance Fluids State
  const [fluidData, setFluidData] = useState({ weight: "", age: "" })
  const [fluidResult, setFluidResult] = useState<CalculatorResult | null>(null)

  // Cockcroft-Gault State
  const [cgData, setCgData] = useState({ creatinine: "", age: "", weight: "", gender: "male" })
  const [cgResult, setCgResult] = useState<CalculatorResult | null>(null)

  // Glasgow Coma Scale State
  const [gcsData, setGcsData] = useState({ eye: "", verbal: "", motor: "" })
  const [gcsResult, setGcsResult] = useState<CalculatorResult | null>(null)

  // APACHE II State
  const [apacheData, setApacheData] = useState({
    age: "",
    temp: "",
    map: "",
    hr: "",
    rr: "",
    fio2: "",
    pao2: "",
    ph: "",
    sodium: "",
    potassium: "",
    creatinine: "",
    hematocrit: "",
    wbc: "",
    gcs: "",
    chronic: false,
    postop: false,
  })
  const [apacheResult, setApacheResult] = useState<CalculatorResult | null>(null)

  // SOFA Score State
  const [sofaData, setSofaData] = useState({
    pao2fio2: "",
    platelets: "",
    bilirubin: "",
    map: "",
    gcs: "",
    creatinine: "",
    dopamine: false,
    dobutamine: false,
    epinephrine: false,
    norepinephrine: false,
  })
  const [sofaResult, setSofaResult] = useState<CalculatorResult | null>(null)

  // Apgar Score State
  const [apgarData, setApgarData] = useState({
    appearance: "",
    pulse: "",
    grimace: "",
    activity: "",
    respiration: "",
  })
  const [apgarResult, setApgarResult] = useState<CalculatorResult | null>(null)

  // BMI Calculation
  const calculateBMI = () => {
    const weight = Number.parseFloat(bmiData.weight)
    const height = Number.parseFloat(bmiData.height) / 100 // Convert cm to m

    if (!weight || !height) return

    const bmi = weight / (height * height)
    let interpretation = ""
    let category: CalculatorResult["category"] = "normal"
    let recommendations: string[] = []

    if (bmi < 18.5) {
      interpretation = "Underweight"
      category = "abnormal"
      recommendations = ["Consider nutritional assessment", "Rule out underlying conditions", "Monitor weight gain"]
    } else if (bmi < 25) {
      interpretation = "Normal weight"
      category = "normal"
      recommendations = ["Maintain current weight", "Continue healthy lifestyle"]
    } else if (bmi < 30) {
      interpretation = "Overweight"
      category = "moderate-risk"
      recommendations = ["Lifestyle modification", "Diet and exercise counseling", "Monitor for comorbidities"]
    } else {
      interpretation = "Obese"
      category = "high-risk"
      recommendations = [
        "Weight management program",
        "Screen for diabetes and hypertension",
        "Consider specialist referral",
      ]
    }

    setBmiResult({
      value: `${bmi.toFixed(1)} kg/m²`,
      interpretation,
      category,
      recommendations,
    })
  }

  // eGFR Calculation (CKD-EPI 2021)
  const calculateGFR = () => {
    const creatinine = Number.parseFloat(gfrData.creatinine) / 88.4 // Convert μmol/L to mg/dL
    const age = Number.parseFloat(gfrData.age)

    if (!creatinine || !age) return

    let gfr = 0
    const isFemale = gfrData.gender === "female"

    // Simplified CKD-EPI 2021 formula
    if (isFemale) {
      if (creatinine <= 0.7) {
        gfr = 142 * Math.pow(creatinine / 0.7, -0.241) * Math.pow(0.9938, age)
      } else {
        gfr = 142 * Math.pow(creatinine / 0.7, -1.2) * Math.pow(0.9938, age)
      }
    } else {
      if (creatinine <= 0.9) {
        gfr = 142 * Math.pow(creatinine / 0.9, -0.302) * Math.pow(0.9938, age)
      } else {
        gfr = 142 * Math.pow(creatinine / 0.9, -1.2) * Math.pow(0.9938, age)
      }
    }

    let interpretation = ""
    let category: CalculatorResult["category"] = "normal"
    let recommendations: string[] = []

    if (gfr >= 90) {
      interpretation = "Normal kidney function"
      category = "normal"
      recommendations = ["Continue routine monitoring"]
    } else if (gfr >= 60) {
      interpretation = "Mild decrease in kidney function"
      category = "normal"
      recommendations = ["Monitor annually", "Control blood pressure and diabetes"]
    } else if (gfr >= 45) {
      interpretation = "Moderate decrease (Stage 3a CKD)"
      category = "moderate-risk"
      recommendations = ["Nephrology referral", "Monitor every 6 months", "Bone and mineral screening"]
    } else if (gfr >= 30) {
      interpretation = "Moderate decrease (Stage 3b CKD)"
      category = "high-risk"
      recommendations = [
        "Nephrology referral urgent",
        "Prepare for renal replacement therapy",
        "Cardiovascular risk assessment",
      ]
    } else {
      interpretation = "Severe decrease (Stage 4-5 CKD)"
      category = "high-risk"
      recommendations = [
        "Urgent nephrology referral",
        "Prepare for dialysis/transplant",
        "Specialist management required",
      ]
    }

    setGfrResult({
      value: `${Math.round(gfr)} mL/min/1.73m²`,
      interpretation,
      category,
      recommendations,
    })
  }

  // CHADS2-VASc Calculation
  const calculateChads = () => {
    let score = 0
    if (chadsData.chf) score += 1
    if (chadsData.hypertension) score += 1
    if (chadsData.age75) score += 2
    if (chadsData.diabetes) score += 1
    if (chadsData.stroke) score += 2
    if (chadsData.vascular) score += 1
    if (chadsData.age65) score += 1
    if (chadsData.female) score += 1

    let interpretation = ""
    let category: CalculatorResult["category"] = "low-risk"
    let recommendations: string[] = []

    if (score === 0) {
      interpretation = "Very low risk"
      category = "low-risk"
      recommendations = ["No anticoagulation recommended", "Annual reassessment"]
    } else if (score === 1) {
      interpretation = "Low risk"
      category = "low-risk"
      recommendations = ["Consider anticoagulation", "Assess bleeding risk", "Patient preference important"]
    } else if (score === 2) {
      interpretation = "Moderate risk"
      category = "moderate-risk"
      recommendations = ["Anticoagulation recommended", "Assess bleeding risk with HAS-BLED"]
    } else {
      interpretation = "High risk"
      category = "high-risk"
      recommendations = ["Anticoagulation strongly recommended", "Monitor INR if on warfarin", "Consider DOAC"]
    }

    setChadsResult({
      value: score.toString(),
      interpretation,
      category,
      recommendations,
    })
  }

  // Wells DVT Calculation
  const calculateWells = () => {
    let score = 0
    if (wellsData.cancer) score += 1
    if (wellsData.paralysis) score += 1
    if (wellsData.bedridden) score += 1
    if (wellsData.tenderness) score += 1
    if (wellsData.swelling) score += 1
    if (wellsData.collateral) score += 1
    if (wellsData.pitting) score += 1
    if (wellsData.alternative) score -= 2

    let interpretation = ""
    let category: CalculatorResult["category"] = "low-risk"
    let recommendations: string[] = []

    if (score <= 0) {
      interpretation = "Low probability"
      category = "low-risk"
      recommendations = ["D-dimer test", "If negative, DVT unlikely", "Consider alternative diagnosis"]
    } else if (score <= 2) {
      interpretation = "Moderate probability"
      category = "moderate-risk"
      recommendations = ["D-dimer test", "If positive, consider imaging", "Ultrasound if high clinical suspicion"]
    } else {
      interpretation = "High probability"
      category = "high-risk"
      recommendations = ["Urgent duplex ultrasound", "Consider empirical anticoagulation", "Specialist consultation"]
    }

    setWellsResult({
      value: score.toString(),
      interpretation,
      category,
      recommendations,
    })
  }

  // CURB-65 Calculation
  const calculateCurb = () => {
    let score = 0
    if (curbData.confusion) score += 1
    if (curbData.urea) score += 1
    if (curbData.respiratory) score += 1
    if (curbData.bp) score += 1
    if (curbData.age65) score += 1

    let interpretation = ""
    let category: CalculatorResult["category"] = "low-risk"
    let recommendations: string[] = []

    if (score <= 1) {
      interpretation = "Low risk - Outpatient treatment"
      category = "low-risk"
      recommendations = ["Home treatment appropriate", "Oral antibiotics", "Follow-up in 48-72 hours"]
    } else if (score === 2) {
      interpretation = "Moderate risk - Consider hospitalization"
      category = "moderate-risk"
      recommendations = ["Consider short stay or home IV", "Close monitoring", "Senior review"]
    } else {
      interpretation = "High risk - Hospital treatment"
      category = "high-risk"
      recommendations = ["Admit to hospital", "IV antibiotics", "Consider ICU if score ≥4"]
    }

    setCurbResult({
      value: score.toString(),
      interpretation,
      category,
      recommendations,
    })
  }

  // Pediatric Dosing Calculation
  const calculatePediatricDose = () => {
    const weight = Number.parseFloat(pedData.weight)
    const dosePerKg = Number.parseFloat(pedData.dosePerKg)

    if (!weight || !dosePerKg) return

    const totalDose = weight * dosePerKg

    setPedResult({
      value: `${totalDose.toFixed(1)} mg`,
      interpretation: `Total dose for ${weight}kg child`,
      category: "normal",
      recommendations: [
        "Verify dose against reference",
        "Check maximum daily dose",
        "Consider age-appropriate formulation",
      ],
    })
  }

  // BSA Calculation (Mosteller formula)
  const calculateBSA = () => {
    const weight = Number.parseFloat(bsaData.weight)
    const height = Number.parseFloat(bsaData.height)

    if (!weight || !height) return

    const bsa = Math.sqrt((weight * height) / 3600)

    setBsaResult({
      value: `${bsa.toFixed(2)} m²`,
      interpretation: `Body Surface Area (Mosteller formula)`,
      category: "normal",
      recommendations: ["Used for chemotherapy dosing", "Cardiac index calculations", "Drug dosing adjustments"],
    })
  }

  // QTc Calculation
  const calculateQTc = () => {
    const qt = Number.parseFloat(qtcData.qt)
    const rr = Number.parseFloat(qtcData.rr)

    if (!qt || !rr) return

    let qtc = 0
    if (qtcData.method === "bazett") {
      qtc = qt / Math.sqrt(rr / 1000)
    } else {
      // Fridericia
      qtc = qt / Math.pow(rr / 1000, 1 / 3)
    }

    let interpretation = ""
    let category: CalculatorResult["category"] = "normal"
    let recommendations: string[] = []

    if (qtc < 350) {
      interpretation = "Short QTc"
      category = "abnormal"
      recommendations = ["Consider short QT syndrome", "Review medications", "Cardiology consultation"]
    } else if (qtc <= 450) {
      interpretation = "Normal QTc"
      category = "normal"
      recommendations = ["Normal range", "Continue monitoring if on QT-prolonging drugs"]
    } else if (qtc <= 500) {
      interpretation = "Prolonged QTc"
      category = "moderate-risk"
      recommendations = ["Review medications", "Monitor for arrhythmias", "Consider dose reduction"]
    } else {
      interpretation = "Severely prolonged QTc"
      category = "high-risk"
      recommendations = ["Stop QT-prolonging drugs", "Urgent cardiology consultation", "Monitor continuously"]
    }

    setQtcResult({
      value: `${Math.round(qtc)} ms`,
      interpretation,
      category,
      recommendations,
    })
  }

  // Maintenance Fluids (Holliday-Segar)
  const calculateFluids = () => {
    const weight = Number.parseFloat(fluidData.weight)
    const age = Number.parseFloat(fluidData.age)

    if (!weight) return

    let fluids = 0
    if (weight <= 10) {
      fluids = weight * 100
    } else if (weight <= 20) {
      fluids = 1000 + (weight - 10) * 50
    } else {
      fluids = 1500 + (weight - 20) * 20
    }

    const hourlyRate = fluids / 24

    setFluidResult({
      value: `${Math.round(fluids)} mL/day (${hourlyRate.toFixed(1)} mL/hr)`,
      interpretation: `Maintenance fluid requirement`,
      category: "normal",
      recommendations: [
        "Adjust for fever (+12% per °C >37°C)",
        "Reduce if cardiac/renal disease",
        "Monitor electrolytes",
      ],
    })
  }

  // Cockcroft-Gault Calculation
  const calculateCG = () => {
    const creatinine = Number.parseFloat(cgData.creatinine) / 88.4 // Convert μmol/L to mg/dL
    const age = Number.parseFloat(cgData.age)
    const weight = Number.parseFloat(cgData.weight)

    if (!creatinine || !age || !weight) return

    let crcl = ((140 - age) * weight) / (72 * creatinine)
    if (cgData.gender === "female") {
      crcl *= 0.85
    }

    let interpretation = ""
    let category: CalculatorResult["category"] = "normal"
    let recommendations: string[] = []

    if (crcl >= 90) {
      interpretation = "Normal kidney function"
      category = "normal"
      recommendations = ["Continue routine monitoring"]
    } else if (crcl >= 60) {
      interpretation = "Mild decrease"
      category = "normal"
      recommendations = ["Monitor annually", "Control BP and diabetes"]
    } else if (crcl >= 30) {
      interpretation = "Moderate decrease (Stage 3 CKD)"
      category = "moderate-risk"
      recommendations = ["Nephrology referral", "Dose adjust medications", "Monitor every 6 months"]
    } else {
      interpretation = "Severe decrease (Stage 4-5 CKD)"
      category = "high-risk"
      recommendations = ["Urgent nephrology referral", "Prepare for RRT", "Specialist management"]
    }

    setCgResult({
      value: `${Math.round(crcl)} mL/min`,
      interpretation,
      category,
      recommendations,
    })
  }

  // Glasgow Coma Scale
  const calculateGCS = () => {
    const eye = Number.parseFloat(gcsData.eye)
    const verbal = Number.parseFloat(gcsData.verbal)
    const motor = Number.parseFloat(gcsData.motor)

    if (!eye || !verbal || !motor) return

    const total = eye + verbal + motor

    let interpretation = ""
    let category: CalculatorResult["category"] = "normal"
    let recommendations: string[] = []

    if (total >= 13) {
      interpretation = "Mild brain injury"
      category = "low-risk"
      recommendations = ["Monitor closely", "Neurological observations", "Consider CT if indicated"]
    } else if (total >= 9) {
      interpretation = "Moderate brain injury"
      category = "moderate-risk"
      recommendations = ["CT scan indicated", "Neurosurgical consultation", "ICU monitoring"]
    } else {
      interpretation = "Severe brain injury"
      category = "high-risk"
      recommendations = ["Urgent neurosurgical consultation", "ICU admission", "Intubation may be needed"]
    }

    setGcsResult({
      value: `${total}/15 (E${eye}V${verbal}M${motor})`,
      interpretation,
      category,
      recommendations,
    })
  }

  // APACHE II Score (simplified)
  const calculateAPACHE = () => {
    const age = Number.parseFloat(apacheData.age)
    const temp = Number.parseFloat(apacheData.temp)
    const map = Number.parseFloat(apacheData.map)
    const hr = Number.parseFloat(apacheData.hr)
    const gcs = Number.parseFloat(apacheData.gcs)

    if (!age || !temp || !map || !hr || !gcs) return

    let score = 0

    // Age points
    if (age >= 75) score += 6
    else if (age >= 65) score += 5
    else if (age >= 55) score += 3
    else if (age >= 45) score += 2

    // Temperature points
    if (temp >= 41 || temp <= 29.9) score += 4
    else if (temp >= 39 || temp <= 31.9) score += 3
    else if (temp >= 38.5 || temp <= 33.9) score += 1

    // MAP points
    if (map >= 160 || map <= 49) score += 4
    else if (map >= 130 || map <= 69) score += 2

    // Heart rate points
    if (hr >= 180 || hr <= 39) score += 4
    else if (hr >= 140 || hr <= 54) score += 2
    else if (hr >= 110) score += 1

    // GCS points (15 - actual GCS)
    score += 15 - gcs

    // Chronic health points
    if (apacheData.chronic) score += apacheData.postop ? 2 : 5

    let interpretation = ""
    let category: CalculatorResult["category"] = "low-risk"
    let recommendations: string[] = []

    if (score <= 4) {
      interpretation = "Low mortality risk (~4%)"
      category = "low-risk"
      recommendations = ["Standard monitoring", "Continue current care"]
    } else if (score <= 14) {
      interpretation = "Moderate mortality risk (~8-25%)"
      category = "moderate-risk"
      recommendations = ["Close monitoring", "Consider ICU care", "Optimize supportive care"]
    } else if (score <= 24) {
      interpretation = "High mortality risk (~40-55%)"
      category = "high-risk"
      recommendations = ["ICU admission", "Aggressive supportive care", "Family discussion"]
    } else {
      interpretation = "Very high mortality risk (>85%)"
      category = "high-risk"
      recommendations = ["ICU admission", "Consider goals of care", "Palliative care consultation"]
    }

    setApacheResult({
      value: score.toString(),
      interpretation,
      category,
      recommendations,
    })
  }

  // SOFA Score (simplified)
  const calculateSOFA = () => {
    const pao2fio2 = Number.parseFloat(sofaData.pao2fio2)
    const platelets = Number.parseFloat(sofaData.platelets)
    const bilirubin = Number.parseFloat(sofaData.bilirubin)
    const map = Number.parseFloat(sofaData.map)
    const gcs = Number.parseFloat(sofaData.gcs)
    const creatinine = Number.parseFloat(sofaData.creatinine)

    if (!pao2fio2 || !platelets || !bilirubin || !map || !gcs || !creatinine) return

    let score = 0

    // Respiratory
    if (pao2fio2 < 100) score += 4
    else if (pao2fio2 < 200) score += 3
    else if (pao2fio2 < 300) score += 2
    else if (pao2fio2 < 400) score += 1

    // Coagulation
    if (platelets < 20) score += 4
    else if (platelets < 50) score += 3
    else if (platelets < 100) score += 2
    else if (platelets < 150) score += 1

    // Liver
    if (bilirubin >= 204) score += 4
    else if (bilirubin >= 102) score += 3
    else if (bilirubin >= 33) score += 2
    else if (bilirubin >= 20) score += 1

    // Cardiovascular
    if (sofaData.epinephrine || sofaData.norepinephrine) score += 4
    else if (sofaData.dopamine) score += 3
    else if (sofaData.dobutamine) score += 2
    else if (map < 70) score += 1

    // CNS
    if (gcs < 6) score += 4
    else if (gcs < 10) score += 3
    else if (gcs < 13) score += 2
    else if (gcs < 15) score += 1

    // Renal
    const creatinineMgDl = creatinine / 88.4
    if (creatinineMgDl >= 5.0) score += 4
    else if (creatinineMgDl >= 3.5) score += 3
    else if (creatinineMgDl >= 2.0) score += 2
    else if (creatinineMgDl >= 1.2) score += 1

    let interpretation = ""
    let category: CalculatorResult["category"] = "low-risk"
    let recommendations: string[] = []

    if (score <= 6) {
      interpretation = "Low mortality risk (~10%)"
      category = "low-risk"
      recommendations = ["Standard ICU care", "Monitor daily SOFA"]
    } else if (score <= 9) {
      interpretation = "Moderate mortality risk (~15-20%)"
      category = "moderate-risk"
      recommendations = ["Intensive monitoring", "Optimize organ support"]
    } else if (score <= 12) {
      interpretation = "High mortality risk (~40-50%)"
      category = "high-risk"
      recommendations = ["Maximum organ support", "Consider prognosis discussion"]
    } else {
      interpretation = "Very high mortality risk (>80%)"
      category = "high-risk"
      recommendations = ["Goals of care discussion", "Consider withdrawal of care"]
    }

    setSofaResult({
      value: score.toString(),
      interpretation,
      category,
      recommendations,
    })
  }

  // Apgar Score
  const calculateApgar = () => {
    const appearance = Number.parseFloat(apgarData.appearance)
    const pulse = Number.parseFloat(apgarData.pulse)
    const grimace = Number.parseFloat(apgarData.grimace)
    const activity = Number.parseFloat(apgarData.activity)
    const respiration = Number.parseFloat(apgarData.respiration)

    if (
      appearance === undefined ||
      pulse === undefined ||
      grimace === undefined ||
      activity === undefined ||
      respiration === undefined
    )
      return

    const total = appearance + pulse + grimace + activity + respiration

    let interpretation = ""
    let category: CalculatorResult["category"] = "normal"
    let recommendations: string[] = []

    if (total >= 7) {
      interpretation = "Good condition"
      category = "normal"
      recommendations = ["Routine newborn care", "Continue monitoring"]
    } else if (total >= 4) {
      interpretation = "Moderately depressed"
      category = "moderate-risk"
      recommendations = ["Stimulation and oxygen", "Close monitoring", "Reassess in 5 minutes"]
    } else {
      interpretation = "Severely depressed"
      category = "high-risk"
      recommendations = ["Immediate resuscitation", "Positive pressure ventilation", "NICU consultation"]
    }

    setApgarResult({
      value: `${total}/10`,
      interpretation,
      category,
      recommendations,
    })
  }

  const getResultColor = (category: CalculatorResult["category"]) => {
    switch (category) {
      case "normal":
        return "text-green-700 bg-green-50 border-green-200"
      case "low-risk":
        return "text-blue-700 bg-blue-50 border-blue-200"
      case "moderate-risk":
        return "text-yellow-700 bg-yellow-50 border-yellow-200"
      case "high-risk":
        return "text-red-700 bg-red-50 border-red-200"
      case "abnormal":
        return "text-orange-700 bg-orange-50 border-orange-200"
      default:
        return "text-gray-700 bg-gray-50 border-gray-200"
    }
  }

  const getResultIcon = (category: CalculatorResult["category"]) => {
    switch (category) {
      case "normal":
      case "low-risk":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "moderate-risk":
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case "high-risk":
      case "abnormal":
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      default:
        return <Info className="w-5 h-5 text-blue-600" />
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
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-serif font-bold text-foreground">Medical Calculators</h1>
                  <p className="text-sm text-muted-foreground">Clinical Decision Support Tools</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/90 text-primary border-primary/20 shadow-lg">
              <Stethoscope className="w-4 h-4 mr-2" />
              Validated for Kenyan Practice
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Essential Clinical Calculators</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Comprehensive medical calculations validated against Kenyan Ministry of Health standards and WHO-AFRO
            guidelines.
          </p>
        </div>

        <Tabs defaultValue="basic" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 lg:w-[500px]">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="risk">Risk Scores</TabsTrigger>
            <TabsTrigger value="specialty">Specialty</TabsTrigger>
            <TabsTrigger value="critical">Critical Care</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* BMI Calculator */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">BMI Calculator</CardTitle>
                  <CardDescription>Body Mass Index with WHO classifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="weight" className="text-base font-medium">
                        Weight (kg)
                      </Label>
                      <Input
                        id="weight"
                        placeholder="70"
                        value={bmiData.weight}
                        onChange={(e) => setBmiData({ ...bmiData, weight: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="height" className="text-base font-medium">
                        Height (cm)
                      </Label>
                      <Input
                        id="height"
                        placeholder="170"
                        value={bmiData.height}
                        onChange={(e) => setBmiData({ ...bmiData, height: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                    onClick={calculateBMI}
                    disabled={!bmiData.weight || !bmiData.height}
                  >
                    Calculate BMI
                  </Button>
                  {bmiResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(bmiResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(bmiResult.category)}
                        <span className="font-semibold">{bmiResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{bmiResult.interpretation}</p>
                      {bmiResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {bmiResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* eGFR Calculator */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-secondary/5 to-accent/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Kidney className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">eGFR (CKD-EPI 2021)</CardTitle>
                  <CardDescription>Estimated Glomerular Filtration Rate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="creatinine" className="text-base font-medium">
                        Creatinine (μmol/L)
                      </Label>
                      <Input
                        id="creatinine"
                        placeholder="88"
                        value={gfrData.creatinine}
                        onChange={(e) => setGfrData({ ...gfrData, creatinine: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="age" className="text-base font-medium">
                        Age (years)
                      </Label>
                      <Input
                        id="age"
                        placeholder="45"
                        value={gfrData.age}
                        onChange={(e) => setGfrData({ ...gfrData, age: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-medium">Gender</Label>
                    <Select value={gfrData.gender} onValueChange={(value) => setGfrData({ ...gfrData, gender: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-secondary to-accent hover:from-secondary/90 hover:to-accent/90"
                    onClick={calculateGFR}
                    disabled={!gfrData.creatinine || !gfrData.age}
                  >
                    Calculate eGFR
                  </Button>
                  {gfrResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(gfrResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(gfrResult.category)}
                        <span className="font-semibold">{gfrResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{gfrResult.interpretation}</p>
                      {gfrResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {gfrResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Pediatric Dosing */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-accent/5 to-primary/5">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Pediatric Dosing</CardTitle>
                  <CardDescription>Weight-based medication dosing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div>
                    <Label htmlFor="medication" className="text-base font-medium">
                      Medication
                    </Label>
                    <Input
                      id="medication"
                      placeholder="e.g., Paracetamol"
                      value={pedData.medication}
                      onChange={(e) => setPedData({ ...pedData, medication: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="child-weight" className="text-base font-medium">
                        Weight (kg)
                      </Label>
                      <Input
                        id="child-weight"
                        placeholder="15"
                        value={pedData.weight}
                        onChange={(e) => setPedData({ ...pedData, weight: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dose-per-kg" className="text-base font-medium">
                        Dose (mg/kg)
                      </Label>
                      <Input
                        id="dose-per-kg"
                        placeholder="10"
                        value={pedData.dosePerKg}
                        onChange={(e) => setPedData({ ...pedData, dosePerKg: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90"
                    onClick={calculatePediatricDose}
                    disabled={!pedData.weight || !pedData.dosePerKg}
                  >
                    Calculate Dose
                  </Button>
                  {pedResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(pedResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(pedResult.category)}
                        <span className="font-semibold">{pedResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{pedResult.interpretation}</p>
                      {pedResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {pedResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="risk" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* CHADS2-VASc Calculator */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">CHADS₂-VASc Score</CardTitle>
                  <CardDescription>Stroke risk in atrial fibrillation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-3">
                    {[
                      { key: "chf", label: "Congestive heart failure" },
                      { key: "hypertension", label: "Hypertension" },
                      { key: "age75", label: "Age ≥75 years (2 points)" },
                      { key: "diabetes", label: "Diabetes mellitus" },
                      { key: "stroke", label: "Stroke/TIA history (2 points)" },
                      { key: "vascular", label: "Vascular disease" },
                      { key: "age65", label: "Age 65-74 years" },
                      { key: "female", label: "Female gender" },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.key}
                          checked={chadsData[item.key as keyof typeof chadsData]}
                          onCheckedChange={(checked) => setChadsData({ ...chadsData, [item.key]: checked })}
                        />
                        <Label htmlFor={item.key} className="text-sm font-medium">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600"
                    onClick={calculateChads}
                  >
                    Calculate Score
                  </Button>
                  {chadsResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(chadsResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(chadsResult.category)}
                        <span className="font-semibold">Score: {chadsResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{chadsResult.interpretation}</p>
                      {chadsResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {chadsResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Wells DVT Score */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Wells DVT Score</CardTitle>
                  <CardDescription>Deep vein thrombosis probability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-3">
                    {[
                      { key: "cancer", label: "Active cancer (+1)" },
                      { key: "paralysis", label: "Paralysis/paresis (+1)" },
                      { key: "bedridden", label: "Bedridden >3 days (+1)" },
                      { key: "tenderness", label: "Localized tenderness (+1)" },
                      { key: "swelling", label: "Entire leg swollen (+1)" },
                      { key: "collateral", label: "Collateral veins (+1)" },
                      { key: "pitting", label: "Pitting edema (+1)" },
                      { key: "alternative", label: "Alternative diagnosis (-2)" },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.key}
                          checked={wellsData[item.key as keyof typeof wellsData]}
                          onCheckedChange={(checked) => setWellsData({ ...wellsData, [item.key]: checked })}
                        />
                        <Label htmlFor={item.key} className="text-sm font-medium">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
                    onClick={calculateWells}
                  >
                    Calculate Score
                  </Button>
                  {wellsResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(wellsResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(wellsResult.category)}
                        <span className="font-semibold">Score: {wellsResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{wellsResult.interpretation}</p>
                      {wellsResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {wellsResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* CURB-65 Score */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Thermometer className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">CURB-65 Score</CardTitle>
                  <CardDescription>Pneumonia severity assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-3">
                    {[
                      { key: "confusion", label: "Confusion" },
                      { key: "urea", label: "Urea >7 mmol/L" },
                      { key: "respiratory", label: "Respiratory rate ≥30/min" },
                      { key: "bp", label: "BP <90 systolic or ≤60 diastolic" },
                      { key: "age65", label: "Age ≥65 years" },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center space-x-2">
                        <Checkbox
                          id={item.key}
                          checked={curbData[item.key as keyof typeof curbData]}
                          onCheckedChange={(checked) => setCurbData({ ...curbData, [item.key]: checked })}
                        />
                        <Label htmlFor={item.key} className="text-sm font-medium">
                          {item.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={calculateCurb}
                  >
                    Calculate Score
                  </Button>
                  {curbResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(curbResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(curbResult.category)}
                        <span className="font-semibold">Score: {curbResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{curbResult.interpretation}</p>
                      {curbResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {curbResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Glasgow Coma Scale</CardTitle>
                  <CardDescription>Neurological assessment tool</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-base font-medium">Eye Opening</Label>
                      <Select value={gcsData.eye} onValueChange={(value) => setGcsData({ ...gcsData, eye: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="4">Spontaneous (4)</SelectItem>
                          <SelectItem value="3">To voice (3)</SelectItem>
                          <SelectItem value="2">To pain (2)</SelectItem>
                          <SelectItem value="1">None (1)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-base font-medium">Verbal Response</Label>
                      <Select
                        value={gcsData.verbal}
                        onValueChange={(value) => setGcsData({ ...gcsData, verbal: value })}
                      >
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">Oriented (5)</SelectItem>
                          <SelectItem value="4">Confused (4)</SelectItem>
                          <SelectItem value="3">Inappropriate (3)</SelectItem>
                          <SelectItem value="2">Incomprehensible (2)</SelectItem>
                          <SelectItem value="1">None (1)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-base font-medium">Motor Response</Label>
                      <Select value={gcsData.motor} onValueChange={(value) => setGcsData({ ...gcsData, motor: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="6">Obeys commands (6)</SelectItem>
                          <SelectItem value="5">Localizes pain (5)</SelectItem>
                          <SelectItem value="4">Withdraws (4)</SelectItem>
                          <SelectItem value="3">Flexion (3)</SelectItem>
                          <SelectItem value="2">Extension (2)</SelectItem>
                          <SelectItem value="1">None (1)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
                    onClick={calculateGCS}
                    disabled={!gcsData.eye || !gcsData.verbal || !gcsData.motor}
                  >
                    Calculate GCS
                  </Button>
                  {gcsResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(gcsResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(gcsResult.category)}
                        <span className="font-semibold">{gcsResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{gcsResult.interpretation}</p>
                      {gcsResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {gcsResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="specialty" className="space-y-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-violet-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">BSA (Mosteller)</CardTitle>
                  <CardDescription>Body Surface Area calculation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bsa-weight" className="text-base font-medium">
                        Weight (kg)
                      </Label>
                      <Input
                        id="bsa-weight"
                        placeholder="70"
                        value={bsaData.weight}
                        onChange={(e) => setBsaData({ ...bsaData, weight: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="bsa-height" className="text-base font-medium">
                        Height (cm)
                      </Label>
                      <Input
                        id="bsa-height"
                        placeholder="170"
                        value={bsaData.height}
                        onChange={(e) => setBsaData({ ...bsaData, height: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600"
                    onClick={calculateBSA}
                    disabled={!bsaData.weight || !bsaData.height}
                  >
                    Calculate BSA
                  </Button>
                  {bsaResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(bsaResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(bsaResult.category)}
                        <span className="font-semibold">{bsaResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{bsaResult.interpretation}</p>
                      {bsaResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {bsaResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-rose-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">QTc Correction</CardTitle>
                  <CardDescription>Bazett & Fridericia formulas</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="qt" className="text-base font-medium">
                        QT Interval (ms)
                      </Label>
                      <Input
                        id="qt"
                        placeholder="400"
                        value={qtcData.qt}
                        onChange={(e) => setQtcData({ ...qtcData, qt: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rr" className="text-base font-medium">
                        RR Interval (ms)
                      </Label>
                      <Input
                        id="rr"
                        placeholder="800"
                        value={qtcData.rr}
                        onChange={(e) => setQtcData({ ...qtcData, rr: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label className="text-base font-medium">Formula</Label>
                    <Select value={qtcData.method} onValueChange={(value) => setQtcData({ ...qtcData, method: value })}>
                      <SelectTrigger className="mt-2">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bazett">Bazett (QT/√RR)</SelectItem>
                        <SelectItem value="fridericia">Fridericia (QT/∛RR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                    onClick={calculateQTc}
                    disabled={!qtcData.qt || !qtcData.rr}
                  >
                    Calculate QTc
                  </Button>
                  {qtcResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(qtcResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(qtcResult.category)}
                        <span className="font-semibold">{qtcResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{qtcResult.interpretation}</p>
                      {qtcResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {qtcResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-cyan-50 to-blue-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Maintenance Fluids</CardTitle>
                  <CardDescription>Holliday-Segar method</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fluid-weight" className="text-base font-medium">
                        Weight (kg)
                      </Label>
                      <Input
                        id="fluid-weight"
                        placeholder="25"
                        value={fluidData.weight}
                        onChange={(e) => setFluidData({ ...fluidData, weight: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="fluid-age" className="text-base font-medium">
                        Age (years)
                      </Label>
                      <Input
                        id="fluid-age"
                        placeholder="5"
                        value={fluidData.age}
                        onChange={(e) => setFluidData({ ...fluidData, age: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
                    onClick={calculateFluids}
                    disabled={!fluidData.weight}
                  >
                    Calculate Fluids
                  </Button>
                  {fluidResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(fluidResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(fluidResult.category)}
                        <span className="font-semibold">{fluidResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{fluidResult.interpretation}</p>
                      {fluidResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {fluidResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Kidney className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">CrCl (Cockcroft-Gault)</CardTitle>
                  <CardDescription>Creatinine Clearance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cg-creatinine" className="text-base font-medium">
                        Creatinine (μmol/L)
                      </Label>
                      <Input
                        id="cg-creatinine"
                        placeholder="88"
                        value={cgData.creatinine}
                        onChange={(e) => setCgData({ ...cgData, creatinine: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cg-age" className="text-base font-medium">
                        Age (years)
                      </Label>
                      <Input
                        id="cg-age"
                        placeholder="45"
                        value={cgData.age}
                        onChange={(e) => setCgData({ ...cgData, age: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="cg-weight" className="text-base font-medium">
                        Weight (kg)
                      </Label>
                      <Input
                        id="cg-weight"
                        placeholder="70"
                        value={cgData.weight}
                        onChange={(e) => setCgData({ ...cgData, weight: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-base font-medium">Gender</Label>
                      <Select value={cgData.gender} onValueChange={(value) => setCgData({ ...cgData, gender: value })}>
                        <SelectTrigger className="mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                    onClick={calculateCG}
                    disabled={!cgData.creatinine || !cgData.age || !cgData.weight}
                  >
                    Calculate CrCl
                  </Button>
                  {cgResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(cgResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(cgResult.category)}
                        <span className="font-semibold">{cgResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{cgResult.interpretation}</p>
                      {cgResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {cgResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Baby className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">Apgar Score</CardTitle>
                  <CardDescription>Newborn assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="space-y-3">
                    {[
                      {
                        key: "appearance",
                        label: "Appearance (Color)",
                        options: ["Blue/pale (0)", "Pink body, blue extremities (1)", "Pink all over (2)"],
                      },
                      {
                        key: "pulse",
                        label: "Pulse (Heart Rate)",
                        options: ["Absent (0)", "<100 bpm (1)", ">100 bpm (2)"],
                      },
                      {
                        key: "grimace",
                        label: "Grimace (Reflex)",
                        options: ["No response (0)", "Grimace (1)", "Cry/cough (2)"],
                      },
                      {
                        key: "activity",
                        label: "Activity (Muscle Tone)",
                        options: ["Limp (0)", "Some flexion (1)", "Active motion (2)"],
                      },
                      {
                        key: "respiration",
                        label: "Respiration",
                        options: ["Absent (0)", "Weak/irregular (1)", "Strong cry (2)"],
                      },
                    ].map((item) => (
                      <div key={item.key}>
                        <Label className="text-base font-medium">{item.label}</Label>
                        <Select
                          value={apgarData[item.key as keyof typeof apgarData]}
                          onValueChange={(value) => setApgarData({ ...apgarData, [item.key]: value })}
                        >
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select..." />
                          </SelectTrigger>
                          <SelectContent>
                            {item.options.map((option, index) => (
                              <SelectItem key={index} value={index.toString()}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
                    onClick={calculateApgar}
                    disabled={
                      !apgarData.appearance ||
                      !apgarData.pulse ||
                      !apgarData.grimace ||
                      !apgarData.activity ||
                      !apgarData.respiration
                    }
                  >
                    Calculate Apgar
                  </Button>
                  {apgarResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(apgarResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(apgarResult.category)}
                        <span className="font-semibold">{apgarResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{apgarResult.interpretation}</p>
                      {apgarResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {apgarResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="critical" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* APACHE II Calculator */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">APACHE II Score</CardTitle>
                  <CardDescription>ICU mortality prediction (simplified)</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="apache-age" className="text-base font-medium">
                        Age (years)
                      </Label>
                      <Input
                        id="apache-age"
                        placeholder="65"
                        value={apacheData.age}
                        onChange={(e) => setApacheData({ ...apacheData, age: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="apache-temp" className="text-base font-medium">
                        Temperature (°C)
                      </Label>
                      <Input
                        id="apache-temp"
                        placeholder="38.5"
                        value={apacheData.temp}
                        onChange={(e) => setApacheData({ ...apacheData, temp: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="apache-map" className="text-base font-medium">
                        MAP (mmHg)
                      </Label>
                      <Input
                        id="apache-map"
                        placeholder="70"
                        value={apacheData.map}
                        onChange={(e) => setApacheData({ ...apacheData, map: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="apache-hr" className="text-base font-medium">
                        Heart Rate
                      </Label>
                      <Input
                        id="apache-hr"
                        placeholder="100"
                        value={apacheData.hr}
                        onChange={(e) => setApacheData({ ...apacheData, hr: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="apache-gcs" className="text-base font-medium">
                      GCS Score
                    </Label>
                    <Input
                      id="apache-gcs"
                      placeholder="15"
                      value={apacheData.gcs}
                      onChange={(e) => setApacheData({ ...apacheData, gcs: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="chronic"
                        checked={apacheData.chronic}
                        onCheckedChange={(checked) => setApacheData({ ...apacheData, chronic: !!checked })}
                      />
                      <Label htmlFor="chronic" className="text-sm font-medium">
                        Chronic health problems
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="postop"
                        checked={apacheData.postop}
                        onCheckedChange={(checked) => setApacheData({ ...apacheData, postop: !!checked })}
                      />
                      <Label htmlFor="postop" className="text-sm font-medium">
                        Post-operative
                      </Label>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                    onClick={calculateAPACHE}
                    disabled={
                      !apacheData.age || !apacheData.temp || !apacheData.map || !apacheData.hr || !apacheData.gcs
                    }
                  >
                    Calculate APACHE II
                  </Button>
                  {apacheResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(apacheResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(apacheResult.category)}
                        <span className="font-semibold">Score: {apacheResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{apacheResult.interpretation}</p>
                      {apacheResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {apacheResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* SOFA Score Calculator */}
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift">
                <CardHeader className="bg-gradient-to-r from-indigo-50 to-purple-50">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse3d">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">SOFA Score</CardTitle>
                  <CardDescription>Sequential Organ Failure Assessment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sofa-pao2" className="text-base font-medium">
                        PaO₂/FiO₂ Ratio
                      </Label>
                      <Input
                        id="sofa-pao2"
                        placeholder="300"
                        value={sofaData.pao2fio2}
                        onChange={(e) => setSofaData({ ...sofaData, pao2fio2: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sofa-platelets" className="text-base font-medium">
                        Platelets (×10³/μL)
                      </Label>
                      <Input
                        id="sofa-platelets"
                        placeholder="150"
                        value={sofaData.platelets}
                        onChange={(e) => setSofaData({ ...sofaData, platelets: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sofa-bilirubin" className="text-base font-medium">
                        Bilirubin (μmol/L)
                      </Label>
                      <Input
                        id="sofa-bilirubin"
                        placeholder="20"
                        value={sofaData.bilirubin}
                        onChange={(e) => setSofaData({ ...sofaData, bilirubin: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sofa-map" className="text-base font-medium">
                        MAP (mmHg)
                      </Label>
                      <Input
                        id="sofa-map"
                        placeholder="70"
                        value={sofaData.map}
                        onChange={(e) => setSofaData({ ...sofaData, map: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sofa-gcs" className="text-base font-medium">
                        GCS Score
                      </Label>
                      <Input
                        id="sofa-gcs"
                        placeholder="15"
                        value={sofaData.gcs}
                        onChange={(e) => setSofaData({ ...sofaData, gcs: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="sofa-creatinine" className="text-base font-medium">
                        Creatinine (μmol/L)
                      </Label>
                      <Input
                        id="sofa-creatinine"
                        placeholder="88"
                        value={sofaData.creatinine}
                        onChange={(e) => setSofaData({ ...sofaData, creatinine: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-base font-medium">Vasopressors</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { key: "dopamine", label: "Dopamine" },
                        { key: "dobutamine", label: "Dobutamine" },
                        { key: "epinephrine", label: "Epinephrine" },
                        { key: "norepinephrine", label: "Norepinephrine" },
                      ].map((item) => (
                        <div key={item.key} className="flex items-center space-x-2">
                          <Checkbox
                            id={item.key}
                            checked={sofaData[item.key as keyof typeof sofaData] as boolean}
                            onCheckedChange={(checked) => setSofaData({ ...sofaData, [item.key]: checked })}
                          />
                          <Label htmlFor={item.key} className="text-sm">
                            {item.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
                    onClick={calculateSOFA}
                    disabled={
                      !sofaData.pao2fio2 ||
                      !sofaData.platelets ||
                      !sofaData.bilirubin ||
                      !sofaData.map ||
                      !sofaData.gcs ||
                      !sofaData.creatinine
                    }
                  >
                    Calculate SOFA
                  </Button>
                  {sofaResult && (
                    <div className={`p-4 rounded-lg border ${getResultColor(sofaResult.category)}`}>
                      <div className="flex items-center gap-2 mb-2">
                        {getResultIcon(sofaResult.category)}
                        <span className="font-semibold">Score: {sofaResult.value}</span>
                      </div>
                      <p className="text-sm mb-3">{sofaResult.interpretation}</p>
                      {sofaResult.recommendations && (
                        <ul className="text-xs space-y-1">
                          {sofaResult.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span>•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
