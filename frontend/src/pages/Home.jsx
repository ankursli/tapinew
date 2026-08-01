import { Hero } from "@/components/Hero";
import { Marquee, About } from "@/sections/About";
import { RiverStory, Heritage, Timeline } from "@/sections/River";
import { Activities, DailyAarti, SevaCTA } from "@/sections/Serve";
import { Members, Testimonials } from "@/sections/People";
import { Gallery, Events, News, DownloadCenter } from "@/sections/Showcase";
import { Faq, Contact, Footer } from "@/sections/Connect";

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />
      <Marquee />
      <About />
      <RiverStory />
      <Heritage />
      <Timeline />
      <Activities />
      <DailyAarti />
      <SevaCTA />
      <Members />
      <Gallery />
      <Events />
      <News />
      <DownloadCenter />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
