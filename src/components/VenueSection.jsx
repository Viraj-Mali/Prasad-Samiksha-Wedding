import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { weddingData } from '../data/index.js';

const VenueSection = () => {
  const { venue } = weddingData;

  return (
    <section id="venue" className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #FAF7F0 0%, #EDF2ED 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="font-lora text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--color-gold-dark)' }}>
          Location
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-2" style={{ color: 'var(--color-choco)' }}>
          Venue
        </h2>
        <div className="gold-divider my-6">
          <span style={{ color: 'var(--color-gold)' }}>✦</span>
        </div>

        <div className="invitation-card p-8 sm:p-10">
          {/* Map Placeholder */}
          <div className="rounded-xl overflow-hidden mb-6" style={{ aspectRatio: '16/7', background: 'linear-gradient(145deg, #B8CDB8, #8FAF8F)' }}>
            <a href={venue.mapLink} target="_blank" rel="noopener noreferrer"
              className="w-full h-full flex flex-col items-center justify-center gap-3 text-white transition-opacity hover:opacity-90">
              <MapPin size={40} className="opacity-80" />
              <p className="font-serif text-xl font-medium">{venue.name}</p>
              <p className="font-lora text-sm italic opacity-80">Tap to view on Google Maps</p>
            </a>
          </div>

          {/* Name */}
          <h3 className="font-serif text-2xl font-medium mb-2" style={{ color: 'var(--color-choco)' }}>
            {venue.name}
          </h3>
          <p className="font-lora text-base mb-1" style={{ color: 'rgba(44,24,16,0.7)' }}>{venue.address}</p>
          <p className="font-lora text-sm mb-6" style={{ color: 'rgba(44,24,16,0.5)' }}>{venue.city}</p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--color-gold-light), transparent)' }}/>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={venue.mapLink}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 sm:max-w-[180px] flex items-center justify-center gap-2 py-3 px-5 rounded-full font-lora italic text-sm transition-all duration-200"
              style={{
                background: 'linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-light) 100%)',
                color: 'var(--color-choco)',
                boxShadow: '0 4px 16px rgba(201,168,76,0.3)',
              }}
            >
              <Navigation size={16} /> Get Directions
            </a>
            <a
              href={venue.mapSearch}
              target="_blank" rel="noopener noreferrer"
              className="flex-1 sm:max-w-[180px] flex items-center justify-center gap-2 py-3 px-5 rounded-full font-lora italic text-sm transition-all duration-200"
              style={{ border: '1px solid var(--color-gold)', color: 'var(--color-gold-dark)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,168,76,0.08)'}
              onMouseLeave={e => e.currentTarget.style.background = ''}
            >
              <MapPin size={16}/> View on Maps
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default VenueSection;
