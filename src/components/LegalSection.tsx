import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LegalSection = () => {
  return (
    <section id="legal" className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="tos">
            <AccordionTrigger className="text-lg md:text-xl font-heading font-bold hover:no-underline">
              Terms of Service
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-muted-foreground leading-relaxed text-sm opacity-90 pt-2">
                <p>
                  Welcome to Pixel Cloud9. By using our website, services, or products, you agree to comply with and be bound by these Terms of Service. Pixel Cloud9 provides automation, web design, and AI systems to help businesses operate efficiently.
                </p>
                <p>
                  You agree not to misuse our website or services.
                </p>
                <p>
                  Payments for services or digital products are non-refundable unless otherwise stated in writing.
                </p>
                <p>
                  Pixel Cloud9 is not liable for any indirect or consequential damages arising from use of our site or services.
                </p>
                <p>
                  We may update these terms at any time. Continued use of the site constitutes acceptance of changes.
                </p>
                <p>
                  For any questions, contact{" "}
                  <a
                    href="mailto:mail@pixelcloud9.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    mail@pixelcloud9.com
                  </a>
                  .
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="privacy">
            <AccordionTrigger className="text-lg md:text-xl font-heading font-bold hover:no-underline">
              Privacy Policy
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2 text-muted-foreground leading-relaxed text-sm opacity-90 pt-2">
                <p>
                  Pixel Cloud9 respects your privacy. We collect personal information such as name, email, and contact details only to deliver requested services and improve user experience.
                </p>
                <p>
                  We never sell or share your data with third parties.
                </p>
                <p>
                  We may use cookies or analytics to understand site traffic and improve performance.
                </p>
                <p>
                  By submitting forms or booking services, you consent to the collection and use of your information as described here.
                </p>
                <p>
                  You may request access, correction, or deletion of your data by contacting{" "}
                  <a
                    href="mailto:mail@pixelcloud9.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    mail@pixelcloud9.com
                  </a>
                  .
                </p>
                <p>
                  This policy may be updated periodically to reflect new regulations or improvements. Updates will appear on this page.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default LegalSection;
