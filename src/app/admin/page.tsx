"use client";

import { motion } from "framer-motion";
import { CopyPlus, Edit2, LayoutDashboard, Search, Trash2, Users } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('questions');

  const questions = [
    { id: 1, title: "Two Sum", difficulty: "Easy", topic: "Arrays" },
    { id: 2, title: "Valid Parentheses", difficulty: "Easy", topic: "Strings" },
    { id: 3, title: "Merge K Sorted Lists", difficulty: "Hard", topic: "Linked Lists" },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Sidebar */}
      <aside className="w-64 glass-card rounded-none border-t-0 border-l-0 border-b-0 hidden md:flex flex-col p-6 relative z-10">
        <div className="flex items-center gap-2 mb-10">
          <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">A</div>
          <span className="font-heading font-bold text-xl tracking-tight">Admin<span className="text-pink-400">Panel</span></span>
        </div>

        <nav className="flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('questions')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-all ${activeTab === 'questions' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'}`}
          >
            <LayoutDashboard className="w-5 h-5" /> Questions Bank
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-all ${activeTab === 'users' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'}`}
          >
            <Users className="w-5 h-5" /> Manage Users
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 md:p-12 relative overflow-hidden overflow-y-auto">
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold font-heading">
                {activeTab === 'questions' ? 'Questions Bank Management' : 'Registered Users'}
              </h1>
              <p className="text-slate-400 text-sm">Add, edit, or remove resources from the PrepGrid platform.</p>
            </div>
            
            {activeTab === 'questions' && (
              <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors text-sm font-medium">
                <CopyPlus className="w-4 h-4" /> Add Question
              </button>
            )}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6">
              <div className="text-slate-400 text-sm font-medium mb-1">Total Questions</div>
              <div className="text-2xl font-bold">142</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-slate-400 text-sm font-medium mb-1">Total Users</div>
              <div className="text-2xl font-bold text-indigo-400">1,024</div>
            </div>
            <div className="glass-card p-6">
              <div className="text-slate-400 text-sm font-medium mb-1">Interviews Conducted</div>
              <div className="text-2xl font-bold text-green-400">5,280</div>
            </div>
          </div>

          {/* Table Area */}
          {activeTab === 'questions' && (
            <div className="glass-card overflow-hidden">
              <div className="p-4 border-b border-white/5 flex items-center justify-between">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input 
                    type="text" 
                    placeholder="Search questions..." 
                    className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-pink-500/50 w-64 text-slate-200"
                  />
                </div>
              </div>
              <table className="w-full text-left text-sm">
                <thead className="bg-white/[0.02] text-slate-400 uppercase text-xs font-medium">
                  <tr>
                    <th className="px-6 py-4">Title</th>
                    <th className="px-6 py-4">Difficulty</th>
                    <th className="px-6 py-4">Topic</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {questions.map((q) => (
                    <tr key={q.id} className="hover:bg-white/[0.01] transition-colors">
                      <td className="px-6 py-4 font-medium">{q.title}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-md text-xs font-medium ${
                          q.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400' : 
                          q.difficulty === 'Hard' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'
                        }`}>
                          {q.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4">{q.topic}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-end gap-2 text-slate-500">
                          <button className="hover:text-pink-400 transition-colors p-1"><Edit2 className="w-4 h-4" /></button>
                          <button className="hover:text-red-400 transition-colors p-1"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div className="glass-card p-12 flex flex-col items-center justify-center text-slate-400 text-center">
              <Users className="w-12 h-12 mb-4 opacity-50" />
              <p>User management table would appear here.</p>
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
}
