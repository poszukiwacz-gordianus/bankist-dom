import {
  CallToAction,
  Features,
  Footer,
  Header,
  Hero,
  HowItWorks,
  Testimonials,
} from "@/app/_sections/Sections";

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
