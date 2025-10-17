import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0].toString()] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    
    // Clear form
    setFormData({ name: "", email: "", message: "" });
    
    toast({
      title: "Success!",
      description: "Thanks for reaching out! We'll reply within 1 business day.",
    });
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-border/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
          Get in Touch
        </h2>

        <div className="glass-card rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary/5 via-secondary/5 to-background shadow-lg">
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

            {/* Right Column - Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={errors.name ? "border-destructive" : ""}
                />
                {errors.name && (
                  <p className="text-sm text-destructive mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Textarea
                  placeholder="Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={errors.message ? "border-destructive" : ""}
                  rows={6}
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                size="lg"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
