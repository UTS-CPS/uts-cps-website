import { Terminal, Github, MessageSquare as Email, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Terminal className="h-6 w-6 text-indigo-300" />
            <span className="font-mono text-lg font-bold text-slate-100">UTS CPS</span>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/UTS-CPS"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://discord.gg/BN8HptYR9h"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              <Email className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </a>
            <a
              href="https://www.instagram.com/uts_cps/"
              target="_blank"
              className="text-slate-400 hover:text-indigo-300 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} UTS Competitive Programming Society.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
