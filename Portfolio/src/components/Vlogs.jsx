import React from "react";

export default function Vlogs() {
  // just placeholders — link your YouTube or blog posts
  const posts = [
    { title: "How I built my portfolio", link: "#" },
    { title: "Quick PHP programs for MSBTE", link: "#" }
  ];

  return (
    <section id="vlogs" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Vlogs / Devlogs</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map(p => (
          <div key={p.title} className="p-3 border rounded">
            <h3 className="font-medium">{p.title}</h3>
            <a className="text-sm underline mt-2 block" href={p.link}>Read / Watch</a>
          </div>
        ))}
      </div>
    </section>
  );
}
