"use client";
import { Dispatch, SetStateAction, createContext, useState } from "react";

type ThemeContextType = {
  mode: "dark" | "light";
  toggleMode: () => void;
};

const initialContext: ThemeContextType = {
  mode: "dark",
  toggleMode: () => null,
};

export const ThemeContext = createContext<ThemeContextType>(initialContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"dark" | "light">(initialContext.mode);

  const toggleMode = () => {
    return setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <div className={`theme  ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
}
