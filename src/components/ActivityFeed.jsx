import { motion } from "framer-motion";

export default function ActivityFeed({ donations }) {
  const recent = donations.slice(-7).reverse();
    return (
    <div className="panel feed">
      <h2>Recent Activity</h2>

      {recent.map((d, i) => (
        <motion.div
          key={i}
          className="feed-item"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span>{d.name}</span>
          <strong>₹{d.amount}</strong>
          <small>{d.time}</small>
        </motion.div>
      ))}
    </div>
  );
}
