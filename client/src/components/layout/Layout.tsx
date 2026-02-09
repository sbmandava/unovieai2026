import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, Laptop } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import logoImg from "@/assets/images/unovie-logo.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { setTheme } = useTheme();

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
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/20 transition-colors duration-300">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 grid-bg opacity-40 pointer-events-none" />

      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-border" : "bg-transparent py-6 border-transparent"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <img src={logoImg} alt="Unovie Logo" className="h-8 w-auto object-contain" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary font-bold" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 h-9 text-muted-foreground hover:text-primary">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-sm">
              Request Access
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 h-[calc(100vh-80px)] bg-background/95 backdrop-blur-xl border-t border-border p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top-5 z-40">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a
                      className={cn(
                        "text-2xl font-display font-bold transition-colors hover:text-primary",
                        location === link.href ? "text-primary" : "text-muted-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="h-px bg-border my-2" />
              <div className="flex flex-col gap-4 mt-auto pb-8">
                 <div className="flex items-center justify-between px-2">
                    <span className="text-muted-foreground">Theme</span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="icon" onClick={() => setTheme("light")}><Sun className="w-4 h-4" /></Button>
                      <Button variant="outline" size="icon" onClick={() => setTheme("dark")}><Moon className="w-4 h-4" /></Button>
                      <Button variant="outline" size="icon" onClick={() => setTheme("system")}><Laptop className="w-4 h-4" /></Button>
                    </div>
                 </div>
                <Button variant="outline" className="w-full h-12 text-lg">
                  Sign In
                </Button>
                <Button className="w-full h-12 text-lg">
                  Request Access
                </Button>
              </div>
            </div>
          )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-24 z-10 relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 backdrop-blur-sm z-10 relative">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                 <img src={logoImg} alt="Unovie Logo" className="h-8 w-auto object-contain" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The context platform from Unovie. Building business context graphs that capture not just what your organization knows, but why decisions were made.
              </p>
            </div>
            
            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/platform"><a className="hover:text-primary transition-colors">Platform</a></Link></li>
                <li><Link href="/edge-ai"><a className="hover:text-primary transition-colors">Edge AI</a></Link></li>
                <li><Link href="/physical-ai"><a className="hover:text-primary transition-colors">Physical AI</a></Link></li>
                <li><Link href="/security"><a className="hover:text-primary transition-colors">Security</a></Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/use-cases"><a className="hover:text-primary transition-colors">Use Cases</a></Link></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Unovie Inc. All rights reserved.</p>
            <p>Designed with Nexus Context Engine.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
