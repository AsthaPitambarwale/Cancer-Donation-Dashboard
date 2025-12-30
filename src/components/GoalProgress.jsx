import { motion } from "framer-motion";

export default function GoalProgress({ raised, goal }) {
  const percent = Math.min((raised / goal) * 100, 100);

  return (
    <div className="panel">
      <h2>Fundraising Goal</h2>

      <motion.div
        className="progress-ring"
        initial={{ width: 0 }}
        animate={{ width: `${percent}%` }}
      />

      <p>
        ₹{raised.toLocaleString()} raised of ₹{goal.toLocaleString()}
      </p>
    </div>
  );
}
