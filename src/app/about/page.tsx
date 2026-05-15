import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "Sobre Mí | Gonzalo Martínez",
  description:
    "Conoce mi historia, mi trayectoria profesional y lo que me impulsa como desarrollador y analista de datos.",
};

export default function AboutPage() {
  return <AboutContent />;
}