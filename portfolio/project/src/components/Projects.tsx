import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, LineChart, ShoppingCart } from 'lucide-react';

const projects = [
  {
    title: "AI Recruitment Intelligence Platform",
    icon: Brain,
    description: "Enterprise RAG-based hiring system that revolutionizes recruitment with AI-powered resume analysis and semantic search",
    problem: "Traditional hiring processes are time-consuming and lack intelligent candidate matching",
    solution: "Built a RAG architecture using LangChain and OpenAI APIs for semantic resume analysis",
    impact: "Reduced hiring time by 60% and improved candidate match quality by 75%",
    technologies: ["React", "Node.js", "OpenAI", "LangChain", "RAG", "MongoDB", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
    stats: [
      { label: "Faster Hiring", value: "60%" },
      { label: "Match Quality", value: "75%" },
    ],
  },
  {
    title: "AI Analytics Dashboard",
    icon: LineChart,
    description: "Real-time enterprise dashboard handling millions of data points with WebSocket integration and advanced visualizations",
    problem: "Legacy dashboards couldn't handle real-time data updates at scale",
    solution: "Architected Angular-based dashboard with WebSocket streams and optimized MongoDB queries",
    impact: "40% faster API performance and real-time insights for 10,000+ concurrent users",
    technologies: ["Angular", "MongoDB", "WebSockets", "D3.js", "Node.js", "Redis", "AWS"],
    gradient: "from-blue-500 to-cyan-500",
    stats: [
      { label: "API Speed", value: "40%" },
      { label: "Users", value: "10K+" },
    ],
  },
  {
    title: "Fullstack E-commerce Platform",
    icon: ShoppingCart,
    description: "Scalable e-commerce solution with payment integration, inventory management, and intelligent product recommendations",
    problem: "Small businesses needed affordable, scalable e-commerce infrastructure",
    solution: "Developed end-to-end platform with Stripe/Razorpay integration and microservices architecture",
    impact: "Processed $500K+ in transactions with 99.9% uptime and zero payment failures",
    technologies: ["Next.js", "Node.js", "Stripe", "PostgreSQL", "Redis", "Docker", "AWS"],
    gradient: "from-pink-500 to-orange-500",
    stats: [
      { label: "Transactions", value: "$500K+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="projects" className="py-24 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into intelligent, scalable solutions that drive real impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 from-purple-500/20 to-pink-500/20 rounded-3xl"></div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 group-hover:scale-[1.02]">
                  <div className="p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon className="w-10 h-10 text-white" />
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          {project.stats.map((stat) => (
                            <div key={stat.label} className="bg-slate-800/50 p-4 rounded-xl border border-white/10">
                              <div className={`text-2xl font-bold bg-gradient-to-r ${project.gradient} text-transparent bg-clip-text mb-1`}>
                                {stat.value}
                              </div>
                              <div className="text-xs text-gray-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>

                      </div>

                      <div className="lg:w-2/3 space-y-6">
                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/5">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-red-400 font-bold">P</span>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-2">Problem</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/5">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-blue-400 font-bold">S</span>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-2">Solution</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{project.solution}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-800/30 p-6 rounded-2xl border border-white/5">
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                              <span className="text-green-400 font-bold">I</span>
                            </div>
                            <div>
                              <h4 className="text-white font-semibold mb-2">Impact</h4>
                              <p className="text-gray-400 text-sm leading-relaxed">{project.impact}</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
