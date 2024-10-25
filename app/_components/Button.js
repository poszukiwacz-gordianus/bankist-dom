export default function Button({ children, className, onClick, ariaLabel }) {
  return (
    <button
      className={`${className} absolute text-2xl hover:text-neutral-700 sm:text-4xl`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
