"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://github.com/shadcn.png",
    name: "李工",
    userName: "苦命打工人",
    comment:
      "老板周五下午5点让我改方案，我用‘阴阳怪气’模式回了一句，他居然沉默了... 第一次准点下班！神器啊！",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "王阿姨",
    userName: "小区情报中心主任",
    comment:
      "现在的年轻人太厉害了，我问个‘工资多少’、‘有对象没’，他们回的话让我完全接不上来。原来是用这个软件教的！",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "暴躁老哥",
    userName: "资深互联网用户",
    comment:
      "以前对线总是打字慢被气死，现在用‘发疯模式’一秒五喷，不仅赢了，还把对方给聊退网了。身心舒畅！",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "陈直男",
    userName: "求生欲极强的男友",
    comment:
      "女朋友生气了说‘不用管我’，我以前真不管然后就完了。用了‘温柔’模式，生成了一段哄人话术，不仅没事还被夸情商高。",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "林妹妹",
    userName: "多愁善感代表",
    comment:
      "虽是怼人，却也用词考究，不带脏字却字字诛心。这‘讲道理’模式，甚合我意，倒也不负了这大好时光。",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "张法外",
    userName: "反诈宣传志愿者",
    comment:
      "骗子给我打电话，我直接开‘发疯模式’跟他在电话里聊了半小时量子力学和母猪产后护理，最后骗子哭着挂了电话。",
    rating: 5.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          用户评价
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          听听那些“吵赢了”的人怎么说
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt={review.name}
                      />
                      <AvatarFallback>{review.name.substring(0, 1)}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
