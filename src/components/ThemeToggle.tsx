"use client";

import { useSyncExternalStore } from "react";
import { Monitor, Moon, Sun } from "lucide-react";

type Theme = "system" | "light" | "dark";
const ORDER: Theme[] = ["system", "light", "dark"];
const LABEL: Record<Theme, string> = { system: "System", light: "Light", dark: "Dark" };

// The <html data-theme> attribute is the source of truth. The inline script in
// layout.tsx sets it before first paint; this component reads and updates it.
function subscribe(onChange: () => void) {
  const mo = new MutationObserver(onChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => mo.disconnect();
}

function getSnapshot(): Theme {
  const t = document.documentElement.dataset.theme;
  return t === "light" || t === "dark" ? t : "system";
}

function apply(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;
  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {}
}

/** Cycles system, light, dark. */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "system" as Theme);
  const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <button
      type="button"
      onClick={() => apply(next)}
      aria-label={`Theme: ${LABEL[theme]}. Switch to ${LABEL[next]}`}
      title={`Theme: ${LABEL[theme]}`}
      className="grid size-10 place-items-center rounded-full border border-line-strong text-fg transition-colors hover:bg-surface-2 active:scale-[0.96]"
    >
      <Icon className="size-[18px]" />
    </button>
  );
}
