'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function TeamSection() {
    return (
        <section id="team" className="py-24 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8"
                    >
                        Elite Engineering. <br /><span className="text-accent">Zero Agency Bloat.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium"
                    >
                        When you hire massive agencies, your project gets handed off to junior devs. At Tallico, you work directly with our founding team of Systems Architects, Data Engineers, and Full-Stack Developers. You get elite, remote technical talent moving at startup speed.
                    </motion.p>
                </div>
            </div>
        </section>
    )
}
