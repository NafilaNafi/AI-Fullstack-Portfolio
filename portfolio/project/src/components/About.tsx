import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, Code2, Brain } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Crafting the Future, One Line at a Time
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Hi, I'm Nafila M</h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              I'm an <span className="text-purple-400 font-semibold">AI Fullstack Engineer</span> who believes that the future of web development lies at the intersection of beautiful user interfaces and intelligent systems.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              With <span className="text-pink-400 font-semibold">4+ years</span> of experience building enterprise-grade applications, I specialize in creating <span className="text-purple-400 font-semibold">scalable frontend architectures</span> powered by cutting-edge AI technologies like <span className="text-blue-400 font-semibold">LLM, RAG, LangChain, and OpenAI APIs</span>.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              My journey started with a fascination for creating pixel-perfect UIs, and evolved into architecting intelligent systems that don't just look good — they think, learn, and adapt. From improving API performance by 40% to building real-time dashboards handling millions of data points, I thrive on solving complex problems with elegant solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <Zap className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Performance Optimizer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-500/20 rounded-lg border border-pink-500/30">
                <Code2 className="w-5 h-5 text-pink-400" />
                <span className="text-white font-medium">Frontend Expert</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <Brain className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">AI Innovator</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-purple-400">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Frontend Mastery</h4>
                    <p className="text-gray-400">
                      Building responsive, accessible, and high-performance UIs with Angular, React, and modern web technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-pink-400">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">AI Integration</h4>
                    <p className="text-gray-400">
                      Implementing RAG architectures, LLM APIs, and intelligent workflows that transform user experiences
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-blue-400">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">Fullstack Excellence</h4>
                    <p className="text-gray-400">
                      End-to-end development from database optimization to API design and deployment at scale
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">4+</div>
                <div className="text-sm text-gray-400">Years Exp</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl border border-white/10 text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">40%</div>
                <div className="text-sm text-gray-400">Faster APIs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
