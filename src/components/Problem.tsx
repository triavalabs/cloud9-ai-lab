import { MessageCircle, Clock, Users } from "lucide-react";

const Problem = () => {
  return (
    <section className="pb-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
          You're Growing — But It's Getting <span className="glow-text">Messy</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Calls, messages, follow-ups — it's too much to juggle. We design systems that run your communication while you focus on growth.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-accent-foreground" />
            </div>
            <p className="text-muted-foreground">Too many missed messages</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <Clock className="w-8 h-8 text-accent-foreground" />
            </div>
            <p className="text-muted-foreground">No time for follow-ups</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <p className="text-muted-foreground">Lost leads slipping away</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
