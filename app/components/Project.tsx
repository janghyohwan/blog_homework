"use client";

import React, { useState, useMemo } from "react";

interface CardProps {
  imageSrc: string;
  imageLink?: string;
  title: string;
  description: string;
  tags: string[];
  links: { label: string; url: string }[];
}

// Default card data
export const defaultCards: CardProps[] = [
  {
    imageSrc: "/Image/redbutton.jpg",
    imageLink: "https://korit-red-button-63s7.vercel.app/",
    title: "RedButton",
    description:
      "Next.js, TypeScript로 제작한 반응형 웹앱 보드게임 레드버튼 홈페이지 기반으로 API 연동 SpringBoot로 백엔드 구현 팀 프로젝트",
    tags: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "SpringBoot",
      "API",
      "Swiper",
      "Motion",
      "React",
      "GitHub",
      "Vercel",
    ],
    links: [
      { label: "GO SITE", url: "https://korit-red-button-63s7.vercel.app/" },
      { label: "github", url: "https://github.com/hyunseo01/KORIT_RedButton" },
    ],
  },
  {
    imageSrc: "/Image/TodoList.png",
    imageLink: "https://blog-todo-list.vercel.app",
    title: "TodoList",
    description:
      "간단하고 직관적인 투두 리스트 웹 사이트 입니다. 할 일 추가, 완료, 삭제 기능을 구현 개인 프로젝트",
    tags: ["Next.js", "React", "TypeScript", "CSS"],
    links: [
      { label: "GO SITE", url: "https://blog-todo-list.vercel.app" },
      { label: "github", url: "https://github.com/janghyohwan/blog_TodoList" },
    ],
  },
  {
    imageSrc: "/Image/yanolja_air.jpg",
    imageLink: "https://janghyohwan.github.io/blog_yanolja/",
    title: "Yanolja Air",
    description:
      "실제 야놀자 항공권 예약 페이지를 기반으로, 검색 기능, 날짜 선택, 인원수, 가격 변경 기능을 구현한 팀 프로젝트.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub"],
    links: [
      { label: "GO SITE", url: "https://janghyohwan.github.io/blog_yanolja/" },
      { label: "github", url: "https://github.com/janghyohwan/blog_yanolja" },
    ],
  },
  {
    imageSrc: "/Image/toss.jpeg",
    imageLink: "https://janghyohwan.github.io/toss/",
    title: "Toss",
    description:
      "Toss 홈페이지를 기반으로, GSAP과 Swiper를 활용해 스크롤 및 인터랙션 효과를 구현한 개인 프로젝트",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "GSAP",
      "ScrollTrigger",
      "Swiper",
      "GitHub",
    ],
    links: [
      { label: "GO SITE", url: "https://janghyohwan.github.io/toss/" },
      { label: "github", url: "https://github.com/janghyohwan/toss" },
    ],
  },
  {
    imageSrc: "/Image/oneroom.png",
    imageLink: "https://kcll0820.github.io/team_portfolio/",
    title: "원룸만들기",
    description:
      "원룸 만들기 모바일형 웹사이트 클론코딩 입니다. 사이드 바 ,카테고리 탭 기능 ,페이지 이동 기능 구현한 팀 프로젝트",
    tags: ["HTML", "CSS", "GitHub"],
    links: [
      { label: "GO SITE", url: "https://kcll0820.github.io/team_portfolio/" },
      { label: "github", url: "https://github.com/kcll0820/team_portfolio" },
    ],
  },

  {
    imageSrc: "/Image/Indigo.png",
    imageLink: "https://janghyohwan.github.io/publish_portfolio/",
    title: "Indigo",
    description:
      "자기소개 포트폴리오 페이지 입니다. HTML, CSS를 활용해 제작한 첫 개인 프로젝트",
    tags: ["HTML", "CSS", "GitHub"],
    links: [
      {
        label: "GO SITE",
        url: "https://janghyohwan.github.io/publish_portfolio/",
      },
      {
        label: "github",
        url: "https://github.com/janghyohwan/publish_portfolio",
      },
    ],
  },
];

// Props for Project section
interface ProjectProps {
  cards?: CardProps[];
  sectionId?: string;
  title?: string;
}

/**
 * Project section component
 * @param cards Array of card data, defaults to defaultCards
 * @param sectionId HTML id for the section, defaults to "projects"
 * @param title Section title, defaults to "Project"
 */
const Project: React.FC<ProjectProps> = ({
  cards = defaultCards,
  sectionId = "projects",
  title = "Project",
}) => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 모든 고유 태그 추출 및 React 태그를 두 번째 줄로 이동
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    cards.forEach((card) => card.tags.forEach((tag) => tagsSet.add(tag)));
    const tagsArray = Array.from(tagsSet);
    const reactIndex = tagsArray.indexOf("React");
    if (reactIndex > -1) {
      tagsArray.splice(reactIndex, 1);
    }
    return tagsArray;
  }, [cards]);

  // 선택된 태그에 따라 카드 필터링
  const filteredCards = useMemo(() => {
    if (!selectedTag) return cards;
    return cards.filter((card) => card.tags.includes(selectedTag));
  }, [cards, selectedTag]);

  // 태그를 두 줄로 나누기
  const halfLength = Math.ceil(allTags.length / 2);
  const firstRowTags = allTags.slice(0, halfLength);
  const secondRowTags = ["React", ...allTags.slice(halfLength)];

  return (
    <section id={sectionId} className="py-16 bg-black scroll-mt-16">
      <div className="max-w-[1800px] mx-auto px-4 mb-8">
        <div className="flex flex-col items-center">
          <h2 className="text-[70px] font-bold uppercase text-center mb-8">
            {title}
          </h2>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                  selectedTag === null ? "bg-red-600 text-white" : ""
                }`}
              >
                #all
              </button>
              {firstRowTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                    selectedTag === tag ? "bg-red-600 text-white" : ""
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {secondRowTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 bg-gray-200 text-gray-800 rounded ${
                    selectedTag === tag ? "bg-red-600 text-white" : ""
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Projects Grid */}
      <div className="max-w-[1800px] mx-auto px-4">
        <div className="grid grid-cols-3 gap-8">
          {filteredCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-gray-900 text-white rounded-2xl overflow-hidden shadow-lg"
            >
              {card.imageLink ? (
                <a
                  href={card.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-[300px] object-cover"
                  />
                </a>
              ) : (
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="w-full h-[300px] object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm mb-4">{card.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {card.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
