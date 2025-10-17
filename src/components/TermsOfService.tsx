const TermsOfService = () => {
  return (
    <section id="tos" className="py-24 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Terms of Service
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
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
      </div>
    </section>
  );
};

export default TermsOfService;
