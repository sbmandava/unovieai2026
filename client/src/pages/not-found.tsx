import { motion } from "framer-motion";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-9xl font-display font-bold text-white/10 mb-4"
      >
        404
      </motion.h1>
      <h2 className="text-3xl font-display font-bold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The context you are looking for does not exist in the graph. It may have been moved, deleted, or never ingested.
      </p>
      <Link href="/">
        <a className="bg-white text-black px-8 py-3 rounded-sm hover:bg-white/90 font-medium transition-colors">
          Return Home
        </a>
      </Link>
    </div>
  );
}
