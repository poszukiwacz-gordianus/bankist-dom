export default function Button({
  id,
  children,
  role = "button",
  className,
  onClick,
  ariaLabel,
}) {
  return (
    <button
      id={id}
      role={role}
      className={`${className} absolute text-2xl hover:text-neutral-700 sm:text-4xl`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
