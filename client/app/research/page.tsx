import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PCOS Research Hub</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about Polycystic Ovary Syndrome (PCOS), its symptoms, treatments, and the latest research findings.
          </p>
        </div>

        {/* What is PCOS */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-rose-600">What is PCOS?</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Polycystic Ovary Syndrome (PCOS) is a hormonal disorder that affects people with ovaries of reproductive
                age. It's one of the most common endocrine disorders, affecting 6-12% of people of reproductive age
                worldwide. PCOS is characterized by irregular menstrual periods, excess androgen levels, and polycystic
                ovaries.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Symptoms */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Symptoms</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Menstrual Irregularities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• Irregular periods</li>
                  <li>• Absent periods</li>
                  <li>• Heavy bleeding</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hyperandrogenism</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• Excess facial/body hair</li>
                  <li>• Male-pattern baldness</li>
                  <li>• Acne</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Metabolic Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• Weight gain</li>
                  <li>• Insulin resistance</li>
                  <li>• Difficulty losing weight</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

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

        {/* Treatment Options */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Treatment Approaches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lifestyle Management</CardTitle>
                <CardDescription>First-line treatment for many PCOS symptoms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• Regular physical activity</li>
                  <li>• Balanced, low-glycemic diet</li>
                  <li>• Weight management</li>
                  <li>• Stress reduction techniques</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medical Treatments</CardTitle>
                <CardDescription>Various medications can help manage specific symptoms</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2">
                  <li>• Hormonal contraceptives</li>
                  <li>• Metformin for insulin resistance</li>
                  <li>• Anti-androgen medications</li>
                  <li>• Fertility treatments when needed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
