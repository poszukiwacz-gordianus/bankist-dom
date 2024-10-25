export default function SectionHeader({ header, subHeader }) {
  return (
    <div className="text-center">
      <h3
        className={`text-primary-600 mb-1 block text-xs font-medium uppercase sm:text-sm lg:mb-4 lg:text-base`}
      >
        {subHeader}
      </h3>
      <h2
        className={`mb-10 text-xl sm:text-red-500 md:text-2xl md:text-blue-500 lg:text-3xl lg:text-yellow-500 xl:text-4xl xl:text-purple-500`}
      >
        {header}
      </h2>
    </div>
  );
}
