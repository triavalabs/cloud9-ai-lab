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
        
        <div className="inline-flex items-center mb-6">
          <div className="glass-card px-6 py-3 rounded-full">
            <p className="text-lg md:text-xl font-medium text-primary dark:text-cyan-400 italic">
              Sound familiar?
            </p>
          </div>
        </div>
        
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
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Before Section */}
            <div className="glass-card p-6 md:p-8 bg-destructive/5 border-destructive/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">😓</span>
                <p className="text-base font-bold text-destructive uppercase tracking-tight md:tracking-wide">Before PixelCloud9</p>
              </div>
              <p className="text-lg md:text-xl text-foreground/90 font-medium leading-relaxed">
                Missed messages, lost leads, endless follow-ups.
              </p>
            </div>
            
            {/* After Section */}
            <div className="glass-card p-6 md:p-8 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">✨</span>
                <p className="text-base font-bold text-primary uppercase tracking-tight md:tracking-wide">After PixelCloud9</p>
              </div>
              <p className="text-lg md:text-xl glow-text font-semibold leading-relaxed mb-3">
                Booked clients, instant replies, 60% fewer support tickets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Problem;