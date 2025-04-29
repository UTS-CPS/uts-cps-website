import { Terminal, Github, MessageSquare, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <Terminal className="h-6 w-6 text-purple-500" />
            <span className="font-mono text-lg font-bold">UTS CPS</span>
          </div>

          <div className="flex gap-6 mb-6 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Resources
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <MessageSquare className="h-6 w-6" />
              <span className="sr-only">Discord</span>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
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
