export default function Controls({ running, setRunning }) {
  return (
    <button
      className="control-btn"
      onClick={() => setRunning(!running)}
    >
      {running ? "⏸ Pause Live Data" : "▶ Resume Live Data"}
    </button>
  );
}
