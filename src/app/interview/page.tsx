"use client";

import { motion } from "framer-motion";
import { Mic, Send, StopCircle, Video } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function InterviewPage() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! I'm your AI interviewer. Today we'll be doing a mock interview for a Frontend Developer position. To start, could you explain the React component lifecycle to me?" }
  ]);
  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    
    // Simulate AI thinking and replying
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "ai", text: "That's a good start. Can you tell me more about how the useEffect hook maps to those lifecycle methods?" }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center p-4 md:p-8">
      {/* Header */}
      <header className="w-full max-w-4xl flex items-center justify-between mb-8 z-10 glass-card px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors">
            &larr; Back
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <h1 className="font-semibold text-lg">AI Mock Interview: Frontend Dev</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-green-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Session Active
          </span>
        </div>
      </header>

      {/* Main Interview Area */}
      <div className="w-full max-w-4xl flex-grow flex flex-col md:flex-row gap-6 mb-24 z-10">
        {/* Video / Avatar Placeholder */}
        <div className="w-full md:w-1/3 glass-card p-4 flex flex-col items-center justify-center min-h-[300px] relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-500/5" />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-4 border-indigo-500/30 flex items-center justify-center bg-indigo-500/10 mb-6">
              <Video className="w-10 h-10 text-indigo-400" />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-1">Alex (AI)</h3>
            <p className="text-slate-400 text-sm mb-4">Senior Frontend Engineer</p>
            
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  animate={{ height: ["10px", "24px", "10px"] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1.5 bg-indigo-400 rounded-full"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="w-full md:w-2/3 glass-card flex flex-col h-[500px] md:h-auto overflow-hidden">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[80%] p-4 rounded-xl ${
                  msg.role === "ai"
                    ? "bg-white/5 border border-white/10 rounded-tl-none self-start"
                    : "bg-indigo-600 border border-indigo-500 rounded-tr-none self-end"
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area (Fixed Bottom) */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#020617] via-[#020617] to-transparent z-20 flex justify-center pb-8 border-t border-white/5">
        <div className="w-full max-w-4xl flex items-end gap-3 glass-card p-2 rounded-2xl relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer, or use voice..."
            className="flex-1 bg-transparent border-none outline-none resize-none px-4 py-3 text-sm max-h-32 min-h-[50px]"
            rows={1}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div className="flex items-center gap-2 p-2">
            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`p-3 rounded-xl transition-all ${
                isRecording ? "bg-red-500/20 text-red-400" : "bg-white/5 hover:bg-white/10 text-slate-300"
              }`}
            >
              {isRecording ? <StopCircle className="w-5 h-5 animate-pulse" /> : <Mic className="w-5 h-5" />}
            </button>
            <button
              onClick={handleSend}
              className="p-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl transition-colors disabled:opacity-50"
              disabled={!input.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
