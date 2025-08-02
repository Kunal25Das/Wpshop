import React from 'react';
import Image from 'next/image';

const StudentCoordinators = () => {
  const students = [
    {
      name: 'Student One',
      role: 'Lead Coordinator',
      imageUrl: '/vercel.svg',
    },
    {
      name: 'Student Two',
      role: 'Marketing Lead',
      imageUrl: '/vercel.svg',
    },
    {
      name: 'Student Three',
      role: 'Sponsorships',
      imageUrl: '/vercel.svg',
    },
    {
      name: 'Student Four',
      role: 'Logistics',
      imageUrl: '/vercel.svg',
    },
    {
      name: 'Student Five',
      role: 'Web Developer',
      imageUrl: '/vercel.svg',
    },
    {
      name: 'Student Six',
      role: 'Volunteer',
      imageUrl: '/vercel.svg',
    },
  ];

  return (
    <section className="py-20 text-white bg-black/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Student Coordinators
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {students.map((student, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image src={`/vercel.svg`}
                alt={`/vercel.svg of ${student.name}`}
                  layout="fill"
                  // objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-bold">{student.name}</h3>
              <p className="text-gray-400">{student.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCoordinators;
