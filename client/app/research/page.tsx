import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PCOS Research Hub</h1>
        </div>

        {/* Member Articles Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Member Articles</h2>
          <div className="space-y-4">
            <Link 
              href="/research/articles/long_term_health_effects"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Long term health affects - by Noelle F Di Perna
              </h3>
            </Link>
            <Link 
              href="/research/articles/role_of_hormones"
              className="block p-4 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                The role of Hormones in Polycystic ovarian syndrome - by Sofia Jacome
              </h3>
            </Link>
          </div>
        </section>

        {/* Explore Topics */}
        {/* <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore topics related to PCOS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Causes, diagnoses, and symptoms</h3>
                <p className="text-gray-600 text-sm">Understanding the fundamentals of PCOS</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Long-term health effects</h3>
                <p className="text-gray-600 text-sm">Research on PCOS complications and outcomes</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Management and treatment</h3>
                <p className="text-gray-600 text-sm">Latest approaches to PCOS care</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Latest news and clinical trials</h3>
                <p className="text-gray-600 text-sm">Breaking research and ongoing studies</p>
              </CardContent>
            </Card>
          </div>
        </section> */}

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
