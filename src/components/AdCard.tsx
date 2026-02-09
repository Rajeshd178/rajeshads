import { motion } from "framer-motion";
import { Users, MessageSquare, Eye, MousePointerClick, Radio, Star } from "lucide-react";

interface AdCardProps {
  index: number;
  brand: string;
  title: string;
  image: string;
  targetAudience: string;
  message: string;
  visualElements: string;
  cta: string;
  relevance: string;
  celebrity: string;
}

const AdCard = ({
  index,
  brand,
  title,
  image,
  targetAudience,
  message,
  visualElements,
  cta,
  relevance,
  celebrity,
}: AdCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-500 hover:glow-gold hover:border-primary/30"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${brand} advertisement`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block rounded-sm bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
            {brand}
          </span>
          <h3 className="mt-2 font-display text-xl font-bold leading-tight text-foreground md:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      {/* Analysis */}
      <div className="space-y-4 p-5 md:p-6">
        <AnalysisItem icon={Users} label="Target Audience" text={targetAudience} />
        <AnalysisItem icon={MessageSquare} label="Message" text={message} />
        <AnalysisItem icon={Eye} label="Visual Elements" text={visualElements} />
        <AnalysisItem icon={MousePointerClick} label="Call to Action" text={cta} />
        <AnalysisItem icon={Radio} label="Relevance of Medium" text={relevance} />
        <AnalysisItem icon={Star} label="Celebrity Endorsement" text={celebrity} />
      </div>
    </motion.article>
  );
};

const AnalysisItem = ({
  icon: Icon,
  label,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  text: string;
}) => (
  <div>
    <div className="mb-1 flex items-center gap-2">
      <Icon className="h-3.5 w-3.5 text-primary" />
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{label}</span>
    </div>
    <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
  </div>
);

export default AdCard;
