"use client";

// import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// { href, display }: { href: string; display: string }

const CurrentLinkProvider = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  // const { pathname } = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {/* {pathname === href ? (
        <Link className="font-bold" href={href}>
          {display}
        </Link>
      ) : (
        <Link href={href}>{display}</Link>
      )}
       */}
      {pathname === href ? (
        <div className="font-bold text-black">{children}</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default CurrentLinkProvider;
