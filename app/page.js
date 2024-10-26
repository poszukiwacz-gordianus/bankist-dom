import {
  CallToAction,
  Features,
  Footer,
  Header,
  Hero,
  Operations,
  Testimonials,
} from "@/app/_sections/Sections";

export default function Page() {
  return (
    <>
      {/* <Header /> */}

      <main>
        <Hero />
        <Features />
        <Operations />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}
