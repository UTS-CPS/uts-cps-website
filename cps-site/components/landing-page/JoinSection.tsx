import { Button } from "../ui/button.tsx";
import { ChevronRight } from "lucide-react";

const JoinSection = () => {
  return (
    <section id="join" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 to-gray-900/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-100">
            Tired of being a lvl 1 noob?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join UTS CPS today and become part of a community passionate about
            algorithms and problem-solving.
          </p>
          <Button
            size="lg"
            className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg"
          >
            Join Now <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
