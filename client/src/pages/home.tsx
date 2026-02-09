import { motion } from "framer-motion";
import { ArrowRight, Cpu, Anchor, Factory, MonitorPlay, Zap, ShieldCheck, Activity, Search, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import maritimeImg from "@/assets/images/maritime-tanker.png";
import factoryImg from "@/assets/images/smart-factory.png";
import mediaImg from "@/assets/images/media-streaming.png";

export default function Home() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract shapes/glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Industry 4.0 Edge-AI Platform
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8 leading-tight text-foreground">
              Accelerated Agentic Digital Twins for <br />
              <span className="text-gradient">Real-Time Edge Automation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Leveraging NVIDIA and AMD Edge GPU technology, our solutions power advanced AI World Models and Complex Vision systems. 
              We deliver low-latency, real-time decision-making through Streaming ML/DL Sensor Analytics.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium h-12 px-8 text-lg shadow-lg shadow-primary/20">
                Schedule a Demo
              </Button>
              <Link href="/platform">
                <Button variant="outline" size="lg" className="border-border hover:bg-muted h-12 px-8 text-lg text-foreground hover:text-primary">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">767</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Maritime Ships Using AI</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">91%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Customer Satisfaction</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-4"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">23</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">AI Projects Delivered</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Industries Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Transforming Industries at the Edge</h2>
            <p className="text-muted-foreground text-lg">Knowledge Graphs and Edge AI tailored for mission-critical operations.</p>
          </div>

          <div className="space-y-24">
            {/* Maritime */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm tracking-widest uppercase">
                  <Anchor className="w-4 h-4" /> Maritime Safety
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-foreground">AI-Powered Maritime Safety Systems</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Knowledge Graphs and Edge AI transforming oil tanker operations with real-time safety monitoring and predictive risk assessment.
                </p>
                <Link href="/use-cases/maritime">
                  <Button variant="outline">Explore Maritime Solutions</Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 relative rounded-xl overflow-hidden border border-border bg-card shadow-xl group"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                <img src={maritimeImg} alt="Maritime Safety" className="w-full h-auto" />
              </motion.div>
            </div>

            {/* Manufacturing */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden border border-border bg-card shadow-xl group"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                <img src={factoryImg} alt="Smart Manufacturing" className="w-full h-auto" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm tracking-widest uppercase">
                  <Factory className="w-4 h-4" /> Smart Manufacturing
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-foreground">Intelligent Factory Automation</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Advanced robotics with real-time video analytics and logistics optimization for next-generation manufacturing facilities.
                </p>
                <Link href="/use-cases/manufacturing">
                  <Button variant="outline">Explore Factory Solutions</Button>
                </Link>
              </motion.div>
            </div>

            {/* Media */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm tracking-widest uppercase">
                  <MonitorPlay className="w-4 h-4" /> Media Technology
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 text-foreground">Edge Video Analytics for Streaming</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Knowledge Graph-powered video content analysis and quality optimization for OTT streaming platforms.
                </p>
                <Link href="/use-cases/media">
                  <Button variant="outline">Explore Media Solutions</Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 relative rounded-xl overflow-hidden border border-border bg-card shadow-xl group"
              >
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500" />
                <img src={mediaImg} alt="Media Technology" className="w-full h-auto" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Accelerators */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Edge AI Solution Accelerators</h2>
            <p className="text-muted-foreground text-lg">
              We enable transformative project execution by leveraging next-generation Agentic AI Innovations. 
              Our accelerators deploy proactive, goal-oriented intelligence directly at the edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Predictive Maintenance", desc: "Predict equipment failures before they occur, reducing downtime by up to 45%." },
              { icon: Search, title: "Real-Time Quality Control", desc: "Computer vision inspects products with 99.7% accuracy in real-time." },
              { icon: Activity, title: "Smart Supply Chain", desc: "Blockchain and predictive analytics optimize inventory and improve resilience." },
              { icon: Cpu, title: "Process Optimization", desc: "AI-driven models provide actionable optimization recommendations, improving efficiency by 25%." },
              { icon: ShieldCheck, title: "Cybersecurity Detection", desc: "Deep learning anomaly detection identifies and responds to threats in real-time." },
              { icon: Server, title: "IoT Data Analytics", desc: "Transform industrial IoT sensor data into actionable insights and predictive analytics." },
            ].map((item, i) => (
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

      {/* GPU Platform Teaser */}
      <section className="py-24">
         <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Cpu className="w-4 h-4" /> GPU Powered
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">Ready to Transform Your Operations?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
              Join the 68% of leading manufacturers who have implemented AI solutions for enhanced operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8">
                Contact Experts
              </Button>
            </div>
         </div>
      </section>
    </div>
  );
}
