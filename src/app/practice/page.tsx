"use client";

import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import { BookOpen, CheckCircle, ChevronLeft, Play, Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PracticePage() {
  const [code, setCode] = useState("function twoSum(nums, target) {\n  // Write your code here\n  \n}");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("Running via Judge0...");
    
    try {
      // MOCK API CALL
      setTimeout(() => {
        setOutput("Output:\n[0, 1]\n\nPassed 3/3 test cases!");
        setIsRunning(false);
      }, 1500);
    } catch (e) {
      setOutput("Error executing code.");
      setIsRunning(false);
    }
  };

  return (
    <div className="h-screen bg-[#020617] flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 glass-card border-x-0 border-t-0 !border-b-white/5 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1">
            <ChevronLeft className="w-5 h-5" /> Back
          </Link>
          <div className="h-6 w-px bg-white/10" />
          <h1 className="font-semibold text-lg flex items-center gap-2">
            <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-md font-medium uppercase tracking-wider">Easy</span>
            1. Two Sum
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-white transition-colors bg-white/5 rounded-lg">
            <Settings className="w-5 h-5" />
          </button>
          <button 
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white rounded-lg transition-colors font-medium text-sm"
          >
            {isRunning ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Play className="w-4 h-4 fill-white" />}
            Run Code
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-medium text-sm">
            <CheckCircle className="w-4 h-4" />
            Submit
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden relative z-10">
        
        {/* Problem Description Panel */}
        <div className="w-full md:w-1/3 h-1/2 md:h-full overflow-y-auto p-6 border-b md:border-b-0 md:border-r border-white/5">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mb-4 font-heading">Two Sum</h2>
            <div className="flex gap-2 mb-6 text-sm">
              <span className="text-slate-400 bg-white/5 px-3 py-1 rounded-full">Arrays</span>
              <span className="text-slate-400 bg-white/5 px-3 py-1 rounded-full">Hash Table</span>
            </div>
            
            <p className="text-slate-300 leading-relaxed mb-4">
              Given an array of integers <code>nums</code> and an integer <code>target</code>, return indices of the two numbers such that they add up to <code>target</code>.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              You may assume that each input would have exactly one solution, and you may not use the same element twice.
            </p>
            
            <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl mb-4">
              <p className="font-semibold mb-2">Example 1:</p>
              <pre className="bg-black/50 p-3 rounded-lg text-sm font-mono text-slate-300">
                Input: nums = [2,7,11,15], target = 9{"\n"}
                Output: [0,1]{"\n"}
                Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
              </pre>
            </div>
          </div>
        </div>

        {/* Editor & Console Panel */}
        <div className="w-full md:w-2/3 h-1/2 md:h-full flex flex-col">
          {/* Editor */}
          <div className="flex-1 min-h-0 bg-[#1e1e1e] relative">
            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(val) => setCode(val || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'var(--font-inter)',
                padding: { top: 16 },
                scrollBeyondLastLine: false,
              }}
            />
          </div>
          
          {/* Console Output */}
          <div className="h-48 shrink-0 bg-[#020617] border-t border-white/5 relative flex flex-col">
            <div className="px-4 py-2 border-b border-white/5 text-xs font-medium text-slate-400 uppercase tracking-wider bg-white/[0.02] flex justify-between items-center">
              <span>Console</span>
            </div>
            <div className="flex-1 p-4 font-mono text-sm text-slate-300 overflow-y-auto whitespace-pre-wrap">
              {output || 'Run your code to see the output here.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
