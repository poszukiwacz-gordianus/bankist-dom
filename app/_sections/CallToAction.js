import { callToActionContent } from "../_content/content";

export default function CallToAction() {
  const { id, header, button } = callToActionContent;
  return (
    <section id={id} className="bg-zinc-700 px-6 py-14 md:py-20 lg:py-24">
      <div className="mx-auto flex max-w-screen-lg flex-col items-center gap-6 text-center text-stone-50 sm:w-[90%] sm:gap-8 md:w-[65%] md:gap-10 lg:gap-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl">{header}</h2>
        <button className="bg-primary-600 hover:bg-primary-700 inline-block self-center rounded-full px-6 py-3 text-lg text-zinc-900 lg:px-10 lg:py-5 lg:text-xl">
          {button}
        </button>
      </div>
    </section>
  );
}
