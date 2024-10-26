import { SectionHeader, TestimonialSlider } from "@/app/_components/Components";
import { testimonialsContent } from "../_content/content";

export default function Testimonials() {
  const { id, header, subHeader } = testimonialsContent;

  return (
    <div id={id} className="section">
      <section className="mx-auto max-w-screen-lg px-4 py-14 md:px-12 md:py-20 lg:py-24">
        <SectionHeader header={header} subHeader={subHeader} />
        <TestimonialSlider />
      </section>
    </div>
  );
}
