import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Brain",
    title: "高情商回怼",
    description:
      "AI 深度学习海量语录，精准识别对方意图，用最体面的方式让对方闭嘴，适合职场、家庭等需要留面子的场合。",
  },
  {
    icon: "Zap",
    title: "秒速生成",
    description:
      "无需长时间等待，实时分析对话内容，三秒内生成多个版本的回击文案，让你在吵架的黄金时间内完成绝杀。",
  },
  {
    icon: "Smile",
    title: "情绪护盾",
    description:
      "帮你过滤负面情绪，把愤怒转化为幽默或犀利的语言。你只需要负责复制粘贴，保持优雅，气死对方。",
  },
  {
    icon: "ShieldCheck",
    title: "隐私保护",
    description:
      "所有对话内容仅用于即时生成，不做任何云端存储。你的吐槽和秘密绝对安全，放心大胆地把这里当树洞。",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">核心优势</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            让每一次反击都掷地有声
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            别再事后躺在床上后悔没发挥好。AI 嘴替是你最忠实的僚机，无论是阴阳怪气还是据理力争，我们让你永远立于不败之地。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
