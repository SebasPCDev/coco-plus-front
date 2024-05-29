import Header from '../header';
import Banner from '../Banner';
import HeaderMain from '../mainHeader';
import Service from '../Service';
import Coworkings from '../coworkings2';
import Coworkings3 from '../coworkings3';

import MapCoworking from '../coworkings2/mapCoworkings';
import Footer from '../Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className="mx-auto max-w-[1024px] p-10">
        <HeaderMain />
        <Service />
        <Coworkings3 />
      </main>
      <Footer/>
    </div>
  );
};
export default Home;
