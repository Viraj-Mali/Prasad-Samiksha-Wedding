import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const pad = (n) => String(n).padStart(2, '0');

const CountdownTimer = () => {
  const target = new Date(weddingData.wedding.weddingDateISO).getTime();

  const getRemaining = () => {
    const diff = target - Date.now();
    if (diff <= 0) return null;
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  const Block = ({ value, label }) => (
    <motion.div
      key={value}
      initial={{ scale: 0.92 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.2 }}
      className="countdown-block flex flex-col items-center justify-center w-20 h-24 sm:w-24 sm:h-28"
    >
      <span className="font-serif text-3xl sm:text-4xl font-medium" style={{ color: 'var(--color-choco)' }}>
        {pad(value)}
      </span>
      <span className="font-lora text-xs mt-1 tracking-widest uppercase" style={{ color: 'var(--color-sage)' }}>
        {label}
      </span>
    </motion.div>
  );

  return (
    <section className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #EDF2ED 0%, #FAF7F0 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto text-center"
      >
        <p className="font-lora text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--color-gold-dark)' }}>
          Counting Down To
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-2" style={{ color: 'var(--color-choco)' }}>
          The Wedding
        </h2>
        <div className="gold-divider my-6">
          <span className="font-serif text-sm" style={{ color: 'var(--color-gold)' }}>✦</span>
        </div>

        {time ? (
          <div className="flex justify-center gap-3 sm:gap-4">
            <Block value={time.days}    label="Days"    />
            <Block value={time.hours}   label="Hours"   />
            <Block value={time.minutes} label="Minutes" />
            <Block value={time.seconds} label="Seconds" />
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="invitation-card py-8 px-6"
          >
            <p className="font-serif text-2xl font-medium" style={{ color: 'var(--color-maroon)' }}>
              🎊 The Wedding Ceremony Has Been Completed
            </p>
            <p className="font-lora italic text-base mt-2" style={{ color: 'var(--color-sage)' }}>
              Thank you for celebrating with us!
            </p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default CountdownTimer;
