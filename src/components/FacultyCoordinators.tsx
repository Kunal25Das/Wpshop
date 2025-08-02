import React from 'react';
import Image from 'next/image';

const FacultyCoordinators = () => {
  const faculty = [
    {
      name: 'Dr. Faculty One',
      title: 'Professor, Dept. of Computer Science',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=Photo',
    },
    {
      name: 'Dr. Faculty Two',
      title: 'Associate Professor, Dept. of IT',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=Photo',
    },
    {
      name: 'Dr. Faculty Three',
      title: 'Head of Department, ECE',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=Photo',
    },
     {
      name: 'Dr. Faculty Four',
      title: 'Assistant Professor, EE',
      imageUrl: 'https://placehold.co/400x400/1a1a1a/ffffff?text=Photo',
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Esteemed Faculty Coordinators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((coordinator, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={`/vercel.svg`}
                  alt={`Photo of ${coordinator.name}`}
                  layout="fill"
                  // objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{coordinator.name}</h3>
              <p className="text-gray-400">{coordinator.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyCoordinators;
