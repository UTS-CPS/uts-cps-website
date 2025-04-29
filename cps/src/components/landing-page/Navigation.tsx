import { Button } from "../ui/button";
import { Terminal } from "lucide-react";

const Navigation = () => {
  return (
    <header className="container mx-auto py-6 px-4">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-purple-500" />
          <span className="font-mono text-lg font-bold">UTS CPS</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a
            href="#about"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            About
          </a>
          <a
            href="#events"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Events
          </a>
          <a
            href="#join"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            Join Us
          </a>
        </div>
        <Button
          variant="outline"
          className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
        >
          Sign In
        </Button>
      </nav>
    </header>
  );
};

export default Navigation;
