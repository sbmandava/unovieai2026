import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, 
  Factory, 
  Package, 
  ShieldAlert, 
  Utensils, 
  FlaskConical, 
  Video, 
  ArrowRight,
  Target,
  BarChart,
  ShieldCheck,
  TrendingUp,
  Map,
  Users,
  Settings,
  Lightbulb
} from "lucide-react";

const accelerators = [
  {
    title: "Smart Factory Floor",
    desc: "Automate inspection and quality control on the factory floor.",
    goal: "Reduce inspection errors by 30%, increase production speed by 25%",
    icon: Factory,
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    title: "Smart Warehouse Management",
    desc: "Optimize inventory management and tracking in warehouses.",
    goal: "Reduce stockouts by 20%, increase fill rates by 15%",
    icon: Package,
    color: "text-orange-400",
    bg: "bg-orange-500/10"
  },
  {
    title: "OSHA Compliance Monitoring",
    desc: "AI-powered analytics identify compliance risks and provide alerts.",
    goal: "Reduce OSHA fines by 25%, Increase training completion rates by 30%",
    icon: ShieldAlert,
    color: "text-red-400",
    bg: "bg-red-500/10"
  },
  {
    title: "Food Safety Monitoring",
    desc: "Monitor food safety parameters in real-time.",
    goal: "Reduce contamination incidents by 30%, increase customer satisfaction by 20%",
    icon: Utensils,
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    title: "Batch Process Optimization",
    desc: "Automate optimization of batch processes in chemical and pharma manufacturing.",
    goal: "Increase product quality by 25%, reduce waste by 15%",
    icon: FlaskConical,
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    title: "Remote Expertise Platform",
    desc: "Connect remote experts with teams for real-time guidance.",
    goal: "Increase remote worker productivity by 20%, reduce on-site visits by 30%",
    icon: Video,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  }
];

const methodology = [
  {
    step: "1",
    title: "AI Project Assessment & Planning",
    desc: "Collaborative workshops to understand business requirements, conduct ROI assessments, and identify value outcomes. Seamless transition planning with minimal disruption.",
    icon: Target
  },
  {
    step: "2",
    title: "Customized Solution Design",
    desc: "Tailored AI roadmap with Reference Architecture and Solution Blueprints. Seamless integration with preferred cloud platforms while maintaining technology flexibility.",
    icon: Map
  },
  {
    step: "3",
    title: "Planning & Execution",
    desc: "Rigorous data preparation, model development, and testing. Continuous performance monitoring with transparent stakeholder communication throughout the process.",
    icon: Settings
  },
  {
    step: "4",
    title: "Continuous Optimization",
    desc: "Robust monitoring systems, KPI tracking, and feedback loops. Regular performance reviews and continuous improvement to ensure lasting value and competitive advantage.",
    icon: TrendingUp
  },
  {
    step: "5",
    title: "Training & Support",
    desc: "Modular, hands-on learning experiences with comprehensive knowledge base. Ongoing support to ensure team empowerment and solution adoption.",
    icon: Users
  }
];

const benefits = [
  {
    title: "Improved Efficiency & Productivity",
    desc: "Streamlined AI implementation processes reduce downtime and increase productivity. Expert teams identify optimization opportunities and maximize efficiency gains across operations.",
    icon: BarChart
  },
  {
    title: "Enhanced Decision-Making",
    desc: "Actionable insights from AI models drive business value and enable informed strategic decisions. Data-driven approach improves decision quality across all organizational levels.",
    icon: Lightbulb
  },
  {
    title: "Safety & Compliance",
    desc: "Risk-aware compliance capabilities ensure safe working environments. Reduced accident risks and maintained regulatory adherence protect both people and reputation.",
    icon: ShieldCheck
  },
  {
    title: "Long-Term Value & Edge",
    desc: "Continuous monitoring and optimization ensures sustained effectiveness. Competitive advantage through adaptation to evolving AI advancements and industry best practices.",
    icon: TrendingUp
  }
];

export default function TurnkeyProjects() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-20 overflow-hidden border-b border-border bg-gradient-to-b from-background to-background/80">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Industry 4.0 Edge-AI Platform
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight text-foreground">
              Success-Based <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">AI Project Delivery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              We accept full responsibility for your AI transformation initiatives from Architecture Design through POC and MVP
              to full Production Readiness, all within committed timelines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-lg shadow-lg shadow-primary/20">
                Connect with Our Experts
              </Button>
              <a href="#accelerators">
                <Button variant="outline" size="lg" className="border-border hover:bg-muted h-12 px-8 text-lg text-foreground hover:text-primary">
                  View Solution Accelerators
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 text-center max-w-4xl">
           <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-foreground">End-to-End AI Project Delivery</h2>
           <p className="text-lg text-muted-foreground leading-relaxed">
             From concept to production, we handle every phase with proven methodologies and enterprise-grade execution.
             Our proven solution blueprints and architecture strength guarantees successful execution while providing unparalleled value throughout your innovation journey.
           </p>
        </div>
      </section>

      {/* Accelerators */}
      <section id="accelerators" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Edge AI Solution Accelerators</h2>
            <p className="text-muted-foreground text-lg">
              We enable transformative project execution by leveraging next-generation Agentic AI Innovations.
              Our accelerators deploy proactive, goal-oriented intelligence directly at the edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accelerators.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full p-8 bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group flex flex-col">
                  <div className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{item.desc}</p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 border border-border/50">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Target className="w-3 h-3" /> Goal
                    </p>
                    <p className="text-sm font-medium text-foreground">{item.goal}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Our Proven Delivery Methodology</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive project execution framework ensuring success at every phase
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />
            
            {methodology.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-muted group-hover:border-primary transition-colors flex items-center justify-center mb-6 z-10 shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="text-2xl font-bold">{item.step}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground h-12 flex items-center justify-center">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Business Value & Benefits</h2>
            <p className="text-muted-foreground text-lg">
              Tangible outcomes that drive operational excellence and competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-colors">
                <div className="shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="py-24 border-t border-border bg-primary/5">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-foreground">Ready for Enterprise AI Transformation?</h2>
           <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
             From MVP Design to Productional Operational Readiness, we've got you covered.
           </p>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12 text-left">
             <div className="p-6 bg-background rounded-lg border border-border text-center">
               <h3 className="font-bold text-lg mb-2">Email</h3>
               <p className="text-primary">contact@unovie.ai</p>
             </div>
             <div className="p-6 bg-background rounded-lg border border-border text-center">
               <h3 className="font-bold text-lg mb-2">Phone</h3>
               <p className="text-primary">+1-636-579-9725</p>
             </div>
             <div className="p-6 bg-background rounded-lg border border-border text-center">
               <h3 className="font-bold text-lg mb-2">HQ</h3>
               <p className="text-muted-foreground">Austin, Texas</p>
             </div>
           </div>

           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg">
               Connect with Our Experts
             </Button>
             <Button variant="outline" size="lg" className="h-12 px-8">
               Schedule a Demo
             </Button>
           </div>
        </div>
      </section>
    </div>
  );
}