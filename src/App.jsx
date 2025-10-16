// STEP 1: Pull in React's useState hook so the UI can react to user choices
import { useState } from "react";
import "./App.css";

// STEP 2: Define and export our main component (default export so main.jsx can import it)
function App() {
  // STEP 3: State holds the CURRENT Tailwind class strings for our button + heading
  // - Changing these will re-render the component and update styles instantly
  const [color, setColor] = useState("bg-indigo-600 hover:bg-indigo-700");
  const [rounded, setRounded] = useState("rounded-xl");
  const [textSize, setTextSize] = useState("text-3xl");
  return (
    <>
      {/* // Layout wrapper: // - min-h-full: take at least the viewport height // - flex + items-center + justify-center:
      center the card on screen // - p-6: page padding */}
      <div className="min-h-full flex items-center justify-center p-6">
        {/* Card container:
          - max-w-xl w-full: responsive width up to ~36rem
          - bg-[--color-card]: use our token from index.css via CSS var
          - border/rounded/backdrop: frosted glass look
      */}
        <div className="max-w-xl w-full bg-[--color-card] border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
          {/* Heading:
            - text size is controlled by state (text-xl..text-5xl)
            - font-semibold text-white: simple type style
        */}
          <h1 className={`${textSize} font-semibold text-white`}>Hello React + Tailwind v4</h1>

          {/* Supporting text:
            - mt-2: margin-top space
            - text-slate-300: readable light gray
        */}
          <p className="mt-2 text-slate-300">Use the controls to experiment with Tailwind utilities in real time.</p>

          {/* The demo button:
            - color + rounded come from state (dropdowns below)
            - px/py: padding, transition: smooth hover, focus:ring: accessibility
        */}
          <div className="mt-6">
            <button
              className={`${color} ${rounded} px-6 py-3 text-white font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            >
              Tailwind Button
            </button>
          </div>

          {/* Controls Grid:
            - mt-8: spacing above
            - grid gap-4: two-dimensional layout with gaps
            - sm:grid-cols-3: 3 columns on small screens and up, 1 column below
        */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {/* Color control */}
            <Control label="Color">
              <Select
                value={color}
                onChange={setColor}
                options={[
                  "bg-indigo-600 hover:bg-indigo-700",
                  "bg-blue-600 hover:bg-blue-700",
                  "bg-emerald-600 hover:bg-emerald-700",
                  "bg-rose-600 hover:bg-rose-700",
                  "bg-amber-500 hover:bg-amber-600",
                ]}
              />
            </Control>

            {/* Rounded control */}
            <Control label="Rounded">
              <Select
                value={rounded}
                onChange={setRounded}
                options={["rounded-md", "rounded-xl", "rounded-2xl", "rounded-full"]}
              />
            </Control>

            {/* Text size control */}
            <Control label="Text Size">
              <Select
                value={textSize}
                onChange={setTextSize}
                options={["text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl"]}
              />
            </Control>
          </div>

          {/* Friendly tip at the bottom */}
          <p className="mt-8 text-sm text-slate-400 text-center">
            Try changing classes in JSX — Tailwind hot-reloads instantly.
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

/* ---------- Helper components (cleaner JSX and good composition practice) ---------- */

// STEP 5: Control wraps a label + whatever input we pass as children
function Control({ label, children }) {
  return (
    <label className="block">
      <span className="block mb-1 text-slate-200 text-sm">{label}</span>
      {children}
    </label>
  );
}

// STEP 6: Reusable Select component
// - Controlled input: value comes from props; onChange notifies parent
// - Styled with Tailwind utilities
function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-white/80 text-slate-900 px-3 py-2 rounded-md outline-none ring-1 ring-slate-300 focus:ring-2 focus:ring-indigo-400"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
