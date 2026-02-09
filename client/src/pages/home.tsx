import { motion } from "framer-motion";
import { ArrowRight, Database, Network, Share2, Shield, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract shapes/glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
              Your organization makes <br />
              <span className="text-gradient">thousands of decisions</span> every day.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light">
              Most of the reasoning behind them is lost. Nexus builds business context graphs that capture not just what your organization knows, but <em>why</em>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium h-12 px-8 text-lg">
                Request Early Access
              </Button>
              <Link href="/platform">
                <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 h-12 px-8 text-lg">
                  Read the Vision <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Context Gap Section */}
      <section className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">The Context Gap</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Your CRM records that a 20% discount was applied. It does not record that Finance approved it because the client threatened to leave after a failed onboarding.
                </p>
                <p>
                  That chain of reasoning — the <span className="text-white font-medium italic">context</span> — is the most valuable knowledge in your organization. And it lives nowhere.
                </p>
                <p>
                  Cloud AI services cannot close this gap. The most valuable context is the context you cannot afford to share. Privacy is not a constraint. It is a structural requirement.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-xl"
            >
              <div className="bg-card/90 backdrop-blur-sm p-8 rounded-xl border border-white/5 font-mono text-sm leading-relaxed overflow-hidden">
                <div className="text-xs text-muted-foreground mb-4 uppercase tracking-widest border-b border-white/10 pb-2">The Difference</div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-blue-400" /> Cloud AI
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">×</span> Isolated queries
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">×</span> Amnesiac sessions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400">×</span> Trust the vendor
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Network className="w-4 h-4 text-primary" /> Nexus
                    </h3>
                    <ul className="space-y-3 text-white">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span> Full corpus context
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span> Persistent memory
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">✓</span> Zero data egress
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Nexus Builds */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold mb-6">Search finds documents.<br/>Context graphs find understanding.</h2>
            <p className="text-muted-foreground text-lg">Nexus reads your documents and builds something that did not exist before: a living graph of your organization's context.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 border-white/5 p-8 hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Semantic Search</h3>
              <p className="text-muted-foreground">
                Find knowledge by meaning, not keywords. Ask "how do we handle refunds?" and find the "Subscription Terms" document.
              </p>
            </Card>

            <Card className="bg-card/50 border-white/5 p-8 hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Knowledge Graphs</h3>
              <p className="text-muted-foreground">
                Automatically extract entities and relationships. Products to regulations. Teams to systems. No manual curation.
              </p>
            </Card>

            <Card className="bg-card/50 border-white/5 p-8 hover:bg-card/80 transition-colors">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">Temporal Intelligence</h3>
              <p className="text-muted-foreground">
                Track how knowledge evolves. When did the policy change? What triggered the update? Capture the trajectory.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Edge First CTA */}
      <section className="py-24 border-y border-white/5 relative overflow-hidden">
         <div className="absolute inset-0 bg-blue-900/5 -z-10" />
         <div className="container mx-auto px-6 text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-display font-bold mb-6">Built Edge-First. Deployed Anywhere.</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10">
              From data center GPUs to NVIDIA Jetson Thor at the industrial edge. The same context graph, the same security model, running on your infrastructure.
            </p>
            <Link href="/edge-ai">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
                Explore the Architecture
              </Button>
            </Link>
         </div>
      </section>
    </div>
  );
}
