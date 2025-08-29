"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  BookOpen,
  Search,
  Filter,
  Download,
  ArrowLeft,
  FileText,
  Pill,
  MapPin,
  Calendar,
  Tag,
  ExternalLink,
  Star,
  Clock,
  Users,
  AlertTriangle,
  CheckCircle,
  Info,
} from "lucide-react"
import Link from "next/link"

interface GuidelineItem {
  id: string
  title: string
  description: string
  category: string
  source: string
  lastUpdated: string
  type: "guideline" | "drug" | "pathway"
  priority: "high" | "medium" | "low"
  tags: string[]
  downloadUrl?: string
}

const mockGuidelines: GuidelineItem[] = [
  {
    id: "1",
    title: "Malaria Case Management",
    description:
      "Updated guidelines for diagnosis and treatment of malaria in Kenya including RDT protocols and artemisinin resistance monitoring",
    category: "Infectious Diseases",
    source: "MoH 2024",
    lastUpdated: "2024-01-15",
    type: "guideline",
    priority: "high",
    tags: ["malaria", "fever", "parasitology", "artemisinin", "RDT", "microscopy"],
    downloadUrl: "#",
  },
  {
    id: "2",
    title: "TB/HIV Co-infection Management",
    description:
      "Comprehensive management of tuberculosis and HIV co-infection including ART timing and drug interactions",
    category: "Infectious Diseases",
    source: "MoH 2023",
    lastUpdated: "2023-11-20",
    type: "guideline",
    priority: "high",
    tags: ["tuberculosis", "HIV", "co-infection", "DOTS", "ART", "rifampicin"],
    downloadUrl: "#",
  },
  {
    id: "3",
    title: "Maternal Health Protocols",
    description: "Antenatal care, emergency obstetric protocols, and postpartum hemorrhage management",
    category: "Maternal & Child Health",
    source: "WHO-AFRO",
    lastUpdated: "2023-12-10",
    type: "guideline",
    priority: "high",
    tags: ["pregnancy", "antenatal", "obstetric", "emergency", "PPH", "eclampsia"],
    downloadUrl: "#",
  },
  {
    id: "4",
    title: "Diabetes Management Guidelines",
    description: "Comprehensive diabetes care including HbA1c targets, insulin protocols, and complication screening",
    category: "Non-Communicable Diseases",
    source: "MoH 2023",
    lastUpdated: "2023-10-05",
    type: "guideline",
    priority: "medium",
    tags: ["diabetes", "HbA1c", "insulin", "lifestyle", "retinopathy", "nephropathy"],
    downloadUrl: "#",
  },
  {
    id: "5",
    title: "Hypertension Treatment Protocol",
    description:
      "Evidence-based hypertension management for Kenyan populations with cardiovascular risk stratification",
    category: "Non-Communicable Diseases",
    source: "MoH 2024",
    lastUpdated: "2024-02-01",
    type: "guideline",
    priority: "medium",
    tags: ["hypertension", "cardiovascular", "ACE inhibitors", "ASCVD", "target BP"],
    downloadUrl: "#",
  },
  {
    id: "6",
    title: "Pediatric Emergency Protocols",
    description: "Emergency management protocols for children under 5 including IMCI danger signs and resuscitation",
    category: "Emergency Medicine",
    source: "KEMRI 2023",
    lastUpdated: "2023-09-15",
    type: "guideline",
    priority: "high",
    tags: ["pediatric", "emergency", "resuscitation", "IMCI", "danger signs", "PALS"],
    downloadUrl: "#",
  },
  {
    id: "7",
    title: "Mental Health and Neurological Disorders",
    description: "Community-based mental health interventions and neurological disorder management",
    category: "Mental Health",
    source: "MoH 2024",
    lastUpdated: "2024-03-01",
    type: "guideline",
    priority: "medium",
    tags: ["mental health", "depression", "anxiety", "epilepsy", "community", "mhGAP"],
    downloadUrl: "#",
  },
  {
    id: "8",
    title: "Cervical Cancer Screening",
    description: "HPV-based screening protocols and treatment of precancerous lesions",
    category: "Oncology",
    source: "WHO-AFRO",
    lastUpdated: "2024-01-30",
    type: "guideline",
    priority: "high",
    tags: ["cervical cancer", "HPV", "screening", "VIA", "cryotherapy", "LEEP"],
    downloadUrl: "#",
  },
  {
    id: "9",
    title: "Childhood Immunization Schedule",
    description: "Updated Kenya Expanded Programme on Immunization (KEPI) schedule and catch-up protocols",
    category: "Preventive Medicine",
    source: "MoH 2024",
    lastUpdated: "2024-02-15",
    type: "guideline",
    priority: "high",
    tags: ["immunization", "vaccines", "KEPI", "children", "catch-up", "adverse events"],
    downloadUrl: "#",
  },
  {
    id: "10",
    title: "Antimicrobial Resistance Guidelines",
    description: "Antimicrobial stewardship and resistance prevention strategies for healthcare facilities",
    category: "Infectious Diseases",
    source: "MoH 2023",
    lastUpdated: "2023-12-20",
    type: "guideline",
    priority: "high",
    tags: ["AMR", "antibiotics", "stewardship", "resistance", "culture", "sensitivity"],
    downloadUrl: "#",
  },
  {
    id: "11",
    title: "Nutrition and Growth Monitoring",
    description: "Child nutrition assessment, management of malnutrition, and growth monitoring protocols",
    category: "Maternal & Child Health",
    source: "UNICEF Kenya",
    lastUpdated: "2024-01-10",
    type: "guideline",
    priority: "medium",
    tags: ["nutrition", "malnutrition", "growth", "MUAC", "SAM", "MAM", "RUTF"],
    downloadUrl: "#",
  },
  {
    id: "12",
    title: "Surgical Site Infection Prevention",
    description: "Evidence-based protocols for preventing surgical site infections in resource-limited settings",
    category: "Surgery",
    source: "WHO-AFRO",
    lastUpdated: "2023-11-15",
    type: "guideline",
    priority: "medium",
    tags: ["surgery", "infection prevention", "antibiotics", "wound care", "sterile technique"],
    downloadUrl: "#",
  },
  {
    id: "13",
    title: "Artemether-Lumefantrine (Coartem)",
    description:
      "First-line anti-malarial: 20mg/120mg tablets. Adult: 4 tablets at 0, 8, 24, 36, 48, 60 hours. Take with fatty food. Contraindicated in severe malaria.",
    category: "Anti-malarials",
    source: "KEML 2024",
    lastUpdated: "2024-01-10",
    type: "drug",
    priority: "high",
    tags: ["artemether", "lumefantrine", "malaria", "first-line", "uncomplicated", "dosing"],
    downloadUrl: "#",
  },
  {
    id: "14",
    title: "Artesunate Injectable",
    description:
      "Severe malaria treatment: 2.4mg/kg IV/IM at 0, 12, 24 hours, then daily. Reconstitute with 1ml NaHCO3, then 5ml 5% dextrose. Monitor for delayed hemolysis.",
    category: "Anti-malarials",
    source: "KEML 2024",
    lastUpdated: "2024-01-10",
    type: "drug",
    priority: "high",
    tags: ["artesunate", "severe malaria", "IV", "IM", "hemolysis", "emergency"],
    downloadUrl: "#",
  },
  {
    id: "15",
    title: "Tenofovir/Lamivudine/Efavirenz (TLE)",
    description:
      "First-line HIV treatment: 300mg/300mg/600mg once daily. Take on empty stomach at bedtime. Monitor renal function and bone density. CNS side effects common initially.",
    category: "Antiretrovirals",
    source: "NASCOP 2024",
    lastUpdated: "2024-02-01",
    type: "drug",
    priority: "high",
    tags: ["HIV", "ART", "TLE", "first-line", "renal", "CNS", "adherence"],
    downloadUrl: "#",
  },
  {
    id: "16",
    title: "Rifampicin/Isoniazid/Pyrazinamide/Ethambutol (RHZE)",
    description:
      "TB intensive phase: Weight-based dosing for 2 months. Monitor liver function monthly. Take on empty stomach. Counsel on orange discoloration of body fluids.",
    category: "Anti-TB",
    source: "NLTP 2023",
    lastUpdated: "2023-12-15",
    type: "drug",
    priority: "high",
    tags: ["tuberculosis", "RHZE", "intensive phase", "hepatotoxicity", "weight-based"],
    downloadUrl: "#",
  },
  {
    id: "17",
    title: "Amlodipine",
    description:
      "Hypertension: Start 5mg once daily, max 10mg. Preferred in diabetes and elderly. Side effects: ankle edema, flushing. Avoid in heart failure with reduced EF.",
    category: "Antihypertensives",
    source: "KEML 2024",
    lastUpdated: "2024-02-01",
    type: "drug",
    priority: "medium",
    tags: ["hypertension", "calcium channel blocker", "diabetes", "elderly", "edema"],
    downloadUrl: "#",
  },
  {
    id: "18",
    title: "Metformin",
    description:
      "Type 2 diabetes: Start 500mg twice daily with meals, titrate to max 2g daily. Contraindicated if eGFR <30. Stop before contrast procedures. Monitor B12 levels.",
    category: "Antidiabetics",
    source: "KEML 2024",
    lastUpdated: "2024-01-20",
    type: "drug",
    priority: "medium",
    tags: ["diabetes", "metformin", "renal function", "contrast", "B12", "lactic acidosis"],
    downloadUrl: "#",
  },
  {
    id: "19",
    title: "Amoxicillin/Clavulanic Acid",
    description:
      "Broad-spectrum antibiotic: 625mg TID or 1g BID for 5-7 days. Take with food to reduce GI upset. Avoid if penicillin allergy. Monitor for C. diff colitis.",
    category: "Antibiotics",
    source: "KEML 2024",
    lastUpdated: "2024-01-15",
    type: "drug",
    priority: "medium",
    tags: ["antibiotic", "amoxicillin", "clavulanic acid", "penicillin allergy", "C diff"],
    downloadUrl: "#",
  },
  {
    id: "20",
    title: "Oral Rehydration Solution (ORS)",
    description:
      "Diarrhea management: WHO/UNICEF low-osmolarity formula. 75ml/kg over 4 hours for mild-moderate dehydration. Continue breastfeeding. Zinc supplementation recommended.",
    category: "Electrolytes",
    source: "WHO 2024",
    lastUpdated: "2024-01-05",
    type: "drug",
    priority: "high",
    tags: ["diarrhea", "dehydration", "ORS", "zinc", "children", "WHO formula"],
    downloadUrl: "#",
  },
  {
    id: "21",
    title: "Paracetamol (Acetaminophen)",
    description:
      "Analgesic/antipyretic: Adults 500mg-1g QID (max 4g/day). Children 10-15mg/kg QID. Hepatotoxic in overdose. Reduce dose in liver disease.",
    category: "Analgesics",
    source: "KEML 2024",
    lastUpdated: "2024-01-01",
    type: "drug",
    priority: "low",
    tags: ["paracetamol", "fever", "pain", "hepatotoxicity", "overdose", "children"],
    downloadUrl: "#",
  },
  {
    id: "22",
    title: "Prednisolone",
    description:
      "Corticosteroid: 0.5-2mg/kg/day in divided doses. Taper gradually after >2 weeks use. Monitor for hyperglycemia, hypertension, osteoporosis. Take with food.",
    category: "Corticosteroids",
    source: "KEML 2024",
    lastUpdated: "2024-01-10",
    type: "drug",
    priority: "medium",
    tags: ["prednisolone", "steroid", "taper", "hyperglycemia", "osteoporosis", "adrenal suppression"],
    downloadUrl: "#",
  },
  {
    id: "23",
    title: "Salbutamol Inhaler",
    description:
      "Bronchodilator: 100-200mcg PRN for acute symptoms, max 8 puffs/day. Use spacer device. Rinse mouth after use. Side effects: tremor, tachycardia.",
    category: "Bronchodilators",
    source: "KEML 2024",
    lastUpdated: "2024-01-15",
    type: "drug",
    priority: "medium",
    tags: ["salbutamol", "asthma", "COPD", "inhaler", "spacer", "tremor", "tachycardia"],
    downloadUrl: "#",
  },
  {
    id: "24",
    title: "Severe Malaria Management Pathway",
    description:
      "Step-by-step protocol: IV artesunate → monitor complications → supportive care → oral follow-up. Includes cerebral malaria and severe anemia management.",
    category: "Emergency Pathways",
    source: "MoH 2024",
    lastUpdated: "2024-01-20",
    type: "pathway",
    priority: "high",
    tags: ["severe malaria", "artesunate", "emergency", "ICU", "cerebral malaria", "anemia"],
    downloadUrl: "#",
  },
  {
    id: "25",
    title: "Acute Coronary Syndrome Pathway",
    description:
      "STEMI/NSTEMI management: ECG → troponins → dual antiplatelet → anticoagulation → reperfusion strategy. Includes risk stratification and discharge planning.",
    category: "Emergency Pathways",
    source: "Kenya Cardiac Society",
    lastUpdated: "2024-02-10",
    type: "pathway",
    priority: "high",
    tags: ["ACS", "STEMI", "NSTEMI", "troponin", "antiplatelet", "reperfusion"],
    downloadUrl: "#",
  },
  {
    id: "26",
    title: "Sepsis Recognition and Management",
    description:
      "qSOFA screening → blood cultures → empirical antibiotics within 1 hour → fluid resuscitation → vasopressors if needed. Includes pediatric modifications.",
    category: "Emergency Pathways",
    source: "KEMRI 2023",
    lastUpdated: "2023-11-30",
    type: "pathway",
    priority: "high",
    tags: ["sepsis", "qSOFA", "antibiotics", "fluid resuscitation", "vasopressors", "pediatric"],
    downloadUrl: "#",
  },
  {
    id: "27",
    title: "Diabetic Ketoacidosis Protocol",
    description:
      "DKA management: IV fluids → insulin infusion → electrolyte monitoring → ketone clearance → transition to subcutaneous insulin. Includes cerebral edema prevention.",
    category: "Emergency Pathways",
    source: "MoH 2023",
    lastUpdated: "2023-12-05",
    type: "pathway",
    priority: "high",
    tags: ["DKA", "insulin", "fluids", "electrolytes", "ketones", "cerebral edema"],
    downloadUrl: "#",
  },
  {
    id: "28",
    title: "Postpartum Hemorrhage Management",
    description:
      "PPH protocol: uterine massage → oxytocin → misoprostol → tranexamic acid → surgical interventions. Includes massive transfusion protocol.",
    category: "Obstetric Pathways",
    source: "WHO-AFRO",
    lastUpdated: "2024-01-25",
    type: "pathway",
    priority: "high",
    tags: ["PPH", "oxytocin", "misoprostol", "tranexamic acid", "massive transfusion"],
    downloadUrl: "#",
  },
  {
    id: "29",
    title: "Childhood Pneumonia Pathway",
    description:
      "IMCI-based approach: danger signs assessment → oxygen saturation → antibiotic selection → monitoring criteria → discharge planning. Age-specific protocols included.",
    category: "Pediatric Pathways",
    source: "MoH 2024",
    lastUpdated: "2024-02-20",
    type: "pathway",
    priority: "high",
    tags: ["pneumonia", "IMCI", "children", "oxygen", "antibiotics", "danger signs"],
    downloadUrl: "#",
  },
  {
    id: "30",
    title: "Stroke Management Pathway",
    description:
      "Acute stroke protocol: FAST assessment → CT scan → thrombolysis eligibility → blood pressure management → secondary prevention. Includes hemorrhagic stroke management.",
    category: "Emergency Pathways",
    source: "Kenya Neurological Association",
    lastUpdated: "2024-01-15",
    type: "pathway",
    priority: "high",
    tags: ["stroke", "FAST", "thrombolysis", "CT scan", "blood pressure", "secondary prevention"],
    downloadUrl: "#",
  },
  {
    id: "31",
    title: "Mental Health Crisis Intervention",
    description:
      "Crisis assessment → risk stratification → de-escalation techniques → medication protocols → follow-up planning. Includes suicide risk assessment tools.",
    category: "Mental Health Pathways",
    source: "MoH 2024",
    lastUpdated: "2024-03-01",
    type: "pathway",
    priority: "medium",
    tags: ["mental health", "crisis", "suicide risk", "de-escalation", "assessment"],
    downloadUrl: "#",
  },
  {
    id: "32",
    title: "Cervical Cancer Screening Pathway",
    description:
      "HPV testing → colposcopy referral → treatment of precancerous lesions → follow-up protocols. Includes VIA screening alternative for resource-limited settings.",
    category: "Screening Pathways",
    source: "WHO-AFRO",
    lastUpdated: "2024-01-30",
    type: "pathway",
    priority: "medium",
    tags: ["cervical cancer", "HPV", "colposcopy", "VIA", "screening", "precancerous"],
    downloadUrl: "#",
  },
  {
    id: "33",
    title: "Tuberculosis Contact Investigation",
    description:
      "Index case identification → household screening → symptom screening → chest X-ray → tuberculin skin test → preventive therapy initiation. Includes pediatric protocols.",
    category: "Public Health Pathways",
    source: "NLTP 2023",
    lastUpdated: "2023-12-10",
    type: "pathway",
    priority: "medium",
    tags: ["tuberculosis", "contact tracing", "screening", "preventive therapy", "household"],
    downloadUrl: "#",
  },
]

