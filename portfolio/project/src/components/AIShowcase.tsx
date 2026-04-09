import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Lightbulb, Workflow, Sparkles } from 'lucide-react';

const aiCapabilities = [
  {
    icon: MessageSquare,
    title: "LLM Integration",
    description: "Seamless integration with OpenAI, Claude, and custom LLMs",
    example: "Built conversational AI interfaces with context-aware responses",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Prompt Engineering",
    description: "Crafting effective prompts for optimal AI performance",
    example: "Improved response quality by 85% through systematic prompt optimization",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Workflow,
    title: "RAG Architecture",
    description: "Retrieval-Augmented Generation for intelligent data access",
    example: "Implemented vector search with 95% accuracy for enterprise knowledge bases",
    color: "from-pink-500 to-orange-500",
  },
];

const chatExample = [
  {
    role: "user",
    message: "Analyze this codebase and suggest performance improvements",
    timestamp: "Just now",
  },
  {
    role: "assistant",
    message: "I've analyzed your React application. Here are 3 key optimizations:\n\n1. Implement code splitting to reduce initial bundle size by ~40%\n2. Add React.memo() to frequently re-rendering components\n3. Optimize database queries using indexing on user_id field\n\nWould you like me to implement these changes?",
    timestamp: "Just now",
  },
];

export default function AIShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="ai-showcase" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300 font-medium">AI Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Integration Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building intelligent systems that understand, learn, and adapt
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${capability.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 relative z-10">{capability.title}</h3>
                <p className="text-gray-400 mb-4 relative z-10">{capability.description}</p>

                <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5 relative z-10">
                  <p className="text-sm text-gray-300 italic">{capability.example}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/10 overflow-hidden">
            <div className="bg-slate-800/50 px-6 py-4 border-b border-white/10 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm font-medium ml-2">AI Assistant Chat</span>
            </div>

            <div className="p-8 space-y-6">
              {chatExample.map((chat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: chat.role === 'user' ? 50 : -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.3 }}
                  className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${chat.role === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl p-4 ${
                      chat.role === 'user'
                        ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                        : 'bg-slate-800/50 border border-white/10 text-gray-300'
                    }`}>
                      <p className="whitespace-pre-line leading-relaxed">{chat.message}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 px-2">{chat.timestamp}</p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex items-center gap-2 text-gray-400"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex gap-1"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </motion.div>
                <span className="text-sm">AI is thinking...</span>
              </motion.div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-center text-gray-400 mt-8"
          >
            This is a demonstration of AI-powered interfaces I build. The actual implementation includes
            <span className="text-purple-400 font-semibold"> streaming responses, context management, and intelligent error handling</span>.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
