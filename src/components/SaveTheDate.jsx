import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* Sparkle dots */
const Sparkles = () => {
  const positions = [
    { t:'6%',  l:'5%',  d:0.0 }, { t:'10%', r:'6%',  d:0.6 },
    { t:'80%', l:'4%',  d:1.2 }, { t:'82%', r:'5%',  d:1.8 },
    { t:'92%', l:'20%', d:0.4 }, { t:'90%', r:'18%', d:1.0 },
    { t:'40%', l:'3%',  d:2.2 }, { t:'42%', r:'4%',  d:0.8 },
  ];
  return (
    <>
      {positions.map((p, i) => (
        <span key={i} style={{
          position: 'absolute', pointerEvents: 'none',
          top: p.t, left: p.l, right: p.r,
          fontSize: 10, color: 'rgba(201,168,76,0.7)',
          animation: `twinkle ${3 + i * 0.4}s ${p.d}s ease-in-out infinite`,
        }}>✦</span>
      ))}
    </>
  );
};

const SaveTheDate = () => {
  const { couple, wedding, venue } = weddingData;

  return (
    <section className="py-20 px-4 bg-ivory-to-sage overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.94 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-sm mx-auto"
      >
        <div className="std-card relative" style={{ padding: 'clamp(2.5rem,7vw,3.5rem) clamp(2rem,6vw,3rem)' }}>
          <Sparkles />
          <div className="shimmer-bar" />

          {/* Inner ring border */}
          <div style={{
            position: 'absolute', inset: 12,
            border: '1.5px solid rgba(160,120,48,0.25)',
            borderRadius: '1.2rem', pointerEvents: 'none',
          }}/>
          {/* Second inner dashed border */}
          <div style={{
            position: 'absolute', inset: 18,
            border: '1px dashed rgba(160,120,48,0.18)',
            borderRadius: '0.9rem', pointerEvents: 'none',
          }}/>

          {/* SAVE THE DATE label */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-lora)', textTransform: 'uppercase',
              letterSpacing: '0.45em', fontSize: 10,
              color: 'rgba(122,88,32,0.85)', marginBottom: 16, textAlign: 'center',
            }}>
            Save The Date
          </motion.p>

          {/* Top divider */}
          <div className="ornament-row" style={{ marginBottom: 20, maxWidth: 220, margin: '0 auto 20px' }}>
            <span style={{ color: 'rgba(160,120,48,0.6)', fontSize: 14 }}>✦</span>
          </div>

          {/* Date with embossed gold effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            style={{ textAlign: 'center', marginBottom: 20 }}
          >
            <p style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(3.5rem, 14vw, 5.5rem)', fontWeight: 400,
              lineHeight: 0.95, color: '#A07830',
              textShadow: '1px 2px 2px rgba(255,255,255,0.7), -1px -1px 2px rgba(120,80,20,0.2)',
              letterSpacing: '-0.02em', marginBottom: 4,
            }}>
              09 July
            </p>
            <p style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: 'clamp(1.8rem, 7vw, 2.6rem)', color: '#7A5820',
              textShadow: '1px 1px 1px rgba(255,255,255,0.6), -1px -1px 1px rgba(120,80,20,0.15)',
              letterSpacing: '0.08em',
            }}>
              2026
            </p>
          </motion.div>

          {/* Floral center divider */}
          <div style={{ textAlign: 'center', marginBottom: 16, color: 'rgba(160,120,48,0.5)', fontSize: 20 }}>❋</div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', marginBottom: 22 }}
          >
            <p style={{
              fontFamily: 'var(--font-lora)', fontStyle: 'italic',
              fontSize: 'clamp(0.9rem, 2.8vw, 1.1rem)',
              color: 'rgba(122,88,32,0.9)', marginBottom: 6,
            }}>Wedding Ceremony</p>
            <p style={{
              fontFamily: 'var(--font-lora)',
              fontSize: 'clamp(0.8rem, 2.2vw, 0.95rem)',
              color: 'rgba(122,88,32,0.7)',
            }}>{wedding.weddingTime} · {venue.name}</p>
          </motion.div>

          {/* Bottom divider */}
          <div className="ornament-row" style={{ marginBottom: 18, maxWidth: 200, margin: '0 auto 18px' }}>
            <span style={{ color: 'rgba(160,120,48,0.5)', fontSize: 13 }}>✦</span>
          </div>

          {/* Names */}
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}
            style={{
              fontFamily: 'var(--font-garamond)', textAlign: 'center',
              fontSize: 'clamp(1.4rem, 5.5vw, 2rem)', fontWeight: 500,
              color: 'var(--color-gold-deep)', letterSpacing: '0.02em',
            }}>
            {couple.groomName} <span style={{ fontSize: '0.8em', color: 'var(--color-gold-dark)' }}>&amp;</span> {couple.brideName}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default SaveTheDate;
