import { Code2, Terminal, Calendar } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-950 to-gray-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <Code2 className="h-10 w-10 text-indigo-300 mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">About Us</h2>
          <div className="w-20 h-1 bg-indigo-400 rounded mb-8"></div>
          <p className="max-w-3xl text-slate-400 text-lg">
            UTS CPS is a society for students who enjoy algorithmic
            problem-solving, competitive programming, and those who want to
            improve their problem-solving. We help students prepare for contests
            like ICPC, run our own competitions, and hope to collaborate with
            other socs in the future. Alongside that, we host hackathons,
            LeetCode virtual contests, and chill events to keep things fun. We
            also help members lvl up for technical interviews at top companies
            like Atlassian, Google, Amazon, and HFT firms, with regular LeetCode
            virtual contests, mock interviews, and workshops.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-900/50 border border-slate-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
            <div className="bg-indigo-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Terminal className="h-6 w-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">Coding Competitions</h3>
            <p className="text-slate-400">
              Participate in ICPC, in-house comps, hackathons and more.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-slate-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
            <div className="bg-indigo-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="h-6 w-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">Technical Workshops</h3>
            <p className="text-slate-400">
              Learn advanced algorithms, data structures, and problem-solving
              techniques.
            </p>
          </div>

          <div className="bg-gray-900/50 border border-slate-700/50 rounded-lg p-6 hover:bg-gray-800/50 transition-colors">
            <div className="bg-indigo-400/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-indigo-300" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-100">Practice Sessions</h3>
            <p className="text-slate-400">
              Regular LeetCode practice sessions & workshops to prepare for
              technical interviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
