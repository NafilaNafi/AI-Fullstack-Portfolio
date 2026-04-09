import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Server, Brain, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: Monitor,
    color: "purple",
    skills: [
      { name: "Angular", level: 95 },
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "RxJS/NgRx", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Responsive Design", level: 95 },
      { name: "WCAG/Accessibility", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "pink",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 90 },
      { name: "REST APIs", level: 95 },
      { name: "MongoDB", level: 85 },
      { name: "Firebase", level: 80 },
      { name: "JWT/OAuth", level: 85 },
      { name: "WebSockets", level: 85 },
    ],
  },
  {
    title: "AI & Advanced",
    icon: Brain,
    color: "blue",
    skills: [
      { name: "OpenAI APIs", level: 90 },
      { name: "LangChain", level: 85 },
      { name: "RAG Architecture", level: 90 },
      { name: "Prompt Engineering", level: 90 },
      { name: "LLM Integration", level: 85 },
    ],
  },
];

const tools = [
  "Git", "AWS", "Postman", "Figma", "CI/CD", "Agile", "Docker", "Webpack", "Vite"
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    purple: {
      bg: "bg-purple-500",
      border: "border-purple-500/30",
      text: "text-purple-400",
      glow: "shadow-purple-500/50",
    },
    pink: {
      bg: "bg-pink-500",
      border: "border-pink-500/30",
      text: "text-pink-400",
      glow: "shadow-pink-500/50",
    },
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-500/30",
      text: "text-blue-400",
      glow: "shadow-blue-500/50",
    },
  };

  return (
    <section ref={ref} id="skills" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">Technical Arsenal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A powerful combination of frontend mastery, backend proficiency, and AI innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-2xl ${colors.bg}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className={`text-sm ${colors.text} font-semibold`}>{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3 }}
                          className={`h-full ${colors.bg} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full border border-white/10 text-gray-300 font-medium hover:border-purple-500/50 hover:text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-default"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
