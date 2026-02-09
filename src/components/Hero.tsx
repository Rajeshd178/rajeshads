import { motion } from "framer-motion";

const Hero = () => (
  <section className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
    {/* Background glow */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
    </div>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10"
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
        Chanakya University · Minor in Marketing & Advertising Management
      </p>

      <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
        <span className="text-gradient-gold">Advertising</span>
        <br />
        <span className="text-foreground">Journal</span>
      </h1>

      <div className="mx-auto mt-8 w-16 section-divider" />

      <p className="mt-6 font-display text-xl italic text-muted-foreground md:text-2xl">
        by Rajesh Thami D
      </p>

      <p className="mt-2 text-sm text-text-dim">
        Submission Date: 10-02-2026
      </p>
    </motion.div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="h-8 w-5 rounded-full border-2 border-primary/40 flex items-start justify-center pt-1.5"
      >
        <div className="h-1.5 w-1 rounded-full bg-primary" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
