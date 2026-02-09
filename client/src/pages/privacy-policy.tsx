import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-12 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-8">
            Last Updated: February 2026
          </p>

          <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                Unovie Inc. ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. 
                This policy describes the types of information we may collect from you or that you may provide when you visit the website unovie.ai (our "Website") 
                and our practices for collecting, using, maintaining, protecting, and disclosing that information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="mb-4">We collect several types of information from and about users of our Website, including information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>By which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline ("personal information").</li>
                <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use information that we collect about you or that you provide to us, including any personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To present our Website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
              <p>
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. 
                The safety and security of your information also depends on you. Where we have given you (or where you have chosen) a password for access to certain parts of our Website, 
                you are responsible for keeping this password confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Information</h2>
              <p>
                To ask questions or comment about this privacy policy and our privacy practices, contact us at:
                <br />
                <br />
                <strong>Unovie Inc.</strong><br />
                651N N.Highway-183, Suite #4120<br />
                Austin, TX 78641<br />
                Email: info@unovie.ai
              </p>
            </section>
          </div>
        </motion.div>
      </section>
    </div>
  );
}