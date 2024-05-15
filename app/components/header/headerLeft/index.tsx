import Link from 'next/link';
import NavBarLanding from '../../navBarLanding';

const HeaderLeft = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <img
            className="w-45 h-48"
            src="/cocoproject/LimaSinFondo.png"
            alt="Coco+"
          />
        </Link>
        <div className="ml-12 hidden items-center space-x-12 md:flex">
          <NavBarLanding href="#Service">Como reservar</NavBarLanding>
          <NavBarLanding href="#Coworks">Nuestros espacios</NavBarLanding>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
