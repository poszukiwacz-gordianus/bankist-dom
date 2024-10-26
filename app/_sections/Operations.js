import { OperationTabs, SectionHeader } from "@/app/_components/Components";
import { operationsContent } from "../_content/content";

export default function Operations() {
  const { id, header, subHeader } = operationsContent;

  return (
    <section id={id} className="section">
      <div className="mx-auto max-w-screen-lg px-4 py-14 md:px-12 md:py-20 lg:py-24">
        <SectionHeader header={header} subHeader={subHeader} />
        <OperationTabs />
      </div>
    </section>
  );
}
