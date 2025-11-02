import React from "react";

export default function Navbar() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#vlogs", label: "Vlogs" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <nav className="max-w-5xl mx-auto px-4 flex items-center justify-between h-16">
        <a href="#home" className="font-semibold text-lg">Yash Patil</a>
        <ul className="hidden md:flex gap-4">
          {links.map(l => (
            <li key={l.href}><a className="hover:text-accent" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="md:hidden">
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}

function MobileMenu({ links }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button aria-label="menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md border">
        ☰
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-white border rounded-md shadow-md">
          <ul className="flex flex-col p-2">
            {links.map(l => (
              <li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block px-2 py-1">{l.label}</a></li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
