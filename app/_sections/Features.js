"use client";

import { SectionHeader, Steps } from "@/app/_components/Components";
import useWindowSize from "../_hooks/useWindowSize";
import { featuresContent } from "../_content/content";
import { Fragment } from "react";

export default function Features() {
  const { header, subHeader, stepsContent } = featuresContent;
  const { width } = useWindowSize();

  return (
    <section
      id="features"
      className="mx-auto max-w-screen-lg px-4 py-14 md:px-6 md:py-20 lg:py-24"
    >
      <SectionHeader header={header} subHeader={subHeader} />
      <Steps>
        {stepsContent.map((step, i) => (
          <Fragment key={step.header}>
            {!(i % 2) || width < 544 ? (
              <Steps.Image image={step.image} alt={step.alt} />
            ) : null}

            <Steps.Information
              header={step.header}
              description={step.description}
              icon={step.icon}
            />

            {!!(i % 2) && width >= 544 ? (
              <Steps.Image image={step.image} alt={step.alt} />
            ) : null}
          </Fragment>
        ))}
      </Steps>
    </section>
  );
}
