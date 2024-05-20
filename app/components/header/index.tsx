import HeaderLeft from './headerLeft';
import HeaderCenter from './headercenter';
import HeaderRight from './headerRight';

const Header = () => {

  return (
    <header className="fixed w-full h-[65px] lg:h-auto lg:relative flex flex-row items-center justify-between bg-zinc-950 font-sans shadow pr-10 z-50">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

export default Header;
