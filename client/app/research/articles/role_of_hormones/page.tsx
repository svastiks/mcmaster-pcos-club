import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function RoleOfHormonesPage() {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button
          asChild
          variant="ghost"
          className="mb-6"
        >
          <Link href="/research">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Research Hub
          </Link>
        </Button>

        <article className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">
            The Role of Hormones in Polycystic Ovarian Syndrome (PCOS)
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            By: Sofia R.M. Jacome
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is a Hormone?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hormones are chemical messengers produced by the endocrine glands in the body. They travel through the bloodstream to various tissues and organs, where they regulate numerous physiological processes. Examples of hormones include adrenaline (which helps the body respond to stress), insulin (which regulates blood sugar), and reproductive hormones like estrogen, progesterone, and androgens. These chemical messengers are essential for maintaining homeostasis and coordinating the body's various functions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What do hormones normally do in the Female body?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the female body, hormones play a crucial role in regulating the menstrual cycle, reproductive health, and overall physiological function. Estrogen and progesterone work together to control the menstrual cycle, prepare the uterus for potential pregnancy, and maintain bone density. These hormones fluctuate throughout the menstrual cycle, creating a delicate balance that supports reproductive health. When this balance is disrupted, as it is in PCOS, various symptoms and health complications can arise.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hyperandrogenism and Insulin Resistance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Two key hormonal imbalances characterize PCOS: hyperandrogenism and insulin resistance. Hyperandrogenism refers to elevated levels of androgens (male hormones) in the body, which can lead to symptoms such as excess hair growth, acne, and male-pattern baldness. Insulin resistance occurs when the body's cells become less responsive to insulin, leading to higher insulin levels in the blood. This can contribute to weight gain, difficulty losing weight, and an increased risk of developing type 2 diabetes. These hormonal imbalances often create a vicious cycle, where insulin resistance can worsen hyperandrogenism, and vice versa, making PCOS management complex and multifaceted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Understanding the role of hormones in PCOS is essential for comprehending the complexity of this condition. The interplay between various hormones, particularly the imbalance of androgens and insulin resistance, creates a challenging landscape for those affected by PCOS. By recognizing how these hormonal disruptions manifest and impact the body, individuals can better advocate for appropriate treatment and management strategies that address the root causes of their symptoms.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bibliography</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Endocrine Society. Hormones and Health. Available from:{" "}
                  <a href="https://www.endocrine.org/patient-engagement/endocrine-library/hormones-and-health" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.endocrine.org/patient-engagement/endocrine-library/hormones-and-health
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Hormones. Available from:{" "}
                  <a href="https://my.clevelandclinic.org/health/articles/22464-hormones" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://my.clevelandclinic.org/health/articles/22464-hormones
                  </a>
                </li>
                <li>
                  British Heart Foundation. Hormones and Your Heart. Available from:{" "}
                  <a href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/hormones" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.bhf.org.uk/informationsupport/heart-matters-magazine/medical/hormones
                  </a>
                </li>
                <li>
                  PubMed. Polycystic Ovary Syndrome and Hormonal Imbalance. Available from:{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://pubmed.ncbi.nlm.nih.gov/
                  </a>
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

