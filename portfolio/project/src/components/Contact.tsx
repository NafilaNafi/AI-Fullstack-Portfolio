import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "nafila@outlook.com",
    href: "mailto:nafila@outlook.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/nafia-m/",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View my code",
    href: "https://github.com/NafilaNafi",
    color: "from-pink-500 to-orange-500",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 12,
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Open to opportunities, collaborations, and interesting conversations about AI and web development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;

              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">{method.label}</h3>
                  <p className="text-gray-400 mb-4 relative z-10">{method.value}</p>

                  <div className="flex items-center gap-2 text-purple-400 font-medium relative z-10">
                    <span className="text-sm">Get in touch</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl border border-white/10 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Available for Full-Time Opportunities
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm currently exploring exciting opportunities where I can leverage my frontend expertise and AI integration skills to build innovative products. If you're looking for an engineer who combines technical excellence with creative problem-solving, let's connect!
            </p>

            <a
              href="mailto:nafila@outlook.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-16 pt-16 border-t border-white/10"
        >
          <p className="text-gray-400 mb-2">
            Designed & Built by Nafila M
          </p>
          <p className="text-gray-400 text-sm mb-4">
            <a href="tel:+919597035866" className="hover:text-purple-400 transition-colors duration-300">
              +91 9597035866
            </a>
          </p>
          <p className="text-gray-500 text-sm">
            © 2025 All rights reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}
