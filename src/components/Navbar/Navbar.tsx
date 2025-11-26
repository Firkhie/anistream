import Logo from "../Logo";
import ModeToggle from "./ModeToggle";
import RandomGenerator from "./RandomGenerator";
import SearchBar from "./SearchBar";
import UserToggle from "./UserToggle";

export default function Navbar() {
  return (
    <div className="top-0 left-0 h-16 w-full fixed flex items-center gap-1.5 justify-between p-5 border-b z-50 bg-background">
      <Logo />
      <div className="flex gap-1.5 max-w-[580px] w-full">
        <SearchBar />
        <RandomGenerator />
      </div>
      <div className="flex gap-1.5">
        <ModeToggle />
        <UserToggle />
      </div>
    </div>
  );
}
