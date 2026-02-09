import { motion } from "framer-motion";
import contextGraphImg from "@/assets/images/context-graph.png";
import agentArchImg from "@/assets/images/context-graph-architecture.png";
import { Database, Network, Clock, Search, Workflow, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Platform() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
            From (un)structured data to <br/><span className="text-gradient">understanding.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Nexus reads your (un)structured data and builds something that did not exist before: a living graph of your organization's context. No manual curation required.
          </p>
        </motion.div>
      </section>

      <section className="py-12 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="text-3xl font-display font-bold mb-6">The Context Graph</h2>
               <p className="text-muted-foreground mb-8">
                 A policy change references an audit finding. The audit finding references a customer incident. The incident traces back to an understaffed integration team. That chain is what Nexus builds.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <Database className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Entities</h4>
                      <p className="text-sm text-muted-foreground">People, products, teams, APIs, policies, regulations.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Network className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Relationships</h4>
                      <p className="text-sm text-muted-foreground">Depends on, replaced by, approved by, caused by.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-white font-bold">Temporal Evolution</h4>
                      <p className="text-sm text-muted-foreground">When things changed, what triggered the change.</p>
                    </div>
                  </li>
               </ul>
             </div>
             <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 group-hover:bg-primary/30 transition-colors duration-500" />
                <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl">
                  <img src={contextGraphImg} alt="Context Graph Diagram" className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
                </div>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-display font-bold mb-16 text-center">Three Layers of Understanding</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 border-white/5 p-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Search className="w-24 h-24" />
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-2">Layer 1</h3>
                 <h4 className="text-2xl font-display font-bold mb-4">Semantic Search</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                   Find any piece of knowledge by meaning, not keywords. Ask "how do we handle refunds?" and find the answer in "Subscription Terms".
                 </p>
              </Card>

              <Card className="bg-card/50 border-white/5 p-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Workflow className="w-24 h-24" />
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-2">Layer 2</h3>
                 <h4 className="text-2xl font-display font-bold mb-4">Knowledge Graphs</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                   Automatically extract entities and relationships. "Which services will be affected if we deprecate the v1 endpoint?" The graph traces the dependency chain.
                 </p>
              </Card>

              <Card className="bg-card/50 border-white/5 p-8 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Clock className="w-24 h-24" />
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-2">Layer 3</h3>
                 <h4 className="text-2xl font-display font-bold mb-4">Temporal Intelligence</h4>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                   Track how knowledge evolves. "Show me the history of our deployment procedure." The temporal layer captures not just the current state, but the trajectory.
                 </p>
              </Card>
           </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-black/40 to-transparent">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">How Questions Become Understanding</h2>
            <div className="max-w-4xl mx-auto">
               <p className="text-center text-muted-foreground mb-12">
                 When you ask a question, multiple specialized agents fan out simultaneously.
               </p>
               <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl mt-8">
                  <img src={agentArchImg} alt="Agent Architecture Diagram" className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
