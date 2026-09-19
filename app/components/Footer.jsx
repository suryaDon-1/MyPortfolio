
import React from "react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#09090b] px-6 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-zinc-500 sm:flex-row">

        <p>
          © {new Date().getFullYear()} Surya. All rights reserved.
        </p>

        <p>
          Built with Next.js & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;
