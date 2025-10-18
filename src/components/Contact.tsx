import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Contact = () => {
  return (
    <section id="contact" className="py-8 md:py-12 px-4 bg-[#F3EFFF] dark:bg-[#1a1625]">
      <div className="container mx-auto max-w-[1040px]">
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 md:mb-8 text-center">
          Get in Touch
        </h2>

        <div className="bg-white dark:bg-card rounded-2xl pt-4 px-4 pb-6 md:p-6 shadow-lg">
          <div className="grid md:grid-cols-[320px_1fr] gap-4 md:gap-6">
            {/* Left Column - Business Info (Collapsible on Mobile) */}
            <div className="md:space-y-4">
              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible>
                  <AccordionItem value="contact-details" className="border-none">
                    <AccordionTrigger className="text-base font-semibold hover:no-underline py-3">
                      Contact Details
                    </AccordionTrigger>
                    <AccordionContent className="space-y-3 pt-2 pb-4">
                      <div>
                        <h3 className="text-base font-heading font-bold mb-1">
                          <span className="glow-text">Pixel Cloud9</span>
                        </h3>
                        <p className="text-xs text-muted-foreground mb-1">Sole Proprietorship</p>
                        <p className="text-xs text-muted-foreground">Jacksonville, FL</p>
                      </div>

                      <div className="space-y-1.5">
                        <p className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>📧</span>
                          <a
                            href="mailto:mail@pixelcloud9.com"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            mail@pixelcloud9.com
                          </a>
                        </p>
                        <p className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>☎️</span>
                          <a
                            href="tel:+17723805151"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            (772) 380-5151
                          </a>
                        </p>
                      </div>

                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground italic">
                          Legal owner: Robin Converse
                        </p>
                      </div>

                      <div className="pt-2 border-t border-border/30">
                        <p className="text-xs text-muted-foreground italic">
                          "Have a project in mind? Let's build something that saves you time and wins you clients."
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Desktop: Always Visible */}
              <div className="hidden md:block space-y-4">
                <div>
                  <h3 className="text-lg font-heading font-bold mb-1">
                    <span className="glow-text">Pixel Cloud9</span>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Sole Proprietorship</p>
                  <p className="text-sm text-muted-foreground">Jacksonville, FL</p>
                </div>

                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>📧</span>
                    <a
                      href="mailto:mail@pixelcloud9.com"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      mail@pixelcloud9.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>☎️</span>
                    <a
                      href="tel:+17723805151"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      (772) 380-5151
                    </a>
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs text-muted-foreground">
                    Legal owner: Robin Converse
                  </p>
                </div>

                <div className="pt-3 border-t border-border/30">
                  <p className="text-sm text-muted-foreground italic">
                    "Have a project in mind? Let's build something that saves you time and wins you clients."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - GoHighLevel Form */}
            <div className="w-full md:max-w-[720px] md:ml-auto flex items-center">
              <div className="w-full max-[380px]:w-[105%] max-[380px]:scale-95 max-[380px]:origin-top mb-0">
                <iframe
                  src="https://brand.pixelcloud9.com/widget/form/A6ioJBWfHxNzl56jXrg2"
                  style={{ width: '100%', minHeight: '700px', border: 'none', borderRadius: '16px', display: 'block', marginBottom: 0 }}
                  id="inline-A6ioJBWfHxNzl56jXrg2"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Contact Form (Website)"
                  data-height="760"
                  data-layout-iframe-id="inline-A6ioJBWfHxNzl56jXrg2"
                  data-form-id="A6ioJBWfHxNzl56jXrg2"
                  title="Contact Form (Website)"
                />
                <script src="https://brand.pixelcloud9.com/js/form_embed.js"></script>
              </div>
              <p className="text-xs text-muted-foreground text-center -mt-2 pt-0">
                By submitting, you agree to our{" "}
                <a href="#tos" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
