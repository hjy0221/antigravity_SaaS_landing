"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/50 border border-indigo-200 text-indigo-700 text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            <span>NEXT-GEN AI WRITING</span>
                        </div>

                        <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
                            AI와 함께 더 빠르게<br />
                            <span className="text-indigo-600">더 잘 쓰세요.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                            아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 단순한 글쓰기 보조를 넘어, 당신의 창의력을 극대화하는 AI 파트너입니다.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#start-free"
                                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transform hover:-translate-y-0.5"
                            >
                                무료 체험 시작
                            </Link>
                            <Link
                                href="#demo"
                                className="inline-flex justify-center items-center px-8 py-3.5 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-gray-300 hover:bg-gray-50 transition-all"
                            >
                                데모 보기
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right side graphic piece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative lg:ml-10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-purple-200 rounded-3xl blur-3xl opacity-50 transform -rotate-3 scale-105" />

                        <div className="relative bg-[#1a1b1e] rounded-2xl shadow-2xl border border-gray-800 overflow-hidden aspect-[4/3] flex flex-col">
                            {/* Fake Window Header */}
                            <div className="flex items-center px-4 py-3 border-b border-gray-800 bg-[#1e1f24]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="mx-auto text-xs font-medium text-gray-400">WriteFlow Editor</div>
                                <div className="w-10" />
                            </div>

                            {/* Fake UI Body */}
                            <div className="flex-1 p-6 relative">
                                {/* Simulated text generation */}
                                <div className="space-y-4 max-w-md">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 1 }}
                                        className="h-4 bg-gray-700 rounded w-3/4"
                                    />
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 1.5 }}
                                        className="h-4 bg-gray-700 rounded w-full"
                                    />
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 2 }}
                                        className="h-4 bg-gray-700 rounded w-5/6"
                                    />
                                </div>

                                {/* Floating UI element */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 3 }}
                                    className="absolute bottom-8 right-8 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
                                >
                                    <Sparkles className="w-3 h-3" />
                                    AI is writing...
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
