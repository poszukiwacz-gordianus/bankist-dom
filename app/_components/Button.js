export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`${className} absolute text-2xl hover:text-neutral-700`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
