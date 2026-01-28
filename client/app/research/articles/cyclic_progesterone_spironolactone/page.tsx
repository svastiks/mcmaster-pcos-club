import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function CyclicProgesteroneSpironolactonePage() {
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
            Breaking Down Current Research: Cyclic Progesterone and
            Spironolactone Treatment for Polycystic Ovary Syndrome - A
            Feasibility Study by Kaitlin Nelson (MSc)
          </h1>
          <p className="text-center text-gray-600 mb-10 text-lg">
            By: Sofia R.M. Jacome
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In a perfect world, every condition and disease would have a
                simple, effective, one-pill solution. However, underfunding in
                female reproductive health issues like polycystic ovary syndrome
                (PCOS) is common, despite the prevalence, economic burden,
                comorbidities and negative impact on quality of life.
                <sup>1</sup> This underfunding prevents us from determining the
                best and most effective way of treating and managing conditions
                like PCOS.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Currently, most treatments aimed towards the management of PCOS
                are not treating the root cause of the condition itself, instead
                working to manage the symptoms associated with the condition.
                Common treatments include a combination of birth control pills
                to regulate the menstrual cycle, lifestyle modifications to
                improve things like cholesterol levels, and metformin to improve
                the body&apos;s inability to respond to insulin.<sup>2</sup> While
                physical symptoms are the focus of treatment, for many living
                with PCOS, the condition also greatly affects their mental
                health.<sup>3</sup> In addition to physical symptoms, this
                clinical trial also examines a treatment&apos;s effect on an
                individual&apos;s mental health.<sup>2</sup>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This pilot study, led by Kaitlin Nelson (MSc) and Dr. Jerilynn
                Prior, aimed to evaluate the efficacy of using a progesterone
                hormone treatment in combination with spironolactone, a
                medication that blocks male hormones like testosterone
                <sup>2,4</sup>. As of January 2025, very few studies, including
                this one, have examined the use of cyclic progesterone treatment
                for the management of PCOS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Cyclic Progesterone Treatment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PCOS operates in a &quot;feedback loop,&quot; a situation that can be
                described as having a certain hormone that impacts other
                hormones in a chain reaction, where the end of the chain further
                impacts the first hormone. This feedback continues in a cycle,
                and treatments must function to break this chain to improve
                symptoms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the PCOS feedback loop, a hormone called
                Gonadotropin-releasing hormone (GnRH) is released at an
                irregularly high frequency, which causes Luteinizing hormone
                (LH) to also be released at a high frequency.<sup>2</sup>
                Normally, LH works to develop the egg that will eventually be
                released during ovulation.<sup>5</sup> While a spike in LH is
                normal just before an egg is released, the high frequency seen
                in PCOS leads to hormonal disruptions, including high
                testosterone levels, high estrogen levels, and low
                Follicle-stimulating hormone (FSH), leading to irregular
                menstrual cycles.<sup>2</sup> Additionally, the high
                testosterone levels lead to symptoms we commonly associate with
                PCOS: alopecia, acne, and facial/body hair growth, as well as
                insulin resistance, reduced fertility, and increased cancer
                risks.<sup>2</sup> The dysregulation of LH also impacts
                progesterone levels, a hormone necessary for preparing the
                uterus for pregnancy and regulation of the menstrual cycle by
                lowering LH levels in preparation for having a period.
                <sup>6</sup> Since progesterone levels are too low in PCOS, the
                release of GnRH in the brain is not slowed down, leading us to
                the beginning of the cycle once again.<sup>7</sup>
              </p>

              <figure className="my-6">
                <img
                  src="/articles/cyclic_progesterone_spironolactone_image_1.jpg"
                  alt="Figure 1. The vicious cycle of PCOS."
                  className="w-full h-auto"
                />
                <figcaption className="text-sm text-gray-600 mt-2">
                  Figure 1. The vicious cycle of PCOS. Adapted from Nelson.
                  <sup>2</sup> Rapid pulses of Gonadotropin-releasing hormone
                  (GnRH) result in elevated Luteinizing hormone (LH),
                  contributing to a lack of ovulation and polycystic ovaries.
                  This results in progesterone deficiencies, increased androgen
                  levels, and symptoms of high testosterone, such as acne, hair
                  growth, and alopecia. The insufficient progesterone levels
                  result in the amplification of rapid GnRH levels, beginning
                  the cycle again.
                </figcaption>
              </figure>

              <p className="text-gray-700 leading-relaxed mb-4">
                The reasoning behind the study was that since progesterone plays
                a role in slowing GnRH and, by extension, LH pulses, it could be
                used as a treatment to break the chain and restore a normal
                hormonal cycle.<sup>2</sup> The progesterone is implemented in a
                &quot;cyclic&quot; manner, where instead of taking the pill every
                day, it is taken in the second half of the menstrual cycle
                (approximately days 14-28) to mimic the body&apos;s natural
                progesterone levels.<sup>8</sup> This study is unique in also
                incorporating spironolactone, a diuretic &quot;water pill&quot;
                that is sometimes prescribed off-label to block male hormones
                like testosterone.<sup>9</sup> This medication was implemented
                into the study for two reasons. The first is to block excessive
                testosterone levels that lead to unwanted facial hair, acne, and
                ovarian dysfunction.<sup>2</sup> The second reason was that
                since high testosterone can impair the cyclic progesterone&apos;s
                ability to slow GnRH pulses, it could reduce the efficacy of
                the treatment; therefore Spironolactone was used to reduce these
                levels.<sup>2</sup>
              </p>

              <figure className="my-6">
                <img
                  src="/articles/cyclic_progesterone_spironolactone_image_2.jpg"
                  alt="Figure 2. How cyclic progesterone breaks the vicious PCOS cycle."
                  className="w-full h-auto"
                />
                <figcaption className="text-sm text-gray-600 mt-2">
                  Figure 2. How cyclic Progesterone breaks the vicious PCOS
                  cycle. Adapted from Nelson.<sup>2</sup> Restoring progesterone
                  levels slows the release of Gonadotropin-releasing hormone
                  (GnRH), returning luteinizing hormone (LH) release to an
                  expected rate. This supports ovulation, progesterone
                  production, and improves polycystic ovaries, as well as
                  decreases androgen levels.
                </figcaption>
              </figure>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Aim of the Study
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The study aimed to evaluate the effectiveness of 6 months of
                cyclic progesterone therapy in combination with spironolactone
                in improving quality of life for individuals living with PCOS.
                <sup>2</sup> The study followed participants&apos; quality of
                life, which included 5 domains: emotions, body hair, weight,
                infertility, and menstruation.<sup>2</sup> Additionally, hormone
                levels, acne, and sleep quality were assessed.<sup>2</sup> This
                study followed a cohort of 26 individuals diagnosed with PCOS
                for 6 months.<sup>2</sup>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The study found that this treatment enhanced overall quality of
                life in all 5 domains (emotions, body hair, weight, infertility,
                and menstruation) and alleviated PCOS symptoms.<sup>2</sup>
                Improvements were found in sleep quality and acne severity.
                <sup>2</sup> Participant&apos;s testosterone and LH levels showed
                a statistically insignificant decrease; however, the average
                testosterone levels decreased to a range that is expected in
                individuals without PCOS, suggesting that this treatment was
                able to break the feedback loop that produced symptoms of high
                androgens.<sup>2</sup> Additionally, the participants reported
                that they preferred this combined treatment instead of oral
                contraceptives.<sup>2</sup>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Study Limits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The researchers noted that this study was limited by its small
                size, only involving 26 individuals.<sup>2</sup> Since the same
                dose of spironolactone was used for everyone, individuals with
                lower BMIs found this dose too high, and side effects may have
                contributed to participant drop out.<sup>2</sup> Additionally,
                each participant was fixed to a 28-day cycle, taking
                progesterone for the last 14 days, instead of personalizing the
                therapy to each individual and their natural cycle.
                <sup>2</sup>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why is this important?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This study was only the second to explore the use of cyclic
                progesterone therapy for treating PCOS.<sup>2</sup> Studies
                involving combined oral contraceptives found that birth control
                was unable to break the feedback loop the same way cyclic
                progesterone is.<sup>2</sup> This study demonstrates a need for
                exploration into better, more effective treatments for PCOS,
                specifically treatments that are able to break the chain of
                dysfunction and fix the underlying issues, instead of treating
                individual symptoms. Continuing research into this treatment
                and transforming it into a personalized therapy with specific
                doses and cycles for each individual could also allow it to be
                a highly effective, tailored treatment for many with PCOS. With
                so few treatments currently available, it is essential for
                researchers like Kaitlin Nelson to seek out new, improved
                therapies to enhance health care for managing and treating PCOS.
              </p>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bibliography
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Brakta S, Lizneva D, Mykhalchenko K, Imam A, Walker W, Diamond
                  MP, et al. Perspectives on polycystic ovary syndrome: Is
                  polycystic ovary syndrome research underfunded? The Journal of
                  Clinical Endocrinology &amp; Metabolism [Internet]. 2017 Sep
                  19;102(12):4421-7. Available from:{" "}
                  <a
                    href="https://doi.org/10.1210/jc.2017-01415"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://doi.org/10.1210/jc.2017-01415
                  </a>
                </li>
                <li>
                  Nelson K. Phase II 6-month cyclic
                  progesterone/spironolactone pilot therapy trial in polycystic
                  ovary syndrome - a pre-post one-arm feasibility study. Open
                  Collections [Internet]. 2025 Jan 1; Available from:{" "}
                  <a
                    href="https://doi.org/10.14288/1.0447691"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://doi.org/10.14288/1.0447691
                  </a>
                </li>
                <li>
                  Dewani D, Karwade P, Mahajan KS. The Invisible Struggle: The
                  Psychosocial aspects of Polycystic Ovary Syndrome. Cureus
                  [Internet]. 2023 Dec 30;15(12):e51321. Available from:{" "}
                  <a
                    href="https://doi.org/10.7759/cureus.51321"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://doi.org/10.7759/cureus.51321
                  </a>
                </li>
                <li>
                  HealthMatch staff, HealthMatch Pty Ltd. How does
                  spironolactone help in treating PCOS? [Internet]. HealthMatch.
                  2022. Available from:{" "}
                  <a
                    href="https://healthmatch.io/pcos/spironolactone-for-pcos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://healthmatch.io/pcos/spironolactone-for-pcos
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Luteinizing hormone [Internet]. Cleveland
                  Clinic. 2025. Available from:{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/body/22255-luteinizing-hormone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://my.clevelandclinic.org/health/body/22255-luteinizing-hormone
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Progesterone [Internet]. Cleveland Clinic.
                  2022. Available from:{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/body/24562-progesterone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://my.clevelandclinic.org/health/body/24562-progesterone
                  </a>
                </li>
                <li>
                  Bashour NM, Wray S. Progesterone directly and rapidly inhibits
                  GNRH neuronal activity via progesterone receptor membrane
                  component 1. Endocrinology [Internet]. 2012 Sep
                  1;153(9):4457-69. Available from:{" "}
                  <a
                    href="https://doi.org/10.1210/en.2012-1122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://doi.org/10.1210/en.2012-1122
                  </a>
                </li>
                <li>
                  The Centre for Menstrual Cycle and Ovulation Research
                  (CeMCOR). Cyclic Progesterone Therapy - CEMCOR [Internet].
                  CeMCOR. 2025. Available from:{" "}
                  <a
                    href="https://cemcor.ubc.ca/resources/cyclic-progesterone-therapy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://cemcor.ubc.ca/resources/cyclic-progesterone-therapy/
                  </a>
                </li>
                <li>
                  Spironolactone (oral route) [Internet]. Mayo Clinic. 2026.
                  Available from:{" "}
                  <a
                    href="https://www.mayoclinic.org/drugs-supplements/spironolactone-oralroute/description/drg-20071534"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    https://www.mayoclinic.org/drugs-supplements/spironolactone-oralroute/description/drg-20071534
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
