import { motion } from "framer-motion";

export default function Toast({ message }) {
  return (
    <motion.div
      className="toast"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      🔔 {message}
    </motion.div>
  );
}
