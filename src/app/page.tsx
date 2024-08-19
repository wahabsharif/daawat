"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/logos/vercel.svg";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import BlurFade from "@/components/magicui/blur-fade";

export default function ComingSoonPage() {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2024-10-18T23:59:59");
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(days * 86400 + hours * 3600 + minutes * 60 + seconds);
      } else {
        setTimeLeft(0);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return { days, hours, minutes, secs };
  };

  const { days, hours, minutes, secs } = formatTime(timeLeft);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center relative p-4 overflow-hidden">
      {/* Fixed background video */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <video
          className="w-full h-full object-cover fixed top-0 left-0"
          autoPlay
          loop
          muted
        >
          <source
            src="/assets/videos/coming-soon-bg-video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="my-5">
        {/* <BlurFade delay={0.25} inView>
          <Image src={Logo} alt="logo" width={500} height={500} />
        </BlurFade> */}
        <GradualSpacing
          className="font-display text-center text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.1em] my-5 text-black dark:text-white md:leading-[5rem]"
          text="Daawat.pk"
        />
        <BlurFade delay={0.25 * 2} inView>
          <p className="text-white text-xl md:text-2xl text-center my-4">
            Corporate & Large Scale Catering
          </p>
        </BlurFade>
      </div>
      <GradualSpacing
        className="font-display text-center text-4xl font-bold tracking-[-0.1em] my-5 text-black dark:text-white md:text-7xl md:leading-[5rem]"
        text="Coming Soon"
      />
      <div className="flex text-white justify-center text-center gap-2">
        <div className="bg-black bg-opacity-50 p-2 sm:p-4 rounded-lg">
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {days}
          </span>{" "}
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Days
          </span>
        </div>
        <div className="bg-black bg-opacity-50 p-2 sm:p-4 rounded-lg">
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {hours}
          </span>{" "}
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Hours
          </span>
        </div>
        <div className="bg-black bg-opacity-50 p-2 sm:p-4 rounded-lg">
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {minutes}
          </span>{" "}
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Minutes
          </span>
        </div>
        <div className="bg-black bg-opacity-50 p-2 sm:p-4 rounded-lg">
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            {secs}
          </span>{" "}
          <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            Seconds
          </span>
        </div>
      </div>
      <BlurFade delay={0.25 * 2} inView>
        <p className="text-white text-xl md:text-2xl text-center my-5">
          We&apos;re working hard to bring you something amazing. Stay tuned!
        </p>
      </BlurFade>
      <GradualSpacing
        className="font-display text-sm md:text-md lg:text-lg text-center my-12 font-bold tracking-[-0.1em] text-black dark:text-white md:leading-[5rem]"
        text="Islamabad - Lahore - Peshawar"
      />
    </div>
  );
}
