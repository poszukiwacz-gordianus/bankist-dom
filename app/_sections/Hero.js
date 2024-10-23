import Image from "next/image";
import { Button, SectionHeader } from "@/app/_components/Components";

export default function Hero() {
  return (
    <section>
      <div>
        <SectionHeader />
        <p>{/* Description */}</p>
        <Button />
      </div>

      {/* Hero image */}
      {/* <Image /> */}
    </section>
  );
}
