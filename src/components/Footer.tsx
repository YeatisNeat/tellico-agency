'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Building2, User, ChevronDown } from 'lucide-react'

export default function Footer() {
    return (
        <footer id="contact" className="py-24 bg-slate-950 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
                            Ready to upgrade your operations?
                        </h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-md">
                            Apply for our 2026 Q2 Pilot Program or schedule a diagnostic meeting with our founding engineers.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <div className="w-10 h-10 rounded-full bg-slate-900 border border-border flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <span>hello@tallico.com</span>
                            </div>
                        </div>

                        <div className="mt-12 pt-12 border-t border-border/50 text-slate-500 text-sm">
                            &copy; {new Date().getFullYear()} Tallico Tech Operations. Built for scale.
                        </div>
                    </motion.div>

                    {/* Right Side: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900 p-10 rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl -z-10" />

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Name</label>
                                    <div className="relative">
                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                                        <input
                                            type="text"
                                            placeholder="Jane Doe"
                                            className="w-full bg-slate-950 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent transition-all text-slate-200"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Company Name</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                                        <input
                                            type="text"
                                            placeholder="Acme Corp"
                                            className="w-full bg-slate-950 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent transition-all text-slate-200"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-600" />
                                    <input
                                        type="email"
                                        placeholder="jane@company.com"
                                        className="w-full bg-slate-950 border border-border rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-accent transition-all text-slate-200"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Biggest Bottleneck</label>
                                <div className="relative">
                                    <select
                                        className="w-full bg-slate-950 border border-border rounded-2xl py-4 px-6 focus:outline-none focus:border-accent transition-all text-slate-200 appearance-none"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select an option</option>
                                        <option value="inventory">Inventory</option>
                                        <option value="data">Data</option>
                                        <option value="web">Web Presence</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-600 pointer-events-none" />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-accent-foreground py-5 rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] mt-4"
                            >
                                Request a Meeting
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}
