'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ChatBubble from '@/components/atoms/ChatBubble';
import CardLanding from '@/components/molecules/Card/cardLanding';
import SliderCardComponent from '@/components/organisms/Slider';
import CardHorizontal from '@/components/molecules/Card/cardHorizontal';
import IconCheckBox from '@/components/atoms/Icon/checkBox';

const dataCardLanding = [
  {
    key: 0,
    title: '평균 월 120만원',
    description: '임금을 해당 국가를 기준으로 계산합니다.',
  },
  {
    key: 1,
    title: '최대 3회 인력교체',
    description: '막상 채용해보니 맞지 않아도 걱정하지 마세요. ',
  },
  {
    key: 2,
    title: '평균 3일, 최대 10일',
    description: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
  },
];

const dataCardHorizontal = [
  {
    id: 0,
    title: '해외 마케팅',
  },
  {
    id: 1,
    title: '퍼블리셔',
  },
  {
    id: 2,
    title: '캐드원(제도사)',
  },
  {
    id: 3,
    title: '해외 세일즈',
  },
  {
    id: 4,
    title: '해외 CS',
  },
];

const dataMobileCheckbox = [
  {
    id: 0,
    title: '한국어 능력',
  },
  {
    id: 1,
    title: '업무 수행 능력',
  },
  {
    id: 2,
    title: '겸업 여부',
  },
  {
    id: 2,
    title: '평판 조회',
  },
];

const HomePages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const interval = 5000;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const itemWidth = container.children[0].clientWidth;

    const moveCarousel = () => {
      const firstItem = container.children[0].cloneNode(true) as HTMLElement;
      container.appendChild(firstItem);

      gsap.to(container, {
        x: `-=${itemWidth + 10}`,
        duration: 1,
        ease: 'power1.inOut',
        onComplete: () => {
          // Remove the first item and reset the position
          container.removeChild(container.children[0]);
          gsap.set(container, { x: 0 });
        },
      });
    };

    const intervalId = setInterval(moveCarousel, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="page-component">
      <div className="lg:mx-auto max-w-[1200px]">
        <div className="lg:flex lg:gap-[16px] lg:items-center">
          <div className="grow">
            <ChatBubble
              title="풀타임, 파트타임"
              style="bg-lightBlue text-whiteSolid lg:bg-whiteSolid lg:text-lightBluePrimary"
            />
            <div className="text-header">
              최고의 실력을 가진
              <br />
              외국인 인재를 찾고 계신가요?
            </div>
            <div className="mt-4 text-placeholder lg:hidden">
              법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
            </div>
            <div className="hidden lg:block mt-4 text-placeholder">
              법률 및 인사관리 부담없이 <br />
              1주일 이내에 원격으로 채용해보세요
            </div>
            <div className="hidden lg:block mt-6 text-placeholder text-lg text-whiteSolid leading-[27px]">
              개발자가 필요하신가요?
            </div>
            <div className="hidden lg:flex mt-[60px] w-fit items-start gap-[48px]">
              {dataCardLanding.map(({ key, title, description }) => (
                <CardLanding key={key} title={title} description={description} />
              ))}
            </div>
          </div>
          <div className="mt-9">
            <div className="flex flex-col items-center">
              <ChatBubble title="월 100만원" style="bg-lightGreen text-greenPrimary" />
            </div>
            <SliderCardComponent />
          </div>
        </div>
        <div className="hidden lg:inline-flex mt-6 lg:mt-[60px] overflow-hidden relative w-full">
          <div ref={containerRef} className="flex gap-[10px]">
            {dataCardHorizontal.map(({ id, title }, index) => (
              <CardHorizontal key={id} title={title} index={id} />
            ))}
          </div>
        </div>
        <div className="mt-6 grid lg:hidden grid-cols-2 gap-2 max-w-[255px]">
          {dataMobileCheckbox.map(({ id, title }) => (
            <div key={id} className="flex gap-3">
              <IconCheckBox />
              <div className="text-base leading-[24px] font-black text-whiteSolid">{title}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 lg:hidden text-base leading-[24px] font-black text-yellowPrimary">
          개발자가 필요하신가요?
        </div>
      </div>
    </section>
  );
};

export default HomePages;
