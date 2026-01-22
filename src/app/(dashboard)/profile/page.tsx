import { Button } from "@/components/ui/Button";
import { LogIn } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 pt-16 text-center">
      <span>You need to log in first to access your profile.</span>
      <Button size="lg" disabled>
        <LogIn className="h-4 w-4" />
        Login
      </Button>
    </div>
  );
}
