import { MessageCircle, Clock, Users } from "lucide-react";

interface ProblemProps {
  className?: string;
}

const Problem = ({ className = "" }: ProblemProps) => {
  return <section className={`pb-24 px-6 bg-muted/30 ${className}`}>
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          You're Growing — But It's Getting <span className="glow-text">Messy</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Calls, messages, follow-ups — it's too much to juggle. We design systems that run your communication while you focus on growth.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-accent" />
            </div>
            <p className="text-muted-foreground">Too many missed messages</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <p className="text-muted-foreground">No time for follow-ups</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <p className="text-muted-foreground">Lost leads slipping away</p>
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="glass-card p-8 space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Before PixelCloud9</p>
              <p className="text-lg md:text-xl text-destructive font-medium">Chaos, missed leads, and overwhelm.</p>
            </div>
            
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">After PixelCloud9</p>
              <p className="text-lg md:text-xl glow-text font-semibold">Clients booked, messages handled, business running smooth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Problem;