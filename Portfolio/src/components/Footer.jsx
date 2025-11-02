import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} Yash Patil — All rights reserved</div>
        <div className="text-sm">
          <a className="underline" href="/resume.pdf" download>Resume</a>
        </div>
      </div>
    </footer>
  );
}
