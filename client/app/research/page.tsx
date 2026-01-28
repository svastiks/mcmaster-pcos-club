import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            PCOS Research Hub
          </h1>
        </div>

        {/* Member Articles Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Member Articles
          </h2>
          <div className="space-y-4">
            <Link
              href="/research/articles/long_term_health_effects"
              aria-label="Read Long-Term Health Effects Associated with PCOS by Noelle F. Di Perna"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Long-Term Health Effects Associated with Polycystic Ovarian
                Syndrome (PCOS) — by Noelle F. Di Perna
              </h3>
            </Link>

            <Link
              href="/research/articles/role_of_hormones"
              aria-label="Read The Role of Hormones in PCOS by Sofia R.M. Jacome"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                The Role of Hormones in Polycystic Ovarian Syndrome (PCOS) — by
                Sofia R.M. Jacome
              </h3>
            </Link>

            <Link
              href="/research/articles/pharmacological_management"
              aria-label="Read Pharmacological Management of Symptoms Associated with PCOS by Noelle F. Di Perna"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Pharmacological Management of Symptoms Associated with
                Polycystic Ovarian Syndrome — by Noelle F. Di Perna
              </h3>
            </Link>

            <Link
              href="/research/articles/cyclic_progesterone_spironolactone"
              aria-label="Read Breaking Down Current Research: Cyclic Progesterone and Spironolactone Treatment for PCOS by Sofia R.M. Jacome"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Breaking Down Current Research: Cyclic Progesterone and
                Spironolactone Treatment for Polycystic Ovarian Syndrome — A
                Feasibility Study by Kaitlin Nelson (MSc) — by Sofia R.M. Jacome
              </h3>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is PCOS diagnosed?</AccordionTrigger>
              <AccordionContent>
                PCOS is typically diagnosed using the Rotterdam criteria, which
                require at least 2 of the following 3: irregular ovulation,
                clinical or biochemical signs of hyperandrogenism, and
                polycystic ovaries on ultrasound.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can PCOS be cured?</AccordionTrigger>
              <AccordionContent>
                While there is no definitive cure for PCOS, symptoms can be
                managed through lifestyle changes, medications, and hormonal
                treatments. Many people with PCOS live healthy, fulfilling
                lives.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Does PCOS affect fertility?</AccordionTrigger>
              <AccordionContent>
                PCOS can affect fertility by disrupting ovulation, but many
                people with PCOS can conceive naturally or with fertility
                treatments when working with healthcare providers.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                What lifestyle changes can help with PCOS?
              </AccordionTrigger>
              <AccordionContent>
                Regular exercise, balanced nutrition (especially supporting
                insulin sensitivity), stress management, and maintaining a
                healthy weight can help manage PCOS symptoms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  )
}