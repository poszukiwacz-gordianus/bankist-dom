"use client";

import { Fragment } from "react";
import { featuresContent } from "../_content/content";
import { SectionHeader, Steps } from "@/app/_components/Components";
import { useWindowSize } from "../_hooks/hooks";

export default function Features() {
  const { id, header, subHeader, stepsContent } = featuresContent;
  const { width } = useWindowSize();

  return (
    <section id={id} className="section">
      <div className="mx-auto max-w-screen-lg px-4 py-14 md:px-6 md:py-20 lg:py-24">
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
                iconAlt={step.iconAlt}
              />

              {!!(i % 2) && width >= 544 ? (
                <Steps.Image image={step.image} alt={step.alt} />
              ) : null}
            </Fragment>
          ))}
        </Steps>
      </div>
    </section>
  );
}
