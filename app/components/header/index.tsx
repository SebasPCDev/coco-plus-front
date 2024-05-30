import HeaderLeft from './headerLeft';
import HeaderCenter from './headercenter';
import HeaderRight from './headerRight';

const Header = () => {
  return (
    <header className="font-sans fixed z-50 flex h-[65px] w-full flex-row items-center justify-between bg-zinc-950 pr-10 shadow lg:relative lg:h-auto">
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </header>
  );
};

export default Header;
