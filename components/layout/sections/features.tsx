import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "BrainCircuit",
    title: "智能语义理解",
    description:
      "不是简单的关键词匹配，而是真正理解对方的弦外之音，反击更精准。",
  },
  {
    icon: "Sparkles",
    title: "多风格切换",
    description:
      "从优雅反讽到火力全开，5 种不同的回怼强度，应对不同场合。",
  },
  {
    icon: "Copy",
    title: "一键复制使用",
    description:
      "生成的金句一键复制，直接粘贴到聊天框，不给对方反应时间。",
  },
  {
    icon: "Clock",
    title: "24/7 随时待命",
    description:
      "无论深夜还是清晨，只要你需要，AI 嘴替随时准备为你出谋划策。",
  },
  {
    icon: "MessageCircle",
    title: "上下文记忆",
    description:
      "支持连续对话模式，根据对方的后续反应，生成更具针对性的追击。",
  },
  {
    icon: "Lock",
    title: "隐私安全保障",
    description:
      "采用端到端加密传输，你的每一次吐槽和反击都不会被第三方知晓。",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        核心功能
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        为什么选择 AI 嘴替？
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        我们不仅仅是生成文字，更是你情绪的出口和沟通的武器。
        用科技的力量，让每一次对话都变得轻松掌控。
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
