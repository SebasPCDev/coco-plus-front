import Header from '../header';
import Banner from '../Banner';
import HeaderMain from '../mainHeader';
import Service from '../Service';
import Coworkings3 from '../coworkings4';

// import MapCoworking from '../coworkings2/mapCoworkings';
import Footer from '../Footer';
const Home = async () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className="mx-auto max-w-[1100px] p-10">
        <HeaderMain />
        <Service />
        <Coworkings3 />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
