import About from '@/components/About';
import EventDetails from '@/components/EventDetails';
import FacultyCoordinators from '@/components/FacultyCoordinators';
import Hero from '@/components/Hero';
import StudentCoordinators from '@/components/StudentCoordinators';

export default function Home() {
  return (
    <main>
      <Hero />
      <EventDetails />
      <About />
      <FacultyCoordinators />
      <StudentCoordinators />
    </main>
  );
}
