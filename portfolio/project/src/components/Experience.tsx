import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, TrendingUp, Zap } from 'lucide-react';

const experiences = [
  {
    company: "Trinity Consulting",
    role: "Software Development Engineer",
    period: "2025 - Present",
    location: "Current Position",
    achievements: [
      "Built reusable UI component libraries with Angular, improving development efficiency by 35%",
      "Implemented AI-powered workflows using OpenAI APIs and LangChain for intelligent automation",
      "Optimized frontend performance, achieving 25-30% faster load times through code splitting and lazy loading",
      "Designed and developed scalable REST APIs with Node.js and Express",
      "Collaborated with cross-functional teams to deliver enterprise-grade solutions",
    ],
    technologies: ["Angular", "React", "Node.js", "OpenAI", "LangChain", "TypeScript"],
    color: "purple",
  },
  {
    company: "TangoEye Pvt Ltd",
    role: "Software Developer",
    period: "2021 - 2025",
    location: "4 Years",
    achievements: [
      "Built enterprise-grade dashboards handling millions of data points with real-time updates",
      "Improved API performance by 40% through query optimization and database indexing",
      "Developed real-time analytics dashboards using WebSockets for live data streaming",
      "Created responsive, accessible UI components following WCAG standards",
      "Mentored junior developers and conducted code reviews to maintain code quality",
      "Implemented CI/CD pipelines reducing deployment time by 50%",
    ],
    technologies: ["Angular", "MongoDB", "WebSockets", "REST APIs", "AWS", "TypeScript"],
    color: "pink",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const colorClasses = {
    purple: {
      bg: "bg-purple-500",
      border: "border-purple-500",
      text: "text-purple-400",
      glow: "shadow-purple-500/50",
    },
    pink: {
      bg: "bg-pink-500",
      border: "border-pink-500",
      text: "text-pink-400",
      glow: "shadow-pink-500/50",
    },
  };

  return (
    <section ref={ref} id="experience" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            4+ years of building scalable applications and solving complex problems
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => {
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="relative mb-16 last:mb-0"
              >
                <div className="flex items-center gap-8">
                  <div className="hidden lg:flex flex-1 justify-end">
                    {isEven && (
                      <div className="text-right">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg}/20 rounded-full border ${colors.border}/30 mb-2`}>
                          <Calendar className={`w-4 h-4 ${colors.text}`} />
                          <span className={`text-sm ${colors.text} font-medium`}>{exp.period}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="relative flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full ${colors.bg} flex items-center justify-center ${colors.glow} shadow-xl z-10`}>
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className={`w-1 h-full ${colors.bg}/30 absolute top-16`}></div>
                    )}
                  </div>

                  <div className="flex-1">
                    {!isEven && (
                      <div className="lg:hidden mb-2">
                        <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg}/20 rounded-full border ${colors.border}/30`}>
                          <Calendar className={`w-4 h-4 ${colors.text}`} />
                          <span className={`text-sm ${colors.text} font-medium`}>{exp.period}</span>
                        </div>
                      </div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                          <p className={`text-lg ${colors.text} font-semibold mb-1`}>{exp.role}</p>
                          <p className="text-gray-400 text-sm">{exp.location}</p>
                        </div>
                        <div className="hidden lg:block">
                          {!isEven && (
                            <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg}/20 rounded-full border ${colors.border}/30`}>
                              <Calendar className={`w-4 h-4 ${colors.text}`} />
                              <span className={`text-sm ${colors.text} font-medium`}>{exp.period}</span>
                            </div>
                          )}
                        </div>
                        <div className="lg:hidden">
                          {isEven && (
                            <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg}/20 rounded-full border ${colors.border}/30`}>
                              <Calendar className={`w-4 h-4 ${colors.text}`} />
                              <span className={`text-sm ${colors.text} font-medium`}>{exp.period}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <TrendingUp className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <p className="text-gray-300 leading-relaxed">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden lg:flex flex-1">
                    {!isEven && <div></div>}
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
