import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { weddingData } from '../data/index.js';

const FamilySection = () => {
  const [expanded, setExpanded] = useState(false);
  const { family } = weddingData;
  const visible = expanded ? family.members : family.members.slice(0, 2);

  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #EDF2ED 0%, #FAF7F0 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        {/* Label */}
        <p className="font-lora text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--color-gold-dark)' }}>
          Our Families
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-2" style={{ color: 'var(--color-choco)' }}>
          {family.heading}
        </h2>
        <div className="gold-divider my-6">
          <span style={{ color: 'var(--color-gold)' }}>✦</span>
        </div>

        {/* Main family line */}
        <div className="invitation-card px-8 py-8 mb-6">
          <span className="text-3xl mb-4 block">🌺</span>
          <p className="font-serif text-xl sm:text-2xl font-medium mb-1" style={{ color: 'var(--color-choco)' }}>
            {family.mainLine}
          </p>
          <p className="font-lora italic text-sm mt-2" style={{ color: 'var(--color-sage)' }}>
            joyfully invite you to celebrate
          </p>
        </div>

        {/* Members */}
        <div className="space-y-3">
          <AnimatePresence>
            {visible.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.08 }}
                className="invitation-card px-6 py-4"
              >
                <p className="font-lora text-base" style={{ color: 'var(--color-choco)' }}>{m.name}</p>
                {m.phone && (
                  <a href={`tel:${m.phone}`} className="font-lora text-sm mt-1 block" style={{ color: 'var(--color-sage)' }}>
                    {m.phone}
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {family.members.length > 2 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 flex items-center gap-2 mx-auto font-lora italic text-sm transition-colors"
            style={{ color: 'var(--color-gold-dark)' }}
          >
            {expanded ? <><ChevronUp size={16}/> Show Less</> : <><ChevronDown size={16}/> View All Invitees</>}
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default FamilySection;
