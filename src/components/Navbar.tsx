"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, BookText, HandHeart, Gamepad2, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Al-Qur'an", href: "/al-quran" },
  { label: "Sholat", href: "/sholat" },
  { label: "Doa", href: "/doa" },
  { label: "Sholawat", href: "/sholawat" },
  { label: "Dakwah", href: "/dakwah" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // nav link active
  const pathname = usePathname();
  // prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 font-quicksand">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30"></span>
          <span className="text-lg font-semibold text-emerald-400">
            SakuIslamI.id
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href // Jika link Beranda, path harus sama persis
                : pathname.startsWith(item.href); // Untuk link lain, cek awalan path
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white ${
                  isActive ? "bg-primary text-white" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Actions + Hamburger */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 md:hidden"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <button
        aria-label="Close menu overlay"
        onClick={() => setIsOpen(false)}
        className={
          isOpen
            ? "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            : "hidden"
        }
      />

      {/* Mobile drawer (from right) */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] transform bg-neutral-900 p-4 shadow-2xl ring-1 ring-white/10 transition-transform duration-200 ease-out md:hidden font-quicksand ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30"></span>
            <span className="text-base font-semibold text-emerald-400">
              EQuran.id
            </span>
          </div>
          <button
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href // Jika link Beranda, path harus sama persis
                : pathname.startsWith(item.href); // Untuk link lain, cek awalan path
            const icon = (
              <span className="mr-3 inline-flex h-5 w-5 items-center justify-center text-emerald-400">
                {item.label === "Beranda" && <Home className="h-5 w-5" />}
                {item.label === "Al-Quran" && <BookText className="h-5 w-5" />}
                {item.label === "Sholat" && <HandHeart className="h-5 w-5" />}
                {item.label === "Doa" && <HandHeart className="h-5 w-5" />}
                {item.label === "Sholawat" && <Gamepad2 className="h-5 w-5" />}
                {item.label === "Dakwah" && <Gamepad2 className="h-5 w-5" />}
              </span>
            );

            const classes = `flex w-full items-center rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/5 hover:text-white ${
              isActive ? "bg-primary text-white" : ""
            }`;

            return (
              item.external ?? (
                <Link
                  key={item.label}
                  href={item.href}
                  className={classes}
                  onClick={() => setIsOpen(false)}
                >
                  {icon}
                  <span>{item.label}</span>
                </Link>
              )
            );
          })}
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <button className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400">
            Masuk
          </button>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;
