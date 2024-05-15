'use client';

import Banner from '../Banner';
import Service from '../Service';
import Coworks from '../Cowoks';
import HeaderMain from '../mainHeader';
import Header from '../header';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <HeaderMain />
      <Service id="Service" />
      <Coworks id="Coworks" />
    </div>
  );
};
export default Home;
