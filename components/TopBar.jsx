"use client";

import { Logout } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TopBar = () => {
  const pathname = usePathname();

  const handleLogout = async () => {
    signOut({ callbackUrl: "/" });
  };

  const { data: session } = useSession();
  const user = session?.user;
  return (
    <div className="topbar">
      <Link href="/chats">
        <Image src="/logo2.png" alt="logo2" width={50} height={50} />
      </Link>

      <div className="menu">
        <Link
          href="/chats"
          className={`${
            pathname === "/chats" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Chats
        </Link>
        <Link
          href="/contacts"
          className={`${
            pathname === "/contacts" ? "text-red-1" : ""
          } text-heading4-bold`}
        >
          Contacts
        </Link>

        <Logout
          sx={{ color: "#737373", cursor: "pointer" }}
          onClick={handleLogout}
        />

        <Link href="/profile">
          <Image
            alt="profile"
            className="profilePhoto"
            src={user?.profileImage || "/person.jpg"}
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
