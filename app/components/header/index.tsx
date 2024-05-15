import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';

const Header = () => {
  return (
    <header className="bg-zinc-950 font-sans shadow">
      <div className="mx-auto flex flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <HeaderLeft />
        <HeaderRight />
      </div>
    </header>
  );
};

export default Header;
