import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Terms & Conditions
              </h1>
              <p className="mb-8 text-lg text-gray-300">
                Last updated: June 15, 2025
              </p>
            </FadeIn>

            <div className="prose prose-invert max-w-none">
              <FadeIn delay={0.1}>
                <h2>1. Introduction</h2>
                <p>
                  Welcome to iHustle. These Terms and Conditions govern your use of the iHustle mobile application and website (collectively, the "Service"). By using our Service, you agree to these terms. Please read them carefully.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2>2. Definitions</h2>
                <p>
                  <strong>"Application"</strong> refers to iHustle, the mobile application and web platform.
                </p>
                <p>
                  <strong>"Service"</strong> refers to the Application and all services provided through it.
                </p>
                <p>
                  <strong>"User"</strong> refers to individuals who register and use our Service.
                </p>
                <p>
                  <strong>"Business Data"</strong> refers to all information and content that Users input or upload to the Service.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2>3. Account Registration</h2>
                <p>
                  To use certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <h2>4. Service Usage and Limitations</h2>
                <p>
                  The Service is intended for business management purposes. You agree to use the Service only for lawful purposes and in accordance with these Terms.
                </p>
                <p>
                  Free tier users are limited to 50 products and 1 user account. Standard tier users are limited to 1,000 products and 3 user accounts. Premium tier users have access to unlimited products and up to 10 user accounts.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue the Service at any time, with or without notice.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h2>5. Payment Terms</h2>
                <p>
                  Paid subscriptions are billed in advance on a monthly or yearly basis. If you choose to upgrade from the Free tier to a paid subscription, you will be charged immediately for the current billing cycle.
                </p>
                <p>
                  We accept payments through various methods including mobile money services like M-PESA, credit/debit cards, and bank transfers. All payments are processed securely through our payment partners.
                </p>
                <p>
                  Prices are listed in USD but may be charged in your local currency based on prevailing exchange rates. Users are responsible for all applicable taxes.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <h2>6. Data Ownership and Privacy</h2>
                <p>
                  You retain all rights to your Business Data. We do not own the data you input into the Service. Please refer to our Privacy Policy for details on how we collect, use, and protect your information.
                </p>
                <p>
                  You are solely responsible for the accuracy, quality, integrity, legality, reliability, and appropriateness of all Business Data.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h2>7. Specific Provisions for African Users</h2>
                <p>
                  iHustle complies with relevant data protection laws in African countries where it operates, including:
                </p>
                <ul>
                  <li>Kenya's Data Protection Act, 2019</li>
                  <li>Nigeria's Nigeria Data Protection Regulation (NDPR)</li>
                  <li>South Africa's Protection of Personal Information Act (POPIA)</li>
                  <li>Ghana's Data Protection Act, 2012</li>
                </ul>
                <p>
                  For users in countries with currency controls, we provide options for payment in local currency through approved channels in compliance with local regulations.
                </p>
              </FadeIn>

              <FadeIn delay={0.45}>
                <h2>8. Termination</h2>
                <p>
                  You may terminate your account at any time by following the instructions on the Service or by contacting us. We may terminate or suspend your account at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Service, us, or third parties, or for any other reason.
                </p>
                <p>
                  Upon termination, your right to use the Service will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h2>9. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the Service will function without interruption or errors. The use of the Service is at your own risk.
                </p>
              </FadeIn>

              <FadeIn delay={0.55}>
                <h2>10. Contact Information</h2>
                <p>
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p>
                  Email: ihustlebiz24@gmail.com
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
