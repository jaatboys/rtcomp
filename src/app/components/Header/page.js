"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import { IconCE, IconEqual } from "../Svg";
import { AiFillCaretDown } from "react-icons/ai";

const HomePageHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#1E2736] shadow-xl">
      {/* Header desktop */}
      <header className="flex justify-between items-center max-w-[1440px] mx-auto p-3 z-10">
        <Link href="/">
          <h1 className="flex gap-1 items-center text-lg sm:text-xl lg:text-3xl text-white">
            {/* Consider using a real logo or text for your brand */}
            <span>
              <IconCE className={"sm:w-14 w-12"}></IconCE>
            </span>{" "}
            Code<span className="text-[#01B6FF]">Exampler</span>
          </h1>
        </Link>

        <div className="flex gap-8 text-white items-center">
          <Link href="/">Home</Link>
          <Link href={"/programming-language-to-learn"} legacyBehavior>
  <Link href={"/programming-language-to-learn"} className="text-xl max-sm:text-sm font-bold py-2 rounded-lg bg-[#1E405D] sm:w-36 w-20 text-center">
    Tutorials
  </Link>
</Link>
        </div>
      </header>
    </div>
  );
};

export default HomePageHeader;
