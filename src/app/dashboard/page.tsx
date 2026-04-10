"use client";

import { motion } from "framer-motion";
import { Activity, BookOpen, Code2, Flame, LogOut, MessageSquare, Settings, User } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Sidebar */}
      <aside className="w-64 glass-card rounded-none border-t-0 border-l-0 border-b-0 hidden md:flex flex-col p-6 relative z-10">
        <div className="flex items-center gap-2 mb-10">
          <Activity className="w-8 h-8 text-indigo-400" />
          <span className="font-heading font-bold text-2xl tracking-tight">PrepGrid</span>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-indigo-500/10 text-indigo-400 font-medium border border-indigo-500/20">
            <User className="w-5 h-5" /> Dashboard
          </Link>
          <Link href="/practice" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all">
            <Code2 className="w-5 h-5" /> Practice
          </Link>
          <Link href="/interview" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all">
            <MessageSquare className="w-5 h-5" /> AI Interviews
          </Link>
          <Link href="/tests" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all">
            <BookOpen className="w-5 h-5" /> Quiz Tests
          </Link>
          <Link href="/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-all">
            <Settings className="w-5 h-5" /> Settings
          </Link>
        </nav>

        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-400/10 transition-all mt-auto">
          <LogOut className="w-5 h-5" /> Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 relative overflow-hidden overflow-y-auto">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <header className="mb-10 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-heading font-bold mb-2">Welcome back, Alex!</h1>
              <p className="text-slate-400">Here's your progress for this week.</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
              AL
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* Stat Cards */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 font-medium">Questions Solved</span>
                <Code2 className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="text-3xl font-bold mb-1">124<span className="text-sm text-slate-500 font-normal"> / 500</span></div>
              <div className="w-full bg-white/10 rounded-full h-1.5 mt-4">
                <div className="bg-indigo-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-slate-400 font-medium">Interviews Taken</span>
                <MessageSquare className="w-5 h-5 text-pink-400" />
              </div>
              <div className="text-3xl font-bold mb-1">12</div>
              <p className="text-sm text-green-400 flex items-center gap-1">+2 from last week</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full" />
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="text-slate-400 font-medium">Current Streak</span>
                <Flame className="w-5 h-5 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-400 relative z-10">7 Days</div>
              <p className="text-sm text-slate-400 mt-1 relative z-10">You're on fire! Keep it up.</p>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
          <div className="glass-card p-0 overflow-hidden">
            <div className="divide-y divide-white/5">
              {[
                { title: "Two Sum", type: "Coding Practice", status: "Solved", date: "Today", score: "Easy" },
                { title: "Frontend React Hooks", type: "AI Mock Interview", status: "Completed", date: "Yesterday", score: "85/100" },
                { title: "Valid Parentheses", type: "Coding Practice", status: "Attempted", date: "2 days ago", score: "Easy" },
              ].map((activity, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${activity.type === 'Coding Practice' ? 'bg-indigo-500/10 text-indigo-400' : 'bg-pink-500/10 text-pink-400'}`}>
                      {activity.type === 'Coding Practice' ? <Code2 className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-200">{activity.title}</h4>
                      <p className="text-sm text-slate-500">{activity.type}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-slate-300">{activity.status}</div>
                    <div className="text-sm text-slate-500 flex gap-2 justify-end">
                      <span>{activity.date}</span> &bull; <span className="text-indigo-400">{activity.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
