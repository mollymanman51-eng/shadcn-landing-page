
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - AI 嘴替",
  description: "Privacy Policy for AI 嘴替",
};

export default function PrivacyPage() {
  return (
    <section className="container max-w-3xl py-24 sm:py-32">
      <div className="mb-8">
        <Button asChild variant="ghost" className="pl-0 hover:bg-transparent">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" /> 返回首页
          </Link>
        </Button>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">隐私政策 (Privacy Policy)</h1>
      
      <div className="prose dark:prose-invert max-w-none space-y-6 text-muted-foreground">
        <p>生效日期：2024年1月1日</p>

        <h2 className="text-xl font-semibold text-foreground">1. 信息收集</h2>
        <p>
          我们尊重并保护您的隐私。<strong>我们不会收集、存储或分享您的任何个人身份信息或您输入的对话内容。</strong>
        </p>
        <p>
          我们的服务是即时的。当您在输入框中输入内容并点击生成时，该文本会被发送到 AI 模型进行处理，处理完成后立即返回结果。在这个过程中，我们不会将您的输入保存到我们的数据库中。
        </p>

        <h2 className="text-xl font-semibold text-foreground">2. 数据使用</h2>
        <p>
          由于我们不收集您的数据，因此我们不会使用您的数据进行任何分析、广告推送或出售给第三方。
        </p>

        <h2 className="text-xl font-semibold text-foreground">3. Cookie 使用</h2>
        <p>
          我们可能会使用必要的 Cookie 来维持网站的基本功能（例如记住您的主题偏好：深色/浅色模式）。我们不使用 Cookie 进行用户追踪。
        </p>

        <h2 className="text-xl font-semibold text-foreground">4. 第三方服务</h2>
        <p>
          本服务利用第三方 AI 模型（如 Google Gemini）来生成回复。这些提供商可能会根据其隐私政策处理数据。
        </p>

        <h2 className="text-xl font-semibold text-foreground">5. 联系我们</h2>
        <p>
          如果您对本隐私政策有任何疑问，请通过以下方式联系我们：
        </p>
        <ul className="list-disc pl-6">
          <li>邮箱：support@chaojiabaoying.com</li>
          <li>公司：深圳不怕影子斜有限公司</li>
          <li>地址：北京市朝阳区公安局</li>
        </ul>
      </div>
    </section>
  );
}

