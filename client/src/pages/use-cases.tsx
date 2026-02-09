import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { ArrowRight, Anchor, Factory, MonitorPlay, ShieldCheck, FileText, Briefcase, Rocket, Building2 } from "lucide-react";
import { useCaseData } from "@/data/use-cases-data";

// Map slugs to icons and colors
const useCaseConfig: Record<string, { icon: any, color: string, bg: string }> = {
  "maritime": {
    icon: Anchor,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  "enterprise-compliance": {
    icon: ShieldCheck,
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  "technical-documentation": {
    icon: FileText,
    color: "text-slate-400",
    bg: "bg-slate-500/10"
  },
  "ma-due-diligence": {
    icon: Briefcase,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  "ott-platforms": {
    icon: MonitorPlay,
    color: "text-red-400",
    bg: "bg-red-500/10"
  },
  "hospitality": {
    icon: Building2,
    color: "text-orange-400",
    bg: "bg-orange-500/10"
  },
  "startups": {
    icon: Rocket,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  }
};

export default function UseCases() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8 text-foreground">
            Transforming Industries <br/><span className="text-gradient">with Context</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Real-world applications of Knowledge Graphs and Edge AI across sectors.
          </p>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {Object.entries(useCaseData).map(([slug, data], i) => {
              const config = useCaseConfig[slug] || { 
                icon: Factory, 
                color: "text-primary", 
                bg: "bg-primary/10" 
              };
              const Icon = config.icon;
              
              return (
                <motion.div
                  key={slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full bg-card border-border p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group flex flex-col">
                    <div className={`w-12 h-12 ${config.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${config.color}`} />
                    </div>
                    <h3 className="text-xl font-display font-bold mb-2 text-foreground">{data.title}</h3>
                    <p className="text-xs font-mono text-primary mb-4">{data.subtitle}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow line-clamp-3">
                      {data.challenge}
                    </p>
                    <Link href={`/use-cases/${slug}`}>
                      <a className="text-xs font-bold text-foreground flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer group-hover:text-primary">
                        Read Scenario <ArrowRight className="w-3 h-3" />
                      </a>
                    </Link>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-24 border-t border-border mt-12">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Ready to Transform Your Operations?</h2>
           <Link href="/">
             <a className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
               Schedule a Demo
             </a>
           </Link>
        </div>
      </section>
    </div>
  );
}
