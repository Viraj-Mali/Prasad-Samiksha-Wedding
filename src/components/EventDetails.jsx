import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { weddingData } from '../data/index.js';

/* ── Custom Borders per Theme ── */
const HaldiBorder = () => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-60">
    <rect x="3" y="3" width="94" height="94" rx="2" stroke="#C9A84C" strokeWidth="0.5" fill="none"/>
    <rect x="5" y="5" width="90" height="90" rx="2" stroke="#C9A84C" strokeWidth="1" strokeDasharray="1 1" fill="none"/>
  </svg>
);

const WeddingBorder = () => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-80">
    <rect x="4" y="4" width="92" height="92" rx="4" stroke="#A07830" strokeWidth="0.8" fill="none"/>
    <path d="M4 10 L10 4 M90 4 L96 10 M4 90 L10 96 M90 96 L96 90" stroke="#A07830" strokeWidth="0.8"/>
  </svg>
);

/* ── Floral Motif SVG ── */
const FloralMotif = ({ color, style }) => (
  <svg viewBox="0 0 40 40" className="absolute opacity-80" style={{ width: 40, height: 40, ...style }}>
    <path d="M20 5 Q30 15 20 25 Q10 15 20 5" fill={color}/>
    <path d="M5 20 Q15 10 25 20 Q15 30 5 20" fill={color}/>
    <circle cx="20" cy="20" r="3" fill="#FFF" opacity="0.5"/>
  </svg>
);

/* ── Event Poster Component ── */
const EventPoster = ({ event, index }) => {
  const isHaldi = event.id === 'haldi';
  
  // Theme Variables
  const themeClass = isHaldi ? 'theme-haldi' : 'theme-wedding';
  const textColor = isHaldi ? '#5C4010' : '#4A2C1A';
  const accentColor = isHaldi ? '#A07830' : '#7B2D2D';
  const hashtag = isHaldi ? '#AuraOfYellow' : '#PrasadSamikshaWedding';
  const subtitle = isHaldi ? "A splash of yellow, a touch of love" : "Where traditions meet eternal love";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.2, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
      className={`poster-card ${themeClass} flex flex-col items-center mx-auto`}
      style={{ 
        width: 'min(92vw, 540px)', 
        minHeight: '75vh',
        padding: 'clamp(2rem, 6vw, 3rem)',
        marginBottom: '4rem'
      }}
    >
      {/* Borders & Decorations */}
      {isHaldi ? <HaldiBorder /> : <WeddingBorder />}
      {isHaldi && <FloralMotif color="#E8C97A" style={{ top: 16, left: 16 }} />}
      {isHaldi && <FloralMotif color="#E8C97A" style={{ top: 16, right: 16, transform: 'scaleX(-1)' }} />}
      
      {/* Top Monogram/Logo */}
      <div style={{
        width: 48, height: 48, borderRadius: '50%',
        border: `1px solid ${accentColor}50`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 16, position: 'relative', zIndex: 10,
        background: 'rgba(255,255,255,0.5)'
      }}>
        <span style={{ fontFamily: 'var(--font-garamond)', fontSize: 18, color: accentColor }}>P&S</span>
      </div>

      {/* Glassmorphism Text Panel */}
      <div className="glass-panel w-full flex flex-col items-center text-center" style={{ padding: '28px 16px', position: 'relative', zIndex: 10 }}>
        
        {/* Hashtag */}
        <p style={{ fontFamily: 'var(--font-garamond)', fontStyle: 'italic', fontSize: '1.2rem', color: accentColor, marginBottom: 8 }}>
          {hashtag}
        </p>

        {/* Subtitle */}
        <p style={{ fontFamily: 'var(--font-lora)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: textColor, opacity: 0.7, marginBottom: 16 }}>
          {subtitle}
        </p>

        {/* Main Title */}
        <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: 'clamp(2.2rem, 7vw, 3.2rem)', color: textColor, fontWeight: 500, lineHeight: 1.1, marginBottom: 24 }}>
          {event.title}
        </h2>

        {/* Pill Strip (Date/Time/Venue) */}
        <div className="info-pill flex-col sm:flex-row" style={{ color: textColor }}>
          <span style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', fontWeight: 500 }}>{event.date.split(',')[1]}</span>
          <span className="hidden sm:inline" style={{ opacity: 0.3 }}>|</span>
          <span style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem' }}>{event.time}</span>
          <span className="hidden sm:inline" style={{ opacity: 0.3 }}>|</span>
          <span style={{ fontFamily: 'var(--font-lora)', fontSize: '0.9rem', fontStyle: 'italic' }}>{event.venue.split(',')[0]}</span>
        </div>
        
        {/* Location Button */}
        <a href={weddingData.venue.mapLink} target="_blank" rel="noopener noreferrer"
          className="mt-6 flex items-center justify-center gap-2"
          style={{
            padding: '8px 20px', borderRadius: 30,
            border: `1px solid ${accentColor}60`,
            fontFamily: 'var(--font-lora)', fontSize: 13,
            color: accentColor, textDecoration: 'none',
            background: 'rgba(255,255,255,0.4)',
            transition: 'background 0.2s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.8)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.4)'}
        >
          <MapPin size={14}/> View Location
        </a>
      </div>

      {/* Floating Elements (Butterflies/Petals) */}
      <span className="anim-flutter absolute" style={{ fontSize: 24, top: '25%', left: '8%', zIndex: 20 }}>🦋</span>
      <span className="anim-flutter absolute" style={{ fontSize: 20, top: '45%', right: '10%', zIndex: 20 }}>🦋</span>
      
      {/* Illustration Area (Bottom) */}
      <div className="mt-auto pt-16 flex flex-col items-center justify-end relative z-10 w-full" style={{ minHeight: 200 }}>
        {/* Placeholder for the illustrated couple art */}
        <div style={{
          width: '70%', height: 160,
          border: `2px dashed ${accentColor}40`,
          borderRadius: '16px 16px 0 0',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(255,255,255,0.3)',
          textAlign: 'center', padding: 16
        }}>
          <p style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', color: accentColor, fontSize: '0.9rem' }}>
            Couple Illustration<br/>Placeholder
          </p>
        </div>
      </div>

    </motion.div>
  );
};

const EventDetails = () => (
  <section id="events" className="py-24 px-4" style={{ background: 'var(--color-sage-pale)' }}>
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.9 }}
      style={{ textAlign: 'center', marginBottom: 50 }}
    >
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 7vw, 3.2rem)',
        color: 'var(--color-choco)', fontWeight: 400, margin: 0, letterSpacing: '0.02em' }}>
        Wedding Events
      </h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, maxWidth: 260, margin: '16px auto 0' }}>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.6))' }}/>
        <span style={{ color: 'var(--color-gold)', fontSize: 18 }}>✦</span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, rgba(201,168,76,0.6), transparent)' }}/>
      </div>
    </motion.div>

    {/* Render the Poster Cards */}
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {weddingData.events.map((ev, i) => <EventPoster key={ev.id} event={ev} index={i} />)}
    </div>
  </section>
);

export default EventDetails;
