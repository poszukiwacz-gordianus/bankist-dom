export default function Button({
  id,
  children,
  className,
  onClick,
  onMouseOver,
  onMouseOut,
  ariaLabel,
}) {
  return (
    <button
      id={id}
      role="button"
      className={`${className} absolute text-2xl hover:text-neutral-700 sm:text-4xl`}
      onClick={onClick}
      aria-label={ariaLabel}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </button>
  );
}
