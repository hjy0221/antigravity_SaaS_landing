"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
    {
        name: "BASIC",
        priceMonthly: 0,
        priceYearly: 0,
        description: "개인용 기본 글쓰기 도구",
        features: [
            "5 docs per month",
            "Basic Grammar Check",
            "Email Support",
        ],
        buttonText: "Start Free",
        buttonVariant: "outline",
        popular: false,
    },
    {
        name: "PROFESSIONAL",
        priceMonthly: 19,
        priceYearly: 15,
        description: "콘텐츠 제작자를 위한 최적의 선택",
        features: [
            "Unlimited docs",
            "Advanced AI Assistant",
            "Priority 24/7 Support",
            "API Access",
        ],
        buttonText: "Get Started Pro",
        buttonVariant: "solid",
        popular: true,
    },
    {
        name: "ENTERPRISE",
        priceMonthly: 49,
        priceYearly: 39,
        description: "팀과 대규모 비즈니스를 위한 솔루션",
        features: [
            "Everything in Pro",
            "Custom AI training",
            "Dedicated account manager",
            "SSO & Team Controls",
        ],
        buttonText: "Contact Sales",
        buttonVariant: "outline",
        popular: false,
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight"
                    >
                        당신에게 맞는 요금제를 선택하세요
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center p-1 bg-gray-100 rounded-full"
                    >
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors z-10 ${!isYearly ? "text-gray-900 shadow-sm bg-white" : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`relative px-6 py-2 text-sm font-medium rounded-full transition-colors z-10 flex items-center gap-1.5 ${isYearly ? "text-gray-900 shadow-sm bg-white" : "text-gray-500 hover:text-gray-900"
                                }`}
                        >
                            Yearly
                            <span className="text-xs bg-indigo-100 text-indigo-700 font-bold px-1.5 py-0.5 rounded-full">
                                20% Off
                            </span>
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 + 0.2 }}
                            className={`relative rounded-3xl p-8 bg-white flex flex-col ${plan.popular
                                    ? "border-2 border-indigo-600 shadow-xl shadow-indigo-100 transform md:-translate-y-4"
                                    : "border border-gray-200 shadow-md"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-sm font-semibold text-gray-500 tracking-wider mb-2">
                                    {plan.name}
                                </h3>
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-4xl font-extrabold text-gray-900">
                                        ${isYearly ? plan.priceYearly : plan.priceMonthly}
                                    </span>
                                    <span className="text-gray-500 font-medium text-sm">/month</span>
                                </div>
                                <p className="text-gray-500 text-sm">{plan.description}</p>
                            </div>

                            <div className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <Check className="w-5 h-5 text-indigo-600" />
                                        </div>
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`w-full py-3 px-6 rounded-xl text-sm font-semibold text-center transition-colors focus:ring-4 focus:ring-indigo-200 ${plan.buttonVariant === 'solid'
                                        ? "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md"
                                        : "bg-white text-indigo-600 border-2 border-indigo-100 hover:border-indigo-200 hover:bg-indigo-50"
                                    }`}
                            >
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
