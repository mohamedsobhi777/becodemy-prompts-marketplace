'use client';

import Image from "next/image";
import { styles } from "@/utils/styles";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";


// Components
import Hero from "@/components/Route/Hero";
import About from "@/components/Route/About";
import Future from "@/components/Route/Future";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Partners from "@/components/Route/Partners";
import BestSellers from "@/components/Shop/BestSellers";
import PromptCard from "@/components/Prompts/PromptCard";
import SellersBanner from "@/components/Shop/SellersBanner";



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
            <PromptCard />
            <PromptCard />
            <PromptCard />

            <PromptCard />
            <PromptCard />
            <PromptCard />
            <PromptCard />
          </div>
          <br />
          <BestSellers />
          <Future />
          <Partners />
          <SellersBanner />
          <br />
          <br />
          <Divider className="bg-[#ffffff23]" />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Page