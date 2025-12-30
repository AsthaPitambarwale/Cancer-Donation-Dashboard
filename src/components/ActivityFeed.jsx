import { motion } from "framer-motion";

export default function ActivityFeed({ donations }) {
  return (
    <div className="panel feed">
      <h2>Recent Activity</h2>

      {donations.slice().reverse().map(d => (
        <motion.div
          key={d.id}
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
