
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About Us - AI 嘴替",
  description: "About AI 嘴替 Team",
};

export default function AboutPage() {
  return (
    <section className="container max-w-3xl py-24 sm:py-32">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:bg-transparent">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回首页
          </Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">关于我们 (About Us)</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <h2 className="text-xl font-semibold text-foreground">我们的使命</h2>
        <p>
          在这个沟通成本越来越高的时代，很多人因为“嘴笨”而在职场、生活、网络对线中吃亏，事后又陷入无尽的精神内耗。
        </p>
        <p>
          <strong>深圳不怕影子斜有限公司</strong> 致力于利用最先进的人工智能技术，为每一位“社恐”、“老实人”提供最强有力的语言后盾。我们的目标不是制造冲突，而是通过更幽默、更犀利或更理性的表达，让沟通回归平等，让每个人的情绪都能被看见、被尊重。
        </p>

        <h2 className="text-xl font-semibold text-foreground">我们的团队</h2>
        <p>
          我们是一群来自互联网大厂的辞职员工、被甲方折磨过的设计师、以及在网络对线中屡战屡败的程序员。因为淋过雨，所以想为你撑把伞。
        </p>

        <h2 className="text-xl font-semibold text-foreground">联系我们</h2>
        <p>
          无论是产品反馈、商务合作，还是单纯想找人聊聊，欢迎随时联系我们：
        </p>
        <ul className="list-disc pl-6">
          <li><strong>公司名称：</strong>深圳不怕影子斜有限公司</li>
          <li><strong>联系邮箱：</strong>support@chaojiabaoying.com</li>
          <li><strong>公司地址：</strong>北京市朝阳区公安局（没错，就是这么有安全感）</li>
        </ul>
      </div>
    </section>
  );
}

