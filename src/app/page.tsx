import HomePages from '@/components/pages/Home';
import { getDataCardLanding, getDataCardHorizontal, getDataMobileCheckbox } from '@/service/getCardLanding';

export default async function Home() {
  const dataCardLanding = await getDataCardLanding();
  const dataCardHorizontal = await getDataCardHorizontal();
  const dataMobileCheckbox = await getDataMobileCheckbox();

  return (
    <HomePages
      dataCardLanding={dataCardLanding?.data || []}
      dataCardHorizontal={dataCardHorizontal?.data || []}
      dataMobileCheckbox={dataMobileCheckbox?.data || []}
    />
  );
}
