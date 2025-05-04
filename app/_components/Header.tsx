"use client";

import { Button } from "@/components/ui/button";
import { User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
const Header = () => {
  const path = usePathname();
  const [pageTitle,setPageTitle]=useState("");
  useEffect(() => {
  if(path=="/dashboard"){
    setPageTitle("Dashboard")
  }else if(path=="/overview"){
    setPageTitle("Overview")
  }
  else{
    setPageTitle("Edit Profile")
  }},[])
  return (
    <div className="flex p-4 items-center justify-between bg-secondary w-full">
      <Image src={"/logo.svg"} width={160} height={100} alt="logo" />
      <ul className=" gap-6 hidden md:flex">
        <li
          className="transition-all text-lg text-primary font-bold "
        >
          {pageTitle}
        </li>
      </ul>

     <div className="w-[80px]"> <DropdownMenu >
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <User />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem >
           <Link href="/edit-form"> Edit Profile</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu></div>
    </div>
  );
};

export default Header;
