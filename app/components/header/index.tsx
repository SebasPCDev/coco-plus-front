import HeaderLeft from './headerLeft';
import HeaderCenter from './headercenter';
import HeaderRight from './headerRight';

const Header = () => {

  return (
    <header className="flex flex-row items-center justify-between bg-zinc-950 font-sans shadow pr-10">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

export default Header;
