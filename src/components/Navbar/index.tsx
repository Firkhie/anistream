import Logo from "../Logo";
import ModeToggle from "./ModeToggle";
import RandomGenerator from "./RandomGenerator";
import SearchBar from "./SearchBar";
import UserToggle from "./UserToggle";

export default function Navbar() {
  return (
    <div className="bg-background fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between gap-1.5 border-b p-4">
      <Logo />

      {/* Desktop */}
      <div className="hidden w-full gap-1.5 md:flex md:max-w-[580px]">
        <SearchBar />
        <RandomGenerator />
      </div>
      <div className="hidden gap-1.5 md:flex">
        <ModeToggle />
        <UserToggle />
      </div>

      {/* Mobile */}
      <div className="flex gap-1.5 md:hidden">
        <SearchBar />
        <RandomGenerator />
        <ModeToggle />
        <UserToggle />
      </div>
    </div>
  );
}
