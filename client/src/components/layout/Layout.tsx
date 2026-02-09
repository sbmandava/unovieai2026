import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Cpu, Shield, Network, Layers, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/platform", label: "Platform" },
    { href: "/edge-ai", label: "Edge AI" },
    { href: "/physical-ai", label: "Physical AI" },
    { href: "/security", label: "Security" },
    { href: "/use-cases", label: "Use Cases" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 grid-bg opacity-20 pointer-events-none" />

      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
          isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white text-black flex items-center justify-center rounded-sm font-display font-bold text-xl group-hover:scale-105 transition-transform">
                N
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">Nexus</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-white",
                    location === link.href ? "text-white" : "text-white/60"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 font-medium">
              Request Access
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className="text-lg font-medium text-white/80 hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="h-px bg-white/10 my-2" />
            <Button className="w-full bg-white text-black hover:bg-white/90">
              Request Access
            </Button>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 z-10 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-sm z-10 relative">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm font-display font-bold text-sm">
                  N
                </div>
                <span className="font-display font-bold text-lg text-white">Nexus</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The context platform from Unovie. Building business context graphs that capture not just what your organization knows, but why decisions were made.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/platform"><a className="hover:text-white transition-colors">Platform</a></Link></li>
                <li><Link href="/edge-ai"><a className="hover:text-white transition-colors">Edge AI</a></Link></li>
                <li><Link href="/physical-ai"><a className="hover:text-white transition-colors">Physical AI</a></Link></li>
                <li><Link href="/security"><a className="hover:text-white transition-colors">Security</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/use-cases"><a className="hover:text-white transition-colors">Use Cases</a></Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Unovie Inc. All rights reserved.</p>
            <p>Designed with Nexus Context Engine.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
