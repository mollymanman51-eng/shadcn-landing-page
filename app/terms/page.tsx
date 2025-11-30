
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms of Use - AI 嘴替",
  description: "Terms of Use for AI 嘴替",
};

export default function TermsPage() {
  return (
    <section className="container max-w-3xl py-24 sm:py-32">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:bg-transparent">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回首页
          </Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">使用条款 (Terms of Use)</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>最后更新：2024年1月1日</p>

        <h2 className="text-xl font-semibold text-foreground">1. 接受条款</h2>
        <p>
          访问和使用“AI 嘴替”（chaojiabaoying.com）即表示您同意遵守以下条款。如果您不同意这些条款，请勿使用本服务。
        </p>

        <h2 className="text-xl font-semibold text-foreground">2. 服务描述</h2>
        <p>
          本网站提供基于 AI 的对话回复生成服务。我们提供免费的基础版服务，以及包含高级功能的付费订阅服务。
        </p>

        <h2 className="text-xl font-semibold text-foreground">3. 用户行为规范</h2>
        <p>
          您同意仅将本服务用于合法目的。禁止使用本服务生成以下内容：
        </p>
        <ul className="list-disc pl-6">
          <li>仇恨言论、暴力威胁或骚扰他人的内容。</li>
          <li>违反任何法律法规的内容。</li>
          <li>侵犯他人知识产权的内容。</li>
        </ul>

        <h2 className="text-xl font-semibold text-foreground">4. 免责声明</h2>
        <p>
          本服务生成的内容仅供娱乐和参考。由于 AI 的不可预测性，生成的内容可能不准确、不恰当或具有冒犯性。深圳不怕影子斜有限公司不对用户如何使用生成的内容承担责任。请在发送前自行判断内容的适当性。
        </p>

        <h2 className="text-xl font-semibold text-foreground">5. 付费与退款</h2>
        <p>
          对于付费服务，具体价格和权益以购买页面显示为准。由于数字产品的特殊性，原则上不提供退款服务，除非法律另有规定。
        </p>

        <h2 className="text-xl font-semibold text-foreground">6. 联系方式</h2>
        <ul className="list-disc pl-6">
          <li>公司：深圳不怕影子斜有限公司</li>
          <li>邮箱：support@chaojiabaoying.com</li>
        </ul>
      </div>
    </section>
  );
}

