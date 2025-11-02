import React from "react";

export default function Testimonials() {
  const t = [
    { name: "Professor X", text: "Great hands-on builder." },
    { name: "Mentor Y", text: "Learns fast & applies skills." }
  ];
  return (
    <section id="testimonials" className="py-12">
      <h2 className="text-2xl font-semibold mb-4">Testimonials / Certificates</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {t.map((tt, idx) => (
          <div key={idx} className="p-4 border rounded">
            <p className="text-slate-600">"{tt.text}"</p>
            <div className="mt-3 font-medium">{tt.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
