"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle ${className}`}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Dark mode" : "Light mode"}
    >
      {isLight ? (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1Zm0 15a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm9-6a1 1 0 0 1-1 1h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1ZM5 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm12.95 5.536a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0ZM7.464 5.05a1 1 0 0 1 0 1.414L6.757 7.17A1 1 0 0 1 5.343 5.757l.707-.707a1 1 0 0 1 1.414 0Zm10.607-1.414a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 16.95 4.343l.707-.707a1 1 0 0 1 1.414 0ZM7.464 16.95a1 1 0 0 1 0 1.414l-.707.707A1 1 0 1 1 5.343 17.657l.707-.707a1 1 0 0 1 1.414 0ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
          <path
            fill="currentColor"
            d="M12.1 2.05a1 1 0 0 1 .95.98 8 8 0 1 0 8.02 8.95 1 1 0 0 1 1.93.24A10 10 0 1 1 11.12 2a1 1 0 0 1 .98.05Z"
          />
        </svg>
      )}
    </button>
  );
}
