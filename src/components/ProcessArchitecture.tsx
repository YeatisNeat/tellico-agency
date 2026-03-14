'use client'

import React from 'react'
import { motion } from 'framer-motion'

const steps = [
    {
        step: "01",
        title: "The Deep Audit",
        description: "We analyze your current tech stack, from your warehouse spreadsheets to your website's SEO health, and identify the exact bottlenecks costing you money."
    },
    {
        step: "02",
        title: "Custom Engineering",
        description: "Our dedicated team of engineers builds your solution from the ground up, whether that is a Python data pipeline, an Odoo module, or a React frontend."
    },
    {
        step: "03",
        title: "Deployment & Handoff",
        description: "We launch the system, train your team, and ensure everything runs flawlessly."
    }
]

export default function ProcessArchitecture() {
    return (
        <section id="process" className="py-24 border-y border-border">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">How We Work</h2>
                    <p className="text-slate-400 max-w-xl mx-auto">From diagnostic to deployment, we are your engineering partners.</p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line for desktop/mobile */}
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-border md:block hidden" />

                    <div className="flex flex-col gap-12">
                        {steps.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="flex-1 text-center md:text-right">
                                    {index % 2 === 0 ? (
                                        <div className="space-y-4">
                                            <span className="text-accent text-6xl font-black opacity-20">{item.step}</span>
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                            <p className="text-slate-400 max-w-sm ml-auto">{item.description}</p>
                                        </div>
                                    ) : <div className="hidden md:block" />}
                                </div>

                                <div className="z-10 bg-accent w-4 h-4 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)]" />

                                <div className="flex-1 text-center md:text-left">
                                    {index % 2 !== 0 ? (
                                        <div className="space-y-4">
                                            <span className="text-accent text-6xl font-black opacity-20">{item.step}</span>
                                            <h3 className="text-2xl font-bold">{item.title}</h3>
                                            <p className="text-slate-400 max-w-sm mr-auto">{item.description}</p>
                                        </div>
                                    ) : <div className="hidden md:block" />}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
