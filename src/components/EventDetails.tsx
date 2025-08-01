import React from 'react';

const EventDetails = () => {
  const details = [
    {
      icon: '📅',
      title: 'Date',
      text: 'October 26th, 2025',
    },
    {
      icon: '🕒',
      title: 'Time',
      text: '10:00 AM - 4:00 PM',
    },
    {
      icon: '📍',
      title: 'Venue',
      text: 'GCETTS Auditorium',
    },
    {
      icon: '📜',
      title: 'Agenda',
      text: 'Talks, Workshops & Networking',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {details.map((detail, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 text-white text-center"
            >
              <div className="text-4xl mb-4">{detail.icon}</div>
              <h3 className="text-xl font-bold mb-2">{detail.title}</h3>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
