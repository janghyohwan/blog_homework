"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { CardData, AboutSectionProps } from "../types/about.types";

const AboutSection: React.FC<AboutSectionProps> = () => {
  // Carousel state: 3 pages of 4 cards each and autoplay toggle
  const [page, setPage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  // Handlers for manual navigation
  const handleNext = () => setPage((p) => Math.min(p + 1, pages.length - 1));
  const handlePrev = () => setPage((p) => Math.max(p - 1, 0));

  const cardData: CardData[] = [
    {
      title: "HTML",
      desc: "웹의 기초가 되는 마크업 언어로, 웹 페이지의 구조를 정의합니다.",
    },
    {
      title: "CSS",
      desc: "웹 페이지의 스타일과 레이아웃을 담당하는 스타일 시트 언어입니다.",
    },
    {
      title: "JavaScript",
      desc: "동적인 웹 페이지 구현을 위한 프로그래밍 언어입니다.",
    },
    {
      title: "TypeScript",
      desc: "JavaScript의 슈퍼셋으로, 정적 타입을 지원합니다.",
    },
    {
      title: "React",
      desc: "사용자 인터페이스 구축을 위한 JavaScript 라이브러리입니다.",
    },
    {
      title: "NestJS",
      desc: "효율적이고 확장 가능한 Node.js 서버 애플리케이션 프레임워크입니다.",
    },
    {
      title: "Tailwind CSS",
      desc: "유틸리티 우선 접근방식의 CSS 프레임워크입니다.",
    },
    {
      title: "Express",
      desc: "Node.js를 위한 빠르고 개방적인 웹 프레임워크입니다.",
    },
    {
      title: "Spring Boot",
      desc: "Java 기반의 강력한 웹 애플리케이션 프레임워크입니다.",
    },
    {
      title: "JWT & CORS",
      desc: "웹 보안을 위한 인증 및 리소스 공유 메커니즘입니다.",
    },
    {
      title: "Swagger & Postman",
      desc: "API 문서화 및 테스트를 위한 필수 개발 도구입니다.",
    },
    {
      title: "MySQL & ORM",
      desc: "관계형 데이터베이스와 ORM을 활용한 데이터 관리입니다.",
    },
  ];
  const pages = [
    cardData.slice(0, 4),
    cardData.slice(4, 8),
    cardData.slice(8, 12),
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalId = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [pages.length, isPlaying]);

  return (
    <div id="about" className="relative h-screen py-16">
      <div className="absolute top-0 left-0 right-0 text-center pt-8">
        <h2 className="text-5xl font-bold bg-gradient-to-br from-purple-500 to-indigo-600 bg-clip-text text-transparent">
          ABOUT
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto relative mt-[100px]">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={page}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ ease: "easeOut", duration: 1.0 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) handleNext();
              else if (info.offset.x > 50) handlePrev();
            }}
            className="grid grid-cols-2 grid-rows-2 gap-8"
          >
            {pages[page].map((card) => (
              <div key={card.title} className="group perspective">
                <div className="relative w-full h-[300px] transition-transform duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  <div className="absolute w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center p-6 backface-hidden">
                    <span className="text-white text-4xl font-bold">
                      {card.title}
                    </span>
                  </div>
                  <div className="absolute w-full h-full bg-gradient-to-tr from-purple-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <span className="text-white text-2xl text-center">
                      {card.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsPlaying((p) => !p)}
            className="px-4 py-2 bg-indigo-600 text-white rounded"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
