import Link from "next/link";

export default function FooterLinks({ links }) {
  return (
    <nav>
      <ul className="flex flex-col justify-between gap-2 text-sm sm:flex-row lg:gap-8 lg:text-base">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.link}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
