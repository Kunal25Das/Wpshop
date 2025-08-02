'use client';

import React from 'react';
import ProfileCard from '@/components/widgets/ProfileCard';

interface Speaker {
  name: string;
  title: string;
  imageUrl: string;
  handle?: string;
  status?: string;
  socials: {
    twitter: string;
    linkedin: string;
  };
}

interface RevealingSoon {
  revealingSoon: true;
}

type SpeakerData = Speaker | RevealingSoon;

const SpeakersPage = () => {
  const speakers: SpeakerData[] = [
    {
      name: 'Subhasis Chatterjee',
      title: 'Founder & CEO ConnectIndia',
      imageUrl: '/SubhasisUncle.jpg',
      handle: 'subhasischatterjee',
      status: 'Speaking Soon',
      socials: { twitter: '#', linkedin: 'https://www.linkedin.com/in/subhasischatterjee1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2Kcf6CZ7QGqBiNT7V7OCEg%3D%3D' },
    },
    {
      name: 'Subrata Sarkar',
      title: 'Web & Platform developer,\nemfluence, USA',
      imageUrl: '/SubrataUncle.jpg',
      handle: 'sarkarsubrata',
      status: 'Speaking Soon',
      socials: { twitter: '#', linkedin: 'https://www.linkedin.com/in/sarkarsubrata?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BILoknM74ScqRFOyv13ZRwQ%3D%3D' },
    },
    {
      name: 'Tristup Ghosh',
      title: 'Consulting',
      imageUrl: '/TristupUncle.jpg',
      handle: 'tristup-ghosh',
      status: 'Speaking Soon',
      socials: { twitter: '#', linkedin: 'https://www.linkedin.com/in/tristup-ghosh-89659863?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLV1eAF45Sp2muF96zO5OTg%3D%3D' },
    },
    {
      name: 'Ritika Roy',
      title: 'Content & Social Media Marketer',
      imageUrl: '/RitikaDidi.jpg',
      handle: 'ritika-roy',
      status: 'Speaking Soon',
      socials: { twitter: '#', linkedin: 'https://www.linkedin.com/in/ritika-roy-8792b257?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BXcK2qhKFTFWkVmSJDqtq8w%3D%3D' },
    },
    {
      name: 'Sudipta Roy',
      title: 'Software Engineer,\nVirtual Employee Pvt. Ltd.',
      imageUrl: '/SudiptoDa.png',
      handle: 'sudipta-roy',
      status: 'Speaking Soon',
      socials: { twitter: '#', linkedin: 'https://www.linkedin.com/in/sudipto-roy-672a08144?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkHH%2BYPNbS5eFWc%2Fe7MaHjg%3D%3D' },
    },
    { revealingSoon: true },
    { revealingSoon: true },
    { revealingSoon: true },
  ];

  const handleContactClick = (speaker: Speaker) => {
    // Open LinkedIn profile in new tab
    if (speaker.socials.linkedin && speaker.socials.linkedin !== '#') {
      window.open(speaker.socials.linkedin, '_blank', 'noopener,noreferrer');
    } else {
      console.log(`No LinkedIn profile available for ${speaker.name}`);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Meet Our Esteemed Guests
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for insights from industry leaders, innovators, and visionaries shaping the future of technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
          {speakers.map((speaker, index) =>
            'revealingSoon' in speaker ? (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm rounded-3xl border border-gray-700/50 p-8 text-center flex flex-col items-center justify-center min-h-[400px] hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mb-6 border border-purple-500/30">
                  <div className="text-4xl text-purple-400">?</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Speaker Revealing Soon</h3>
                <p className="text-gray-400 text-lg">Stay Tuned for More!</p>
                <div className="mt-4 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <span className="text-purple-300 text-sm font-medium">Coming Soon</span>
                </div>
              </div>
            ) : (
              <ProfileCard
                key={index}
                avatarUrl={speaker.imageUrl}
                //miniAvatarUrl={speaker.imageUrl}
                name={speaker.name}
                title={speaker.title}
                handle={speaker.handle}
                status={speaker.status}
                contactText="Connect"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(266,100%,90%,var(--card-opacity)) 4%, hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%, hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%, hsla(266,0%,60%,0) 100%)"
                className="min-h-[400px] hover:scale-105 transition-transform duration-300"
                onContactClick={() => handleContactClick(speaker)}
              />
            )
          )}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg">
            More speakers to be announced. Follow us for updates!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakersPage;
