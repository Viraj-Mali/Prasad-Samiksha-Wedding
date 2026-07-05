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
    groomParents: "Son of Mrs. Asha & Mr. Sanjay Bhikari Patil Godge",
    groomAddress: "Chincholi Gurav, Sangamner, Ahilyanagar",
    brideName: "Samiksha",
    brideFullName: "Samiksha",
    brideQualification: "M.Pharm",
    brideParents: "Daughter of Mrs. Kaveri & Mr. Anil Bhimraj Patil Gholap",
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
      id: "mehendi",
      title: "Mehendi Ceremony",
      icon: "🌿",
      date: "Tuesday, 07 July 2026",
      time: "7:00 PM",
      venue: "Chincholi Gurav",
      isoDate: "2026-07-07T19:00:00+05:30",
      calendarTitle: "Mehendi Ceremony – Dr. Prasad & Samiksha",
      illustration: "/images/events/mehendi-couple.png", 
    },
    {
      id: "haldi",
      title: "Haldi & Ring Ceremony",
      icon: "🌼",
      date: "Wednesday, 08 July 2026",
      time: "6 PM Onwards",
      venue: "Vasant Lawns, Sangamner",
      isoDate: "2026-07-08T18:00:00+05:30",
      calendarTitle: "Engagement & Haldi – Dr. Prasad & Samiksha",
      illustration: "/images/events/haldi-couple.png",
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
      illustration: "/images/events/wedding-couple.png",
    },
  ],

  invitationMessage:
    "With great joy, we invite you and your family to celebrate the wedding ceremony of Dr. Prasad and Samiksha. Your presence and blessings will make this occasion even more special.",

  family: {
    heading: "Invitees",
    mainLine: "Godge Patil Family & Relatives",
    members: [
      { name: "Mr. Babasaheb Bhikari Patil Godage", phone: "" },
      { name: "Mr. Sanjay Bhikari Patil Godage", phone: "" },
      { name: "Mr. Annasaheb Bhikari Patil Godage", phone: "" },
      { name: "Mr. Bapusaheb Bhikari Patil Godage", phone: "" },
      { name: "Omkar Sanjay Godage", phone: "" },
    ],
  },

  footerLine: "We look forward to celebrating this special day with you.",

  assets: {
    music: "/music/wedding-music.mp3",
    ganpatiImage: "/images/ganpati.png",
    weddingCard: "/images/wedding-card.jpg",
    groomPhoto: "/images/Groom_photo.png",
    bridePhoto: "/images/Bride_photo.png",
    galleryImages: [
      "/images/Couple_photo1.jpeg",
      "/images/Couple_photo4.jpeg",
      "/images/Couple_photo3.jpeg",
      "/images/Couple_photo2.jpeg",
      "/images/Couple_photo5.jpeg",
    ],
  },

  share: {
    whatsappText: "You are cordially invited to the wedding of Dr. Prasad & Samiksha! 💍\n09 July 2026 | Vasant Lawns, Sangamner\nYour presence and blessings are most welcome.\n",
    websiteUrl: "https://prasad-samiksha-wedding.vercel.app/",
  },

  seo: {
    title: "Dr. Prasad & Samiksha | Wedding Invitation",
    description:
      "You are invited to celebrate the wedding of Dr. Prasad and Samiksha on 09 July 2026 at Vasant Lawns, Sangamner.",
    ogImage: "/images/og-preview.jpeg",
  },
};
