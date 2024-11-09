import Link from 'next/link';
import IconHyperhireWhite from '@/components/atoms/Icon/hyperhireWhite';
import Button from '@/components/atoms/Button';
import DropdownButton from '@/components/atoms/Dropdown';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="lg:mx-auto max-w-[1200px] flex items-center justify-between">
        <Link href="/">
          <IconHyperhireWhite />
        </Link>
        <div className="hidden lg:flex items-center gap-[60px]">
          <DropdownButton title="채용" />
          <Link className="text-navbar" href="/">
            해외 개발자 활용 서비스
          </Link>
        </div>
        <div className="hidden lg:flex">
          <Button title="문의하기" />
        </div>
        <div className="flex lg:hidden relative">
          <DropdownButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
