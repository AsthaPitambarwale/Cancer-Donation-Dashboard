import { motion } from "framer-motion";

export default function KPI({ label, value }) {
  return (
    <motion.div
      className="kpi"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <span>{label}</span>
      <strong>{value}</strong>
    </motion.div>
  );
}
