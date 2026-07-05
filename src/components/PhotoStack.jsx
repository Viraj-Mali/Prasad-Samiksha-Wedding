import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { weddingData } from '../data/index.js';

const PhotoStack = () => {
  const { assets } = weddingData;
  const images = assets.galleryImages || [];
  
  const displayImages = [
    images[0] || '/images/placeholder1.jpg',
    images[1] || '/images/placeholder2.jpg',
    images[2] || '/images/placeholder3.jpg',
    images[3] || '/images/placeholder4.jpg',
    images[4] || '/images/placeholder5.jpg',
  ];

  const subtitles = [
    "Beautiful Moments",
    "Together Forever",
    "Joy & Laughter",
    "Endless Love",
    "A New Journey"
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  
  const prefersReducedMotion = useReducedMotion();

  // Allow initial staggered entrance to finish before removing delays
  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Auto-rotate logic (changed every 3s as requested)
  useEffect(() => {
    if (prefersReducedMotion || isPaused || lightboxImg) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % displayImages.length);
    }, 3000); // 3s auto rotation
    
    return () => clearInterval(interval);
  }, [isPaused, lightboxImg, prefersReducedMotion, displayImages.length]);

  const handleCardClick = (index, diff) => {
    if (diff === 0) {
      setLightboxImg(displayImages[index]);
    } else {
      setActiveIndex(index);
    }
  };

  // Floral Corner SVG
  const FloralCorner = ({ style }) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', opacity: 0.5, ...style, pointerEvents: 'none' }}>
      <path d="M10 10 Q40 10 60 40 Q40 60 10 90 Q30 50 10 10" stroke="#C9A84C" strokeWidth="1.2" />
      <circle cx="60" cy="40" r="3" fill="#C9A84C" opacity="0.8"/>
      <circle cx="45" cy="55" r="2" fill="#C9A84C" opacity="0.6"/>
      <path d="M20 20 Q50 20 70 50 Q50 70 20 100 Q40 60 20 20" stroke="#8A9A86" strokeWidth="0.8" opacity="0.6"/>
    </svg>
  );

  const getCardStyleAndAnimation = (index) => {
    const total = displayImages.length;
    const diff = (index - activeIndex + total) % total;

    // A subtle direction modifier based on index so it doesn't look robotic
    const dir = index % 2 === 0 ? 1 : -1;
    
    // Starting position (entering from below)
    const baseInitial = { opacity: 0, scale: 0.78, y: 180, rotate: dir * 2 };

    if (prefersReducedMotion) {
      const staticDiff = index;
      if (staticDiff === 0) return { zIndex: 30, animate: { opacity: 1, scale: 1, y: 0, rotate: dir }, initial: baseInitial };
      if (staticDiff === 1) return { zIndex: 20, animate: { opacity: 0.8, scale: 0.92, y: 55, rotate: dir * 3 }, initial: baseInitial };
      if (staticDiff === 2) return { zIndex: 10, animate: { opacity: 0.55, scale: 0.84, y: 105, rotate: dir * -3 }, initial: baseInitial };
      return { zIndex: 5, animate: { opacity: 0, scale: 0.78, y: 180, rotate: 0 }, initial: baseInitial };
    }

    if (diff === 0) {
      return {
        zIndex: 30,
        animate: { opacity: 1, scale: 1, y: 0, rotate: dir },
        initial: baseInitial
      };
    }
    
    if (diff === 1) {
      return {
        zIndex: 20,
        animate: { opacity: 0.8, scale: 0.92, y: 55, rotate: dir * 3 },
        initial: baseInitial
      };
    }
    
    if (diff === 2) {
      return {
        zIndex: 10,
        animate: { opacity: 0.55, scale: 0.84, y: 105, rotate: dir * -3 },
        initial: baseInitial
      };
    }
    
    if (diff === total - 1) {
      return {
        zIndex: 40, // Stays above front while exiting
        animate: { opacity: 0, scale: 1.04, y: -90, rotate: dir * -4 },
        initial: baseInitial
      };
    }

    return {
      zIndex: 5,
      animate: { opacity: 0, scale: 0.78, y: 180, rotate: 0 },
      initial: baseInitial
    };
  };

  return (
    <section 
      className="pt-24 px-4 overflow-hidden relative" 
      style={{ 
        background: 'transparent',
        paddingBottom: '200px' // Increased padding so trailing cards and floating buttons never overlap
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <FloralCorner style={{ top: 20, left: 20 }} />
      <FloralCorner style={{ top: 20, right: 20, transform: 'scaleX(-1)' }} />
      <FloralCorner style={{ bottom: 20, left: 20, transform: 'scaleY(-1)' }} />
      <FloralCorner style={{ bottom: 20, right: 20, transform: 'scale(-1, -1)' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 10 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <div style={{ height: 1, width: 40, background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
          <span style={{ color: 'var(--color-gold)', fontSize: 14 }}>✧</span>
          <div style={{ height: 1, width: 40, background: 'linear-gradient(-90deg, transparent, var(--color-gold))' }} />
        </div>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 8vw, 3.8rem)',
          color: 'var(--color-choco)', fontWeight: 400, margin: 0 }}>
          Forever Moments
        </h2>
        
        <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', color: 'var(--color-sage-dark)', marginTop: 12 }}>
          A few memories from our beautiful journey.
        </p>
      </motion.div>

      <div 
        className="relative mx-auto flex justify-center items-start" 
        style={{ 
          width: '100%', 
          maxWidth: '440px', // Wider bounding box on desktop
          height: '65vh', 
          minHeight: '500px',
          maxHeight: '650px',
          zIndex: 10,
          perspective: '1000px',
          marginTop: '20px'
        }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Cinematic Idle Motion Wrapper */}
        <motion.div 
          animate={{ y: [0, -8, 0] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {displayImages.map((src, index) => {
            const diff = (index - activeIndex + displayImages.length) % displayImages.length;
            const { animate, initial, zIndex } = getCardStyleAndAnimation(index);
            const isFront = diff === 0;

            return (
              <motion.div
                key={index}
                className="absolute will-change-transform"
                style={{
                  width: '82vw',
                  maxWidth: '380px',
                  aspectRatio: '3.6/5',
                  background: '#fff',
                  padding: '10px 10px 32px 10px',
                  borderRadius: 6,
                  boxShadow: isFront 
                    ? '0 25px 50px rgba(44,24,16,0.15)' 
                    : '0 10px 30px rgba(44,24,16,0.08)',
                  cursor: 'pointer',
                  zIndex,
                }}
                initial={initial}
                whileInView={animate}
                viewport={{ once: true, margin: '-50px' }}
                animate={hasEntered ? animate : undefined}
                transition={{
                  duration: 1.8, // Faster 1.8s transition to fit 3s interval
                  ease: [0.22, 1, 0.36, 1],
                  delay: !hasEntered ? index * 0.45 : 0 
                }}
                onClick={() => handleCardClick(index, diff)}
              >
                <div 
                  style={{ 
                    width: '100%', height: '100%', 
                    background: 'linear-gradient(135deg, #FDF9F2, #EBF0EB)', 
                    overflow: 'hidden', 
                    borderRadius: 4,
                    position: 'relative'
                  }}
                >
                  <img 
                    src={src} 
                    alt={`Memory ${index + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                    loading={isFront ? "eager" : "lazy"}
                  />
                </div>
                {/* Subtitle */}
                <p 
                  style={{ 
                    position: 'absolute', 
                    bottom: '8px', 
                    left: 0, 
                    right: 0, 
                    textAlign: 'center',
                    fontFamily: 'var(--font-lora)',
                    fontStyle: 'italic',
                    fontSize: '1rem',
                    color: 'var(--color-sage-dark)'
                  }}
                >
                  {subtitles[index]}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)', zIndex: 9999 }}
            onClick={() => setLightboxImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white p-2"
              onClick={() => setLightboxImg(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ background: '#fff', padding: '12px 12px 40px 12px', borderRadius: 6 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={lightboxImg} 
                alt="Lightbox" 
                style={{ maxWidth: '90vw', maxHeight: '80vh', objectFit: 'contain' }} 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PhotoStack;
