"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { href, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/Calendar", label: "Calendar" },
  { href:  "/Task", label: "Task"}
];

export function Navbar() {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="font-bold text-lg">
          Productive
        </NavLink>

        <nav className="hidden md:flex space-x-3">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-foreground/80",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-2">
        <ModeToggle />

        {/* Assignment Button */}
        <NavLink to="/assignment">
          <Button size="sm" variant="default">
            Assignments
          </Button>
        </NavLink>
      </div>
    </header>
  );
}
