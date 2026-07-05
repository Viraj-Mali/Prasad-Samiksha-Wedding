import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import OpeningEnvelopeScreen from './components/OpeningEnvelopeScreen.jsx';
import FloatingParticles from './components/FloatingParticles.jsx';
import HeroSection from './components/HeroSection.jsx';
import SaveTheDate from './components/SaveTheDate.jsx';
import CountdownTimer from './components/CountdownTimer.jsx';
import CoupleSection from './components/CoupleSection.jsx';
import PhotoStack from './components/PhotoStack.jsx';
import EventDetails from './components/EventDetails.jsx';
import InvitationMessage from './components/InvitationMessage.jsx';
import VenueSection from './components/VenueSection.jsx';
import FamilySection from './components/FamilySection.jsx';
import Footer from './components/Footer.jsx';
import MusicButton from './components/MusicButton.jsx';
import FloatingActions from './components/FloatingActions.jsx';

import { weddingData } from './data/index.js';

function App() {
  const [entered, setEntered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Pre-load audio, but do NOT play
    try {
      audioRef.current = new Audio(weddingData.assets.music);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.45;
    } catch {
      // Music file may not exist — that's OK
    }

    const audio = audioRef.current;
    if (!audio) return;

    const pauseMusic = () => {
      audio.pause();
      setIsPlaying(false);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        pauseMusic();
      }
    };

    const handlePageHide = () => {
      pauseMusic();
      audio.currentTime = 0;
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", handlePageHide);
    window.addEventListener("beforeunload", handlePageHide);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("pagehide", handlePageHide);
      window.removeEventListener("beforeunload", handlePageHide);
      if (audio) {
        audio.pause();
      }
      audioRef.current = null;
    };
  }, []);

  const handleEnter = () => {
    setEntered(true);
    // Try to start music
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked or file missing — silently ignore
          setIsPlaying(false);
        });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-sage-pale)', overflowX: 'hidden' }}>
      {/* ── Envelope Opening (conditional) ── */}
      <AnimatePresence>
        {!entered && <OpeningEnvelopeScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {/* ── Main Invitation (shown after entering) ── */}
      {entered && (
        <>
          <FloatingParticles />

          {/* Music toggle — visible only after entry */}
          <MusicButton isPlaying={isPlaying} toggleMusic={toggleMusic} visible={entered} />

          {/* Sections */}
          <main>
            <HeroSection />
            <SaveTheDate />
            <CountdownTimer />
            <CoupleSection />
            <PhotoStack />
            <EventDetails />
            <InvitationMessage />
            <VenueSection />
            <FamilySection />
            <Footer />
          </main>

          {/* Mobile floating action bar */}
          <FloatingActions />
        </>
      )}
    </div>
  );
}

export default App;
