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
      <Header />

      <main>
        <Hero />
        <hr />
        <Features />
        <hr />
        <Operations />
        <hr />
        <Testimonials />
        <CallToAction />
        <hr className="border-t border-zinc-600" />
      </main>

      <Footer />
    </>
  );
}
