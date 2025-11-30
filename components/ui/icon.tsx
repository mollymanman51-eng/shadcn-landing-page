import { icons } from "lucide-react";

export const Icon = ({
  name,
  color = "currentColor",   // ⭐ 默认色，最关键的一行
  size,
  className,
}: {
  name: keyof typeof icons;
  color?: string;            // ⭐ 改为可选
  size: number;
  className?: string;
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};

