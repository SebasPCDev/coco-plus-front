import Link from 'next/link';
import NavBarLanding from '../../navBarLanding';
import Image from 'next/image';

const HeaderLeft = () => {
  const url = process.env.NEXT_PUBLIC_FRONT_URL;
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Link href="/">
          <Image
            width={180}
            height={192}
            src="/cocoproject/LimaSinFondo.png"
            alt="Coco+"
          />
        </Link>
        <div className="ml-12 hidden items-center space-x-12 md:flex">
          <NavBarLanding href={`${url}/#Service`}>Como reservar</NavBarLanding>
          <NavBarLanding href={`${url}/#Coworks`}>
            Nuestros espacios
          </NavBarLanding>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
