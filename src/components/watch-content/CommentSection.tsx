import { EyeOff, MessageCircleMore } from "lucide-react";
import { Button } from "../ui/Button";

export default function CommentSection() {
  return (
    <div className="flex flex-col gap-1 rounded-md border p-2">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="text-xs font-normal text-[hsl(var(--muted-foreground))] sm:text-sm">
            Anistream
          </p>
          <h3 className="font-bold sm:text-lg">Comments</h3>
        </div>
        <div className="flex gap-x-2">
          <Button className="border" variant="outline" size="icon" disabled>
            <MessageCircleMore />
          </Button>
          <Button className="border" variant="outline" size="icon" disabled>
            <EyeOff />
          </Button>
        </div>
      </div>
    </div>
  );
}
