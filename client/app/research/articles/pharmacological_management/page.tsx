import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function PharmacologicalManagementPage() {
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
            Pharmacological Management of Symptoms Associated with Polycystic Ovarian Syndrome
          </h1>
          <p className="text-center text-gray-600 mb-10 text-lg">
            By: Noelle F. Di Perna
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Polycystic ovarian syndrome (PCOS) is an array of symptoms, such
                as irregular menstrual cycles and ovarian cysts, caused by a
                hormonal imbalance, affecting women of reproductive capacity
                <sup>1</sup>. Given that the exact physiological mechanisms of
                PCOS are widely misunderstood among the scientific community,
                management of PCOS is largely linked to minimizing symptoms
                present in affected individuals <sup>1</sup>. This article aims
                to discuss current, well-researched pharmacological management
                strategies for PCOS.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                While these strategies have been shown to be clinically
                effective, pharmacological management is personal and unique to
                each individual <sup>2</sup>. Each individual may have
                different goals and symptoms they aim to tackle, requiring
                different management strategies <sup>2</sup>. Beyond this,
                certain harmful side effects may be present in some individuals
                and not others, which is why consulting with a physician is of
                utmost importance <sup>2</sup>. Management for PCOS is not a
                one-size-fits-all solution.
              </p>
              <figure className="my-6">
                <img
                  src="/articles/pharmacological_management_table.png"
                  alt="Table of symptoms and pharmacological management options"
                  className="w-1/2 h-auto mx-auto"
                />
              </figure>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Combined Oral Contraceptive Pill (COCP)
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The combined oral contraceptive pill (COCP) is typically the
                first-line treatment for most individuals with PCOS, as the drug
                alleviates symptoms of irregular menstruation and
                hyperandrogenism (hirsutism, acne, etc.) <sup>2</sup>. The COCP
                improves symptoms through multiple pathways that are impaired in
                those with PCOS: inhibition of excess androgen production in the
                ovaries, increased production of sex-hormone binding globulin,
                and general anti-androgenic effects <sup>2</sup>. COCP
                formulations with low-dose estrogen are generally preferred to
                those with high-dose of estrogen as an additional dosage does
                not yield increased clinical benefits <sup>2</sup>. It is
                important to note that COCPs are prescribed to patients who want
                to control symptoms of irregular periods and hyperandrogenism,
                not as a cure for PCOS <sup>2</sup>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Metformin
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Metformin is used to treat metabolic effects (e.g., insulin
                resistance and weight gain) associated with PCOS <sup>2</sup>.
                The drug works by improving insulin sensitivity in the liver
                and peripheral tissues, which reduces hepatic glucose production
                <sup>2</sup>. Studies have shown metformin to reduce body
                weight, improve metabolic parameters such as blood glucose
                concentrations and lipid profiles, and re-establish a regular
                menstrual cycle <sup>2</sup>. Metformin is typically prescribed
                alongside significant lifestyle changes such as increased daily
                low-impact physical activity and diet changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                GLP-1 Receptor Agonists
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Considering the novelty of GLP-1 receptor agonists, there is
                limited research tied to their efficacy in individuals with
                PCOS <sup>2</sup>. However, given the nature of both PCOS and
                GLP-1 receptor agonists, there is evidence that the drug can be
                considered to manage symptoms of weight gain and insulin
                resistance present in affected individuals <sup>2</sup>. GLP-1
                receptor agonists are tied to adverse gastrointestinal symptoms
                and are not suitable for long-term usage <sup>2</sup>.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bibliography
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  John Hopkins Medicine. Polycystic ovary syndrome (PCOS)
                  [Internet]. John Hopkins Medicine. 2025. Available from:{" "}
                  <a
                    href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/polycystic-ovary-syndrome-pcos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.hopkinsmedicine.org/health/conditions-and-diseases/polycystic-ovary-syndrome-pcos
                  </a>
                </li>
                <li>
                  Ee C, Tay CT. Pharmacological management of polycystic ovary
                  syndrome. Australian Prescriber. 2024 Aug 19;47(4):109-12.
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
