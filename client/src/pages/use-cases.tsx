import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { ArrowRight, Anchor, Factory, MonitorPlay, Zap, Search, Activity, Cpu, ShieldCheck, Server } from "lucide-react";

const industries = [
  {
    icon: Anchor,
    title: "Maritime Safety",
    slug: "maritime",
    desc: "AI-Powered Maritime Safety Systems. Knowledge Graphs and Edge AI transforming oil tanker operations with real-time safety monitoring and predictive risk assessment.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    icon: Factory,
    title: "Smart Manufacturing",
    slug: "manufacturing",
    desc: "Intelligent Factory Automation. Advanced robotics with real-time video analytics and logistics optimization for next-generation manufacturing facilities.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  },
  {
    icon: MonitorPlay,
    title: "Media Technology",
    slug: "media",
    desc: "Edge Video Analytics for Streaming. Knowledge Graph-powered video content analysis and quality optimization for OTT streaming platforms.",
    color: "text-red-400",
    bg: "bg-red-500/10"
  }
];

const accelerators = [
  {
    icon: Zap,
    title: "Predictive Maintenance",
    desc: "Advanced machine learning algorithms predict equipment failures before they occur, reducing downtime by up to 45% and increasing overall equipment effectiveness."
  },
  {
    icon: Search,
    title: "Real-Time Quality Control",
    desc: "Computer vision and generative AI inspect products with 99.7% accuracy in real-time, detecting defects instantly before they reach production lines."
  },
  {
    icon: Activity,
    title: "Smart Supply Chain",
    desc: "Blockchain integration and predictive analytics optimize inventory management, reduce lead times by 30%, and improve supply chain resilience."
  },
  {
    icon: Cpu,
    title: "Process Optimization",
    desc: "AI-driven models analyze process data and provide actionable optimization recommendations, improving efficiency by 25% and reducing waste."
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity Detection",
    desc: "Deep learning anomaly detection identifies and responds to cyber threats in real-time, protecting critical infrastructure with 24/7 monitoring."
  },
  {
    icon: Server,
    title: "IoT Data Analytics",
    desc: "Transform industrial IoT sensor data into actionable insights, enabling informed decision-making and predictive analytics across operations."
  }
];

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
            Transforming Industries <br/><span className="text-gradient">at the Edge</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Knowledge Graphs and Edge AI tailored for mission-critical operations.
          </p>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-12 text-foreground">Core Industries</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {industries.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-card border-border p-8 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group flex flex-col">
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  <Link href={`/use-cases/${item.slug}`}>
                    <a className="text-xs font-bold text-foreground flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer group-hover:text-primary">
                      Read Scenario <ArrowRight className="w-3 h-3" />
                    </a>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-display font-bold mb-12 text-foreground">Solution Accelerators</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accelerators.map((item, i) => (
              <Card key={i} className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            ))}
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
