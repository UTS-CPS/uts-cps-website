import { Button } from "../ui/button.tsx";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-500/10 border border-slate-500/20 text-slate-300 text-sm font-mono mb-4">
            sudo join uts-cps
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-300 via-indigo-300 to-gray-400 text-transparent bg-clip-text">
            UTS Competitive Programming & Leetcode Society
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-light">
            Pull up if you been thirsty for a challenge 😤
          </p>
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-slate-700 hover:bg-slate-600 text-white rounded-md mr-4"
            >
              Join Now <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-500 text-slate-300 hover:bg-slate-700/20"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-slate-600/20 bg-gradient-to-br from-slate-800/30 to-gray-900/30">
          <div className="absolute inset-0 flex items-center justify-center">
            <pre className="text-xs md:text-sm font-mono text-slate-300/70 p-6 overflow-hidden">
{`int binary_search(vector<int>& nums, int target) {
  int left = 0, right = nums.size() - 1;
  
  while (left <= right) {
    int mid = left + (right - left) / 2;
    
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}

// UTS CPS - Join us for more algorithms!`}
            </pre>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
