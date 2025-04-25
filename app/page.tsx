import HomeSection from "./components/Home";
import Project from "./components/Project";
import AboutSection from "./components/About";
import ContactPage from "./components/Contact";

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <Project />
      <ContactPage />
    </div>
  );
}
