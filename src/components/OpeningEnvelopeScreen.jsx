import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ═══════════════════════════════════════════════════════
   BACKGROUND & PARTICLES
═══════════════════════════════════════════════════════ */
const MagicalParticles = ({ isMobile }) => {
  const particles = [
    { e: '🌸', l: '10%', dur: 14, del: 0, sz: 16 },
    { e: '🦋', l: '20%', dur: 18, del: 4, sz: 14, flutter: true },
    { e: '🍃', l: '35%', dur: 16, del: 2, sz: 14 },
    { e: '✨', l: '50%', dur: 10, del: 6, sz: 10 },
    { e: '🌸', l: '70%', dur: 15, del: 1, sz: 18 },
    { e: '🦋', l: '85%', dur: 17, del: 5, sz: 15, flutter: true },
    { e: '🌿', l: '90%', dur: 13, del: 3, sz: 14 },
  ];
  const activeParticles = isMobile ? particles.filter((_,i) => i%2===0) : particles;
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {activeParticles.map((p, i) => (
        <span key={i} className={p.flutter ? 'anim-flutter' : ''} style={{
          position: 'absolute', left: p.l, bottom: '-30px',
          fontSize: p.sz, userSelect: 'none', opacity: 0.6,
          animation: `floatUp ${p.dur}s ${p.del}s linear infinite, slowDrift ${p.dur*0.7}s ease-in-out infinite`,
        }}>
          {p.e}
        </span>
      ))}
    </div>
  );
};

/* ═══════════════════════════════════════════════════════
   ENVELOPE ARTWORK (White/Gold Floral Line Art)
═══════════════════════════════════════════════════════ */
const FlapLineArt = () => (
  <svg viewBox="0 0 400 160" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
    {/* Inner decorative dashed border along the V */}
    <path d="M10 5 L200 145 L390 5" stroke="rgba(201,168,76,0.5)" strokeWidth="1" strokeDasharray="4 4"/>
    
    {/* Symmetrical floral swooshes on flap */}
    <path d="M100 40 Q150 100 200 135" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M300 40 Q250 100 200 135" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
    
    <circle cx="100" cy="40" r="3" fill="rgba(255,255,255,0.8)"/>
    <circle cx="300" cy="40" r="3" fill="rgba(255,255,255,0.8)"/>
    <path d="M80 20 Q100 20 100 40 Q80 40 80 20" fill="rgba(255,255,255,0.4)"/>
    <path d="M320 20 Q300 20 300 40 Q320 40 320 20" fill="rgba(255,255,255,0.4)"/>
  </svg>
);

