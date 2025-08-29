import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const patientData = await request.json()

    const mockDiagnosis = {
      primaryDiagnosis: {
        condition: patientData.symptoms?.toLowerCase().includes("fever")
          ? "Malaria"
          : "Upper Respiratory Tract Infection",
        confidence: patientData.symptoms?.toLowerCase().includes("fever") ? 85 : 75,
        icd10: patientData.symptoms?.toLowerCase().includes("fever") ? "B54" : "J06.9",
      },
      differentialDiagnoses: patientData.symptoms?.toLowerCase().includes("fever")
        ? [
            {
              condition: "Dengue Fever",
              confidence: 65,
              icd10: "A90",
            },
            {
              condition: "Typhoid Fever",
              confidence: 55,
              icd10: "A01.0",
            },
            {
              condition: "Viral Upper Respiratory Infection",
              confidence: 45,
              icd10: "J06.9",
            },
          ]
        : [
            {
              condition: "Viral Pharyngitis",
              confidence: 70,
              icd10: "J02.9",
            },
            {
              condition: "Allergic Rhinitis",
              confidence: 60,
              icd10: "J30.9",
            },
            {
              condition: "Bacterial Sinusitis",
              confidence: 50,
              icd10: "J01.9",
            },
          ],
      recommendations: patientData.symptoms?.toLowerCase().includes("fever")
        ? [
            {
              category: "Immediate Testing",
              items: [
                "Rapid malaria diagnostic test (RDT) or microscopy",
                "Full blood count if available",
                "Blood smear for malaria parasites",
              ],
            },
            {
              category: "Treatment",
              items: [
                "Artemether-lumefantrine (AL) if malaria confirmed",
                "Paracetamol 1g every 6 hours for fever management",
                "Oral rehydration therapy",
              ],
            },
            {
              category: "Follow-up",
              items: [
                "Return in 24-48 hours if symptoms worsen",
                "Complete malaria treatment course if started",
                "Seek immediate care if danger signs develop",
              ],
            },
          ]
        : [
            {
              category: "Treatment",
              items: [
                "Supportive care with rest and hydration",
                "Paracetamol 500mg every 6 hours for fever/pain",
                "Throat lozenges for symptom relief",
                "Steam inhalation for nasal congestion",
              ],
            },
            {
              category: "Follow-up",
              items: [
                "Return if symptoms worsen or persist beyond 7 days",
                "Seek immediate care if difficulty breathing develops",
                "Consider antibiotic if bacterial infection suspected",
              ],
            },
          ],
      redFlags: patientData.symptoms?.toLowerCase().includes("fever")
        ? [
            "Severe headache with neck stiffness",
            "Difficulty breathing or chest pain",
            "Persistent vomiting",
            "Altered mental status",
            "Signs of severe dehydration",
            "Convulsions or seizures",
          ]
        : [
            "Monitor for signs of bacterial superinfection",
            "Watch for respiratory distress",
            "High fever persisting beyond 3 days",
            "Severe throat pain with difficulty swallowing",
          ],
      kenyaSpecific: {
        prevalence: patientData.symptoms?.toLowerCase().includes("fever")
          ? "Very common in endemic areas, especially during rainy seasons"
          : "Common year-round, peaks during weather changes",
        localConsiderations: patientData.symptoms?.toLowerCase().includes("fever")
          ? [
              "Consider co-infection with other endemic diseases",
              "Ensure patient has access to clean water and sanitation",
              "Follow Kenya Ministry of Health malaria treatment guidelines",
              "Consider referral if severe malaria suspected",
            ]
          : [
              "Consider malaria co-infection if fever develops",
              "Ensure adequate nutrition and vitamin C intake",
              "Monitor for secondary bacterial infections",
              "Consider environmental allergens common in Kenya",
            ],
      },
    }

    console.log("Processing patient data:", {
      age: patientData.age,
      location: patientData.location,
      hasSymptoms: !!patientData.symptoms,
      symptomsLength: patientData.symptoms?.length || 0,
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return NextResponse.json({
      success: true,
      diagnosis: mockDiagnosis,
      timestamp: new Date().toISOString(),
      patientId: `KE-${Date.now()}`, // Mock patient ID for tracking
    })
  } catch (error) {
    console.error("AI diagnosis error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process diagnosis request",
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    )
  }
}
