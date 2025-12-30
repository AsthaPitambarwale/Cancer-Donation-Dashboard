import { useEffect, useState } from "react";
import KPI from "./components/KPI";
import DonationChart from "./components/DonationChart";
import ActivityFeed from "./components/ActivityFeed";
import QuoteBanner from "./components/QuoteBanner";
import ThemeToggle from "./components/ThemeToggle";
import Filters from "./components/Filters";
import Controls from "./components/Controls";
import Toast from "./components/Toast";
import GoalProgress from "./components/GoalProgress";
import { generateDonation } from "./data/donationGenerator";
import { exportToCSV } from "./utils/exportCSV";
import "./index.css";

export default function App() {
  const [donations, setDonations] = useState([]);
  const [running, setRunning] = useState(true);
  const [role, setRole] = useState("admin");
  const [query, setQuery] = useState("");
  const [toast, setToast] = useState("");
  const FUNDING_GOAL = 100000;

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  /*Theme*/
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  /*Live Donations (single interval – correct)*/
  useEffect(() => {
    if (!running) return;

    const timer = setInterval(() => {
      setDonations(prev => [...prev.slice(-14), generateDonation()]);
    }, 2500);

    return () => clearInterval(timer);
  }, [running]);

  /*Toast on new donation*/
  useEffect(() => {
    if (!donations.length) return;
    setToast("New donation received");
    const t = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(t);
  }, [donations]);

  /*Derived values*/
  const filteredDonations = donations.filter(d =>
    d.name.toLowerCase().includes(query)
  );

  const totalAmount = filteredDonations.reduce(
    (sum, d) => sum + d.amount,
    0
  );

  return (
    <div className="dashboard">
      <header>
        <div>
          <h1>Cancer Awareness & Support</h1>
          <p className="sub">Live donation monitoring dashboard</p>
        </div>

        <div className="header-controls">
          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="control-btn"
          >
            <option value="admin">Admin</option>
            <option value="viewer">Viewer</option>
          </select>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>


      <QuoteBanner />

      <section className="kpis">
        <KPI label="Total Raised" value={`₹${totalAmount.toLocaleString()}`} />
        <KPI label="Donors" value={filteredDonations.length} />
        <KPI
          label="Avg Donation"
          value={`₹${Math.round(
            totalAmount / (filteredDonations.length || 1)
          )}`}
        />
      </section>

      <section className="goal-section">
        <GoalProgress raised={totalAmount} goal={FUNDING_GOAL} />
      </section>

      {/*Admin-only controls*/}
      {role === "admin" && (
        <section className="admin-controls">
          <Filters setQuery={setQuery} />
          <Controls running={running} setRunning={setRunning} />
          <button
            className="export"
            onClick={() => exportToCSV(filteredDonations)}
          >
            📥 Export CSV
          </button>
        </section>
      )}

      {toast && <Toast message={toast} />}

      <section className="content">
        <DonationChart donations={filteredDonations} />
        <ActivityFeed donations={filteredDonations} />
      </section>
    </div>
  );
}
