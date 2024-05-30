import Header from '../header';
import Banner from '../Banner';
import HeaderMain from '../mainHeader';
import Service from '../Service';
// import Coworkings from '../coworkings2';
import Coworkings3 from '../coworkings4';

// import MapCoworking from '../coworkings2/mapCoworkings';
import Footer from '../Footer';
import getCountries from '@/utils/api/geography/getCountries';
import getStates from '@/utils/api/geography/getStates';
import getCities from '@/utils/api/geography/getCities';

const Home = async () => {

  const allCountries = await getCountries();
  const allStates = await getStates();
  const allCities = await getCities();

  return (
    <div>
      <Header />
      <Banner />
      <main className="mx-auto max-w-[1100px] p-10">
        <HeaderMain />
        <Service />
        <Coworkings3 allCountries={allCountries} allStates={allStates} allCities={allCities} />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
