import About from "@/components/About";
import EventDetails from "@/components/EventDetails";
import FacultyCoordinators from "@/components/FacultyCoordinators";
import Hero from "@/components/Hero";
import StudentCoordinators from "@/components/StudentCoordinators";
import Background from "@/components/Background";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <main className="relaive h-fit">
      <div className="relative z-60 isolate">
        <Hello />
      </div>
      <Background />
      <div className="relative top-0 left-0 w-full z-50 h-fit">
        <Hero />
        <EventDetails />
        <About />
        <FacultyCoordinators />
        <StudentCoordinators />
      </div>
    </main>
  );
}
