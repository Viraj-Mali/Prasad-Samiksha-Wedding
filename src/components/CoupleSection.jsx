import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/index.js';

/* ── Elegant initials placeholder ── */
const InitialsPlaceholder = ({ initial, color = 'var(--color-sage)' }) => (
  <div
    className="w-full h-full flex flex-col items-center justify-center"
    style={{ background: `linear-gradient(145deg, ${color}22, ${color}11)` }}
  >
    <span className="font-serif text-6xl font-light" style={{ color }}>{initial}</span>
    <div className="mt-2 flex gap-1">
      {['🌸','🌿','🌸'].map((e,i) => <span key={i} className="text-xs opacity-60">{e}</span>)}
    </div>
  </div>
);

const ProfileCard = ({ name, qualification, parents, address, initial, photo, side }) => {
  const isLeft = side === 'groom';
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
      className="invitation-card p-6 sm:p-8 flex flex-col items-center text-center max-w-xs mx-auto w-full"
    >
      {/* Photo / Initials */}
      <div
        className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 border-4"
        style={{ borderColor: 'rgba(201,168,76,0.3)', background: 'var(--color-cream)' }}
      >
        {photo ? (
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        ) : (
          <InitialsPlaceholder initial={initial} color={isLeft ? 'var(--color-sage)' : 'var(--color-maroon-light)'} />
        )}
      </div>

      {/* Name */}
      <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-1" style={{ color: 'var(--color-choco)' }}>
        {name}
      </h3>

      {/* Qualification */}
      <p className="font-lora italic text-sm mb-3" style={{ color: 'var(--color-sage)' }}>
        {qualification}
      </p>

      {/* Gold divider */}
      <div className="flex items-center gap-2 my-2 w-24">
        <div className="flex-1 h-px" style={{ background: 'var(--color-gold)' }}/>
        <span className="text-xs" style={{ color: 'var(--color-gold)' }}>✦</span>
        <div className="flex-1 h-px" style={{ background: 'var(--color-gold)' }}/>
      </div>

      {/* Parents */}
      {parents && (
        <p className="font-lora text-xs sm:text-[13px] leading-relaxed mb-3 mt-1 px-2" style={{ color: 'rgba(44,24,16,0.7)', fontStyle: 'italic' }}>
          {parents}
        </p>
      )}

      {/* Address */}
      <p className="font-lora text-xs leading-relaxed opacity-70" style={{ color: 'rgba(44,24,16,0.6)' }}>
        {address}
      </p>
    </motion.div>
  );
};

const CoupleSection = () => {
  const { couple } = weddingData;

  return (
    <section id="couple" className="py-16 px-4" style={{ background: 'linear-gradient(180deg, #FAF7F0 0%, #EDF2ED 100%)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <p className="font-lora text-xs tracking-[0.35em] uppercase mb-3" style={{ color: 'var(--color-gold-dark)' }}>
          The Couple
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-medium" style={{ color: 'var(--color-choco)' }}>
          Meet The Two Hearts
        </h2>
        <div className="gold-divider mt-5">
          <span style={{ color: 'var(--color-gold)' }}>✦</span>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 relative">
        {/* Connector ampersand (desktop) */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none z-10">
          <div className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: 'var(--color-ivory)', border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 4px 16px rgba(44,24,16,0.08)' }}>
            <span className="font-garamond text-2xl font-light" style={{ color: 'var(--color-gold)' }}>&amp;</span>
          </div>
        </div>

        <ProfileCard
          name={couple.groomName}
          qualification={couple.groomQualification}
          parents={couple.groomParents}
          address={couple.groomAddress}
          initial="P"
          photo={couple.groomPhoto || weddingData.assets.groomPhoto}
          side="groom"
        />
        <ProfileCard
          name={couple.brideName}
          qualification={couple.brideQualification}
          parents={couple.brideParents}
          address={couple.brideAddress}
          initial="S"
          photo={couple.bridePhoto || weddingData.assets.bridePhoto}
          side="bride"
        />
      </div>
    </section>
  );
};

export default CoupleSection;
