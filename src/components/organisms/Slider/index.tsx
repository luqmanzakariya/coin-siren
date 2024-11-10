'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import IconCaretRight from '@/components/atoms/Icon/caretRight';
import IconCaretLeft from '@/components/atoms/Icon/caretLeft';

interface CardData {
  id: number;
  name: string;
  position: string;
  experience: string;
  skills: string[];
}

const cardData: CardData[] = [
  {
    id: 0,
    name: 'Abhishek Gupta',
    position: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 1,
    name: 'John Doe',
    position: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
  {
    id: 2,
    name: 'John Smith',
    position: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const isCurrent = index === current;
      const isPrevious = index === (current - 1 + cardData.length) % cardData.length;
      const isNext = index === (current + 1) % cardData.length;

      if (typeof window !== 'undefined') {
        if (window.innerWidth < 1142) {
          gsap.to(card, {
            x: isCurrent ? 0 : isPrevious ? -40 : isNext ? 40 : (index - current) * 50,
            scale: isCurrent ? 1 : 0.8,
            zIndex: isCurrent ? 20 : 10,
            opacity: isCurrent || isPrevious || isNext ? 1 : 0.12,
            duration: 0.5,
            ease: 'power3.out',
          });
        } else {
          gsap.to(card, {
            x: isCurrent ? 0 : isPrevious ? -100 : isNext ? 100 : (index - current) * 50,
            scale: isCurrent ? 1 : 0.8,
            zIndex: isCurrent ? 20 : 10,
            opacity: isCurrent || isPrevious || isNext ? 1 : 0.12,
            duration: 0.5,
            ease: 'power3.out',
          });
        }
      }
    });
  }, [current]);

  return (
    <div className="relative flex items-center justify-center w-full">
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white rounded-full z-30">
        <IconCaretLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white rounded-full z-30">
        <IconCaretRight />
      </button>
      <div className="relative w-[234px] lg:w-[527px] h-[311px] lg:h-[408px] mx-auto">
        <div className="relative w-fit h-fit lg:left-[23%]">
          {cardData.map((card, index) => (
            <div
              key={card.id}
              ref={(el: never) => (cardsRef.current[index] = el!)}
              className={`absolute inset-0 flex flex-col items-center pt-9 pb-6 lg:px-9 rounded-lg shadow-lg bg-whiteSolid transition-transform w-[234px] lg:w-[292px] h-[311px] lg:h-[408px]`}
              style={{
                transform: `translateX(${(index - current) * 50}px) scale(${index === current ? 1 : 0.8})`,
                zIndex: index === current ? 20 : 10,
                opacity:
                  index === current ||
                  index === (current - 1 + cardData.length) % cardData.length ||
                  index === (current + 1) % cardData.length
                    ? 1
                    : 0.5,
              }}>
              <Image
                src="/assets/images/profile.png"
                alt={`${card.name}'s profile`}
                width={69}
                height={64}
                className="w-[69px] lg:w-[120px] h-[64px] lg:h-[120px]"
              />
              <div className="mt-4 text-placeholder text-blackCard/[0.8] text-lg lg:text-2xl leading-[27px] lg:leading-[36px]">
                {card.name}
              </div>
              <div className="text-sm lg:text-base leading-[21px] lg:leading-[24px] font-black text-primaryBlue">{`${card.position} · ${card.experience}`}</div>
              <div className="mt-4 flex flex-wrap justify-center gap-[4px]">
                {card.skills.map((skill, i) => (
                  <div
                    key={`${i}-${skill}`}
                    className="w-fit px-3 py-1 text-center rounded-md border border-grey text-sm lg:text-base leading-[21px] lg:leading-[24px] font-black text-blackSecondary">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
