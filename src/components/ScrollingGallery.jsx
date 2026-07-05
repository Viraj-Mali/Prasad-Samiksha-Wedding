import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

const ScrollingGallery = () => {
  const { assets } = weddingData;
  const images = assets.galleryImages || [];

  // Duplicate images to create a seamless infinite loop
  const displayImages = [...images, ...images, ...images];

  return (
    <section className="py-8 overflow-hidden bg-white" style={{ borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="relative w-full overflow-hidden" style={{ height: '220px' }}>
        
        {/* Soft gradient masks on the edges to fade out the photos seamlessly */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: '15vw', background: 'linear-gradient(to right, #fff 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '15vw', background: 'linear-gradient(to left, #fff 0%, transparent 100%)', zIndex: 10, pointerEvents: 'none' }} />

        {/* The scrolling container */}
        <motion.div
          className="flex gap-4 items-center absolute top-0 left-0"
          animate={{ x: [0, -1480] }} // 5 images * (280px width + 16px gap) = 1480px
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25, // Slow linear movement
              ease: "linear"
            }
          }}
          style={{ width: 'max-content' }}
        >
          {displayImages.map((src, idx) => (
            <div 
              key={idx}
              className="relative rounded overflow-hidden shadow-sm"
              style={{ width: '280px', height: '200px', flexShrink: 0 }}
            >
              <img
                src={src}
                alt={`Gallery ${idx}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollingGallery;
