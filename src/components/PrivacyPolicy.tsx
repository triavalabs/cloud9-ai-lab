const PrivacyPolicy = () => {
  return (
    <section id="privacy" className="py-24 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
          Privacy Policy
        </h2>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
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
      </div>
    </section>
  );
};

export default PrivacyPolicy;
