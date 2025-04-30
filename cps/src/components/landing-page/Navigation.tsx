import { Button } from "../ui/button";
import { Terminal } from "lucide-react";

const Navigation = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-indigo-300" />
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
        <Button
          variant="outline"
          className="border-slate-500 text-slate-300 hover:bg-slate-600/10"
        >
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Navigation;
