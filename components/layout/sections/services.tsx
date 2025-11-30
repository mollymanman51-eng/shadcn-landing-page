import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "职场反 PUA 助手",
    description:
      "专治领导画饼、同事甩锅。AI 帮你生成最礼貌但最坚定的拒绝话术，保住工作的同时也不受气。",
    pro: 0,
  },
  {
    title: "亲戚问候防御系统",
    description:
      "应对过年过节七大姑八大姨的催婚、催生、比工资。用魔法打败魔法，让她们哑口无言。",
    pro: 0,
  },
  {
    title: "网络对线军师",
    description: "游戏被喷、评论区抬杠？AI 帮你生成逻辑严密的“小作文”，降维打击键盘侠。",
    pro: 0,
  },
  {
    title: "情感危机公关",
    description: "面对渣男/渣女的诡辩，一针见血地指出逻辑漏洞，让你在感情博弈中不再卑微。",
    pro: 1,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        场景覆盖
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        全方位守护你的精神状态
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        无论是在职场高压环境，还是家庭聚会的尴尬时刻，我们都为你提供全天候的语言火力支援。
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
