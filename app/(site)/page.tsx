import { Metadata } from "next";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Rezivure",
  description: "An Oasis for Privacy",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Contact />
    </main>
  );
}
