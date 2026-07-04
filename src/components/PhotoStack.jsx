import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ── Elegant floral initials card ── */
const InitialCard = ({ initial, color, label, rotation = 0, style = {} }) => (
  <motion.div
    className="photo-frame"
    style={{
      position: 'absolute',
      background: `linear-gradient(155deg, ${color}15, ${color}08, #FAF7F0)`,
      boxShadow: '0 16px 40px rgba(44,24,16,0.15)',
      ...style,
    }}
    initial={{ opacity: 0, scale: 0.85, rotate: rotation * 0.4 }}
    whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
    whileHover={{ scale: 1.05, zIndex: 30, rotate: rotation * 1.2, transition: { duration: 0.4 } }}
  >
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 8,
    }}>
      {/* Floral ring */}
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        border: `2px dashed ${color}50`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: `${color}0A`,
        boxShadow: `inset 0 0 16px ${color}10`,
      }}>
        <span style={{ fontFamily: 'var(--font-garamond)', fontSize: 44, color, fontWeight: 400, lineHeight: 1 }}>
          {initial}
        </span>
      </div>
      <div style={{ display: 'flex', gap: 4, fontSize: 13, marginTop: 4 }}>
        {['🌸','🌿','🌸'].map((e, i) => <span key={i} style={{ opacity: 0.65 }}>{e}</span>)}
      </div>
      <span style={{ fontFamily: 'var(--font-lora)', fontSize: 11, color: `${color}90`,
        fontStyle: 'italic', letterSpacing: '0.08em', marginTop: 4 }}>{label}</span>
    </div>
  </motion.div>
);

const PhotoStack = () => {
  const { couple } = weddingData;
  const groomPhoto = weddingData.assets.groomPhoto;
  const bridePhoto = weddingData.assets.bridePhoto;

  return (
    <section className="py-24 px-4 bg-sage-deep overflow-hidden">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: 56 }}
      >
        <p style={{ fontFamily: 'var(--font-lora)', textTransform: 'uppercase',
          letterSpacing: '0.4em', fontSize: 11, color: 'var(--color-gold-deep)', marginBottom: 12 }}>
          Our Story
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 7vw, 3.2rem)',
          color: 'var(--color-choco)', fontWeight: 400, margin: 0 }}>
          Forever Us
        </h2>
        <div className="ornament-row" style={{ marginTop: 22, maxWidth: 240, marginLeft: 'auto', marginRight: 'auto' }}>
          <span style={{ color: 'var(--color-gold)', fontSize: 16 }}>✦</span>
        </div>
      </motion.div>

      {/* Photo stack */}
      <div style={{ maxWidth: 360, margin: '0 auto', position: 'relative', height: 420 }}>

        {/* Back-left: Groom */}
        <div style={{ position: 'absolute', width: '60%', height: '58%', top: '2%', left: '-5%', zIndex: 1 }}>
          {groomPhoto
            ? <img src={groomPhoto} alt="Groom" className="photo-frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <InitialCard initial="P" color="#7A9E7A" label="The Groom" rotation={-12}
                style={{ width: '100%', height: '100%' }} />
          }
        </div>

        {/* Back-right: Bride */}
        <div style={{ position: 'absolute', width: '60%', height: '58%', top: '2%', right: '-5%', zIndex: 2 }}>
          {bridePhoto
            ? <img src={bridePhoto} alt="Bride" className="photo-frame" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            : <InitialCard initial="S" color="#B85C5C" label="The Bride" rotation={12}
                style={{ width: '100%', height: '100%' }} />
          }
        </div>

        {/* Front center: Together */}
        <motion.div
          className="photo-frame"
          style={{
            position: 'absolute', width: '72%', height: '70%',
            bottom: '0%', left: '14%', zIndex: 10,
            background: 'linear-gradient(150deg, #FDF9F2, #FAF7F0, #F2EBD8)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 24px 60px rgba(44,24,16,0.22)',
          }}
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.3, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.4 } }}
        >
          {/* Gold double ring */}
          <div style={{
            width: 110, height: 110, borderRadius: '50%',
            border: '2px solid rgba(201,168,76,0.4)',
            boxShadow: 'inset 0 0 0 4px rgba(201,168,76,0.1)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(201,168,76,0.06)', marginBottom: 14, position: 'relative',
          }}>
            {/* Soft pulse behind names */}
            <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', border: '1px solid rgba(201,168,76,0.2)', animation: 'medallionPulse 4s infinite' }}/>

            <span style={{ fontFamily: 'var(--font-garamond)', fontSize: 24, color: 'var(--color-gold-deep)',
              fontWeight: 500, letterSpacing: '0.04em', lineHeight: 1.2, textAlign: 'center', zIndex: 2 }}>
              {couple.groomName.replace('Dr. ', 'Dr.')}
              <br/>
              <span style={{ fontSize: 16, color: 'var(--color-gold-dark)', fontStyle: 'italic', margin: '2px 0', display: 'block' }}>&amp;</span>
              {couple.brideName}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 6, fontSize: 16 }}>
            {['🌸','❋','🌸'].map((e,i) => <span key={i} style={{ opacity: 0.7, color: 'var(--color-gold)' }}>{e}</span>)}
          </div>
          <span style={{ fontFamily: 'var(--font-lora)', fontSize: 10.5, color: 'var(--color-sage-dark)',
            fontStyle: 'italic', marginTop: 10, letterSpacing: '0.08em' }}>Together Forever</span>
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ delay: 0.6, duration: 1 }}
        style={{ marginTop: 48, textAlign: 'center' }}
      >
        <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3vw, 1.2rem)', color: 'var(--color-sage-dark)', margin: 0 }}
        >
          "Two hearts, one beautiful journey..."
        </p>
      </motion.div>
    </section>
  );
};

export default PhotoStack;
