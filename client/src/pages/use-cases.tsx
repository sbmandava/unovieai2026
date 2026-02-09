import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { ArrowRight, Building, Code, Briefcase, Video, Ship, Hotel, Rocket } from "lucide-react";

const cases = [
  {
    icon: Building,
    title: "Enterprise Compliance",
    slug: "enterprise-compliance",
    desc: "Trace regulatory changes through internal policies. Understand not just what shifted, but who approved it and why.",
    color: "text-blue-400",
    bg: "bg-blue-500/10"
  },
  {
    icon: Code,
    title: "Technical Documentation",
    slug: "technical-documentation",
    desc: "Map hidden dependencies across APIs and services. Nexus builds the institutional knowledge that usually lives in senior engineers' heads.",
    color: "text-green-400",
    bg: "bg-green-500/10"
  },
  {
    icon: Briefcase,
    title: "M&A Due Diligence",
    slug: "ma-due-diligence",
    desc: "Map corporate structure and contract relationships from thousands of documents without data ever touching a cloud server.",
    color: "text-purple-400",
    bg: "bg-purple-500/10"
  },
  {
    icon: Video,
    title: "OTT Platforms",
    slug: "ott-platforms",
    desc: "Connect viewing analytics to editorial strategy. Understand why content decisions were made and their business outcomes.",
    color: "text-red-400",
    bg: "bg-red-500/10"
  },
  {
    icon: Ship,
    title: "Maritime",
    slug: "maritime",
    desc: "Autonomous inspection at sea. The vessel carries its own context graph, reasoning against accumulated history without shore connectivity.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10"
  },
  {
    icon: Hotel,
    title: "Hospitality",
    slug: "hospitality",
    desc: "Personalized guest experience at scale. Connect content performance to property profiles across hundreds of locations.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10"
  },
  {
    icon: Rocket,
    title: "Startups",
    slug: "startups",
    desc: "Privacy-first customer support AI. An automated product knowledge graph that deepens as your startup grows.",
    color: "text-orange-400",
    bg: "bg-orange-500/10"
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
            The context gap is <span className="text-gradient">universal.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            How organizations close it with Nexus depends on what they need to understand.
          </p>
        </motion.div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-card/40 border-white/5 p-8 hover:bg-card/60 transition-colors group flex flex-col">
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {item.desc}
                  </p>
                  <Link href={`/use-cases/${item.slug}`}>
                    <a className="text-xs font-bold text-white flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer">
                      Read Scenario <ArrowRight className="w-3 h-3" />
                    </a>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-24 border-t border-white/5 mt-12">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-display font-bold mb-8">Ready to close the gap?</h2>
           <Link href="/">
             <a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-bold rounded-sm hover:bg-white/90 transition-colors">
               Request Early Access
             </a>
           </Link>
        </div>
      </section>
    </div>
  );
}
