import { Carrot } from "lucide-react";
// Dropdown menu imports reserved for future use
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import React from "react";
import ThemeToggle from "@/components/navBar/theme-changer";
import NavMenu from "@/components/navBar/menu";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Navbar() {
  return (
    <header className="sticky top-0 z-[100] w-full border-b border-border  bg-background backdrop-blur supports-[backdrop-filter]:bg-background px-2">
      <div className="container flex py-2 items-center justify-between">
        <div className="flex items-center gap-2">
          <NavMenu orientation="left" />
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Carrot className="h-5 w-5 text-primary" />
            <span className="text-primary">NextJs-quickstart</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <nav className="hidden md:flex gap-6">
            <Link
              href="/overview"
              className="text-sm font-semibold hover:text-primary transition-colors"
            >
              Home
            </Link>
          </nav>

          <>
            <Link
              href="/login"
              className="hidden sm:block text-sm hover:text-primary transition-colors font-semibold"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="hidden sm:block text-sm  hover:text-primary transition-colors font-semibold"
            >
              Signup
            </Link>
            {/* <Link href="/login">
              <Button>Create headshots</Button>
            </Link> */}
          </>

          {/* {
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <UserIcon className="h-6 w-6 text-primary" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 z-[101]">
                  <DropdownMenuLabel className="text-primary text-center overflow-hidden text-ellipsis">
                    email
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <form action="/auth/sign-out" method="post">
                    <Button
                      type="submit"
                      className="w-full text-left"
                      variant="ghost"
                    >
                      Log out
                    </Button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          } */}
        </div>
      </div>
    </header>
  );
}
