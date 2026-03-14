'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-accent/5 blur-[100px] rounded-full" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block text-accent font-semibold tracking-wider text-sm mb-4 uppercase">
                            Specialized Tech Operations for Mid-Sized Business
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
                    >
                        Stop Running Your Business on <span className="text-accent underline decoration-accent/30 underline-offset-8">Broken Spreadsheets.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl"
                    >
                        Tallico builds custom data pipelines, implements automated ERP systems, and engineers digital storefronts so your business can scale without the chaos.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <a
                            href="#contact"
                            className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-accent/90 transition-all flex items-center justify-center group shadow-[0_0_30px_rgba(37,99,235,0.4)]"
                        >
                            Apply for our Pilot Program
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#capabilities"
                            className="w-full sm:w-auto border border-border bg-slate-900/50 hover:bg-slate-900 px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center"
                        >
                            View Our Capabilities
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
