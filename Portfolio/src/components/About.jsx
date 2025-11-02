import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-slate-600">Short story: From Washi → Panvel. MSBTE diploma holder. Currently pursuing B.Tech (Computer Engineering). I prefer hands-on projects and aim to join ISRO/DRDO after B.Tech. Quick learner, photographer hobbyist.</p>

      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="p-4 border rounded">
          <h3 className="font-medium">Education</h3>
          <p className="text-sm text-slate-500">MSBTE diploma, currently B.Tech (expected 2028).</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-medium">Goal</h3>
          <p className="text-sm text-slate-500">Work at ISRO/DRDO or build sustainable tech business after experience.</p>
        </div>
        <div className="p-4 border rounded">
          <h3 className="font-medium">Hobbies</h3>
          <p className="text-sm text-slate-500">Photography, web dev, learning aviation and marine tech.</p>
        </div>
      </div>
    </section>
  );
}
