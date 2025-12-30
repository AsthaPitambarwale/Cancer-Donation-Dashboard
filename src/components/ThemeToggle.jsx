export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
      }}
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
