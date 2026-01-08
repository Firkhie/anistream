import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  icon?: LucideIcon;
  children: React.ReactNode;
};

function Badge({ icon: Icon, children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "bg-muted-foreground/15 text-muted-foreground flex shrink-0 items-center gap-1.5 px-2 py-0.5",
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="h-3 w-3" />}
      <span className="text-xs">{children}</span>
    </div>
  );
}

export { Badge };
