'use client';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import IconCaretDown from '@/components/atoms/Icon/caretDown';
import IconDash from '../Icon/dash';

interface DropdownButtonProps {
  title?: string;
}

const DropdownButton = ({ title }: DropdownButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline>();

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    tl.current.to(dropdownRef.current, { height: 'auto', duration: 0.3, ease: 'power2.out' });
    tl.current.fromTo(dropdownRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 }, '<');

    gsap.set(dropdownRef.current, { height: 0, opacity: 0 });
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  };

  return (
    <div className="relative inline-block">
      <button onClick={toggleDropdown} className="text-navbar cursor-pointer">
        <div className="hidden lg:flex lg:items-center lg:gap-2 flex items-center gap-2 ">
          <div>{title}</div>
          <IconCaretDown />
        </div>
        <div className="block lg:hidden">
          <IconDash />
        </div>
      </button>

      <div
        ref={dropdownRef}
        className="absolute lg:top-full right-0 lg:left-0 mt-2 w-[240px] rounded-lg bg-whiteSolid shadow-lg overflow-hidden">
        <div className="flex flex-col">
          <Link href="/" className="px-4 py-[10px] text-sm-medium">
            채용
          </Link>
          <Link href="/" className="px-4 py-[10px] text-sm-medium">
            해외 개발자 원격 채용
          </Link>
          <Link href="/" className="px-4 py-[10px] text-sm-medium">
            외국인 원격 채용 (비개발 직군)
          </Link>
          <Link href="/" className="px-4 py-[10px] text-sm-medium">
            한국어 가능 외국인 채용
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
