"use client";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      size={"icon"}
    >
      {theme === "dark" ? (
        <Moon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90  dark:text-muted-foreground" />
      ) : (
        <Sun className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-muted-foreground" />
      )}
    </Button>
  );
};
export default ThemeChanger;
