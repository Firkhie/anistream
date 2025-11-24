import Logo from "../Logo";
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";
import UserToggle from "./UserToggle";

export default function Navbar() {
  return (
    <div className="top-0 left-0 h-16 w-full fixed flex items-center justify-between p-5 border-b z-50 bg-background">
      <Logo />
      <SearchBar />
      <div className="flex gap-1.5">
        <ModeToggle />
        <UserToggle />
      </div>
    </div>
  );
}
