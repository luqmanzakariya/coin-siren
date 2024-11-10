import IconPresentationSquare from '@/components/atoms/Icon/presentationSquare';
import IconPictureSquare from '@/components/atoms/Icon/pictureSquare';
import IconPackageSquare from '@/components/atoms/Icon/packageSquare';
import IconStartSquare from '@/components/atoms/Icon/startSquare';
import IconPhoneSquare from '@/components/atoms/Icon/phoneSquare';

interface CardHorizontalProps {
  index: number;
  title: string;
}

const CardHorizontal = ({ title, index }: CardHorizontalProps) => {
  return (
    <div className="bg-whiteSolid/[0.2] p-4 rounded-xl flex items-center gap-6 w-[332px] h-[88px]">
      {index === 0 && <IconPresentationSquare />}
      {index === 1 && <IconPictureSquare />}
      {index === 2 && <IconPackageSquare />}
      {index === 3 && <IconStartSquare />}
      {index === 4 && <IconPhoneSquare />}
      <div className="text-2xl leading-[36px] font-black text-whiteSolid">{title}</div>
    </div>
  );
};

export default CardHorizontal;
