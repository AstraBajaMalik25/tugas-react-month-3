"use client";

import { useState } from "react";

// Columns
const columns = [
  { id: "planned", name: "Planned", color: "#6B7280" },
  { id: "inprogress", name: "In Progress", color: "#F59E0B" },
  { id: "done", name: "Done", color: "#10B981" },
];

// Mock assignments
const exampleFeatures = [
  {
    id: "f1",
    name: "Finish React project",
    startAt: new Date(2025, 9, 20),
    endAt: new Date(2025, 9, 22),
    column: "inprogress",
  },
  {
    id: "f2",
    name: "Prepare presentation slides",
    startAt: new Date(2025, 9, 18),
    endAt: new Date(2025, 9, 19),
    column: "planned",
  },
  {
    id: "f3",
    name: "Submit weekly report",
    startAt: new Date(2025, 9, 10),
    endAt: new Date(2025, 9, 11),
    column: "done",
  },
];

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

export default function AssignmentPage() {
  const [features] = useState(exampleFeatures);

  const columnsWithFeatures = columns.map((col) => ({
    ...col,
    features: features.filter((f) => f.column === col.id),
  }));

  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      <h1 className="text-3xl font-bold mb-6">Assignments</h1>

      <div className="flex gap-4 flex-wrap">
        {columnsWithFeatures.map((col) => (
          <div key={col.id} className="flex-1 bg-gray-100 p-4 rounded-md min-w-[250px]">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: col.color }}
              />
              <span className="font-semibold">{col.name}</span>
            </div>

            <div className="flex flex-col gap-3">
              {col.features.map((feature) => (
                <div
                  key={feature.id}
                  className="p-3 bg-white rounded-md shadow-sm"
                >
                  <p className="font-medium text-sm">{feature.name}</p>
                  <p className="text-muted-foreground text-xs">
                    {dateFormatter.format(feature.startAt)} –{" "}
                    {dateFormatter.format(feature.endAt)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
