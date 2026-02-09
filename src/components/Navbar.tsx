import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md"
  >
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
      <span className="font-display text-lg font-bold text-gradient-gold">AJ</span>
      <div className="flex gap-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
        <a href="#print" className="transition-colors hover:text-primary">Print</a>
        <a href="#tv" className="transition-colors hover:text-primary">TV</a>
        <a href="#social" className="transition-colors hover:text-primary">Social</a>
        <a href="#outdoor" className="transition-colors hover:text-primary">Outdoor</a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
