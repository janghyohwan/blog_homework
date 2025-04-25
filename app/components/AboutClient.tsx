"use client";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("./About"), { ssr: false });

export default function AboutClient() {
  return <AboutSection />;
}
