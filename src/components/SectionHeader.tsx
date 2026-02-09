import { motion } from "framer-motion";

interface SectionHeaderProps {
  emoji: string;
  title: string;
  subtitle: string;
}

const SectionHeader = ({ emoji, title, subtitle }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="mb-12 text-center"
  >
    <span className="text-4xl">{emoji}</span>
    <h2 className="mt-3 font-display text-3xl font-bold text-gradient-gold md:text-4xl lg:text-5xl">
      {title}
    </h2>
    <p className="mt-2 text-sm tracking-widest uppercase text-muted-foreground">{subtitle}</p>
    <div className="mx-auto mt-6 w-24 section-divider" />
  </motion.div>
);

export default SectionHeader;
