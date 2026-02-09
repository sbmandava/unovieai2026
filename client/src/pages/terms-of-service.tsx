import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-12 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: February 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the website unovie.ai (the "Site") and services provided by Unovie Inc. ("we," "us," or "our"), 
                you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Site or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Services</h2>
              <p className="mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violating any applicable federal, state, local, or international law or regulation.</li>
                <li>Exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                <li>Transmitting any advertising or promotional material without our prior written consent.</li>
                <li>Impersonating or attempting to impersonate Unovie Inc., a Unovie employee, another user, or any other person or entity.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Intellectual Property Rights</h2>
              <p>
                The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, 
                and the design, selection, and arrangement thereof) are owned by Unovie Inc., its licensors, or other providers of such material and are protected by 
                United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Disclaimer of Warranties</h2>
              <p>
                Your use of the Site and its content is at your own risk. The Site and its content are provided on an "as is" and "as available" basis, without any warranties of any kind, 
                either express or implied. Neither Unovie Inc. nor any person associated with Unovie Inc. makes any warranty or representation with respect to the completeness, security, 
                reliability, quality, accuracy, or availability of the Site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                In no event will Unovie Inc., its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, 
                under any legal theory, arising out of or in connection with your use, or inability to use, the Site, any websites linked to it, any content on the Site, 
                or such other websites, including any direct, indirect, special, incidental, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to Terms</h2>
              <p>
                We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them. 
                Your continued use of the Site following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Contact Information</h2>
              <p>
                All feedback, comments, requests for technical support, and other communications relating to the Site should be directed to:
                <br />
                <br />
                <strong>Unovie Inc.</strong><br />
                Email: info@unovie.ai
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}