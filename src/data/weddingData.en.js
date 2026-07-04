/**
 * ENGLISH WEDDING DATA
 * All names, dates, venue details, and content are stored here.
 * To update any information, only edit this file.
 */
export const weddingData = {
  language: "en",

  couple: {
    groomName: "Dr. Prasad",
    groomFullName: "Dr. Prasad",
    groomQualification: "B.H.M.S.",
    groomAddress: "Chincholi Gurav, Sangamner, Ahilyanagar",
    brideName: "Samiksha",
    brideFullName: "Samiksha",
    brideQualification: "M.Pharm",
    brideAddress: "Hanumantgaon, Rahata, Ahilyanagar",
  },

  wedding: {
    title: "Wedding Invitation",
    subtitle: "Together with their families",
    mainLine: "Dr. Prasad & Samiksha",
    weddingDate: "09 July 2026",
    weddingTime: "12:37 PM",
    weddingDateISO: "2026-07-09T12:37:00+05:30",
    timezone: "Asia/Kolkata",
    hashtag: "#PrasadSamikshaWedding",
    blessing: "|| Shree Ganeshaya Namah ||",
  },

  venue: {
    name: "Vasant Lawns",
    address: "Near Ganpati Mandir, Sangamner",
    city: "Tal. Sangamner, Dist. Ahilyanagar",
    mapLink: "https://maps.app.goo.gl/hiw6PBZkwiEX8ivr7",
    mapSearch: "https://www.google.com/maps/search/?api=1&query=Vasant+Lawns+Sangamner",
  },

  events: [
    {
      id: "haldi",
      title: "Engagement & Haldi Ceremony",
      icon: "🌼",
      date: "Wednesday, 08 July 2026",
      time: "6:00 PM",
      venue: "Vasant Lawns, Sangamner",
      isoDate: "2026-07-08T18:00:00+05:30",
      calendarTitle: "Engagement & Haldi – Dr. Prasad & Samiksha",
    },
    {
      id: "wedding",
      title: "Wedding Ceremony",
      icon: "💍",
      date: "Thursday, 09 July 2026",
      time: "12:37 PM",
      venue: "Vasant Lawns, Sangamner",
      isoDate: "2026-07-09T12:37:00+05:30",
      calendarTitle: "Wedding Ceremony – Dr. Prasad & Samiksha",
    },
  ],

  invitationMessage:
    "With great joy, we invite you and your family to celebrate the wedding ceremony of Dr. Prasad and Samiksha. Your presence and blessings will make this occasion even more special.",

  family: {
    heading: "With Love",
    mainLine: "Godge Patil Family & Relatives",
    members: [
      { name: "Babasaheb Bhikari Godge", phone: "" }, // TODO: Add phone
      { name: "Annasaheb Bhikari Godge", phone: "" }, // TODO: Add phone
      { name: "Sanjay Bhikari Godge", phone: "" },    // TODO: Add phone
    ],
  },

  footerLine: "We look forward to celebrating this special day with you.",

  assets: {
    music: "/music/wedding-music.mp3",
    ganpatiImage: "/images/ganpati.png",
    weddingCard: "/images/wedding-card.jpg",
    groomPhoto: "", // TODO: Add groom photo path, e.g. "/images/groom.jpg"
    bridePhoto: "", // TODO: Add bride photo path, e.g. "/images/bride.jpg"
    galleryImages: [
      "/images/wedding-card.jpg",
    ],
  },

  share: {
    whatsappText: "You are cordially invited to the wedding of Dr. Prasad & Samiksha! 💍\n09 July 2026 | Vasant Lawns, Sangamner\nYour presence and blessings are most welcome.\n",
    websiteUrl: "https://prasad-samiksha-wedding.netlify.app/",
  },

  seo: {
    title: "Dr. Prasad & Samiksha | Wedding Invitation",
    description:
      "You are invited to celebrate the wedding of Dr. Prasad and Samiksha on 09 July 2026 at Vasant Lawns, Sangamner.",
    ogImage: "/images/og-preview.jpg",
  },
};
