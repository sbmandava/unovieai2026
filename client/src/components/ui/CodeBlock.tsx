import { cn } from "@/lib/utils";

interface CodeBlockProps {
  children: string;
  className?: string;
  language?: string;
}

export default function CodeBlock({ children, className, language = "text" }: CodeBlockProps) {
  return (
    <div className={cn("relative rounded-lg overflow-hidden bg-muted/50 border border-border my-8 font-mono text-sm leading-relaxed shadow-lg shadow-primary/5", className)}>
      <div className="absolute top-0 left-0 right-0 h-8 bg-muted border-b border-border flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        {language && <span className="ml-auto text-xs text-muted-foreground uppercase">{language}</span>}
      </div>
      <pre className="p-6 pt-12 overflow-x-auto bg-card text-foreground">
        <code>{children}</code>
      </pre>
    </div>
  );
}
