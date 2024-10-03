"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const PathLink = () => {
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Collections",
      path: "/collection",
    },
    {
      title: "Hot Deals",
      path: "/hotdeals",
    },
    {
      title: "KENS BOOTS",
      path: "/kensboots",
    },
  ];

  return (
    <nav className="flex items-center justify-center gap-10">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${
            link.path === pathname &&
            "text-bgSoft border border-bgSoft rounded-full px-2 "
          } capitalize font-medium hover:text-accent transition-all 3s`}
        >
          {link.title}
        </Link>
      ))}
    </nav>
  );
};

export default PathLink;
