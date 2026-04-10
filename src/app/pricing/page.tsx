"use client";

import { CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4 relative overflow-hidden">
      <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Simple, transparent pricing</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">Upgrade to Pro to unlock unlimited AI interviews, full access to our premium coding question bank, and detailed analytics.</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 relative z-10">
        {/* Free Tier */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">Free Tier</h2>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-4xl font-bold">$0</span>
            <span className="text-slate-400 mb-1">/month</span>
          </div>
          <p className="text-slate-400 mb-8 pb-8 border-b border-white/10">Perfect for trying out the platform and getting started.</p>
          
          <ul className="space-y-4 mb-8 flex-1">
            {['5 AI Interviews/month', '10 Practice Questions', 'Standard Community Support', 'Basic Analytics'].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <Link href="/dashboard" className="w-full py-4 rounded-xl text-center font-semibold bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
            Current Plan
          </Link>
        </motion.div>

        {/* Pro Tier */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-8 flex flex-col border-indigo-500/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="flex items-center gap-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              <Star className="w-3 h-3 fill-indigo-400" /> Most Popular
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2 gradient-text">Pro Tier</h2>
          <div className="flex items-end gap-1 mb-6">
            <span className="text-4xl font-bold">$15</span>
            <span className="text-slate-400 mb-1">/month</span>
          </div>
          <p className="text-slate-400 mb-8 pb-8 border-b border-white/10">Everything you need to master your technical interviews.</p>
          
          <ul className="space-y-4 mb-8 flex-1">
            {['Unlimited AI Interviews', 'Full access to 500+ Practice Questions', 'Detailed Performance Analytics', 'Priority Support', 'Access to Mock Tests (MCQs)'].map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
                <span className="text-slate-200">{feature}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 rounded-xl text-center font-semibold glow-button bg-indigo-500 hover:bg-indigo-600 transition-colors text-white z-10 relative">
            <span className="relative z-10">Upgrade to Pro</span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
