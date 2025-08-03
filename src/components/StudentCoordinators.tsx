import React from 'react';
import Image from 'next/image';

const StudentCoordinators = () => {
  const students = [
    {
      name: 'Anish Bar',
      role: 'Secretary',
      imageUrl: '/student/Secretary.jpg',
    },
    {
      name: 'Kunal Das',
      role: 'Vice Secretary',
      imageUrl: '/student/ViceSecretary.jpeg',
    },
    {
      name: 'Anuvab Maity',
      role: 'Treasurer',
      imageUrl: '/student/Treasurer.jpeg',
    },
    {
      name: 'Sreetam Biswas',
      role: 'PR Head',
      imageUrl: '/student/PR.jpeg',
    },
    {
      name: 'Shivani Prasad',
      role: 'Media Head',
      imageUrl: '/student/Media.jpeg',
    },
    {
      name: 'Soumili Polley',
      role: 'Community Head',
      imageUrl: '/student/Comittee.jpeg',
    }
  ];

  return (
    <section className="py-10 text-white hbg-black/20">
      <div className="container mx-auto items-center">
        <h2 className="text-4xl font-bold text-center mb-6">
          Student Coordinators
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {students.map((student, index) => (
            <div key={index} className="bg-gray-800/50 rounded-full p-4 text-center flex">
              <div className="relative w-32 h-32">
                <Image src={student.imageUrl}
                alt={`/vercel.svg of ${student.name}`}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <div className='flex flex-col justify-center leading-snug mx-5'>
                <h3 className="text-xl font-bold">{student.name}</h3>
                <p className="text-gray-400">{student.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentCoordinators;
