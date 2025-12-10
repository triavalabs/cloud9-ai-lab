import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Add actual storage logic here
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleClose = (open: boolean) => {
    if (!open) {
      // Reset state when closing
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setName("");
      }, 200);
    }
    onOpenChange(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Join the Waitlist</DialogTitle>
              <DialogDescription className="text-base">
                Be the first to know when PixelCloud9 OS™ Licensing launches in Q1 2026.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="apple-button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Joining..." : "Join Waitlist"}
              </button>
              
              <p className="text-xs text-muted-foreground text-center">
                We'll only email you about the licensing launch. No spam.
              </p>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">
              We'll notify you at <span className="font-medium text-foreground">{email}</span> when PixelCloud9 OS™ Licensing launches.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
