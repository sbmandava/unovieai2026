import { motion } from "framer-motion";
import edgeDeviceImg from "@/assets/images/unovie-edge-device.png";
import edgePortsImg from "@/assets/images/unovie-edge-ports.png";
import edgeCamerasImg from "@/assets/images/unovie-edge-cameras.png";
import edgeDeployment1Img from "@/assets/images/unovie-edge-deployment-1.png";
import edgeDeployment2Img from "@/assets/images/unovie-edge-deployment-2.png";
import healthcareImg from "@/assets/images/healthcare-flow.png";
import manufacturingImg from "@/assets/images/manufacturing-flow.png";
import maritimeImg from "@/assets/images/maritime-flow.png";
import CodeBlock from "@/components/ui/CodeBlock";
import { Cpu, Activity, Truck, Anchor, Zap, Box, Layers, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PhysicalAI() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
           <div className="flex items-center gap-3 text-primary mb-4 font-mono text-sm tracking-widest uppercase">
              <Cpu className="w-4 h-4" /> Physical AI
           </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-8">
             Context graphs at the <span className="text-gradient">industrial edge.</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            Delivered today on Unovie Intelligent Edge. Scaling tomorrow on NVIDIA IGX. For environments where the context graph must be physically present.
          </p>
        </motion.div>
      </section>

      <section className="py-12 bg-black/20">
         <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-3xl font-display font-bold mb-6">Unovie Intelligent Edge</h2>
                 <p className="text-muted-foreground mb-8">
                   The most powerful edge AI module ever built. A Blackwell GPU with 128 GB of memory in a 130-watt power envelope.
                 </p>
                 <div className="grid grid-cols-2 gap-6">
                    <div>
                       <div className="text-2xl font-bold text-white mb-1">2,070</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest">FP4 TFLOPS</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-white mb-1">128 GB</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest">Memory</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-white mb-1">130W</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest">Power</div>
                    </div>
                    <div>
                       <div className="text-2xl font-bold text-white mb-1">32</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-widest">Camera Inputs</div>
                    </div>
                 </div>
              </div>
              <div>
                 <Tabs defaultValue="device" className="w-full">
                   <TabsList className="grid w-full grid-cols-3 mb-4">
                     <TabsTrigger value="device">Device</TabsTrigger>
                     <TabsTrigger value="ports">Specs</TabsTrigger>
                     <TabsTrigger value="deployment">Deployment</TabsTrigger>
                   </TabsList>
                   <TabsContent value="device">
                     <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl aspect-video flex items-center justify-center p-4">
                        <img src={edgeDeviceImg} alt="Unovie Edge Device" className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" />
                     </div>
                   </TabsContent>
                   <TabsContent value="ports">
                     <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl aspect-video flex items-center justify-center p-4">
                        <img src={edgePortsImg} alt="Unovie Edge Ports" className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" />
                     </div>
                   </TabsContent>
                   <TabsContent value="deployment">
                     <div className="grid gap-4">
                       <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl aspect-video flex items-center justify-center p-4">
                          <img src={edgeCamerasImg} alt="Unovie Edge Deployment Camera" className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" />
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                         <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl aspect-video flex items-center justify-center p-4">
                            <img src={edgeDeployment1Img} alt="Unovie Edge Factory Deployment" className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" />
                         </div>
                         <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-xl aspect-video flex items-center justify-center p-4">
                            <img src={edgeDeployment2Img} alt="Unovie Edge Robotics Deployment" className="w-full h-full object-contain hover:scale-[1.02] transition-transform duration-500" />
                         </div>
                       </div>
                     </div>
                   </TabsContent>
                 </Tabs>
              </div>
           </div>
         </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-display font-bold mb-12">Industry Applications</h2>
           
           <div className="grid lg:grid-cols-3 gap-8">
              {/* Healthcare */}
              <Card className="bg-card/40 border-white/5 p-8 hover:bg-card/60 transition-colors group">
                 <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Activity className="w-6 h-6 text-red-400" />
                 </div>
                 <h3 className="text-xl font-display font-bold mb-4">Healthcare</h3>
                 <p className="text-sm text-muted-foreground mb-6">
                   Medical imaging systems must reason against patient history without data leaving the hospital.
                 </p>
                 <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-lg mt-4">
                    <img src={healthcareImg} alt="Healthcare Flow" className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
                 </div>
              </Card>

              {/* Manufacturing */}
              <Card className="bg-card/40 border-white/5 p-8 hover:bg-card/60 transition-colors group">
                 <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Truck className="w-6 h-6 text-yellow-400" />
                 </div>
                 <h3 className="text-xl font-display font-bold mb-4">Manufacturing</h3>
                 <p className="text-sm text-muted-foreground mb-6">
                   Predictive maintenance correlating vibration sensors against years of equipment history.
                 </p>
                 <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-lg mt-4">
                    <img src={manufacturingImg} alt="Manufacturing Flow" className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
                 </div>
              </Card>

              {/* Maritime */}
              <Card className="bg-card/40 border-white/5 p-8 hover:bg-card/60 transition-colors group">
                 <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                    <Anchor className="w-6 h-6 text-blue-400" />
                 </div>
                 <h3 className="text-xl font-display font-bold mb-4">Maritime</h3>
                 <p className="text-sm text-muted-foreground mb-6">
                   Autonomous inspection at sea. Reasoning against operational history with no cloud fallback.
                 </p>
                 <div className="relative rounded-lg overflow-hidden border border-border bg-card shadow-lg mt-4">
                    <img src={maritimeImg} alt="Maritime Flow" className="w-full h-auto hover:scale-[1.02] transition-transform duration-500" />
                 </div>
              </Card>
           </div>
        </div>
      </section>
    </div>
  );
}
