import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const Footer = () => {
  const { couple, wedding, footerLine } = weddingData;

  return (
    <footer className="relative overflow-hidden" style={{
      paddingBottom: 'clamp(8rem, 25vw, 10rem)',
      paddingTop: 'clamp(4.5rem, 10vw, 6rem)',
      paddingLeft: '1rem', paddingRight: '1rem',
      background: 'linear-gradient(155deg, #241408 0%, #3A2012 45%, #1C0F06 100%)',
    }}>
      {/* Background Soft radial glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 50% 50%, rgba(232,201,122,0.12) 0%, transparent 70%)',
      }}/>

      {/* Large background ❋ marks */}
      <span style={{ position: 'absolute', top: '-2rem', left: '-2rem', fontSize: 240,
        color: 'rgba(232,201,122,0.035)', userSelect: 'none', lineHeight: 1, zIndex: 1 }}>❋</span>
      <span style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', fontSize: 180,
        color: 'rgba(232,201,122,0.04)', userSelect: 'none', lineHeight: 1, zIndex: 1 }}>❋</span>

      {/* Decorative Outer Border */}
      <div style={{
        position: 'absolute', inset: 12, borderRadius: 32, zIndex: 2, pointerEvents: 'none',
        border: '1.5px solid rgba(201,168,76,0.15)',
      }}/>
      {/* Decorative Inner Border */}
      <div style={{
        position: 'absolute', inset: 20, borderRadius: 24, zIndex: 2, pointerEvents: 'none',
        border: '1px dashed rgba(201,168,76,0.1)',
      }}/>

      {/* Content Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: 'relative', zIndex: 10, maxWidth: 500, margin: '0 auto', textAlign: 'center' }}
      >
        {/* Top floral cluster */}
        <motion.div
          animate={{ y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 24, marginBottom: 18, color: 'rgba(232,201,122,0.45)', textShadow: '0 2px 8px rgba(232,201,122,0.2)' }}>
          🌸 ❋ 🌸
        </motion.div>

        {/* With Love */}
        <p style={{ fontFamily: 'var(--font-lora)', textTransform: 'uppercase',
          letterSpacing: '0.45em', fontSize: 11, color: 'rgba(232,201,122,0.6)', marginBottom: 20 }}>
          With Love
        </p>

        {/* Couple names — rich multi-stop gold gradient */}
        <h2 style={{
          fontFamily: 'var(--font-garamond)',
          fontSize: 'clamp(2.4rem, 9vw, 3.8rem)', fontWeight: 400,
          background: 'linear-gradient(135deg, #E8C97A 0%, #F5E6B8 25%, #C9A84C 50%, #A07830 80%, #7A5820 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: 6, lineHeight: 1.15, letterSpacing: '0.02em',
        }}>
          {couple.groomName} <span style={{ fontSize: '0.7em', color: 'rgba(201,168,76,0.8)' }}>&amp;</span> {couple.brideName}
        </h2>

        {/* Date */}
        <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
          color: 'rgba(232,201,122,0.85)', fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', marginBottom: 24 }}>
          {wedding.weddingDate}
        </p>

        {/* Gold divider */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 14,
          maxWidth: 280, margin: '0 auto 24px',
        }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5))' }}/>
          <span style={{ color: 'rgba(201,168,76,0.7)', fontSize: 18 }}>✦</span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.5), transparent)' }}/>
        </div>

        {/* Hashtag */}
        <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
          color: 'rgba(201,168,76,0.6)', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', marginBottom: 24 }}>
          {wedding.hashtag}
        </p>

        {/* Footer line */}
        <p style={{ fontFamily: 'var(--font-lora)', color: 'rgba(232,201,122,0.45)',
          fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', lineHeight: 1.8, maxWidth: 320, margin: '0 auto' }}>
          {footerLine}
        </p>

        {/* Bottom floral */}
        <motion.div
          animate={{ y: [0, 4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 20, marginTop: 32, color: 'rgba(232,201,122,0.3)' }}>
          🌸 🌿 🌸
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
