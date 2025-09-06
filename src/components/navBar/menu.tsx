import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Check, FileText, Menu, Star, LogOut, Library } from "lucide-react";
import Link from "next/link";

export default function NavMenu({
  orientation,
}: {
  orientation: "left" | "right";
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="mr-2 -ml-1 cursor-pointer rounded-full p-2 hover:bg-accent">
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent
        side={orientation}
        className={`w-[300px] transition-transform duration-200 ease-out data-[state=open]:duration-200 data-[state=open]:ease-out sm:w-[400px]  border-border ${
          orientation === "left" ? "border-r" : "border-l"
        }`}
      >
        <SheetTitle>Menu</SheetTitle>
        <nav className="mt-4 flex flex-col space-y-4 text-muted-forground">
          <Link
            href="#"
            className="flex items-center space-x-2 rounded p-2  hover:bg-accent"
          >
            <Menu size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 rounded p-2  hover:bg-accent"
          >
            <Star size={20} />
            <span>Profile</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 rounded p-2  hover:bg-accent"
          >
            <FileText size={20} />
            <span>Activity</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 rounded p-2 hover:bg-accent"
          >
            <Library size={20} />
            <span>Experience</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 rounded p-2  hover:bg-accent"
          >
            <Check size={20} />
            <span>Skills</span>
          </Link>
          <Link
            href="#"
            className="flex items-center space-x-2 rounded p-2  hover:bg-accent"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
