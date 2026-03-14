'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Bell } from 'lucide-react'

export default function AlertBar() {
    return (
        <div className="bg-accent text-accent-foreground py-4 overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10 flex items-center justify-center gap-3">
                <Bell className="w-5 h-5 flex-shrink-0 animate-pulse" />
                <p className="text-sm md:text-base font-bold text-center tracking-tight">
                    2026 Q2 Pilot Program: We are selecting ONE mid-sized business partner for a comprehensive tech implementation with all engineering fees waived. Limited availability.
                </p>
            </div>
            {/* Subtle shine effect */}
            <motion.div
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-y-0 w-20 bg-white/20 skew-x-12 pointer-events-none"
            />
        </div>
    )
}
