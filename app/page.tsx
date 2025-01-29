import Badge from "./components/Badge";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import { CgColorPicker } from "react-icons/cg";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <div className="fixed bottom-6 right-6 z-10">
          <Badge>
            <CgColorPicker />
          </Badge>
        </div>
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
