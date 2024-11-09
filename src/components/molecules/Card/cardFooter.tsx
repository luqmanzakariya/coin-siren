import React from 'react';
import Link from 'next/link';
import IconCode from '@/components/atoms/Icon/code';
import IconPerson from '@/components/atoms/Icon/person';
import IconKor from '@/components/atoms/Icon/cor';
import IconSettings from '@/components/atoms/Icon/settings';
import IconRightSquare from '@/components/atoms/Icon/rightSquare';

interface CardFooterProps {
  icon: string;
  title: string;
  link: string;
}

const CardFooter = ({ icon, title, link }: CardFooterProps) => {
  return (
    <div className="footer-card">
      {icon === 'code' && <IconCode />}
      {icon === 'person' && <IconPerson />}
      {icon === 'kor' && <IconKor />}
      {icon === 'settings' && <IconSettings />}
      <div className="poppins-black-primary mt-3">{title}</div>
      <Link href="/">
        <div className="mt-4 flex items-center gap-1">
          <div className="poppins-black-primary text-blackSecondary">{link}</div>
          <IconRightSquare />
        </div>
      </Link>
    </div>
  );
};

export default CardFooter;
