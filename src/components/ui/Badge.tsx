import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

function Badge({
  icon: Icon,
  children,
  className,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-muted-foreground bg-muted-foreground/15 flex shrink-0 items-center gap-1.5 px-2 py-0.5",
        className,
      )}
    >
      {Icon && <Icon className="h-3 w-3" />}
      <span className="text-xs">{children}</span>
    </div>
  );
}

export { Badge };
