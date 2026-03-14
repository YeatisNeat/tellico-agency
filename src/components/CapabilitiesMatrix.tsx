'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Database, BarChart3, Globe } from 'lucide-react'

const capabilities = [
    {
        icon: Database,
        title: "Business Operations (ERP)",
        description: "Stop running on broken spreadsheets. We centralize your inventory, sales, and logistics into one automated Odoo system so your business runs itself."
    },
    {
        icon: BarChart3,
        title: "Data & Intelligence",
        description: "We turn messy databases into clear decisions. Get real-time visibility into your profit margins and bottlenecks with custom data pipelines."
    },
    {
        icon: Globe,
        title: "Digital Presence & Growth",
        description: "Your digital storefront matters. We build lightning-fast, custom websites and optimize your search engine architecture to drive raw traffic and engagement."
    }
]

export default function CapabilitiesMatrix() {
    return (
        <section id="capabilities" className="py-24 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        We Build, Automate, and Scale.
                    </h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {capabilities.map((cap, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-slate-900/50 border border-border hover:border-accent/50 hover:bg-slate-900 transition-all shadow-xl"
                        >
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                                <cap.icon className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{cap.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {cap.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
