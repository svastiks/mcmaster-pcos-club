import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PCOS Research Hub</h1>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How is PCOS diagnosed?</AccordionTrigger>
              <AccordionContent>
                PCOS is typically diagnosed using the Rotterdam criteria, which requires at least 2 of the following 3
                features: irregular ovulation, clinical or biochemical signs of hyperandrogenism, and polycystic ovaries
                on ultrasound.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can PCOS be cured?</AccordionTrigger>
              <AccordionContent>
                While there's no cure for PCOS, symptoms can be effectively managed through lifestyle changes,
                medications, and other treatments. Many people with PCOS lead healthy, fulfilling lives with proper
                management.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Does PCOS affect fertility?</AccordionTrigger>
              <AccordionContent>
                PCOS can affect fertility due to irregular ovulation, but many people with PCOS can conceive naturally
                or with fertility treatments. It's important to work with healthcare providers to develop an appropriate
                plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>What lifestyle changes can help with PCOS?</AccordionTrigger>
              <AccordionContent>
                Regular exercise, a balanced diet (particularly one that helps manage insulin levels), stress
                management, and maintaining a healthy weight can significantly help manage PCOS symptoms.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>


      </div>
    </div>
  )
}
