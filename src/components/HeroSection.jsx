import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ── Full ornamental corner SVG ── */
const OrnCorner = ({ style = {} }) => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ width: 64, height: 64, position: 'absolute', opacity: 0.7, ...style }}>
    {/* Main curve */}
    <path d="M4 4 Q32 4 32 32" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M8 4 Q36 8 36 36" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeLinecap="round" fill="none"/>
    {/* Inner details */}
    <circle cx="16" cy="16" r="6" fill="none" stroke="#C9A84C" strokeWidth="1.2"/>
    <path d="M16 8 Q21 12 16 16 Q11 12 16 8Z" fill="#C9A84C" opacity="0.8"/>
    <path d="M8 16 Q12 21 16 16 Q12 11 8 16Z" fill="#C9A84C" opacity="0.75"/>
    <path d="M16 24 Q21 20 16 16 Q11 20 16 24Z" fill="#C9A84C" opacity="0.6"/>
    <path d="M24 16 Q20 11 16 16 Q20 21 24 16Z" fill="#C9A84C" opacity="0.65"/>
    <circle cx="16" cy="16" r="2.5" fill="#C9A84C" opacity="0.9"/>
    {/* Outer dots */}
    <circle cx="32" cy="7"  r="2.5" fill="#C9A84C" opacity="0.5"/>
    <circle cx="7"  cy="32" r="2.5" fill="#C9A84C" opacity="0.5"/>
    <circle cx="44" cy="9"  r="2" fill="#C9A84C" opacity="0.4"/>
    <circle cx="9"  cy="44" r="2" fill="#C9A84C" opacity="0.4"/>
    {/* Leaf accents */}
    <path d="M36 12 Q44 22 36 32 Q28 22 36 12Z" fill="#C9A84C" opacity="0.4"/>
  </svg>
);

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.4,0,0.2,1] } },
};

const HeroSection = () => {
  const { couple, wedding, venue } = weddingData;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center py-16 px-4 overflow-hidden bg-sage-to-ivory">

      {/* Large watermark ❋ */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            fontFamily: 'serif', fontSize: 'clamp(300px, 60vw, 500px)',
            color: 'rgba(201,168,76,0.04)', lineHeight: 1, userSelect: 'none',
          }}>❋</motion.span>
      </div>

      {/* Background corner florals */}
      <OrnCorner style={{ top: 16, left: 16 }} />
      <OrnCorner style={{ top: 16, right: 16, transform: 'scaleX(-1)' }} />
      <OrnCorner style={{ bottom: 16, left: 16, transform: 'scaleY(-1)' }} />
      <OrnCorner style={{ bottom: 16, right: 16, transform: 'scale(-1,-1)' }} />

      {/* Main Card */}
      <motion.div
        variants={container} initial="hidden" animate="visible"
        className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center justify-center p-8 bg-glass shadow-glass rounded-2xl text-center"
      >
        {/* Inner small ornament corners */}
        <OrnCorner style={{ top: 8, left: 8, width: 40, height: 40, opacity: 0.5 }} />
        <OrnCorner style={{ top: 8, right: 8, transform: 'scaleX(-1)', width: 40, height: 40, opacity: 0.5 }} />
        <OrnCorner style={{ bottom: 8, left: 8, transform: 'scaleY(-1)', width: 40, height: 40, opacity: 0.5 }} />
        <OrnCorner style={{ bottom: 8, right: 8, transform: 'scale(-1,-1)', width: 40, height: 40, opacity: 0.5 }} />

        {/* Top Blessing */}
        <motion.div variants={item} className="mb-8 mt-4 flex flex-col items-center">
          {weddingData.assets.ganpatiImage && (
            <img 
              src={weddingData.assets.ganpatiImage} 
              alt="Shree Ganeshay Namah" 
              style={{ width: 84, height: 84, objectFit: 'contain', marginBottom: 20, opacity: 0.9 }} 
            />
          )}
          <p style={{ fontFamily: 'var(--font-lora)', color: 'var(--color-gold-deep)',
            fontSize: 11, letterSpacing: '0.38em', textTransform: 'uppercase' }}>
            {wedding.blessing}
          </p>
        </motion.div>

        <motion.p variants={item}
          style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', color: 'var(--color-sage-mid)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', marginBottom: 24 }}>
          {wedding.subtitle}
        </motion.p>

        {/* Divider */}
        <motion.div variants={item} className="ornament-row" style={{ marginBottom: 24, maxWidth: 280, margin: '0 auto 24px' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: 18 }}>✦</span>
        </motion.div>

        {/* Couple Names */}
        <motion.h1 variants={item}
          style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-choco)',
            fontSize: 'clamp(2.8rem, 10vw, 4.2rem)', fontWeight: 400,
            lineHeight: 1.1, margin: '0 0 6px', letterSpacing: '0.02em',
            textShadow: '0 4px 16px rgba(44,24,16,0.06)' }}>
          {couple.groomName}
        </motion.h1>

        <motion.div variants={item}
          style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-gold)',
            fontSize: 'clamp(3.5rem, 11vw, 5.5rem)', fontWeight: 300,
            lineHeight: 0.8, margin: '8px 0', opacity: 0.85 }}>
          &amp;
        </motion.div>

        <motion.h1 variants={item}
          style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-choco)',
            fontSize: 'clamp(2.8rem, 10vw, 4.2rem)', fontWeight: 400,
            lineHeight: 1.1, margin: '6px 0 26px', letterSpacing: '0.02em',
            textShadow: '0 4px 16px rgba(44,24,16,0.06)' }}>
          {couple.brideName}
        </motion.h1>

        {/* Tagline */}
        <motion.p variants={item}
          style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
            color: 'var(--color-maroon)', fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)',
            marginBottom: 26, letterSpacing: '0.02em' }}>
          Are getting married
        </motion.p>

        {/* Divider */}
        <motion.div variants={item} className="ornament-row" style={{ marginBottom: 26, maxWidth: 220, margin: '0 auto 26px' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: 16 }}>❋</span>
        </motion.div>

        {/* Date & Venue */}
        <motion.div variants={item} style={{ marginBottom: 12 }}>
          <p style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-choco)',
            fontSize: 'clamp(1.3rem, 4.5vw, 1.8rem)', fontWeight: 500, marginBottom: 8 }}>
            {wedding.weddingDate}
          </p>
          <p style={{ fontFamily: 'var(--font-lora)', color: 'var(--color-sage-dark)',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', opacity: 0.9 }}>
            {wedding.weddingTime} · {venue.name}, Sangamner
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div variants={item} className="ornament-row" style={{ margin: '26px auto', maxWidth: 180 }}>
          <span style={{ color: 'var(--color-gold)', fontSize: 14 }}>✦</span>
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={item}>
          <button
            onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, var(--color-gold-deep) 0%, var(--color-gold) 50%, var(--color-gold-light) 100%)',
              color: '#FFF', border: 'none',
              padding: '14px 36px', borderRadius: 50,
              fontFamily: 'var(--font-lora)', fontStyle: 'italic',
              fontSize: 15, cursor: 'pointer',
              boxShadow: '0 6px 24px rgba(120,80,20,0.3)',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 10px 32px rgba(120,80,20,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 6px 24px rgba(120,80,20,0.3)'; }}
          >
            View Wedding Details ↓
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;
