import ChatBubble from '@/components/atoms/ChatBubble';
import CardLanding from '@/components/molecules/Card/cardLanding';

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

const HomePages = () => {
  return (
    <section className="page-component">
      <div className="lg:mx-auto max-w-[1200px]">
        <div>
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
      </div>
    </section>
  );
};

export default HomePages;
