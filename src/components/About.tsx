import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About the Community</h2>
            <p className="text-lg leading-relaxed">
              The WordPress Kolkata community is a group of passionate developers, designers, and users who love WordPress. We organize meetups, workshops, and WordCamps to share knowledge, foster collaboration, and grow the local WordPress ecosystem. Join us to learn, share, and connect with fellow enthusiasts.
            </p>
          </div>
          <div className="text-center md:text-right">
            <Link href="/speakers">
              <div className="inline-block bg-transparent hover:bg-blue-600 text-white font-bold py-3 px-8 border border-white rounded-full transition duration-300">
                Meet The Speakers
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
