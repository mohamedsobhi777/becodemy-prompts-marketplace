'use client';

import Image from "next/image";
import { styles } from "@/utils/styles";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import axios from 'axios';

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
import Loader from "@/utils/Loader";



type Props = {}

const Page = (props: Props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true)
    }
  }, [isMounted])

  useEffect(() => {
    setLoading(true)
    axios.get("/api/me").then((res) => {
      console.log(res.data.user)
      setUser(res.data.user);
      setLoading(false);
    }).catch((error) => {
      console.log(error)
      setLoading(false);
    })
  }, [])

  if (!isMounted) return null;

  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <div className="banner">
        <Header activeItem={0} user={user} />
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