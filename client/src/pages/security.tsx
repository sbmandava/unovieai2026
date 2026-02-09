import { motion } from "framer-motion";
import securityArchImg from "@/assets/images/ockam-security-architecture.png";
import { Shield, Lock, FileKey, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Security() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
           <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm tracking-widest uppercase">
              <Shield className="w-4 h-4" /> Privacy & Security
           </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
             Privacy is not a feature.<br/> <span className="text-gradient">It is structural.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Closing the context gap requires processing data where it lives. Not as a compliance concession, but as the foundational architecture.
          </p>
        </motion.div>
      </section>

      <section className="py-12 bg-slate-50/50">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-display font-bold mb-12 text-center text-foreground">Defense in Depth</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl">
                 <img src={securityArchImg} alt="Security Architecture Diagram" className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
              </div>
            </div>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h2 className="text-3xl font-display font-bold mb-6">Zero-Trust Encryption</h2>
                  <p className="text-muted-foreground mb-8">
                     Data is encrypted end-to-end from the edge proxy to the backend. This is not TLS termination — it is cryptographic channel encryption.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center gap-4 p-4 bg-card/40 border border-white/5 rounded-lg">
                        <Lock className="w-5 h-5 text-primary" />
                        <div>
                           <h4 className="font-bold text-white">Noise XX Protocol</h4>
                           <p className="text-xs text-muted-foreground">Mutual authentication with Curve25519</p>
                        </div>
                     </li>
                     <li className="flex items-center gap-4 p-4 bg-card/40 border border-white/5 rounded-lg">
                        <FileKey className="w-5 h-5 text-primary" />
                        <div>
                           <h4 className="font-bold text-white">AES-256-GCM</h4>
                           <p className="text-xs text-muted-foreground">Per-session encryption keys</p>
                        </div>
                     </li>
                     <li className="flex items-center gap-4 p-4 bg-card/40 border border-white/5 rounded-lg">
                        <Eye className="w-5 h-5 text-primary" />
                        <div>
                           <h4 className="font-bold text-white">No Relay</h4>
                           <p className="text-xs text-muted-foreground">Direct peer-to-peer connections</p>
                        </div>
                     </li>
                  </ul>
               </div>
               <div>
                  <h2 className="text-3xl font-display font-bold mb-6">Compliance</h2>
                  <p className="text-muted-foreground mb-8">
                     Nexus is architected for regulated environments.
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                     <div className="p-4 border-l-2 border-primary bg-card/20">
                        <h4 className="font-bold text-white mb-1">DoD / IL4-IL5</h4>
                        <p className="text-sm text-muted-foreground">Air-gapped deployment, data residency, encryption at rest.</p>
                     </div>
                     <div className="p-4 border-l-2 border-primary bg-card/20">
                        <h4 className="font-bold text-white mb-1">FDA 21 CFR Part 11</h4>
                        <p className="text-sm text-muted-foreground">Audit logging, electronic signatures, data integrity.</p>
                     </div>
                     <div className="p-4 border-l-2 border-primary bg-card/20">
                        <h4 className="font-bold text-white mb-1">NERC CIP</h4>
                        <p className="text-sm text-muted-foreground">Network segmentation, access management, incident response.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
