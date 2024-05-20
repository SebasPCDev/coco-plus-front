import Header from '../header';
import Banner from '../Banner';
import HeaderMain from '../mainHeader';
import Service from '../Service';
import Coworkings from '../coworkings2';
import Footer from '../JulianCompany/home/footerHome';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <main className='mx-auto max-w-[1024px] p-10'>
        <HeaderMain />
        <Service />
        <Coworkings />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
