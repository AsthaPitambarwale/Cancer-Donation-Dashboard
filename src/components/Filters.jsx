export default function Filters({ setQuery }) {
  return (
    <input
      className="filter"
      placeholder="Search donor name…"
      onChange={e => setQuery(e.target.value.toLowerCase())}
    />
  );
}
