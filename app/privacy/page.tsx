import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeIn } from "@/components/fade-in"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />

      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeIn>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Privacy Policy
              </h1>
              <p className="mb-8 text-lg text-gray-300">
                Last updated: June 15, 2025
              </p>
            </FadeIn>

            <div className="prose prose-invert max-w-none">
              <FadeIn delay={0.1}>
                <h2>1. Introduction</h2>
                <p>
                  At Tilla, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service"). Please read this policy carefully to understand our practices regarding your personal data.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2>2. Information We Collect</h2>
                <p>
                  We collect several types of information from and about users of our Service, including:
                </p>
                <ul>
                  <li>
                    <strong>Personal Information:</strong> This includes your name, email address, phone number, and payment information when you register for an account or subscribe to our Service.
                  </li>
                  <li>
                    <strong>Business Data:</strong> Information you input into the Service about your business, including product details, customer information, sales data, and inventory records.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you access and use our Service, including your device information, IP address, browser type, time spent on the Service, and pages visited.
                  </li>
                  <li>
                    <strong>Location Data:</strong> With your consent, we may collect precise location data from your device to provide location-based features.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2>3. How We Use Your Information</h2>
                <p>
                  We use the information we collect for various purposes, including:
                </p>
                <ul>
                  <li>Providing, maintaining, and improving our Service</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to your comments, questions, and requests</li>
                  <li>Sending technical notices, updates, security alerts, and support messages</li>
                  <li>Monitoring and analyzing trends, usage, and activities in connection with our Service</li>
                  <li>Personalizing your experience and delivering content relevant to your interests</li>
                  <li>Detecting, investigating, and preventing fraudulent transactions and other illegal activities</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.25}>
                <h2>4. Data Storage and Security</h2>
                <p>
                  Your data is stored securely using industry-standard encryption and security measures. We use Supabase for our cloud database, which provides robust security features including encryption at rest and in transit.
                </p>
                <p>
                  For users in African countries, we maintain data processing practices compliant with local data protection laws. Where required by law, we store certain data on servers located within your country or region.
                </p>
                <p>
                  The app's offline-first functionality means your data is primarily stored on your device and synchronized with our cloud servers when an internet connection is available. This ensures you can continue using the app even without constant internet access.
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <h2>5. Data Sharing and Disclosure</h2>
                <p>
                  We do not sell your personal information or business data. We may share your information in the following circumstances:
                </p>
                <ul>
                  <li>With service providers who perform services on our behalf</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights and property</li>
                  <li>With your consent or at your direction</li>
                </ul>
                <p>
                  For users in African countries, we ensure that any cross-border transfers of personal data comply with applicable data protection laws, including obtaining necessary approvals where required.
                </p>
              </FadeIn>

              <FadeIn delay={0.35}>
                <h2>6. Mobile Money Integration</h2>
                <p>
                  Our Service integrates with mobile money services popular in African markets, such as M-PESA, MTN Mobile Money, and Orange Money. When you use these payment methods:
                </p>
                <ul>
                  <li>We collect only the transaction information necessary to process payments</li>
                  <li>We do not store your mobile money PIN or other sensitive authentication data</li>
                  <li>All payment processing is conducted through secure, PCI-compliant channels</li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.4}>
                <h2>7. Your Rights and Choices</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul>
                  <li>Accessing, correcting, or deleting your personal information</li>
                  <li>Withdrawing your consent at any time</li>
                  <li>Requesting restriction of processing of your personal information</li>
                  <li>Requesting transfer of your personal information</li>
                  <li>Opting out of marketing communications</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </FadeIn>

              <FadeIn delay={0.45}>
                <h2>8. Children's Privacy</h2>
                <p>
                  Our Service is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </FadeIn>

              <FadeIn delay={0.5}>
                <h2>9. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </FadeIn>

              <FadeIn delay={0.55}>
                <h2>10. Data Controller</h2>
                <p>
                  The data controller for this website and the Tilla service is Clockwise Digital.
                </p>
              </FadeIn>

              <FadeIn delay={0.6}>
                <h2>11. Contact Information</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                  Email: support@tillapos.com
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
