export default function SectionHeader({ header, subHeader }) {
  return (
    <div className="text-center">
      <h2 className="text-primary-600 mb-1 block text-xs font-medium uppercase sm:text-sm lg:mb-4 lg:text-base">
        {subHeader}
      </h2>
      <h3 className="mb-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {header}
      </h3>
    </div>
  );
}
