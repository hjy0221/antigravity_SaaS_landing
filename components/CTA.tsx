"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-indigo-600 rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-indigo-200"
                >
                    {/* Decorative gradients */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 opacity-20 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/3"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                            당신의 첫 문장을 <br />
                            지금 시작해보세요
                        </h2>
                        <p className="text-indigo-100 text-lg md:text-xl mb-10 max-w-xl mx-auto">
                            이미 10,000명 이상의 작가들이 WriteFlow로 생산성을 높이고 있습니다.
                        </p>
                        <button className="bg-white text-indigo-600 font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            30일 무료 체험 시작하기
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
