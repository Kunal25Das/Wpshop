import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SpeakersPage = () => {
  const speakers = [
    {
      name: 'Speaker One',
      title: 'Senior Developer, Tech Corp',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=S1',
      socials: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Speaker Two',
      title: 'UX/UI Designer, Creative Co.',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=S2',
      socials: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Speaker Three',
      title: 'Project Manager, Agile Inc.',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=S3',
      socials: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Speaker Four',
      title: 'Data Scientist, Numbers LLC',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=S4',
      socials: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Speaker Five',
      title: 'DevOps Engineer, Cloudways',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=S5',
      socials: { twitter: '#', linkedin: '#' },
    },
    {
      name: 'Speaker Six',
      title: 'Marketing Expert, Growth Gurus',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=S6',
      socials: { twitter: '#', linkedin: '#' },
    },
    { revealingSoon: true },
    { revealingSoon: true },
  ];

  return (
    <section className="py-20 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">
          Meet Our Esteemed Speakers
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) =>
            speaker.revealingSoon ? (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 text-center flex flex-col items-center justify-center min-h-[350px]"
              >
                <div className="text-6xl text-gray-500 mb-4">?</div>
                <h3 className="text-xl font-bold">Speaker Revealing Soon...</h3>
                <p className="text-gray-400">Stay Tuned!</p>
              </div>
            ) : (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-6 text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={speaker.imageUrl}
                    alt={`Photo of ${speaker.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="text-gray-400 mb-4">{speaker.title}</p>
                <div className="flex justify-center gap-4">
                  <Link href={speaker.socials.twitter}><a className="text-blue-400 hover:underline">Twitter</a></Link>
                  <Link href={speaker.socials.linkedin}><a className="text-blue-400 hover:underline">LinkedIn</a></Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default SpeakersPage;
