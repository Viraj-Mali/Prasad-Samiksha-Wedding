import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicButton = ({ isPlaying, toggleMusic, visible }) => {
  if (!visible) return null;

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-5 right-5 z-40 flex items-center justify-center rounded-full transition-all duration-300"
      style={{
        width: 46,
        height: 46,
        background: 'rgba(250,247,240,0.92)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(201,168,76,0.35)',
        boxShadow: '0 4px 20px rgba(44,24,16,0.12)',
        color: 'var(--color-gold-dark)',
      }}
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying
        ? <Volume2 size={20} style={{ animation: 'sealPulse 2s infinite' }} />
        : <VolumeX size={20} />
      }
    </button>
  );
};

export default MusicButton;
