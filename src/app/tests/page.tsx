"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, ChevronLeft, Clock, PlayCircle } from "lucide-react";
import Link from "next/link";

export default function TestsPage() {
  const quizzes = [
    { title: "React Fundamentals", duration: "15 mins", questions: 20, level: "Beginner" },
    { title: "Advanced System Design", duration: "45 mins", questions: 30, level: "Hard" },
    { title: "JavaScript Closures & Scope", duration: "20 mins", questions: 15, level: "Intermediate" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] p-8 md:p-12 relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 mb-4 text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
              <BookOpen className="text-pink-400" /> Topic Quizzes
            </h1>
            <p className="text-slate-400">Test your knowledge with AI-generated timed quizzes.</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizzes.map((quiz, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col hover:-translate-y-1 transition-transform"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs px-2 py-1 rounded font-medium ${quiz.level === 'Hard' ? 'bg-red-500/10 text-red-400' : quiz.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-green-500/10 text-green-400'}`}>
                  {quiz.level}
                </span>
                <BookOpen className="w-5 h-5 text-slate-500" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-slate-100">{quiz.title}</h3>
              
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-6 flex-1">
                <div className="flex items-center gap-1"><Clock className="w-4 h-4" /> {quiz.duration}</div>
                <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {quiz.questions} Qs</div>
              </div>
              
              <button className="w-full py-3 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                <PlayCircle className="w-4 h-4" /> Start Quiz
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
