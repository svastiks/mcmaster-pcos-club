import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function RoleOfHormonesPage() {
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
            The Role of Hormones in Polycystic Ovarian Syndrome (PCOS)
          </h1>
          <p className="text-center text-gray-600 mb-12 text-lg">
            By: Sofia R.M. Jacome
          </p>

          <div className="prose prose-lg max-w-none">
            {/* --- Section 1 --- */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What is a Hormone?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Polycystic ovarian syndrome or PCOS, for short, is an endocrine 
                condition, meaning that it is associated with issues related 
                to hormones<sup>1</sup>. Hormones are messengers produced by 
                various parts of the body, like the brain, ovaries, and testes, 
                which move to different areas of the body to deliver their 
                message<sup>2</sup>. This message results in some action being 
                performed within the body<sup>2</sup>. Hormones are also 
                specific to the part of the body they are meant to act on, acting 
                like keys that fit into specific locks, called receptors, that 
                sit on the outside of cells<sup>2</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                An example of this is adrenaline<sup>3</sup>. Adrenaline is 
                first released by the adrenal glands which sit on top of your 
                kidneys, and it travels through the bloodstream to your heart, 
                where these messengers fit into special locks called Beta 
                receptors<sup>3</sup>. When this connection happens, the heart 
                is told to beat faster, and it does exactly that<sup>3</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Biological females and biological males have the same sex 
                hormones, just in different amounts<sup>4</sup>. Biological 
                females have higher amounts of estrogen and progesterone, while 
                biological males have higher amounts of testosterone<sup>4</sup>.
              </p>
            </section>

            {/* --- Section 2 --- */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What do hormones normally do in the Female body?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hormones work in teams to send certain messages and get work 
                done. In the female body, the estrogen hormones—estradiol, 
                estriol, estrone, and esterol—work to regulate 
                ovulation<sup>5</sup>. Estradiol, as the strongest, is the most 
                common in women of childbearing age<sup>4</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                During the menstrual cycle, the pituitary gland in your brain 
                sends messages to a few eggs in the ovaries through Follicle 
                Stimulating Hormone (FSH) and luteinizing hormone (LH), which 
                ultimately leads to the release of an egg in ovulation<sup>6</sup>. 
                Prior to and following ovulation, estrogen and progesterone are 
                sent from the ovaries to the uterus and nearby blood vessels to 
                build and develop the uterine lining<sup>6</sup>. When pregnancy 
                does not occur, a decrease in estrogen and progesterone leads to 
                the breakdown of this lining, causing menstruation<sup>6</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estrogen also plays a major role in skeletal, cardiovascular, 
                and central nervous system health<sup>7</sup>. It impacts 
                important bodily functions including blood sugar levels, 
                cholesterol levels, bone and muscle mass, and brain 
                function<sup>7</sup>. Too little estrogen can lead to 
                dysfunction and dysregulation of these areas. Sometimes with 
                PCOS, estrogen levels are too high in relation to progesterone 
                levels, causing symptoms like heavy periods<sup>7</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Progesterone plays a major role in the development and 
                maintenance of the uterine lining<sup>8</sup>. In the menstrual 
                cycle, a decrease of progesterone leads to the shedding of the 
                lining in menstruation<sup>8</sup>. In pregnancy, progesterone 
                levels must remain high to maintain the uterine lining for the 
                embryo<sup>8</sup>. If progesterone levels are too low, 
                miscarriage, decreased fertility, and early labor may 
                occur<sup>8</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Androgens—“male sex hormones” like testosterone—are produced in 
                the female body fairly equally between the adrenal glands and 
                the ovaries<sup>9</sup>. In women, androgens like testosterone 
                are converted into estradiol<sup>10</sup>. However, androgens 
                themselves aid in muscle development, bone density, and sexual 
                desire<sup>10</sup>.
              </p>
            </section>

            {/* --- Section 3 --- */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Hyperandrogenism and Insulin Resistance
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Major symptoms of PCOS occur when there are the wrong amounts of 
                the male messengers<sup>11</sup>. When there is too much of the 
                messenger testosterone, the result is a condition called 
                hyperandrogenism<sup>11</sup>. This imbalance causes symptoms we 
                often associate with PCOS, such as acne, overly oily skin, 
                excessive body hair—especially on the face, chest, and 
                back—irregular periods, and male-pattern baldness<sup>11</sup>. 
                Approximately 80–90% of females with hyperandrogenism have PCOS, 
                and many healthcare professionals attribute PCOS as the most 
                common cause of this condition<sup>11</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Insulin acts as a messenger from the pancreas that tells cells 
                to let in glucose (sugar) from the bloodstream to use in energy 
                production<sup>12</sup>. Insulin resistance, found in 60–70% of 
                women with PCOS, is a condition where the cells don’t listen to 
                insulin<sup>12</sup>. When this happens, cells do not accept 
                sugar as effectively, and the body thinks there must not be 
                enough insulin in the bloodstream<sup>13</sup>. It responds by 
                releasing more insulin from the pancreas, which creates a 
                buildup of insulin called hyperinsulinemia<sup>13</sup>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The exact mechanisms connecting hyperinsulinemia and 
                hyperandrogenism are still unknown, but the two conditions have 
                demonstrated a strong correlation, suggesting that one hormone 
                directly impacts the other<sup>14</sup>. Insulin has been found 
                to prevent the liver from releasing a messenger called sex 
                hormone binding globulin (SHBG), which regulates the amounts of 
                androgens and estrogens in the body by holding onto them and 
                deactivating them<sup>14</sup>. Too much insulin may overwhelm 
                the liver, preventing SHBG from being released to perform its 
                ability to regulate androgens, leading to high androgen levels 
                in the body<sup>14</sup>. These high androgens then go on to 
                cause the symptoms of PCOS discussed above<sup>14</sup>.
              </p>
            </section>

            {/* --- Section 4 --- */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Conclusion
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PCOS is associated with imbalances in various hormones, causing 
                symptoms or directly driving imbalances in others. The hope is 
                that through reading this article, you were able to learn 
                something new about the amazing messengers that control our 
                bodies, as well as what happens when they aren’t able to work 
                properly. Understanding the molecular processes behind symptoms 
                is crucial to understanding why certain symptoms arise and can 
                offer a starting point for research, treatment, and management.
              </p>
            </section>

            {/* --- Bibliography --- */}
            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Bibliography
              </h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  Endocrine Society. Polycystic Ovary Syndrome [Internet]. 2022.{" "}
                  <a
                    href="https://www.endocrine.org/patient-engagement/endocrine-library/pcos"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    endocrine.org/patient-engagement/endocrine-library/pcos
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Hormones: What They Are, Function & Types.{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/articles/22464-hormones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    clevelandclinic.org/health/articles/22464-hormones
                  </a>
                </li>
                <li>
                  British Heart Foundation. Adrenaline. 2018.{" "}
                  <a
                    href="https://www.bhf.org.uk/informationsupport/heart-matters-magazine/research/adrenaline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    bhf.org.uk/.../adrenaline
                  </a>
                </li>
                <li>
                  Endocrine Society. Reproductive hormones [Internet]. 2022.{" "}
                  <a
                    href="https://www.endocrine.org/patient-engagement/endocrine-library/hormones-and-endocrine-function/reproductive-hormones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    endocrine.org/.../reproductive-hormones
                  </a>
                </li>
                <li>
                  Hariri L, Rehman A. Estradiol [Internet]. StatPearls; 2020.{" "}
                  <a
                    href="https://www.ncbi.nlm.nih.gov/books/NBK549797/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ncbi.nlm.nih.gov/books/NBK549797
                  </a>
                </li>
                <li>
                  Thiyagarajan DK, Basit H, Jeanmonod R. Physiology, menstrual
                  cycle [Internet]. StatPearls; 2024.{" "}
                  <a
                    href="https://www.ncbi.nlm.nih.gov/books/NBK500020/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ncbi.nlm.nih.gov/books/NBK500020
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Estrogen: Hormone, Function, Levels &
                  Imbalances. 2022.{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/body/22353-estrogen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    clevelandclinic.org/.../22353-estrogen
                  </a>
                </li>
                <li>
                  Cable JK, Grider MH. Physiology, Progesterone [Internet].
                  StatPearls; 2023.{" "}
                  <a
                    href="https://www.ncbi.nlm.nih.gov/books/NBK558960/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ncbi.nlm.nih.gov/books/NBK558960
                  </a>
                </li>
                <li>
                  Baptiste CG et al. Insulin and hyperandrogenism in PCOS. J
                  Steroid Biochem Mol Biol. 2010.{" "}
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0960076009003033"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    sciencedirect.com/.../S0960076009003033
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Androgens: Function, Measurement & Related
                  Disorders. 2021.{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/articles/22002-androgens"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    clevelandclinic.org/.../22002-androgens
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Hyperandrogenism. 2023.{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/diseases/24639-hyperandrogenism"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    clevelandclinic.org/.../24639-hyperandrogenism
                  </a>
                </li>
                <li>
                  Unluhizarci K, Karaca Z, Kelestimur F. Role of insulin in
                  androgen excess disorders. World J Diabetes. 2021.{" "}
                  <a
                    href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8107978/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ncbi.nlm.nih.gov/pmc/articles/PMC8107978
                  </a>
                </li>
                <li>
                  Cleveland Clinic. Hyperinsulinemia. 2022.{" "}
                  <a
                    href="https://my.clevelandclinic.org/health/diseases/24178-hyperinsulinemia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    clevelandclinic.org/.../24178-hyperinsulinemia
                  </a>
                </li>
                <li>
                  Pateguana NB, Janes A. The contribution of hyperinsulinemia to
                  PCOS. J Metabolic Health. 2019.{" "}
                  <a
                    href="https://journalofmetabolichealth.org/index.php/jmh/article/view/50/184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    journalofmetabolichealth.org/.../50/184
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