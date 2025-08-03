import { ReactNode } from "react";

export interface Event {
  id: number;
  name: string;
  date: string;
  image: string;
  description: string;
}

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
}
