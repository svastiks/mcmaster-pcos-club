import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-wide">McMaster PCOS Society</h3>
            <p className="text-gray-600 font-light leading-relaxed max-w-md">
              McMaster's PCOS Society spreads awareness through support, education, and advocacy. Creating connections that matter.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-6">Navigate</h4>
            <div className="space-y-3">
              <Link
                href="/research"
                className="block text-gray-600 hover:text-emerald-600 transition-colors font-light"
              >
                Research Hub
              </Link>
              <Link
                href="/hervoices"
                className="block text-gray-600 hover:text-emerald-600 transition-colors font-light"
              >
                HerVoices
              </Link>
              <Link
                href="/get-involved"
                className="block text-gray-600 hover:text-emerald-600 transition-colors font-light"
              >
                Get Involved
              </Link>
              <Link
                href="/resources"
                className="block text-gray-600 hover:text-emerald-600 transition-colors font-light"
              >
                Resources
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-6">Connect with us:</h4>
            <div className="space-y-3">
              <p className="text-gray-600 font-light">
                Email: macpcossociety@gmail.com
                <br />
                Instagram: @macpcos
                <br />
                LinkedIn: The McMaster PCOS Society
                <br />
                1280 Main St W, Hamilton, ON L8S 4L8, Canada
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8">
          <p className="text-center text-gray-500 font-light">
            © {new Date().getFullYear()} McMaster PCOS Society - McMaster University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
