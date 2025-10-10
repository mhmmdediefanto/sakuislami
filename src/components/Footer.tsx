"use client";

import Link from "next/link";
import { Github, Twitter, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950 text-white/80 font-quicksand">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-8 w-8 rounded-md bg-emerald-500/20 ring-1 ring-emerald-400/30"></span>
              <span className="text-lg font-semibold text-emerald-400">
                SakuIsLamI.id
              </span>
            </div>
            <p className="text-sm text-white/60">
              Baca, dengarkan, dan pelajari Al-Quran dengan pengalaman modern.
            </p>
          </div>

          {/* Navigations */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Menu</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-white" href="/">
                  Beranda
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/doa">
                  Doa
                </Link>
              </li>
              <li>
                <Link className="hover:text-white" href="/audio">
                  Audio Player
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Pengembang
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="hover:text-white" href="/api">
                  API Developer
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-white"
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">
              Ikuti kami
            </h4>
            <div className="flex gap-3">
              <a
                aria-label="GitHub"
                href="#"
                className="rounded-md p-2 ring-1 ring-white/15 hover:bg-white/10"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                aria-label="Twitter"
                href="#"
                className="rounded-md p-2 ring-1 ring-white/15 hover:bg-white/10"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="rounded-md p-2 ring-1 ring-white/15 hover:bg-white/10"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                aria-label="Email"
                href="mailto:info@example.com"
                className="rounded-md p-2 ring-1 ring-white/15 hover:bg-white/10"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {year} ediefanto.my.id. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
