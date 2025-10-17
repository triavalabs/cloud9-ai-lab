const Contact = () => {

  return (
    <section id="contact" className="py-12 md:py-20 px-6 bg-[#F3EFFF] dark:bg-[#1a1625]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Get in Touch
        </h2>

        <div className="rounded-2xl p-8 md:p-12 bg-background/50 backdrop-blur-sm shadow-lg border border-border/50">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Business Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  <span className="glow-text">Pixel Cloud9</span>
                </h3>
                <p className="text-muted-foreground mb-4">Sole Proprietorship</p>
                <p className="text-muted-foreground">Jacksonville, FL</p>
              </div>

              <div className="space-y-2">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <span>📧</span>
                  <a
                    href="mailto:mail@pixelcloud9.com"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    mail@pixelcloud9.com
                  </a>
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <span>☎️</span>
                  <a
                    href="tel:+17723805151"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    (772) 380-5151
                  </a>
                </p>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  Legal owner: Robin Converse
                </p>
              </div>

              <div className="pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground italic">
                  "Have a project in mind? Let's build something that saves you time and wins you clients."
                </p>
              </div>
            </div>

            {/* Right Column - GoHighLevel Form */}
            <div className="bg-white dark:bg-card rounded-2xl p-6 md:p-9 shadow-md h-[760px]">
              <iframe
                src="https://brand.pixelcloud9.com/widget/form/A6ioJBWfHxNzl56jXrg2"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '16px' }}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
