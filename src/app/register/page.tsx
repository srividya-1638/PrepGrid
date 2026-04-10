"use client";

import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <main className="min-h-screen relative flex items-center justify-center py-20 px-4 bg-[#020617] overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md glass-card p-10 relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center mb-4 border border-pink-500/20">
            <UserPlus className="w-6 h-6 text-pink-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Create Account</h2>
          <p className="text-slate-400 text-sm">Start your interview preparation journey</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); router.push('/dashboard'); }}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-12 glow-button bg-pink-500 hover:bg-pink-600 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <span className="relative z-10">Sign Up</span>
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="text-pink-400 hover:text-pink-300 font-medium">
            Sign in
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
