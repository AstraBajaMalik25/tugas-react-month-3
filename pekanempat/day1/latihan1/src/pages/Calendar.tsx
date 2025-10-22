"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function CalendarPage() {
  const [events] = React.useState([
    { id: 1, title: "Project Deadline", date: "2025-10-15", color: "bg-green-500" },
    { id: 2, title: "Team Meeting", date: "2025-10-20", color: "bg-yellow-500" },
    { id: 3, title: "Code Review", date: "2025-10-22", color: "bg-blue-500" },
  ]);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 space-y-6">
      <h1 className="text-3xl font-bold">Calendar</h1>
      <p className="text-muted-foreground">
        For upcomming Events and Holdays
      </p>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {Array.from({ length: 31 }, (_, i) => {
          const day = i + 1;
          const dateStr = `2025-10-${String(day).padStart(2, "0")}`;
          const event = events.find((e) => e.date === dateStr);

          return (
            <div
              key={day}
              className={`p-4 rounded-md border transition-colors hover:bg-muted ${
                event ? "border-primary" : "border-muted"
              }`}
            >
              <div className="font-semibold">{day}</div>
              {event && (
                <div
                  className={`mt-1 text-xs text-white px-2 py-1 rounded ${event.color}`}
                >
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <Button variant="outline" onClick={() => alert("Add new event!")}>
        + Add Event
      </Button>
    </div>
  );
}