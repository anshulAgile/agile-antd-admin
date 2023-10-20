import { Wrapper } from './style';

import BannerSection from './components/BannerSection';
import SecondSection from './components/SecondSection';
import Meta from 'components/common/Meta';

const Dashboard = () => {
  return (
    <Wrapper>
      <Meta title="Demo App - Home" />
      <BannerSection />
      <SecondSection />
    </Wrapper>
  );
};

export default Dashboard;