export default function LibraryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSource, setSelectedSource] = useState("all")
  const [selectedPriority, setSelectedPriority] = useState("all")
  const [activeTab, setActiveTab] = useState("guidelines")

  // Filter guidelines based on search and filters
  const filteredGuidelines = useMemo(() => {
    return mockGuidelines.filter((item) => {
      const matchesSearch =
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
      const matchesSource = selectedSource === "all" || item.source === selectedSource
      const matchesPriority = selectedPriority === "all" || item.priority === selectedPriority
      const matchesType =
        activeTab === "guidelines"
          ? item.type === "guideline"
          : activeTab === "drugs"
            ? item.type === "drug"
            : item.type === "pathway"

      return matchesSearch && matchesCategory && matchesSource && matchesPriority && matchesType
    })
  }, [searchTerm, selectedCategory, selectedSource, selectedPriority, activeTab])

  // Get unique categories, sources for filter options
  const categories = [...new Set(mockGuidelines.map((item) => item.category))]
  const sources = [...new Set(mockGuidelines.map((item) => item.source))]

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

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4" />
      case "medium":
        return <Info className="w-4 h-4" />
      case "low":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <Info className="w-4 h-4" />
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "guideline":
        return <FileText className="w-5 h-5" />
      case "drug":
        return <Pill className="w-5 h-5" />
      case "pathway":
        return <MapPin className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedSource("all")
    setSelectedPriority("all")
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
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-serif font-bold text-foreground">Reference Library</h1>
                  <p className="text-sm text-muted-foreground">Clinical Guidelines & Resources</p>
                </div>
              </div>
            </div>
            <Badge variant="secondary" className="bg-white/90 text-primary border-primary/20 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              {mockGuidelines.length} Guidelines Available
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-serif font-bold mb-4 text-foreground">Kenyan Medical Guidelines Library</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Comprehensive collection of Ministry of Health, WHO-AFRO, and KEMRI clinical guidelines and protocols.
          </p>

          {/* Search and Filters */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search guidelines, conditions, medications..."
                  className="pl-12 pr-4 py-3 text-lg border-0 bg-gray-50 focus:bg-white"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedSource} onValueChange={setSelectedSource}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Source" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sources</SelectItem>
                    {sources.map((source) => (
                      <SelectItem key={source} value={source}>
                        {source}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedPriority} onValueChange={setSelectedPriority}>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Priorities</SelectItem>
                    <SelectItem value="high">High Priority</SelectItem>
                    <SelectItem value="medium">Medium Priority</SelectItem>
                    <SelectItem value="low">Low Priority</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            </div>

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory !== "all" || selectedSource !== "all" || selectedPriority !== "all") && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchTerm && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    Search: "{searchTerm}"
                  </Badge>
                )}
                {selectedCategory !== "all" && (
                  <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                    Category: {selectedCategory}
                  </Badge>
                )}
                {selectedSource !== "all" && (
                  <Badge variant="secondary" className="bg-accent/10 text-accent">
                    Source: {selectedSource}
                  </Badge>
                )}
                {selectedPriority !== "all" && (
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Priority: {selectedPriority}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-md bg-white/90 shadow-lg">
            <TabsTrigger value="guidelines" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Guidelines
            </TabsTrigger>
            <TabsTrigger value="drugs" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Drug Formulary
            </TabsTrigger>
            <TabsTrigger value="pathways" className="data-[state=active]:bg-primary data-[state=active]:text-white">
              Care Pathways
            </TabsTrigger>
          </TabsList>

          {/* Results Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-serif font-bold text-foreground">
                {activeTab === "guidelines"
                  ? "Clinical Guidelines"
                  : activeTab === "drugs"
                    ? "Drug Formulary"
                    : "Care Pathways"}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="w-4 h-4" />
                <span className="text-sm">{filteredGuidelines.length} results found</span>
              </div>
            </div>

            {filteredGuidelines.length === 0 ? (
              <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <Search className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-serif font-bold mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Clear all filters
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6">
                {filteredGuidelines.map((item) => (
                  <Card
                    key={item.id}
                    className="border-0 shadow-xl bg-white/95 backdrop-blur-sm hover-lift cursor-pointer group"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                            {getTypeIcon(item.type)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                                {item.title}
                              </CardTitle>
                              <Badge className={`${getPriorityColor(item.priority)} border`}>
                                <div className="flex items-center gap-1">
                                  {getPriorityIcon(item.priority)}
                                  <span className="capitalize">{item.priority}</span>
                                </div>
                              </Badge>
                            </div>
                            <CardDescription className="text-base mb-3">{item.description}</CardDescription>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Tag className="w-4 h-4" />
                                <span>{item.category}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>Updated {new Date(item.lastUpdated).toLocaleDateString()}</span>
                              </div>
                              <Badge variant="outline" className="bg-white/50">
                                {item.source}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost" className="hover:bg-primary/10">
                            <Star className="w-4 h-4 mr-2" />
                            Save
                          </Button>
                          <Button size="sm" variant="ghost" className="hover:bg-secondary/10">
                            <Download className="w-4 h-4 mr-2" />
                            PDF
                          </Button>
                          <Button size="sm" variant="ghost" className="hover:bg-accent/10">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm text-muted-foreground">Tags:</span>
                        {item.tags.slice(0, 4).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            {tag}
                          </Badge>
                        ))}
                        {item.tags.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            +{item.tags.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse3d">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-1">
                  {mockGuidelines.filter((g) => g.type === "guideline").length}
                </h4>
                <p className="text-sm text-muted-foreground">Clinical Guidelines</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse3d">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-1">
                  {mockGuidelines.filter((g) => g.type === "drug").length}
                </h4>
                <p className="text-sm text-muted-foreground">Drug References</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse3d">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-1">
                  {mockGuidelines.filter((g) => g.type === "pathway").length}
                </h4>
                <p className="text-sm text-muted-foreground">Care Pathways</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse3d">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-serif font-bold text-2xl text-foreground mb-1">2024</h4>
                <p className="text-sm text-muted-foreground">Latest Updates</p>
              </CardContent>
            </Card>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
