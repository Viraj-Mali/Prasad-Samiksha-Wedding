import React from 'react';
import { Share2, Navigation, Calendar } from 'lucide-react';
import { weddingData } from '../data/index.js';

const FloatingActions = ({ onMusicToggle, isPlaying }) => {
  const { share, venue, events } = weddingData;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(share.whatsappText + share.websiteUrl)}`;

  // Download ICS for main wedding event
  const addToCalendar = () => {
    const event = events[1]; // Wedding Ceremony
    const format = (iso) => iso.replace(/[-:]/g, '').split('+')[0];
    const content = [
      'BEGIN:VCALENDAR','VERSION:2.0','BEGIN:VEVENT',
      `SUMMARY:${event.calendarTitle}`,
      `DTSTART:${format(event.isoDate)}`,
      `LOCATION:${event.venue}`,
      'END:VEVENT','END:VCALENDAR',
    ].join('\r\n');
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([content], { type: 'text/calendar' }));
    a.download = 'wedding.ics';
    a.click();
  };

  const btnStyle = {
    width: 44, height: 44,
    borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(250,247,240,0.95)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(201,168,76,0.3)',
    boxShadow: '0 2px 12px rgba(44,24,16,0.12)',
    color: 'var(--color-gold-dark)',
    cursor: 'pointer',
    transition: 'transform 0.15s ease',
    flexDirection: 'column',
    gap: 2,
    fontSize: 9,
  };

  return (
    <div
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3 px-5 py-3 md:hidden"
      style={{
        background: 'rgba(250,247,240,0.96)',
        backdropFilter: 'blur(20px)',
        borderRadius: 40,
        border: '1px solid rgba(201,168,76,0.25)',
        boxShadow: '0 8px 32px rgba(44,24,16,0.15)',
      }}
    >
      {[
        { icon: <Share2 size={18}/>, label: 'Share', href: whatsappUrl, isLink: true },
        { icon: <Navigation size={18}/>, label: 'Map', href: venue.mapLink, isLink: true },
        { icon: <Calendar size={18}/>, label: 'Save', onClick: addToCalendar, isLink: false },
      ].map((btn) => (
        btn.isLink ? (
          <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
            style={btnStyle} aria-label={btn.label}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}>
            {btn.icon}
            <span style={{ fontFamily: 'var(--font-lora)', color: 'var(--color-gold-dark)' }}>{btn.label}</span>
          </a>
        ) : (
          <button key={btn.label} onClick={btn.onClick} style={btnStyle} aria-label={btn.label}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.currentTarget.style.transform = ''}>
            {btn.icon}
            <span style={{ fontFamily: 'var(--font-lora)', color: 'var(--color-gold-dark)' }}>{btn.label}</span>
          </button>
        )
      ))}
    </div>
  );
};

export default FloatingActions;
