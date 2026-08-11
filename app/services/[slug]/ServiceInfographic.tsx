"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, type LucideIcon } from "lucide-react";
import type { InfographicStep } from "@/data/services";
import styles from "./ServiceInfographic.module.scss";

interface ServiceInfographicProps {
  steps: InfographicStep[];
  title: string;
  subtitle: string;
}

export default function ServiceInfographic({ steps, title, subtitle }: ServiceInfographicProps) {
  return (
    <div className={styles.infographic}>
      <div className={styles.infographicHeading}><span>Integrated delivery</span><h3>{title}</h3><p>{subtitle}</p></div>
      <div className={styles.flow}>
        {steps.map((step, index) => {
          const Icon = (Icons[step.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Circle;
          return <motion.div key={step.label} className={styles.flowStep} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.45, delay: index * 0.1 }}><div className={styles.stepTop}><span>{String(index + 1).padStart(2, "0")}</span><div className={styles.stepIcon}><Icon size={24} strokeWidth={1.8} /></div></div><h4>{step.label}</h4><p>{step.description}</p>{index < steps.length - 1 && <ArrowRight className={styles.connector} size={20} />}</motion.div>;
        })}
      </div>
    </div>
  );
}
