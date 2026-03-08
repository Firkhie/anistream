import Logo from "../Logo";
import ModeToggle from "./ModeToggle";
import RandomGenerator from "./RandomGenerator";
import SearchBar from "./SearchBar";
import SidebarToggle from "./SidebarToggle";
import UserToggle from "./UserToggle";

export default function Navbar() {
  return (
    <div className="bg-background fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between gap-1.5 border-b p-3 sm:p-4">
      {/* Desktop */}
      <div className="hidden shrink-0 md:flex">
        <Logo />
      </div>
      <div className="hidden w-full gap-1.5 md:flex md:max-w-[580px]">
        <SearchBar />
        <RandomGenerator />
      </div>
      <div className="hidden gap-1.5 md:flex">
        {/* <ModeToggle /> */}
        <UserToggle />
      </div>

      {/* Mobile */}
      <div className="flex gap-1.5 md:hidden">
        <SidebarToggle />
        <Logo />
      </div>
      <div className="flex gap-1.5 md:hidden">
        <SearchBar />
        <RandomGenerator />
        {/* <ModeToggle /> */}
        <UserToggle />
      </div>
    </div>
  );
}
