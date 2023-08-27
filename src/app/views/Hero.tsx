import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImage from "/public/header.webp";
import Companies from "@/components/Companies";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-full flex flex-col lg:flex-row gap-y-10 py-6 mt-16">
      {/* Left div */}
      {/*  */}
      {/*  */}
      <div className="flex-1">
        <Badge className="py-3 px-6 text-lg rounded-lg bg-blue-200 text-blue-700">
          Sale 70%
        </Badge>
        <h1 className="scroll-m-20 text-7xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 text-xl [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href={"/allProducts"}>
          <Button className="bg-black text-white h-12 px-6 mt-4 ">
            Start Shopping
          </Button>
        </Link>
        <div className=" ">
          <Companies />
        </div>
      </div>

      {/*  */}
      {/*  */}
      {/* Right Div */}
      <div className="flex-1">
        <Image src={heroImage} alt="MainImage" />
      </div>
    </section>
  );
};

export default Hero;
