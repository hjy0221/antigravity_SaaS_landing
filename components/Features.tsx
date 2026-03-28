"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, BadgeCheck, Languages, FileText, Users } from "lucide-react";

const features = [
    {
        icon: Sparkles,
        title: "AI Assistant",
        description: "문맥을 이해하고 다음 문장을 제안하는 스마트한 AI 동료와 함께하세요.",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        icon: CheckCircle,
        title: "Perfect Grammar",
        description: "실시간 문법 및 스타일 교정으로 오타 없는 완벽한 문서를 완성합니다.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: BadgeCheck,
        title: "Brand Voice",
        description: "브랜드만의 독특한 말투와 톤앤매너를 학습시켜 일관된 메시지를 전달하세요.",
        color: "bg-rose-100 text-rose-600",
    },
    {
        icon: Languages,
        title: "50+ Languages",
        description: "한국어를 포함한 50개 이상의 언어를 원어민 수준의 자연스러운 문장으로 변환합니다.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: FileText,
        title: "100+ Templates",
        description: "블로그, 이메일, 광고 카피 등 다양한 목적에 맞는 최적화된 템플릿을 제공합니다.",
        color: "bg-emerald-100 text-emerald-600",
    },
    {
        icon: Users,
        title: "Real-time Collaboration",
        description: "팀원들과 함께 실시간으로 문서를 편집하고 AI의 도움을 받아보세요.",
        color: "bg-orange-100 text-orange-600",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    },
};

export default function Features() {
    return (
        <section id="features" className="py-24 bg-gray-50/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight"
                    >
                        글쓰기의 모든 과정이 쉬워집니다
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500"
                    >
                        혁신적인 AI 기술로 콘텐츠 생산 방식을 혁명적으로 바꿉니다
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
