"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";
interface sponsorsProps {
  icon: string;
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    icon: "MessageSquareWarning",
    name: "职场PU",
  },
  {
    icon: "Ghost",
    name: "阴阳怪气",
  },
  {
    icon: "Bomb",
    name: "道德绑架",
  },
  {
    icon: "EarOff",
    name: "无理取闹",
  },
  {
    icon: "Swords",
    name: "正面硬刚",
  },
  {
    icon: "Zap",
    name: "逻辑压制",
  },
  {
    icon: "Drama",
    name: "发疯文学",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6 text-muted-foreground">
        专治各种不服 · 覆盖全场景对话难题
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium text-muted-foreground/80"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
