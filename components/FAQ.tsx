"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "무료 체험은 어떻게 진행되나요?",
        answer: "가입 후 30일 동안 WriteFlow의 모든 프리미엄 기능을 무료로 이용하실 수 있습니다. 결제 정보 등록 없이 체험이 시작됩니다.",
    },
    {
        question: "언제든지 구독을 취소할 수 있나요?",
        answer: "네, 물론입니다. WriteFlow는 사용자의 자유로운 이용을 보장합니다. 계정 설정 페이지에서 언제든지 구독 해지가 가능하며, 남은 기간 동안은 모든 기능을 정상적으로 이용하실 수 있습니다.",
    },
    {
        question: "제 데이터는 안전한가요?",
        answer: "모든 사용자의 데이터는 최고 수준의 암호화 기술로 보호되며, AI 학습에 절대 활용되지 않습니다. 엔터프라이즈 요금제는 추가적인 보안 제어 기능을 제공합니다.",
    },
    {
        question: "환불이 가능합니까?",
        answer: "유료 구독 결제 후 7일 이내에 서비스 불만족 시 100% 환불해 드립니다. 고객 지원팀에 문의해 주시면 신속하게 처리해 드립니다.",
    },
    {
        question: "어떤 결제 수단을 지원하나요?",
        answer: "해외 결제가 가능한 모든 신용카드(Visa, Mastercard, Amex 등) 및 주요 간편 결제 서비스를 지원합니다.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // 2nd FAQ open by default like the design

    return (
        <section id="faq" className="py-24 bg-gray-50/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
                    >
                        자주 묻는 질문
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500"
                    >
                        WriteFlow에 대해 더 자세히 알아보세요
                    </motion.p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => {
                        const isOpen = openIndex === idx;

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <span className={`text-base font-semibold ${isOpen ? 'text-indigo-600' : 'text-gray-900'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-1 rounded-full ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'text-gray-400'}`}>
                                        {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
