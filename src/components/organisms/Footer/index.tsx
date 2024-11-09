import IconHyperhire from '@/components/atoms/Icon/hyperhire';
import CardFooter from '@/components/molecules/Card/cardFooter';

const listCardFooter = [
  {
    key: 0,
    icon: 'code',
    title: '해외 개발자 원격 채용',
    link: '바로가기',
  },
  {
    key: 1,
    icon: 'person',
    title: '외국인 원격 채용 (비개발)',
    link: '바로가기',
  },
  {
    key: 2,
    icon: 'kor',
    title: '한국어 가능 외국인 채용',
    link: '바로가기',
  },
  {
    key: 3,
    icon: 'settings',
    title: '해외 개발자 활용 서비스',
    link: '바로가기',
  },
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="lg:mx-auto max-w-[1200px]">
        <div className="lg:flex lg:justify-between">
          <div>
            <IconHyperhire />
            <div className="poppins-black-primary mt-4">
              우리는 국가의 장벽을 넘어 최고의 인재를 매 <br />
              칭해드립니다.
            </div>
            <div className="poppins-black-secondary mt-[18px]">010-0000-0000</div>
            <div className="poppins-black-secondary mt-2">aaaaa@naver.com</div>
          </div>
          <div className="list-card-footer">
            {listCardFooter.map(({ key, icon, title, link }) => (
              <CardFooter key={key} icon={icon} title={title} link={link} />
            ))}
          </div>
        </div>
        <div className="lg:mt-[46px] lg:flex lg:justify-between">
          <div className="mt-[60px] lg:mt-0 flex gap-2 lg:gap-[11px] items-center lg:items-start">
            <div>
              <div className="poppins-black-primary text-[12px] leading-[18px]">상호명</div>
              <div className="mt-[10px] poppins-black-secondary">하이퍼하이어</div>
              <div className="poppins-black-secondary mt-[5px]">Hyperhire India Private Limited</div>
            </div>
            <div>
              <div className="poppins-black-primary text-[12px] leading-[18px]">대표 CEO</div>
              <div className="mt-[10px] poppins-black-secondary">김주현</div>
              <div className="poppins-black-secondary mt-[5px]">Juhyun Kim</div>
            </div>
          </div>
          <div className="lg:flex lg:items-start lg:gap-[42px] lg:w-[796px]">
            <div className="mt-9 lg:mt-0">
              <div className="poppins-black-primary text-[12px] leading-[18px]">사업자등록번호 CIN</div>
              <div className="mt-[10px] poppins-black-secondary">427-86-01187</div>
              <div className="mt-[5px] poppins-black-secondary">U74110DL2016PTC290812</div>
            </div>
            <div className="mt-9 lg:mt-0">
              <div className="poppins-black-primary text-[12px] leading-[18px]">주소 ADDRESS</div>
              <div className="mt-[10px] poppins-black-secondary">서울특별시 강남대로 479, 지하 1층 238호 </div>
              <div className="mt-[5px] poppins-black-secondary">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, <br />
                110053 India
              </div>
            </div>
          </div>
        </div>
        <div className="mt-9 lg:mt-[28px] poppins-black-secondary">ⓒ 2023 Hyperhire</div>
      </div>
    </div>
  );
};

export default Footer;
