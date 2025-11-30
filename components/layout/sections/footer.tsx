import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">AI 嘴替</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">关于</h3>
            <div>
              <Link href="/about" className="opacity-60 hover:opacity-100">
                关于我们
              </Link>
            </div>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                核心功能
              </Link>
            </div>
            <div>
              <Link href="#team" className="opacity-60 hover:opacity-100">
                团队介绍
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">法律</h3>
            <div>
              <Link href="/privacy" className="opacity-60 hover:opacity-100">
                隐私政策
              </Link>
            </div>
            <div>
              <Link href="/terms" className="opacity-60 hover:opacity-100">
                使用条款
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">帮助</h3>
            <div>
              <Link href="mailto:support@chaojiabaoying.com" className="opacity-60 hover:opacity-100">
                联系我们
              </Link>
            </div>
            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                常见问题
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">社交</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Leo Miranda
            </Link>
            . Content by 深圳不怕影子斜有限公司.
          </h3>
        </section>
      </div>
    </footer>
  );
};
