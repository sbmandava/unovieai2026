import { motion } from "framer-motion";
import edgeArchImg from "@/assets/images/edge-architecture.png";
import momImg from "@/assets/images/mixture-of-models.png";
import { Server, Wifi, Cpu, Zap, Lock } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function EdgeAI() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
           <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm tracking-widest uppercase">
              <Server className="w-4 h-4" /> Edge First Architecture
           </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
             Your context graph,<br/> <span className="text-gradient">wherever your people are.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Nexus runs entirely on your infrastructure. From data center GPUs to NVIDIA Jetson Thor at the edge. Zero data egress.
          </p>
        </motion.div>
      </section>

      <section className="py-12">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
               <div>
                  <h2 className="text-3xl font-display font-bold mb-6">The On-Premise Advantage</h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      A cloud model processes each query in isolation — stateless, sessionless, amnesiac. Nexus sees your question in the context of everything your organization has ever written.
                    </p>
                    <p>
                      Engineered edge-first for the NVIDIA CUDA fabric. The LLMs, knowledge graphs, and temporal analysis run locally.
                    </p>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <Card className="bg-card/40 border-white/5 p-6">
                        <Lock className="w-6 h-6 text-primary mb-4" />
                        <h4 className="font-bold text-white mb-2">Zero Data Egress</h4>
                        <p className="text-sm text-muted-foreground">Competitive strategy and personnel decisions never leave your network.</p>
                     </Card>
                     <Card className="bg-card/40 border-white/5 p-6">
                        <Zap className="w-6 h-6 text-primary mb-4" />
                        <h4 className="font-bold text-white mb-2">Persistent Context</h4>
                        <p className="text-sm text-muted-foreground">The system accumulates understanding over time instead of resetting.</p>
                     </Card>
                  </div>
               </div>

               <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                 <img src={edgeArchImg} alt="Edge Architecture Diagram" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity invert" />
               </div>
            </div>
         </div>
      </section>

      <section className="py-24 bg-black/20">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Mixture of Models</h2>
            <div className="max-w-5xl mx-auto">
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Nexus achieves extreme speed through multiple small, domain-tuned models running simultaneously.
              </p>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="relative rounded-lg overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
                    <img src={momImg} alt="Mixture of Models Diagram" className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity invert" />
                 </div>
                 <div className="space-y-8">
                    <div>
                       <h4 className="font-bold text-white text-lg">gemma 4B</h4>
                       <p className="text-muted-foreground">Reasoning and synthesis. Small enough for concurrency, capable enough for complex queries.</p>
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-lg">FunctionGemma</h4>
                       <p className="text-muted-foreground">Tool routing. Near-zero inference cost leaves GPU resources for the models that need them.</p>
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-lg">Domain Specialists</h4>
                       <p className="text-muted-foreground">MedGemma (clinical), CodeGemma (technical). Swapped in per deployment.</p>
                    </div>
                 </div>
              </div>
            </div>
         </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-display font-bold mb-12 text-center">Cost Model</h2>
           <div className="overflow-x-auto">
             <table className="w-full border-collapse text-left">
               <thead>
                 <tr className="border-b border-white/10">
                   <th className="py-4 px-6 font-display font-bold text-muted-foreground uppercase text-xs tracking-wider">Metric</th>
                   <th className="py-4 px-6 font-display font-bold text-red-400 uppercase text-xs tracking-wider">Cloud AI (Per-Token)</th>
                   <th className="py-4 px-6 font-display font-bold text-primary uppercase text-xs tracking-wider">Nexus (Self-Hosted)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-white/5 text-sm">
                 <tr className="hover:bg-white/5 transition-colors">
                   <td className="py-4 px-6 font-medium text-white">100 users</td>
                   <td className="py-4 px-6 text-muted-foreground">$20,000-80,000/month</td>
                   <td className="py-4 px-6 text-white font-medium">Same fixed cost</td>
                 </tr>
                 <tr className="hover:bg-white/5 transition-colors">
                   <td className="py-4 px-6 font-medium text-white">Cost ceiling</td>
                   <td className="py-4 px-6 text-muted-foreground">None — grows with usage</td>
                   <td className="py-4 px-6 text-white font-medium">Hardware capacity</td>
                 </tr>
                 <tr className="hover:bg-white/5 transition-colors">
                   <td className="py-4 px-6 font-medium text-white">Marginal cost per query</td>
                   <td className="py-4 px-6 text-muted-foreground">Linear</td>
                   <td className="py-4 px-6 text-white font-medium">Approaches zero</td>
                 </tr>
               </tbody>
             </table>
           </div>
        </div>
      </section>
    </div>
  );
}