const PocketLineArt = () => (
  <svg viewBox="0 0 400 280" fill="none" className="absolute inset-0 w-full h-full pointer-events-none">
    {/* Outer dashed border */}
    <rect x="10" y="10" width="380" height="260" rx="8" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeDasharray="3 3"/>
    
    {/* Symmetrical corner florals */}
    <g transform="translate(20, 260) scale(1, -1)">
      <path d="M0 0 Q40 0 60 40" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
      <path d="M0 0 Q0 40 40 60" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
      <circle cx="60" cy="40" r="3" fill="rgba(255,255,255,0.8)"/>
      <circle cx="40" cy="60" r="3" fill="rgba(255,255,255,0.8)"/>
      <path d="M10 10 Q25 25 40 20 Q25 10 10 10" fill="rgba(255,255,255,0.4)"/>
    </g>
    <g transform="translate(380, 260) scale(-1, -1)">
      <path d="M0 0 Q40 0 60 40" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
      <path d="M0 0 Q0 40 40 60" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" fill="none"/>
      <circle cx="60" cy="40" r="3" fill="rgba(255,255,255,0.8)"/>
      <circle cx="40" cy="60" r="3" fill="rgba(255,255,255,0.8)"/>
      <path d="M10 10 Q25 25 40 20 Q25 10 10 10" fill="rgba(255,255,255,0.4)"/>
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
    setTimeout(() => setPhase('revealing'), 900);
    // Card slides out, then transitions (2.5s)
    setTimeout(() => { setPhase('done'); onEnter(); }, 3200);
  };

  const isEnvelopeOpen = phase === 'opening' || phase === 'revealing';

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="magical-splash"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #8CAF8C 0%, #6E946E 100%)', // Soft elegant sage
          }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          {/* Particles */}
          <MagicalParticles isMobile={isMobile} />
          
          {/* Top Title: You Are Invited */}
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="text-center mb-10 relative z-10"
          >
            <p style={{ fontFamily: 'var(--font-lora)', color: 'rgba(255,255,255,0.85)',
              fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 12 }}>
              {weddingData.wedding.blessing}
            </p>
            <h1 style={{ fontFamily: 'var(--font-garamond)', color: '#FFFFFF',
              fontSize: 'clamp(2.5rem, 8vw, 3.8rem)', fontWeight: 400,
              letterSpacing: '0.02em', margin: 0, lineHeight: 1.1,
              textShadow: '0 2px 12px rgba(0,0,0,0.1)' }}>
              You Are Invited
            </h1>
          </motion.div>

          {/* PHYSICAL ENVELOPE STRUCTURE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="relative z-20"
            style={{ width: 'min(400px, 92vw)', aspectRatio: '400/280' }}
          >
            {/* 1. Envelope Back Inside (Darker shade) */}
            <div className="absolute inset-0 rounded-xl" style={{ 
              background: '#D9D0BC', 
              boxShadow: 'inset 0 4px 12px rgba(0,0,0,0.1)'
            }}/>

            {/* 2. Invitation Card (Slides out from inside) */}
            <div className="absolute inset-0 flex items-end justify-center overflow-hidden rounded-xl">
              <AnimatePresence>
                {phase === 'revealing' && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: -160, opacity: 1 }} // Slides completely out
                    transition={{ duration: 1.5, ease: [0.4, 0, 0.1, 1] }}
                    style={{
                      background: 'linear-gradient(150deg, #FDF9F2, #FAF7F0)',
                      border: '1px solid rgba(201,168,76,0.3)',
                      borderRadius: 12, padding: '24px', width: '88%', height: '180%',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                      textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
                    }}
                  >
                    <span style={{ fontSize: 24, color: 'rgba(201,168,76,0.6)', marginBottom: 12, marginTop: 12 }}>🌸</span>
                    <p style={{ fontFamily: 'var(--font-garamond)', fontSize: 28, color: 'var(--color-choco)', fontWeight: 500, lineHeight: 1.2 }}>
                      {weddingData.couple.groomName} <br/><span style={{ color: 'var(--color-gold)', fontSize: 20, fontStyle: 'italic' }}>&amp;</span><br/> {weddingData.couple.brideName}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Envelope Pocket (Front bottom part) */}
            <div className="absolute inset-0 pointer-events-none rounded-xl" style={{ 
              background: 'linear-gradient(160deg, #F2ECD9 0%, #E8DFCA 100%)',
              clipPath: 'polygon(0 0, 0% 100%, 100% 100%, 100% 0, 50% 60%)', // Creates the pocket shape
              boxShadow: '0 -2px 10px rgba(0,0,0,0.05)',
              zIndex: 10
            }}>
              <PocketLineArt />
            </div>

            {/* 4. Top Flap Container (Hinges upward) */}
            {/* 
              We separate the container from the visual flap.
              The container handles the 3D rotation hinge, while the inner background gets the triangle clip-path.
              This allows the wax seal to be a sibling of the background (not clipped) but still rotate with the flap!
            */}
            <motion.div
              className="absolute top-0 left-0 w-full"
              style={{ 
                height: '65%', 
                transformOrigin: 'top center',
                zIndex: 20,
              }}
              animate={isEnvelopeOpen ? { rotateX: -180, opacity: 0.95 } : { rotateX: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.4, 0, 0.1, 1] }}
            >
              {/* Visual Triangle Flap (Clipped) */}
              <div 
                className="absolute inset-0 rounded-t-xl" 
                style={{ 
                  background: 'linear-gradient(160deg, #FDF9F2 0%, #F0E6CE 100%)',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)' // Soft drop shadow below flap
                }}
              >
                <FlapLineArt />
              </div>
              
              {/* Wax Seal (Attached to the tip of the flap, outside the clip-path) */}
              <AnimatePresence>
                {phase === 'idle' && (
                  <motion.div
                    exit={{ opacity: 0, scale: 1.2, filter: 'blur(4px)' }}
                    transition={{ duration: 0.5 }}
                    style={{ position: 'absolute', bottom: -45, left: '50%', transform: 'translateX(-50%)' }}
                  >
                    <button 
                      onClick={handleClick}
                      style={{ 
                        width: 90, height: 90, borderRadius: '50%', cursor: 'pointer', border: 'none',
                        background: 'radial-gradient(circle at 35% 35%, #F5E6B8 0%, #C9A84C 40%, #8A6420 100%)',
                        boxShadow: '0 6px 16px rgba(100,60,10,0.3), inset 0 2px 6px rgba(255,255,255,0.4)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        animation: 'sealGlowPulse 4s ease-in-out infinite' // Gentle breathing
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-garamond)', color: '#FFF',
                        fontSize: 26, fontWeight: 400, letterSpacing: '0.02em',
                        textShadow: '0 2px 6px rgba(80,40,0,0.6)'
                      }}>
                        P <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>&amp;</span> S
                      </span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            
            {/* Outer soft shadow for the whole envelope to lift it off the background */}
            <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
               boxShadow: '0 20px 50px rgba(0,0,0,0.15), 0 4px 15px rgba(0,0,0,0.05)',
               zIndex: -1
            }}/>
          </motion.div>

          {/* Tap Instruction */}
          <AnimatePresence mode="wait">
            {phase === 'idle' && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 40, zIndex: 10 }}
              >
                Tap the seal to open our invitation
              </motion.p>
            )}
            {phase === 'opening' && (
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.9)', fontSize: 15, marginTop: 40, zIndex: 10 }}
              >
                Opening... ✨
              </motion.p>
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OpeningEnvelopeScreen;
