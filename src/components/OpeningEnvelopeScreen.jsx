import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ═══════════════════════════════════════════════════════
   MAGICAL BACKGROUND ELEMENTS
═══════════════════════════════════════════════════════ */
const MandalaWatermark = () => (
  <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
    <g stroke="#C9A84C" strokeWidth="1" fill="none">
      <circle cx="200" cy="200" r="180" strokeDasharray="4 6"/>
      <circle cx="200" cy="200" r="140"/>
      <circle cx="200" cy="200" r="100" strokeDasharray="2 4"/>
      {[0,45,90,135,180,225,270,315].map((a)=>(
        <path key={a} d="M200 60 Q240 130 200 200 Q160 130 200 60" transform={`rotate(${a} 200 200)`} fill="rgba(201,168,76,0.1)"/>
      ))}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((a)=>(
        <path key={a} d="M200 100 Q220 150 200 200 Q180 150 200 100" transform={`rotate(${a} 200 200)`} fill="none"/>
      ))}
    </g>
  </svg>
);

const MagicalParticles = ({ isMobile }) => {
  const particles = [
    { e: '🌸', l: '5%', dur: 12, del: 0, sz: 20 },
    { e: '🦋', l: '15%', dur: 16, del: 3, sz: 18, flutter: true },
    { e: '🍃', l: '25%', dur: 14, del: 1, sz: 15 },
    { e: '✨', l: '35%', dur: 9, del: 5, sz: 12 },
    { e: '🌸', l: '45%', dur: 18, del: 2, sz: 22 },
    { e: '🦋', l: '60%', dur: 15, del: 6, sz: 16, flutter: true },
    { e: '🌿', l: '75%', dur: 17, del: 4, sz: 14 },
    { e: '🌸', l: '85%', dur: 13, del: 1.5, sz: 19 },
    { e: '✨', l: '95%', dur: 11, del: 7, sz: 14 },
  ];
  const activeParticles = isMobile ? particles.filter((_,i) => i%2===0) : particles;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {activeParticles.map((p, i) => (
        <span key={i} className={p.flutter ? 'anim-flutter' : ''} style={{
          position: 'absolute', left: p.l, bottom: '-30px',
          fontSize: p.sz, userSelect: 'none',
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite, slowDrift ${p.dur*0.6}s ease-in-out infinite`,
        }}>
          {p.e}
        </span>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   ENVELOPE ARTWORK (Gold Foil)
═══════════════════════════════════════════════════════ */
const EnvelopeFoilBody = () => (
  <svg viewBox="0 0 400 260" fill="none" className="absolute inset-0 w-full h-full pointer-events-none z-10">
    {/* Inner decorative border */}
    <rect x="12" y="12" width="376" height="236" rx="8" stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="4 4"/>
    {/* V Fold lines - perspective depth */}
    <path d="M2 2 L200 140 L398 2" stroke="rgba(201,168,76,0.3)" strokeWidth="1.5"/>
    <path d="M2 258 L200 140 L398 258" stroke="rgba(201,168,76,0.15)" strokeWidth="1"/>
    
    {/* Floral corners - Bottom Left */}
    <g transform="translate(16, 244) scale(0.8)">
      <path d="M0 0 Q20 -10 30 -30 Q10 -20 0 0" fill="rgba(201,168,76,0.4)"/>
      <path d="M0 0 Q30 5 40 -15 Q15 0 0 0" fill="rgba(201,168,76,0.3)"/>
      <circle cx="15" cy="-12" r="3" fill="rgba(201,168,76,0.6)"/>
    </g>
    {/* Floral corners - Bottom Right */}
    <g transform="translate(384, 244) scale(-0.8, 0.8)">
      <path d="M0 0 Q20 -10 30 -30 Q10 -20 0 0" fill="rgba(201,168,76,0.4)"/>
      <path d="M0 0 Q30 5 40 -15 Q15 0 0 0" fill="rgba(201,168,76,0.3)"/>
      <circle cx="15" cy="-12" r="3" fill="rgba(201,168,76,0.6)"/>
    </g>
  </svg>
);

const EnvelopeFoilFlap = () => (
  <svg viewBox="0 0 400 135" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
    {/* Gold trim edge */}
    <path d="M2 2 L200 130 L398 2" stroke="rgba(201,168,76,0.5)" strokeWidth="2"/>
    <path d="M12 2 L200 120 L388 2" stroke="rgba(201,168,76,0.2)" strokeWidth="1" strokeDasharray="3 3"/>
    
    {/* Center mandala drop on flap */}
    <g transform="translate(200, 70)">
      <circle cx="0" cy="0" r="18" stroke="rgba(201,168,76,0.3)" strokeWidth="1" fill="none"/>
      <circle cx="0" cy="0" r="12" stroke="rgba(201,168,76,0.2)" strokeWidth="1" strokeDasharray="2 2" fill="none"/>
      <path d="M0 -8 L3 0 L0 8 L-3 0 Z" fill="rgba(201,168,76,0.4)"/>
      <path d="M-8 0 L0 3 L8 0 L0 -3 Z" fill="rgba(201,168,76,0.4)"/>
    </g>
  </svg>
);

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
const OpeningEnvelopeScreen = ({ onEnter }) => {
  const [phase, setPhase] = useState('idle'); // idle | opening | revealing | done
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const h = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);

  const handleClick = () => {
    if (phase !== 'idle') return;
    setPhase('opening');
    // Flap opens, seal breaks/fades (1s)
    setTimeout(() => setPhase('revealing'), 1000);
    // Card slides out, then transitions (2.5s)
    setTimeout(() => { setPhase('done'); onEnter(); }, 2800);
  };

  const isEnvelopeOpen = phase === 'opening' || phase === 'revealing';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="magical-splash"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 overflow-hidden"
          style={{
            background: 'linear-gradient(155deg, #7A9E7A 0%, #648964 40%, #4D704D 100%)',
          }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(8px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          {/* Background Textures */}
          <MandalaWatermark />
          <MagicalParticles isMobile={isMobile} />
          
          {/* Top Title: You Are Invited */}
          <motion.div
            initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="text-center mb-8 relative z-10"
          >
            <p style={{ fontFamily: 'var(--font-lora)', color: 'rgba(255,255,255,0.7)',
              fontSize: 11, letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: 12 }}>
              {weddingData.wedding.blessing}
            </p>
            <h1 style={{ fontFamily: 'var(--font-garamond)', color: '#FFFFFF',
              fontSize: 'clamp(2.8rem, 9vw, 4.5rem)', fontWeight: 400,
              letterSpacing: '0.04em', margin: 0, lineHeight: 1.1,
              textShadow: '0 4px 16px rgba(0,0,0,0.15)' }}>
              You Are Invited
            </h1>
            <div style={{ width: 140, height: 1.5, margin: '16px auto 0',
              background: 'linear-gradient(90deg, transparent, rgba(232,201,122,0.85), transparent)' }} />
          </motion.div>

          {/* 3D ENVELOPE */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative z-20"
            style={{ width: 'min(400px, 94vw)', aspectRatio: '400/260' }}
          >
            {/* Main Envelope Body */}
            <div className="absolute inset-0 env-3d-body">
              <EnvelopeFoilBody />
            </div>

            {/* Invitation Card (Slides out from behind flap, inside body) */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ zIndex: 20 }}>
              <AnimatePresence>
                {phase === 'revealing' && (
                  <motion.div
                    initial={{ y: 80, opacity: 0 }} 
                    animate={{ y: -120, opacity: 1 }} // Slides significantly up
                    transition={{ duration: 1.2, ease: [0.4, 0, 0.1, 1] }}
                    style={{
                      background: 'linear-gradient(150deg, #FDF9F2, #FAF7F0)',
                      border: '1.5px solid rgba(201,168,76,0.5)',
                      borderRadius: 16, padding: '24px', width: '85%', height: '180%',
                      boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                      textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}
                  >
                    <span style={{ fontSize: 24, color: 'rgba(201,168,76,0.6)', marginBottom: 8 }}>🌸</span>
                    <p style={{ fontFamily: 'var(--font-garamond)', fontSize: 28, color: 'var(--color-choco)', fontWeight: 500, lineHeight: 1.2 }}>
                      {weddingData.couple.groomName} <br/><span style={{ color: 'var(--color-gold)', fontSize: 20 }}>&amp;</span><br/> {weddingData.couple.brideName}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Envelope Flap (Hinges open) */}
            <motion.div
              className="absolute top-0 left-0 right-0 env-3d-flap"
              style={{ height: '52%', clipPath: 'polygon(0 0, 100% 0, 50% 96%)' }}
              animate={isEnvelopeOpen ? { rotateX: -180, opacity: 0.9, zIndex: 10 } : { rotateX: 0, opacity: 1, zIndex: 30 }}
              transition={{ duration: 1.2, ease: [0.4, 0, 0.1, 1] }}
            >
              <EnvelopeFoilFlap />
            </motion.div>

            {/* Giant Central Wax Seal (Breaks/Fades on open) */}
            <AnimatePresence>
              {phase === 'idle' && (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 1.4, opacity: 0, filter: 'blur(6px)' }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="absolute"
                  style={{ top: '52%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 40 }}
                >
                  <button onClick={handleClick} className="env-seal-3d seal-breathe" style={{ width: 110, height: 110 }}>
                    <span style={{
                      fontFamily: 'var(--font-garamond)', color: '#FFF',
                      fontSize: 28, fontWeight: 500, letterSpacing: '0.05em',
                      textShadow: '0 2px 8px rgba(80,40,0,0.8)'
                    }}>
                      P <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)' }}>✦</span> S
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Tap Instruction */}
          <AnimatePresence mode="wait">
            {phase === 'idle' && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.65)', fontSize: 15, marginTop: 28, zIndex: 10 }}
              >
                Tap the seal to open our invitation
              </motion.p>
            )}
            {phase === 'opening' && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
                  color: 'rgba(201,168,76,0.9)', fontSize: 16, marginTop: 28, zIndex: 10 }}
              >
                Opening with love... ✨
              </motion.p>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningEnvelopeScreen;
