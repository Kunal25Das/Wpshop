import React from 'react';
import Image from 'next/image';

const FacultyCoordinators = () => {
  const faculty = [
    {
      name: 'Mr. Preetam Kumar Sur',
      title: 'Assistant Professor & HOD, CSE',
      imageUrl: '/faculty/pks.png',
    },
    {
      name: 'Dr. Dipak Kumar Kole',
      title: 'Professor, CSE',
      imageUrl: '/faculty/dkk.png',
    },
    {
      name: 'Mr. Biswajit Sanyal',
      title: 'Assistant Professor & HOD, IT',
      imageUrl: '/faculty/bs.jpg',
    },
    {
      name: 'Mr. Pijush Kanti Kumar',
      title: 'Assistant Professor, IT',
      imageUrl: '/faculty/pkk.png',
    },
  ];

  return (
    <section className="py-10 text-white">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl font-bold text-center mb-8">
          Esteemed Faculty Coordinators
        </h2>
        <div className='w-full mx-auto flex justify-center gap-8 items-center mb-8'>
          <div className="relative w-64 h-64 flex flex-col items-center ">
            <Image
              src={`/faculty/ssm.png`}
              alt={`Photo of {OIC}`}
              layout="fill"
              className="rounded-2xl"
            />
          </div>
          <div className="bg-black/30 rounded-2xl border border-white/40 p-10 backdrop-blur-sm">
            <h3 className="text-xl font-bold">Prof. (Dr.) Sudipta Sekhar Mahish</h3>
            <p className="text-gray-400">Officer-in-Charge, GCETTS</p>
            <p className="text-gray-400">President, Entropy - Coding Club</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((coordinator, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-64 h-64">
                <Image
                  src={coordinator.imageUrl}
                  alt={`Photo of ${coordinator.name}`}
                  layout="fill"
                  className="rounded-2xl"
                />
              </div>
              <div className="bg-black/30 rounded-2xl border border-white/40 py-2 px-4 transform -translate-y-1/2 backdrop-blur-sm">
                <h3 className="text-xl font-bold">{coordinator.name}</h3>
                <p className="text-gray-400">{coordinator.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyCoordinators;
