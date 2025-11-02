import React from "react";

export default function Upcoming() {
  const upcoming = [
    { title: "Personal CRM", eta: "Nov 2025" },
    { title: "DSA Revision Course", eta: "Dec 2025" }
  ];
  return (
    <section id="upcoming" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Upcoming / Ongoing Projects</h2>
      <ul className="space-y-3">
        {upcoming.map(u => (
          <li key={u.title} className="p-3 border rounded flex justify-between">
            <div>
              <div className="font-medium">{u.title}</div>
              <div className="text-sm text-slate-500">Short plan & goals will go here.</div>
            </div>
            <div className="text-sm text-slate-500">{u.eta}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

