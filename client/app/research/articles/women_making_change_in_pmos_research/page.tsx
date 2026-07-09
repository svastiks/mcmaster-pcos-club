import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function WomenMakingChangeInPmosResearchPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/research">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Research Hub
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            Women Making a Change in PMOS Research
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            By: Noelle F. Di Perna
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Historically, research focused on physiology and medical conditions has not been a space catered towards women&apos;s health. From using male animals in a research laboratory setting to a general lack of education on female health conditions, such as PMOS, women&apos;s health has been placed on the back burner for decades. While these struggles still remain true, countless intelligent female scientists have dedicated their careers to advancing women&apos;s health, specifically a condition affecting many women, PMOS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dr. Donna Vine</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Donna Vine is a Professor, Principle Investigator, Co-director of the Metabolic and Cardiovascular Diseases Laboratory, and Interim Academic Lead of the Dietetics Specialization Program at the University of Alberta. Through her work she leads numerous studies investigating cardiovascular, obesity, mental illness, and other metabolic risks for women living with PMOS. Having listened to the first-hand concerns of patients with PMOS and the struggles that they face, Dr. Vine was motivated to start her own evidence-based research practice to understand the aspects of PMOS that had yet to be investigated. Her goal is to improve the quality of life for women with PMOS by understanding their concerns and the gaps in scientific literature that she and her team work to fill. As an advocate for women with PMOS, Dr. Vine created a website (PCOS Together) which serves as a hub for her studies, publications, and various forums that women can join to form community when dealing with PMOS.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Source:{" "}
                <a
                  href="https://mcvd.ualberta.ca/research/dr-donna-vine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://mcvd.ualberta.ca/research/dr-donna-vine/
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dr. Jamie Benham</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Jamie Benham is an Assistant Professor in the Departments of Medicine and Community Health Sciences at the University of Calgary and Endocrinologist at Alberta Health Services. As a clinician, Dr. Benham provides support to individuals dealing with endocrine disorders, specifically women who are looking to better manage PMOS. In addition to PMOS, she frequently supports women through other reproductive health changes such as menopause and pregnancy. As a researcher, Dr. Benham leads the EMBRACE (Endocrine, Metabolic, and Reproductive Advancements) Women&apos;s Health Lab. Her team works to discover new diagnostic tools, treatments, and preventative measures pertaining to aspects of women&apos;s health that are severely under-researched, such as PMOS and gestational diabetes. Some of her current studies investigate the links between PMOS and blood sugar patterns, PMOS care and management in Canada, PMOS and mood and stress, and the epidemiology of PMOS in Alberta.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Source:{" "}
                <a
                  href="https://profiles.ucalgary.ca/jamie-benham"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://profiles.ucalgary.ca/jamie-benham
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dr. Jerilynn Prior</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Jerilynn Prior is a retired clinician, Professor at the University of British Columbia&apos;s Division of Endocrinology and Metabolism, and founder and Scientific Director of the Centre for Menstrual Cycle and Ovulation Research (CeMCOR). As a researcher, Dr. Prior works to understand the menstrual cycle, specifically ovulation and the factors that may lead to ovulation disruption. Furthermore, she uses this knowledge to understand the impact disturbances may have on women&apos;s overall health and in the development of conditions such as PMOS. In fact, her research center, CeMCOR, is currently the only center in the world taking this approach. Given the unique approach of her research, numerous other centers across the world utilize the studies her team is producing to inform and inspire women and scientists around the globe.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Source:{" "}
                <a
                  href="https://medicine.med.ubc.ca/jerilynn-c-prior/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  https://medicine.med.ubc.ca/jerilynn-c-prior/
                </a>
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
