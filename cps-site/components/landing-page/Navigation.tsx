import { Button } from "../ui/button";
import { Terminal } from "lucide-react";
import Image from 'next/image'
import Link from 'next/link'

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
         <Link href='#about' className="text-slate-300 hover:text-indigo-300 transition-colors">
            About
         </Link>
         <Link href='#events' className="text-slate-300 hover:text-indigo-300 transition-colors">
            Events
         </Link>
         <Link href='/resources' className="text-slate-300 hover:text-indigo-300 transition-colors">
            Resources
         </Link>
         <Link href='#join' className="text-slate-300 hover:text-indigo-300 transition-colors">
            Join Us
         </Link>
         <Link href='#join' className="text-slate-300 hover:text-indigo-300 transition-colors">
            Contact Us
         </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
