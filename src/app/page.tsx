"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, LineChart, PlayCircle, Trophy, Users } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "AI Mock Interviews",
    description: "Practice behavioral and technical rounds with an AI interviewer tailored to your role.",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
  },
  {
    title: "Coding Practice",
    description: "Solve handpicked, frequently asked DSA questions with our built-in compiler.",
    icon: <Code2 className="w-6 h-6 text-pink-400" />,
  },
  {
    title: "Performance Analytics",
    description: "Track your progress, pinpoint weaknesses, and watch your skills grow over time.",
    icon: <LineChart className="w-6 h-6 text-purple-400" />,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[#020617]">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card rounded-none border-t-0 border-x-0 !border-b-white/5 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-8 h-8 text-indigo-400" />
          <span className="font-heading font-bold text-2xl tracking-tight">PrepGrid</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/practice" className="text-sm font-medium hover:text-indigo-400 transition-colors">Practice</Link>
          <Link href="/interview" className="text-sm font-medium hover:text-indigo-400 transition-colors">AI Interview</Link>
          <Link href="/login" className="text-sm font-medium hover:text-indigo-400 transition-colors">Log In</Link>
          <Link href="/register" className="text-sm font-semibold bg-white text-slate-900 px-5 py-2 rounded-full hover:bg-slate-200 transition-colors">Get Started</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-48 pb-20 px-8 max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm border-l border-white/10 pl-2">V1.0 is now live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-heading font-bold tracking-tighter mb-6 leading-[1.1]"
        >
          Master the Interview.<br />
          <span className="gradient-text">Land the Job.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10"
        >
          Your all-in-one platform for technical interview preparation. Practice coding, take AI-driven mock interviews, and get personalized feedback.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <Link href="/register" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-indigo-500 px-8 font-medium text-white transition-all hover:bg-indigo-600 w-48">
            <span className="mr-2">Start for free</span>
            <Users className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-24 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
