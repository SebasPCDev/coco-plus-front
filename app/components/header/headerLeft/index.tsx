import Link from 'next/link';
import Image from 'next/image';

const HeaderLeft = () => {

  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image
          width={190}
          height={210}
          src="/cocoproject/LimaSinFondo.png"
          alt="Coco+"
        />
      </Link>
    </div>
  );
};

export default HeaderLeft;
