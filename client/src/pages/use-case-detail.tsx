import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { useCaseData } from "@/data/use-cases-data";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import CodeBlock from "@/components/ui/CodeBlock";

export default function UseCaseDetail() {
  const [match, params] = useRoute("/use-cases/:slug");
  
  if (!match || !params?.slug || !useCaseData[params.slug as keyof typeof useCaseData]) {
    return (
      <div className="pt-32 container mx-auto px-6 text-center">
        <h1 className="text-2xl font-bold">Use Case Not Found</h1>
        <Link href="/use-cases">
          <a className="text-primary mt-4 inline-block hover:underline">Back to Use Cases</a>
        </Link>
      </div>
    );
  }

  const data = useCaseData[params.slug as keyof typeof useCaseData];

  return (
    <div className="pb-20">
      <section className="pt-32 pb-12 container mx-auto px-6">
        <Link href="/use-cases">
          <a className="inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Use Cases
          </a>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {data.title}
            </h1>
            <p className="text-xl text-primary mb-8 font-mono tracking-wide">
              {data.subtitle}
            </p>
            
            <div className="prose prose-invert max-w-none">
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">The Context Gap</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {data.challenge}
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">How Nexus Closes It</h3>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {data.solution}
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-6 space-y-6">
                  {data.examples.map((ex, i) => (
                    <div key={i} className="border-l-2 border-primary/50 pl-4">
                      <p className="font-bold text-white mb-1">"{ex.question}"</p>
                      <p className="text-sm text-muted-foreground">{ex.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Key Capabilities</h3>
                <div className="flex flex-wrap gap-3">
                  {data.capabilities.map((cap) => (
                    <span key={cap} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm font-medium">
                      {cap}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 space-y-8">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <img 
                 src={data.image} 
                 alt={`${data.title} Scenario Diagram`} 
                 className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" 
               />
            </div>
            
            <div className="bg-card/40 border border-border p-8 rounded-lg shadow-sm">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                Outcome
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {data.conclusion}
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
