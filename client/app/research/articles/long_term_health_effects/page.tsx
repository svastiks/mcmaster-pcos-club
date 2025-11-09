import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function LongTermHealthEffectsPage() {
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
            Long-Term Health Effects Associated with Polycystic Ovarian Syndrome (PCOS)
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            By: Noelle F. Di Perna
          </p>

          <img src="/articles/longer_term_health_image_1.jpg" alt="Long-Term Health Effects Associated with PCOS" className="w-full h-auto mb-8" />

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to PCOS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Polycystic Ovarian Syndrome (PCOS) is a hormonal disorder affecting approximately 6-13% of reproductive-aged women around the world <sup>1</sup>. While incredibly common, due to a lack of research and awareness surrounding this disorder, it is estimated that up to 70% of women with PCOS remain undiagnosed and searching for answers <sup>1</sup>. With PCOS being so prevalent amongst the female population, it is crucial that at-risk women understand the current diagnostic criteria, symptoms, and long-term effects of PCOS to better advocate for their health and well-being in a healthcare system tainted with patriarchal practices. Furthermore, while there are known associations between PCOS and numerous long-term health conditions, the exact mechanism behind these associations is widely misunderstood and under-researched as a direct result of the prominent gender bias still existing in the contemporary healthcare system.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cardiovascular Disorders</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Epidemiologic studies over the last decade have revealed that PCOS, one of the most common hormonal disorders amongst reproductive-aged women, is associated with an increased prevalence of coronary artery disease (CAD) <sup>2</sup>. This epidemiologic data inspired a recent study that investigated the cardiac tissue of PCOS mice, which revealed increased macrophage accumulation in the myocardium <sup>2</sup>. Macrophage accumulation is largely associated with chronic inflammation in the heart, leading to CAD <sup>2</sup>. These results were confirmed in women with diagnosed PCOS and control participants, validating the fact that while the exact mechanism is still unknown, PCOS is associated with an increased risk of developing cardiovascular disorders.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cancer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Endometrial cancer is largely associated with PCOS. In fact, a recent systematic review showed that the development of endometrial cancer was 2.2 times higher in women with PCOS in comparison to the control group <sup>3</sup>. In women without PCOS who experience a regular menstrual cycle, estrogen allows the uterine lining to grow, while progesterone prevents the uterine lining from growing in excess <sup>3</sup>. However, women with PCOS typically do not have a regular menstrual cycle – resulting in decreased or no progesterone – allowing estrogen to stimulate the growth of the uterine lining without inhibition <sup>3</sup>. Essentially, in women with PCOS the uterine lining is under constant growth stimulation, increasing the risk of endometrial cancer development.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mental & Emotional Health</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Both PCOS itself and the rigorous process associated with diagnosis and treatment of the condition are linked to worsening mental and emotional health <sup>4</sup>. PCOS is largely tied to having hormonal imbalances with key hormones such as insulin, androgen, sex-hormone binding globulin (SHBG), and luteinizing hormones (LH) – contributing to increased risk of developing anxiety and depression <sup>4</sup>. Additionally, struggles with receiving a diagnosis, living with a chronic condition, and battling the stigma associated with the condition contribute to heightened distress <sup>4</sup>. This combination of physiological and societal factors plays a role in amplifying the risk of mental health disorders among women with PCOS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Infertility</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite the underlying physiological mechanism of PCOS being unknown, a key feature of the condition is an irregular menstrual cycle. While this does not occur in all cases, approximately 75-85% of women with PCOS will experience an irregular menstrual cycle <sup>5</sup>. In the absence of a regular menstrual cycle, ovulation is unpredictable and sometimes unable to occur, resulting in numerous struggles when trying to get pregnant <sup>5</sup>. Additionally, if affected women do conceive, the gestational period is often strenuous due to hormonal imbalances and comorbidities associated with PCOS <sup>5</sup>. Even though fertility is challenging for affected women, through proper medical counselling and interventions, many are able to become pregnant and successfully give birth.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Summary</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In summary, it is evident that PCOS is linked to numerous harmful long-term health conditions. Despite PCOS being widely misunderstood, knowledge is power. Through education of both PCOS and the conditions it can cause women everywhere, including you, are better equipped to advocate for themselves and their autonomy. That is what this is all about.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bibliography</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  World Health Organization. Polycystic ovary syndrome [Internet]. World Health Organization. 2025. Available from:{" "}
                  <a href="https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome
                  </a>
                </li>
                <li>
                  Gao L, Zhao Y, Wu H, Lin XH, Guo F, Liu J, et al. Polycystic Ovary Syndrome Fuels Cardiovascular Inflammation and Aggravates Ischemic Cardiac Injury. Circulation [Internet]. 2023 Dec 12;148(24):1958–73. Available from:{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10713005/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10713005/
                  </a>
                </li>
                <li>
                  Amiri M, Bidhendi-Yarandi R, Fallahzadeh A, Marzban Z, Tehrani FR. Risk of endometrial, ovarian, and breast cancers in women with polycystic ovary syndrome: A systematic review and meta-analysis. International Journal of Reproductive Biomedicine [Internet]. 2022 Nov 1;20(11):893–914. Available from:{" "}
                  <a href="https://web.p.ebscohost.com/ehost/pdfviewer/pdfviewer?vid=7&sid=8fb8e86d-f8a6-40a9-9e00-3272ef1ecf8a%40redis" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://web.p.ebscohost.com/ehost/pdfviewer/pdfviewer?vid=7&sid=8fb8e86d-f8a6-40a9-9e00-3272ef1ecf8a%40redis
                  </a>
                </li>
                <li>
                  Dewani D, Karwade P, Mahajan KS. The Invisible Struggle: The Psychosocial Aspects of Polycystic Ovary Syndrome. Cureus [Internet]. 2023 Dec 1;15(12). Available from:{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/38288169/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://pubmed.ncbi.nlm.nih.gov/38288169/
                  </a>
                </li>
                <li>
                  Owens L, Franks S. The impact of Polycystic Ovary Syndrome on Reproductive Health- a narrative review. Reproduction. 2025 Apr;169(5).
                </li>
              </ol>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

