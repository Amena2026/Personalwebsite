import { useState, useEffect } from 'react';
import { Terminal, Code, Server, Network, Github, Linkedin, Mail, ExternalLink, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const command = './introduce.sh';
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= command.length) {
        setCurrentCommand(command.slice(0, index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono">
      {/* Scanline effect */}
      <div className="scanline" />
      
      {/* Terminal Header */}
      <div className="border-b border-[#00ff41]/30 bg-[#111111]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-4 text-sm text-[#00cc33]">alex@mena:~</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Terminal Prompt */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#00cc33]">guest@portfolio</span>
            <span className="text-[#666]">:</span>
            <span className="text-[#00ff41]">~</span>
            <span className="text-[#666]">$</span>
            <span className="ml-2">{currentCommand}</span>
            {showCursor && <span className="inline-block w-2 h-4 bg-[#00ff41] ml-1" />}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Hero Section */}
          <section className="border border-[#00ff41]/30 bg-[#111111] p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Terminal className="w-5 h-5 text-[#00ff41] flex-shrink-0 mt-1" />
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl terminal-glow mb-2">
                  $ whoami
                </h1>
                <div className="h-px bg-[#00ff41]/30 w-full mb-4" />
              </div>
            </div>
            
            <div className="space-y-3 text-[#00cc33] ml-8 sm:ml-0">
              <p className="text-lg sm:text-xl">
                <span className="text-[#00ff41]">&gt;</span> Alex Mena
              </p>
              <p className="text-base sm:text-lg">
                <span className="text-[#00ff41]">&gt;</span> Computer Science Student
              </p>
              <p className="text-base sm:text-lg">
                <span className="text-[#00ff41]">&gt;</span> Systems & Networks Concentration
              </p>
              <p className="text-sm sm:text-base text-[#33cc33] mt-4 leading-relaxed">
                I’m a Computer Science student at the University of Delaware with a focus on systems, networks, 
                cybersecurity, and application development. I enjoy building secure and scalable architectures, 
                experimenting with emerging technologies, and breaking down complex systems to understand how they 
                work at a deeper level. I’m passionate about using cloud infrastructure and security-focused 
                design to create practical solutions that solve real-world problems.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="border border-[#00ff41]/30 bg-[#111111] p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-6">
              <Code className="w-5 h-5 text-[#00ff41] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl terminal-glow mb-2">
                  $ cat skills.txt
                </h2>
                <div className="h-px bg-[#00ff41]/30 w-full" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 ml-8 sm:ml-0">
              <div>
                <h3 className="text-[#00ff41] mb-3 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Languages
                </h3>
                <ul className="space-y-2 text-[#00cc33] text-sm sm:text-base">
                  <li>• C, C++</li>
                  <li>• Java, Python</li>
                  <li>• JavaScript, SQL</li>
                  <li>• NoSQL, Cypher</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#00ff41] mb-3 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Frontend
                </h3>
                <ul className="space-y-2 text-[#00cc33] text-sm sm:text-base">
                  <li>• React</li>
                  <li>• HTML, CSS</li>
                  <li>• Bootstrap</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#00ff41] mb-3 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Backend
                </h3>
                <ul className="space-y-2 text-[#00cc33] text-sm sm:text-base">
                  <li>• Linux, AWS, Docker</li>
                  <li>• Node.js, Git, ExpressJS</li>
                  <li>• Supabase, Postgres</li>
                  <li>• Neo4j, Firebase</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[#00ff41] mb-3 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  Security & Tools
                </h3>
                <ul className="space-y-2 text-[#00cc33] text-sm sm:text-base">
                  <li>• JWT Authentication</li>
                  <li>• OAuth 2.0, CORS</li>
                  <li>• Postman, Burp Suite</li>
                  <li>• Bcrypt2, Wireshark</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience/Education Section */}
          <section className="border border-[#00ff41]/30 bg-[#111111] p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-6">
              <Network className="w-5 h-5 text-[#00ff41] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl terminal-glow mb-2">
                  $ cat experience.log
                </h2>
                <div className="h-px bg-[#00ff41]/30 w-full" />
              </div>
            </div>

            <div className="space-y-6 ml-8 sm:ml-0">
              <div className="border-l-2 border-[#00ff41]/50 pl-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-[#00ff41] text-base sm:text-lg">
                      Software Engineer @ Unibee Technologies
                    </h3>
                    <p className="text-[#33cc33] text-sm mt-1">Newark, DE</p>
                  </div>
                  <span className="text-[#33cc33] text-sm whitespace-nowrap">Jan 2026 - Present</span>
                </div>
                <ul className="text-[#00cc33] text-sm sm:text-base space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff41] flex-shrink-0">•</span>
                    <span>Design and deploy ML and LLM-based solutions across Deep Tech discovery, summarization, recommender systems, time-series forecasting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff41] flex-shrink-0">•</span>
                    <span>Developed frontier Graph-RAG implementation for enhanced context-aware search using knowledge graphs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff41] flex-shrink-0">•</span>
                    <span>Build Agentic AI systems for autonomous decision-making and workflow automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff41] flex-shrink-0">•</span>
                    <span>Lead end-to-end ML lifecycle including CI/CD, A/B testing, production monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00ff41] flex-shrink-0">•</span>
                    <span>Conduct data wrangling, modeling, evaluation using Python and cloud-native tools</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="border border-[#00ff41]/30 bg-[#111111] p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-6">
              <Server className="w-5 h-5 text-[#00ff41] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl terminal-glow mb-2">
                  $ ls -la ./projects/
                </h2>
                <div className="h-px bg-[#00ff41]/30 w-full" />
              </div>
            </div>

            <div className="space-y-6 ml-8 sm:ml-0">
              <div className="border-l-2 border-[#00ff41]/50 pl-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-[#00ff41] text-base sm:text-lg">
                    UDP Chat Room
                  </h3>
                  <a
                    href="https://github.com/Amena2026/UDPChatRoom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                    aria-label="View UDP Chat Room on GitHub"
                  >
                    <ExternalLink className="w-4 h-4 text-[#00cc33] cursor-pointer hover:text-[#00ff41] transition-colors" />
                  </a>
                </div>
                <p className="text-[#00cc33] text-sm sm:text-base mb-2">
                  Built a multithreaded UDP-based chat room system in C using raw socket programming
                </p>
              </div>

              <div className="border-l-2 border-[#00ff41]/50 pl-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-[#00ff41] text-base sm:text-lg">
                    TCP File Transfer
                  </h3>
                  <a
                    href="https://github.com/Amena2026/tcp-file-transfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                    aria-label="View TCP File Transfer on GitHub"
                  >
                    <ExternalLink className="w-4 h-4 text-[#00cc33] cursor-pointer hover:text-[#00ff41] transition-colors" />
                  </a>
                </div>
                <p className="text-[#00cc33] text-sm sm:text-base mb-2">
                  Designed and implemented a TCP file transfer client-server protocol with custom headers and EOF handling
                </p>
              </div>

              <div className="border-l-2 border-[#00ff41]/50 pl-4">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-[#00ff41] text-base sm:text-lg">
                    Multi Tenant Client Portal API
                  </h3>
                  <a
                    href="https://github.com/Amena2026/Multi-client-portal-API"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                    aria-label="View Multi Tenant Client Portal API on GitHub"
                  >
                    <ExternalLink className="w-4 h-4 text-[#00cc33] cursor-pointer hover:text-[#00ff41] transition-colors" />
                  </a>
                </div>
                <p className="text-[#00cc33] text-sm sm:text-base mb-2">
                  Designed as a lightweight CRM/project management tool with a clean MVC architecture and plans for multi-tenant support.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="border border-[#00ff41]/30 bg-[#111111] p-6 sm:p-8">
            <div className="flex items-start gap-3 mb-6">
              <Mail className="w-5 h-5 text-[#00ff41] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl terminal-glow mb-2">
                  $ ./connect.sh
                </h2>
                <div className="h-px bg-[#00ff41]/30 w-full" />
              </div>
            </div>

            <div className="space-y-4 ml-8 sm:ml-0">
              <p className="text-[#00cc33] text-sm sm:text-base">
                <span className="text-[#00ff41]">&gt;</span> Let's connect and collaborate on interesting projects!
              </p>
              
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://github.com/Amena2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm sm:text-base">GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/alexander-mena/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 border border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
                
                <a
                  href="mailto:menaalex@udel.edu"
                  className="flex items-center gap-2 px-4 py-2 border border-[#00ff41]/50 hover:bg-[#00ff41]/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm sm:text-base">Email</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-[#00ff41]/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#33cc33] text-sm">
            <p>
              © 2026 Alex Mena
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}