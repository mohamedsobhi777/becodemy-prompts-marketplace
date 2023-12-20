'use client';

import About from "@/components/About";
// Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromptCard from "@/components/PromptCard";
import { styles } from "@/utils/styles";
import Image from "next/image";
import { useEffect, useState } from "react";




type Props = {}

const Page = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])
  if (!isMounted) return null;
  return (
    <div>
      <div className="banner">
        <Header activeItem={0} />
        <Hero />
      </div>
      <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      />
      <br />
      <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
        <About />
        <div>
          <h1 className={`${styles.heading} p-2 font-Monserrat`}>
            Latest Prompts
          </h1>
          <div className="flex flex-wrap">
            <PromptCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page