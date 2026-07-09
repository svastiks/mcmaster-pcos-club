import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function FutureOfPmosPage() {
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
            The Future of PMOS: What Hope is There?
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            By: Sofia R.M. Jacome
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Polyendocrine Metabolic Ovarian Syndrome (PMOS), formerly called Polycystic ovary syndrome (PCOS), is a devastating diagnosis to hear for many. With PMOS often being diagnosed alongside other disorders like depression, anxiety, disordered eating, type 2 diabetes, and infertility, it can become difficult to see hope in one&apos;s future.<sup>1</sup> This article aims to highlight the many advances in PMOS research and women&apos;s health, to shed a unique light on the condition and show that there is hope in the future of PMOS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Women&apos;s Healthcare Spending and Research Interest
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                It is no secret that research and funding into women&apos;s health conditions have been traditionally underfunded, with women often representing a minority in research involving both sexes.<sup>2</sup> This dates back to 1977, when the National Institute of Health (NIH) recommended that women of &quot;reproductive potential&quot;, essentially any pre-menopausal woman, be excluded from clinical trials and research, impacting research into women&apos;s health for years to come.<sup>2</sup>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Despite this initial drawback, investment into women&apos;s health research and startups has been able to grow in recent years. It&apos;s been reported that 2024 marked a 55% growth in venture capital investments, with a total of $2.6 billion being invested in 2024.<sup>3</sup> In 2024, the Government of Canada announced an investment of $13.7 million in support of research projects focused on under-researched areas of women&apos;s health, aiming to close the implementation gaps and improve health outcomes for women across Canada.<sup>4</sup> According to the National Library of Medicine, research articles published increased from 1,727 articles in 2024 to 2,133 articles in 2025, marking a 23.5% increase in research.<sup>5</sup> This is higher than the jump between 2023 and 2024, which only had a 6.0% increase.<sup>5</sup> The numbers demonstrate nearly a 4x increase in research being done on the topic. Additionally, as seen in Figure 1, the amount of PMOS research being published has been gradually increasing over time, and with the current awareness and spotlight on women&apos;s health, it is likely that this trend will continue into the future.
              </p>
              <figure className="mb-4">
                <img
                  src="/articles/pmos_research_publications_by_year.png"
                  alt="Bar graph showing number of published research articles about PMOS by year"
                  className="w-full h-auto"
                />
                <figcaption className="text-sm text-gray-600 mt-2">
                  Figure 1. Bar graph showing number of published research articles about PMOS/PMOS by year. The graph demonstrates a consistent increase in research surrounding PMOS/PMOS from 1975 to 2026. 2026 shows a significant decrease in articles as the year is not yet over, so articles are still being published for this year. 2024-2025 demonstrates the most significant increase in publications for all time. This search was done prior to the condition name changing to PMOS. Obtained from{" "}
                  <a
                    href="https://pubmed.ncbi.nlm.nih.gov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://pubmed.ncbi.nlm.nih.gov
                  </a>
                  .
                </figcaption>
              </figure>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Research</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Although PMOS was initially considered a primary gynaecological condition, it is now recognised as a body-wide condition affecting metabolism and hormones in addition to reproductive health symptoms, which is part of the reason for the name change from &quot;PMOS&quot; to &quot;PMOS&quot;.<sup>6</sup> We now understand that the condition is complex and involves multiple body systems, which also changes the way we research, treat, and discuss issues around PMOS. For example, research has been looking into links between PMOS and cardiovascular disease (CVD), cognitive function and brain health, and effects on the gut microbiome.<sup>7</sup> This is incredibly important research for those living with PMOS, as it informs treatment decisions and future monitoring. For example, the link between PMOS and increased risk of cardiovascular disease is informing prevention strategies, monitoring, and risk-reduction strategies beginning at the time of diagnosis.<sup>7</sup> Research like this will continue to reduce the risk of CVD in PMOS, and increased awareness of this connection will allow those diagnosed with PMOS to make educated lifestyle and medical decisions in their lives.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Current research is also working to identify new biomarkers that can be targeted in disease treatment and diagnosis.<sup>7</sup> A biomarker is something abnormal that can be identified in a lab test, for example, a blood test, which can then be used as a clue to diagnose a specific condition.<sup>8</sup> For example, pregnancy tests detect the human chorionic gonadotropin (hCG) hormone as a biomarker to determine if a pregnancy has occurred.<sup>9</sup> The discovery of a biomarker for PMOS could decrease the time it takes to receive a diagnosis, as well as provide a way to clinically assess someone&apos;s response to treatment. This would allow us to determine whether a treatment is working well for someone based on lab results and numbers, instead of relying on symptoms like reduced acne or regular periods.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fertility Research</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PMOS remains the leading cause of infertility worldwide. However, lifestyle changes, oral medications, and in vitro fertilisation (IVF) are all options that provide those with PMOS with the opportunity to start a family.<sup>10</sup> Fertility research targets many aspects of fertility, including improving ovulation, causing eggs to mature and release, and increasing the production of a key hormone for ovulation.<sup>11</sup> Research has found that combining certain medications for infertility associated with PMOS has a pregnancy success rate of 41% and a live birth rate of 28%. These numbers are compared to individual treatments, which have pregnancy and live birth rates of 27% and 19%, respectively.<sup>12</sup> In addition to medications, IVF is an option many opt for when addressing fertility needs. Currently, research is focused on increasing pregnancy success rates, as well as analysing interventions that increase the chance of pregnancy and live birth in IVF.<sup>12</sup> This research involves analysing how lifestyle changes and supplementation with melatonin, folic acid, and vitamin D can help decrease the risk of pregnancy-related complications that tend to be more common with PMOS.<sup>12</sup> These studies show us how scientific trials are continuously assessing different treatments to determine the most successful treatment plans and will continue to evaluate options to produce the best and safest success rates.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Future of PMOS</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Global rates of PMOS have continued to increase worldwide, partly due to the fact that the actual numbers of the condition are increasing, but also because awareness and education are increasing, and so women who would have previously gone undiagnosed are now being seen.<sup>6</sup> As awareness increases, the early detection, diagnosis, and management of PMOS in adolescence become more common and available.<sup>6</sup> This is changing the future of female health and PMOS, where the needs of those with PMOS are being met at the time of diagnosis.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Based on current trends, we can predict that research, awareness, and education about PMOS will continue to increase over time. We are seeing more investment into female reproductive health, at both the government and private levels, as well as an increase in research interest which will likely continue. We are seeing shifts in the way researchers and doctors think about PMOS, and as a result, treatments and research are focusing on multiple body systems to best support those living with the condition. Additionally, we are continuing to see research and advancement in reproductive treatments research that allow those diagnosed with PMOS the opportunity to start their families.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                PMOS remains a devastating and terrifying diagnosis to many, and that may never change. We hope that by highlighting the shifts in economics, science, and research surrounding PMOS, this article was able to demonstrate the good news found in PMOS research and provide hope for the future of PMOS in the face of diagnosis.
              </p>
            </section>

            <section className="mb-8">
              <p className="text-gray-700 leading-relaxed italic">
                Author&apos;s Note: The information presented in this article is not medical advice. Not everyone with PMOS is the same, so please consult with medical professionals when evaluating the best treatments for PMOS or infertility. Many studies are ongoing, and results on supplement safety and efficacy may not be conclusive yet.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bibliography</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Boldis BV, Grünberger I, Cederström A, Björk J, Nilsson A, Helgertz J. Comorbidities in women with polyendocrine metabolic ovarian syndrome: a sibling study. BMC Women S Health. 24(1):221. Available from:{" "}
                  <a href="https://doi.org/10.1186/s12905-024-03028-9" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://doi.org/10.1186/s12905-024-03028-9
                  </a>
                </li>
                <li>
                  Balch B. Why we know so little about women&apos;s health. AAMC. 2024 Mar 26. Available from:{" "}
                  <a href="https://www.aamc.org/news/why-we-know-so-little-about-women-s-health" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.aamc.org/news/why-we-know-so-little-about-women-s-health
                  </a>
                </li>
                <li>
                  Kandilian N, Lennox-Miller A, Bousleiman R. Innovation in Women&apos;s Health 2025. Silicon Valley Bank. Available from:{" "}
                  <a href="https://www.svb.com/trends-insights/reports/womens-health-report/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.svb.com/trends-insights/reports/womens-health-report/
                  </a>
                </li>
                <li>
                  Canadian Institutes of Health Research. Finding solutions for women and gender diverse people&apos;s top health priorities. 2024. Available from:{" "}
                  <a href="https://www.canada.ca/en/institutes-health-research/news/2024/10/finding-solutions-for-women-and-gender-diverse-peoples-top-health-priorities.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.canada.ca/en/institutes-health-research/news/2024/10/finding-solutions-for-women-and-gender-diverse-peoples-top-health-priorities.html
                  </a>
                </li>
                <li>
                  PubMed. Available from:{" "}
                  <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://pubmed.ncbi.nlm.nih.gov/
                  </a>
                </li>
                <li>
                  Wang J, Wang B, Li C, Meng T, Liu C, Chen J, et al. Evolving global trends in PMOS burden: a three-decade analysis (1990–2021) with projections to 2036 among adolescents and young adults. Frontiers in Endocrinology. 2025 May 12;16:1569694. Available from:{" "}
                  <a href="https://doi.org/10.3389/fendo.2025.1569694" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://doi.org/10.3389/fendo.2025.1569694
                  </a>
                </li>
                <li>
                  Dokras A. Polycystic ovary syndrome in 2025—insights and innovations. Fertility and Sterility. 2025 Sep 22;124(5):907–9. Available from:{" "}
                  <a href="https://doi.org/10.1016/j.fertnstert.2025.09.025" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://doi.org/10.1016/j.fertnstert.2025.09.025
                  </a>
                </li>
                <li>
                  Strimbu K, Tavel JA. What are biomarkers? Current Opinion in HIV and AIDS. 2010 Aug 21;5(6):463–6. Available from:{" "}
                  <a href="https://doi.org/10.1097/coh.0b013e32833ed177" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://doi.org/10.1097/coh.0b013e32833ed177
                  </a>
                </li>
                <li>
                  Betz D, Fane K. Human chorionic gonadotropin. StatPearls - NCBI Bookshelf. 2025. Available from:{" "}
                  <a href="https://www.ncbi.nlm.nih.gov/books/NBK532950/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.ncbi.nlm.nih.gov/books/NBK532950/
                  </a>
                </li>
                <li>
                  Hosseinzadeh P. PMOS and Infertility. John Hopkin&apos;s Medicine. 2026. Available from:{" "}
                  <a href="https://www.hopkinsmedicine.org/health/expert-qa/PCOS-and-infertility" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.hopkinsmedicine.org/health/expert-qa/PCOS-and-infertility
                  </a>
                </li>
                <li>
                  Treatments for Infertility Resulting from PMOS. 2024. Available from:{" "}
                  <a href="https://www.nichd.nih.gov/health/topics/PCOS/conditioninfo/treatments/infertility" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://www.nichd.nih.gov/health/topics/PCOS/conditioninfo/treatments/infertility
                  </a>
                </li>
                <li>
                  Kotlyar AM, Seifer DB. Women with PMOS who undergo IVF: a comprehensive review of therapeutic strategies for successful outcomes. Reproductive Biology and Endocrinology. 2023 Aug 1;21(1):70. Available from:{" "}
                  <a href="https://doi.org/10.1186/s12958-023-01120-7" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    https://doi.org/10.1186/s12958-023-01120-7
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
