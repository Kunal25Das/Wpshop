import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 px-10 text-white">
      <div className="container mx-auto px-4">
        <div className="md:flex gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">About the Community</h2>
            <p className="text-lg text-justify mb-5">
              The WordPress Kolkata community is a group of passionate developers, designers, and users who love WordPress. This is the first initiative to have regular Kolkata based WordPress Meetups. It is an idea to create a regular WordPress Meetup in Kolkata. There are many different WordPress users in Kolkata and it is time to connect and share ideas and knowledge and build a local WordPress community. Join us to learn, share, and connect with fellow enthusiasts.
            </p>
          </div>
          <div className="text-center md:text-right w-full">
            <Link href="/speakers">
              <button className="bg-transparent hover:bg-blue-600 text-white font-bold py-3 px-8 border border-white rounded-full transition duration-300">
                Meet The Speakers
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;