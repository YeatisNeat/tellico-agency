'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-90 transition-opacity">
                    Tallico
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#capabilities" className="text-sm font-medium hover:text-accent transition-colors">
                        Capabilities
                    </Link>
                    <Link href="#process" className="text-sm font-medium hover:text-accent transition-colors">
                        Process
                    </Link>
                    <Link href="#team" className="text-sm font-medium hover:text-accent transition-colors">
                        Team
                    </Link>
                    <Link
                        href="#contact"
                        className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-accent/90 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                    >
                        Apply for Pilot
                    </Link>
                </nav>

                {/* Mobile Menu Placeholder */}
                <div className="md:hidden">
                    <button className="text-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    </button>
                </div>
            </div>
        </motion.header>
    )
}
