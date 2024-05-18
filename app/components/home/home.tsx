// 'use client';

import Banner from '../Banner';
import Service from '../Service';
import Coworks from '../Cowoks';
import HeaderMain from '../mainHeader';
import Header from '../header';
import Footer from '../JulianCompany/home/footerHome';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <HeaderMain />
      <Service id="Service" />
      <Coworks id="Coworks" />
      <Footer />
    </div>
  );
};
export default Home;
