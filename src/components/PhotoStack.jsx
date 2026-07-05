import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { weddingData } from '../data/index.js';

const PhotoCard = ({ src, alt, rotation = 0, style = {}, onClick, isMain = false }) => {
  const [error, setError] = useState(false);
  
  return (
    <motion.div
      className="photo-card"
      onClick={onClick}
      style={{
        background: '#fff',
        padding: isMain ? '10px 10px 32px 10px' : '8px 8px 24px 8px', // reduced white border thickness
        boxShadow: isMain ? '0 20px 40px rgba(44,24,16,0.15)' : '0 12px 30px rgba(44,24,16,0.1)',
        borderRadius: 6,
        cursor: onClick ? 'pointer' : 'default',
        transform: `rotate(${rotation}deg)`,
        position: 'relative',
        ...style
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03, zIndex: 40, transition: { duration: 0.3 } }}
    >
      <div style={{ width: '100%', height: '100%', background: '#F8F5F0', overflow: 'hidden', borderRadius: 4 }}>
        {!error ? (
          <img 
            src={src} 
            alt={alt} 
            onError={() => setError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
            loading="lazy"
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #FDF9F2, #EBF0EB)' }}>
            <span style={{ fontFamily: 'var(--font-garamond)', fontSize: isMain ? 22 : 16, color: 'var(--color-sage-dark)', fontStyle: 'italic', textAlign: 'center' }}>
              🌸<br/>Forever<br/>Moments
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

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

  const [lightboxImg, setLightboxImg] = useState(null);

  // Floral Corner SVG
  const FloralCorner = ({ style }) => (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', opacity: 0.5, ...style }}>
      <path d="M10 10 Q40 10 60 40 Q40 60 10 90 Q30 50 10 10" stroke="#C9A84C" strokeWidth="1.2" />
      <circle cx="60" cy="40" r="3" fill="#C9A84C" opacity="0.8"/>
      <circle cx="45" cy="55" r="2" fill="#C9A84C" opacity="0.6"/>
      <path d="M20 20 Q50 20 70 50 Q50 70 20 100 Q40 60 20 20" stroke="#8A9A86" strokeWidth="0.8" opacity="0.6"/>
    </svg>
  );

  return (
    <section className="pt-24 px-4 overflow-hidden relative" style={{ 
      background: 'linear-gradient(180deg, #FDF9F2 0%, #E8EFE8 100%)',
      paddingBottom: '160px' // Breathing space for floating buttons
    }}>
      
      {/* Subtle Background Glow & Texture */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.6) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      {/* Floral Corners */}
      <FloralCorner style={{ top: 20, left: 20 }} />
      <FloralCorner style={{ top: 20, right: 20, transform: 'scaleX(-1)' }} />
      <FloralCorner style={{ bottom: 20, left: 20, transform: 'scaleY(-1)' }} />
      <FloralCorner style={{ bottom: 20, right: 20, transform: 'scale(-1, -1)' }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 10 }}
      >
        {/* Small gold divider above heading */}
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

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden relative w-full justify-center" style={{ minHeight: 460, marginTop: 20, zIndex: 10 }}>
        {/* Back card 1 */}
        <PhotoCard 
          src={displayImages[1]} alt="Gallery Sub 1" rotation={-10} onClick={() => setLightboxImg(displayImages[1])}
          style={{ position: 'absolute', top: 130, left: '6vw', width: '60vw', height: '65vw', zIndex: 5 }} 
        />
        {/* Back card 2 */}
        <PhotoCard 
          src={displayImages[2]} alt="Gallery Sub 2" rotation={12} onClick={() => setLightboxImg(displayImages[2])}
          style={{ position: 'absolute', top: 160, right: '4vw', width: '62vw', height: '68vw', zIndex: 6 }} 
        />
        {/* Main card */}
        <PhotoCard 
          src={displayImages[0]} alt="Gallery Main" rotation={-2} isMain={true} onClick={() => setLightboxImg(displayImages[0])}
          style={{ position: 'relative', width: '84vw', height: '90vw', zIndex: 10, margin: '0 auto' }} 
        />
      </div>

      {/* DESKTOP LAYOUT (Masonry / Staggered) */}
      <div className="hidden md:flex flex-wrap justify-center items-center gap-8 relative z-10" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <PhotoCard 
          src={displayImages[1]} alt="Gallery 2" rotation={-5} onClick={() => setLightboxImg(displayImages[1])}
          style={{ width: 280, height: 340, marginTop: 40 }}
        />
        <PhotoCard 
          src={displayImages[0]} alt="Gallery 1" rotation={3} isMain={true} onClick={() => setLightboxImg(displayImages[0])}
          style={{ width: 380, height: 460, marginTop: 0 }}
        />
        <PhotoCard 
          src={displayImages[2]} alt="Gallery 3" rotation={-4} onClick={() => setLightboxImg(displayImages[2])}
          style={{ width: 270, height: 330, marginTop: 70 }}
        />
        <PhotoCard 
          src={displayImages[3]} alt="Gallery 4" rotation={8} onClick={() => setLightboxImg(displayImages[3])}
          style={{ width: 260, height: 320, marginTop: -20 }}
        />
        <PhotoCard 
          src={displayImages[4]} alt="Gallery 5" rotation={-3} onClick={() => setLightboxImg(displayImages[4])}
          style={{ width: 290, height: 350, marginTop: 20 }}
        />
      </div>

      {/* LIGHTBOX PREVIEW */}
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
