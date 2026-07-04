import React, { useState, useEffect } from 'react';
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
        padding: isMain ? '12px 12px 36px 12px' : '8px 8px 24px 8px',
        boxShadow: '0 12px 30px rgba(44,24,16,0.12)',
        borderRadius: 4,
        cursor: onClick ? 'pointer' : 'default',
        transform: `rotate(${rotation}deg)`,
        position: 'relative',
        ...style
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.03, zIndex: 30, transition: { duration: 0.3 } }}
    >
      <div style={{ width: '100%', height: '100%', background: '#F8F5F0', overflow: 'hidden', borderRadius: 2 }}>
        {!error ? (
          <img 
            src={src} 
            alt={alt} 
            onError={() => setError(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
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
  
  // Make sure we have at least 3 images for mobile, 5 for desktop layout
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
    <svg width="80" height="80" viewBox="0 0 100 100" fill="none" style={{ position: 'absolute', opacity: 0.4, ...style }}>
      <path d="M10 10 Q40 10 60 40 Q40 60 10 90 Q30 50 10 10" stroke="#C9A84C" strokeWidth="1.5" />
      <circle cx="60" cy="40" r="3" fill="#C9A84C" />
      <circle cx="45" cy="55" r="2" fill="#C9A84C" />
    </svg>
  );

  return (
    <section className="py-24 px-4 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #FDF9F2 0%, #EBF0EB 100%)' }}>
      
      {/* Floral Corners */}
      <FloralCorner style={{ top: 20, left: 20 }} />
      <FloralCorner style={{ top: 20, right: 20, transform: 'scaleX(-1)' }} />
      <FloralCorner style={{ bottom: 20, left: 20, transform: 'scaleY(-1)' }} />
      <FloralCorner style={{ bottom: 20, right: 20, transform: 'scale(-1, -1)' }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 10 }}
      >
        <p style={{ fontFamily: 'var(--font-lora)', textTransform: 'uppercase',
          letterSpacing: '0.4em', fontSize: 11, color: 'var(--color-gold-deep)', marginBottom: 12 }}>
          Our Memories
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 7vw, 3.5rem)',
          color: 'var(--color-choco)', fontWeight: 400, margin: 0 }}>
          Forever Moments
        </h2>
        <div className="flex items-center justify-center gap-4 mt-6">
          <div style={{ height: 1, width: 60, background: 'linear-gradient(90deg, transparent, var(--color-gold))' }} />
          <span style={{ color: 'var(--color-gold)', fontSize: 18 }}>✧</span>
          <div style={{ height: 1, width: 60, background: 'linear-gradient(-90deg, transparent, var(--color-gold))' }} />
        </div>
      </motion.div>

      {/* MOBILE LAYOUT */}
      <div className="flex md:hidden flex-col items-center relative" style={{ height: 480, width: '100%', maxWidth: 400, margin: '0 auto' }}>
        <PhotoCard 
          src={displayImages[0]} alt="Gallery Main" rotation={-3} isMain={true} onClick={() => setLightboxImg(displayImages[0])}
          style={{ position: 'absolute', top: 0, width: '72%', height: 320, zIndex: 10 }} 
        />
        <PhotoCard 
          src={displayImages[1]} alt="Gallery Sub 1" rotation={-10} onClick={() => setLightboxImg(displayImages[1])}
          style={{ position: 'absolute', top: 220, left: '2%', width: '52%', height: 200, zIndex: 5 }} 
        />
        <PhotoCard 
          src={displayImages[2]} alt="Gallery Sub 2" rotation={8} onClick={() => setLightboxImg(displayImages[2])}
          style={{ position: 'absolute', top: 190, right: '2%', width: '56%', height: 230, zIndex: 6 }} 
        />
      </div>

      {/* DESKTOP LAYOUT (Masonry / Staggered) */}
      <div className="hidden md:flex flex-wrap justify-center items-start gap-8 relative" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 40px' }}>
        <PhotoCard 
          src={displayImages[1]} alt="Gallery 2" rotation={-4} onClick={() => setLightboxImg(displayImages[1])}
          style={{ width: 260, height: 320, marginTop: 40 }}
        />
        <PhotoCard 
          src={displayImages[0]} alt="Gallery 1" rotation={2} isMain={true} onClick={() => setLightboxImg(displayImages[0])}
          style={{ width: 320, height: 400, marginTop: 0 }}
        />
        <PhotoCard 
          src={displayImages[2]} alt="Gallery 3" rotation={-2} onClick={() => setLightboxImg(displayImages[2])}
          style={{ width: 280, height: 350, marginTop: 70 }}
        />
        <PhotoCard 
          src={displayImages[3]} alt="Gallery 4" rotation={5} onClick={() => setLightboxImg(displayImages[3])}
          style={{ width: 250, height: 300, marginTop: 20 }}
        />
        <PhotoCard 
          src={displayImages[4]} alt="Gallery 5" rotation={-3} onClick={() => setLightboxImg(displayImages[4])}
          style={{ width: 290, height: 370, marginTop: 50 }}
        />
      </div>

      {/* LIGHTBOX PREVIEW */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(4px)' }}
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
              style={{ background: '#fff', padding: '12px 12px 40px 12px', borderRadius: 4 }}
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
