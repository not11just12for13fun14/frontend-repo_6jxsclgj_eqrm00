import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-black/40 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
              <Sparkles size={18} />
            </span>
            <span className="font-semibold tracking-tight">Blueflare AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:opacity-90 transition">
              Book discovery call
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10" onClick={() => setOpen((v) => !v)}>
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-black/5">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="block text-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm">Book discovery call</a>
          </div>
        )}
      </div>
    </header>
  );
}
