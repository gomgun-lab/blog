"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_ITEMS } from "@/constants/nav";

export function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="flex gap-2">
        {NAV_ITEMS.map(({ link, name }) => (
          <Link
            className={clsx(
              "scroll-m-20 text-xl font-semibold tracking-tight hover:underline",
              {
                underline: pathname === link,
              },
            )}
            key={link}
            href={link}
          >
            {name}
          </Link>
        ))}
      </div>
    </header>
  );
}
