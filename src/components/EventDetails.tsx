import React from 'react'

import SpotlightCard from './widgets/SpotlightCard'

import { IconCalendar, IconMapPin,IconBulb, IconCertificate } from '@tabler/icons-react'

const eventDetails = [
  { title: "Date and Time", content: "August 30, 2025\n11:00 AM - 4:00 PM", icon: IconCalendar, color: "from-blue-400 to-cyan-400", spotlightColor: "rgba(48, 85, 157, 0.50)" },
  { title: "Venue", content: "Auditorium, GCETTS", icon: IconMapPin, color: "from-orange-400 to-red-400", spotlightColor: "rgba(189, 89, 23, 0.50)" },
  { title: "What to expect", content: "Tech Talk\nWorkshop\nGames & Quizzes", icon: IconBulb, color: "from-purple-400 to-pink-400", spotlightColor: "rgba(89, 21, 163, 0.50)" },
  { title: "Perks", content: "Certificate Hardcopy\nNetworking Opportunities\nAwards", icon: IconCertificate, color: "from-indigo-400 to-purple-400", spotlightColor: "rgba(59, 57, 126, 0.50)" }
];

const EventDetails = () => {
  return (
    <div className="min-h-screen relative flex flex-col justify-center items-center">
      {/* <Galaxy className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} /> */}
      <div className="relative z-10 p-8 text-white w-full">
        <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-orbitron">
          Event Details
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto justify-items-center">
          {eventDetails.map((detail, idx) => {
            const IconComponent = detail.icon;
            return (
              <SpotlightCard
                key={idx}
                className="aspect-square p-4 bg-slate-900/40 backdrop-blur-lg border border-slate-700/50 rounded-2xl hover:border-slate-500/50 transition-all duration-300 group w-full max-w-sm"
                spotlightColor={detail.spotlightColor}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${detail.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {detail.title}
                    </h2>
                  </div>
                  <div className="flex-1 flex items-center">
                    <p className="text-xl font-semibold text-slate-300 leading-relaxed group-hover:text-white transition-colors duration-300" style={{ whiteSpace: 'pre-line' }}>
                      {detail.content}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default EventDetails
