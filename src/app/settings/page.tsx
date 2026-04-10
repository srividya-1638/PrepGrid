"use client";

import { motion } from "framer-motion";
import { Bell, ChevronLeft, Lock, Settings as SettingsIcon, User } from "lucide-react";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#020617] p-8 md:p-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 mb-4 text-sm font-medium">
              <ChevronLeft className="w-4 h-4" /> Back to Dashboard
            </Link>
            <h1 className="text-3xl font-heading font-bold mb-2 flex items-center gap-3">
              <SettingsIcon className="text-slate-300" /> Settings
            </h1>
            <p className="text-slate-400">Manage your account preferences and profile details.</p>
          </div>
        </header>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col gap-2">
            <button className="text-left px-4 py-2 bg-white/10 text-white rounded-lg font-medium">Profile</button>
            <button className="text-left px-4 py-2 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Account Security</button>
            <button className="text-left px-4 py-2 text-slate-400 hover:bg-white/5 hover:text-white rounded-lg transition-colors">Notifications</button>
          </div>

          <div className="md:col-span-3 glass-card p-8">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
              <User className="w-5 h-5" /> Profile Information
            </h2>
            
            <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-2xl font-bold">
                  AL
                </div>
                <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors">
                  Change Avatar
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">First Name</label>
                  <input type="text" defaultValue="Alex" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-100" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Last Name</label>
                  <input type="text" defaultValue="Lee" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-100" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Email Address</label>
                <input type="email" defaultValue="alex@example.com" disabled className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-slate-400 opacity-70 cursor-not-allowed" />
              </div>

              <div className="pt-4 border-t border-white/10">
                <button className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg text-white font-medium transition-colors">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
