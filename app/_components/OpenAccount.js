import { HiArrowRight } from "react-icons/hi2";

export default function OpenAccount() {
  return (
    <form
      className="flex flex-col items-center justify-center gap-4 sm:gap-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className="text-2xl font-medium !leading-normal md:text-3xl md:font-bold">
        Open your bank account in just 5{" "}
        <span className="highlight-modal">minutes</span>
      </h2>
      <div className="sm:flex sm:flex-col sm:gap-4 md:gap-6">
        <FormElement label="First Name" type="text" />
        <FormElement label="Last Name" type="text" />
        <FormElement label="Email Address" type="email" />
      </div>

      <button
        type="submit"
        className="bg-primary-600 hover:bg-primary-700 flex items-center justify-center gap-4 self-center rounded-full px-6 py-3 text-base md:px-8 md:py-4"
        aria-label="Next step"
      >
        Next step <HiArrowRight />
      </button>
    </form>
  );
}

function FormElement({ label, type }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        required
        className="solid rounded-lg border border-stone-900 p-2 text-base"
      />
    </div>
  );
}
