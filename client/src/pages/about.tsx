import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Shield, 
  Globe, 
  Award, 
  Code, 
  Cpu, 
  Database, 
  Lock, 
  Zap, 
  Cloud,
  Brain,
  BarChart,
  Terminal,
  MapPin,
  Mail,
  Phone,
  Building2,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import aboutHeroImg from "@/assets/images/about-hero.jpg";

export default function About() {
  const stats = [
    { label: "AI Projects", value: "6" },
    { label: "Platform Eng", value: "4" },
    { label: "Data Platforms", value: "3" },
    { label: "Cloud Apps", value: "26" },
    { label: "Mobile Apps", value: "8" },
    { label: "Cloud Migrations", value: "18" },
    { label: "Private Clouds", value: "12" },
    { label: "Satisfaction Rate", value: "95%" },
  ];

  const competencies = [
    { icon: Brain, title: "Machine Learning", desc: "Advanced ML algorithms and models for predictive analytics and automation" },
    { icon: Cpu, title: "Deep Learning", desc: "Neural networks and deep architectures for complex pattern recognition" },
    { icon: Zap, title: "Computer Vision", desc: "Image processing and visual AI for automated inspection and analysis" },
    { icon: Cloud, title: "Cloud Computing", desc: "Scalable cloud infrastructure and deployment solutions" },
    { icon: Lock, title: "Cybersecurity", desc: "Security-first AI solutions with enterprise-grade protection" },
    { icon: BarChart, title: "Industrial IoT Analytics", desc: "Real-time IoT data processing and industrial analytics" },
    { icon: Terminal, title: "Edge AI Development", desc: "Low-latency edge AI solutions for real-time processing" },
    { icon: Database, title: "Data Science", desc: "Advanced data analysis and insights generation" },
    { icon: Code, title: "DevOps", desc: "Continuous integration and deployment for AI applications" },
  ];

  const values = [
    { 
      icon: Zap, 
      title: "Innovation", 
      desc: "Pushing boundaries in Industry 4.0 with cutting-edge AI solutions that transform how businesses operate and compete in the digital age." 
    },
    { 
      icon: Users, 
      title: "Collaboration", 
      desc: "Building strong relationships with our clients and partners, working together to achieve shared goals and create lasting value through teamwork." 
    },
    { 
      icon: Shield, 
      title: "Integrity", 
      desc: "Maintaining high ethical standards in all our business practices, ensuring transparency, honesty, and accountability in every project we undertake." 
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center pt-32 overflow-hidden border-b border-border">
        <div className="container mx-auto px-6 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Engineering Excellence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 leading-tight text-foreground">
                Our Engineering <span className="text-gradient">DNA</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Turnkey AI Project delivery with a proven track record of excellence. We combine deep technical expertise with
                industry knowledge to deliver transformative AI solutions that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 shadow-lg">
                  Meet Our Team
                </Button>
                <Button variant="outline" size="lg" className="h-12 px-8">
                  View Our Achievements
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
            >
              <img src={aboutHeroImg} alt="About Unovie" className="w-full h-auto object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Our Impact in Numbers</h2>
            <p className="text-muted-foreground text-lg">
              Proven track record of delivering successful AI projects across various industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Core Competencies</h2>
            <p className="text-muted-foreground text-lg">
              Our expertise spans the full spectrum of AI and modern technologies
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {competencies.map((item, i) => (
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

      {/* Values */}
      <section className="py-24 bg-black/5 dark:bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-display font-bold mb-6 text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Locations */}
      <section className="py-24" id="achievements">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Our Achievements</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" /> Strategic Partnerships
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Siemens", "GE Digital", "NVIDIA", "Qualcomm"].map((partner) => (
                    <div key={partner} className="p-4 bg-muted/30 rounded-lg border border-border text-center font-bold text-foreground">
                      {partner}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" /> Customer Success
                </h3>
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="font-medium text-foreground mb-2">Customer Satisfaction Rate</div>
                  <p className="text-sm text-muted-foreground">
                    Our commitment to excellence has resulted in outstanding customer satisfaction and long-term partnerships.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" /> Industry Recognition
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-bold text-foreground">Best AI Innovation Award</div>
                      <div className="text-sm text-muted-foreground">Industry 4.0 Excellence Awards 2023</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-bold text-foreground">Excellence in Edge Computing</div>
                      <div className="text-sm text-muted-foreground">Technology Innovation Summit 2023</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div>
                      <div className="font-bold text-foreground">Top AI Solutions Provider</div>
                      <div className="text-sm text-muted-foreground">Enterprise Tech Awards 2022</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Our Locations</h2>
              <div className="space-y-8">
                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">Headquarters</h3>
                      <p className="font-medium text-primary mb-2">Austin, Texas</p>
                      <p className="text-sm text-muted-foreground mb-4">651N N.Highway-183, Suite #4120, Austin, TX 78641</p>
                      <p className="text-sm text-muted-foreground">Our main office driving innovation and strategic direction.</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">Offshore Development</h3>
                      <p className="font-medium text-primary mb-2">Trivandrum, India</p>
                      <p className="text-sm text-muted-foreground">Our offshore development center delivering world-class engineering solutions.</p>
                    </div>
                  </div>
                </Card>

                <div className="mt-12 p-8 bg-muted/30 rounded-xl border border-border" id="contact">
                  <h3 className="text-xl font-bold mb-6 text-foreground">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">info@unovie.ai</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">+1-636-579-9725</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Austin, Texas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}