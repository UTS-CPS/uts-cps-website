import { Button } from "../ui/button";
import { Terminal } from "lucide-react";
import Image from 'next/image'

const Navigation = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image 
            src="/images/uts_cps_purple.png"
            width={30}
            height={30}
            alt="UTS Cps logo"
          />
          <span className="font-mono text-lg font-bold text-slate-100">UTS CPS</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a
            href="#about"
            className="text-slate-300 hover:text-indigo-300 transition-colors"
          >
            About
          </a>
          <a
            href="#events"
            className="text-slate-300 hover:text-indigo-300 transition-colors"
          >
            Events
          </a>
          <a
            href="#resources"
            className="text-slate-300 hover:text-indigo-300 transition-colors"
          >
            Resources
          </a>
          <a
            href="#join"
            className="text-slate-300 hover:text-indigo-300 transition-colors"
          >
            Join Us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
