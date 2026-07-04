import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const InvitationMessage = () => {
  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #EDF2ED 0%, #FAF7F0 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-2xl mx-auto"
      >
        <div className="invitation-card px-8 py-10 sm:px-12 sm:py-14 text-center relative">
          {/* Decorative large background ❋ */}
          <span className="pointer-events-none select-none absolute inset-0 flex items-center justify-center text-[10rem] leading-none"
            style={{ color: 'rgba(201,168,76,0.04)', zIndex: 0 }}>❋</span>

          <div className="relative z-10">
            {/* Top ornament */}
            <p className="font-lora text-3xl mb-4" style={{ color: 'rgba(201,168,76,0.6)' }}>✿</p>

            {/* Label */}
            <p className="font-lora text-xs tracking-[0.35em] uppercase mb-4" style={{ color: 'var(--color-gold-dark)' }}>
              With Heartfelt Warmth
            </p>

            {/* Gold top divider */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold-light))' }} />
              <span className="text-sm" style={{ color: 'var(--color-gold)' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--color-gold-light), transparent)' }} />
            </div>

            {/* Message */}
            <p className="font-lora text-base sm:text-lg leading-8 sm:leading-9" style={{ color: 'rgba(44,24,16,0.8)' }}>
              {weddingData.invitationMessage}
            </p>

            {/* Gold bottom divider */}
            <div className="flex items-center gap-3 mt-6 mb-4">
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold-light))' }} />
              <span className="text-sm" style={{ color: 'var(--color-gold)' }}>✦</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, var(--color-gold-light), transparent)' }} />
            </div>

            {/* Couple */}
            <p className="font-serif text-xl font-medium" style={{ color: 'var(--color-choco)' }}>
              {weddingData.couple.groomName} &amp; {weddingData.couple.brideName}
            </p>
            <p className="font-lora italic text-sm mt-1" style={{ color: 'var(--color-sage)' }}>
              {weddingData.wedding.weddingDate}
            </p>

            {/* Bottom ornament */}
            <p className="font-lora text-3xl mt-4" style={{ color: 'rgba(201,168,76,0.6)' }}>✿</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default InvitationMessage;
