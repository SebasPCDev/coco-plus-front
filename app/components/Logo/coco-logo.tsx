import Image from 'next/image';

export default function CocoLogo() {
  return (
    <div>
      <Image
        src={'/cocoproject/LimaSinFondo.png'}
        alt="cocologo"
        width={150}
        height={150}
      />
    </div>
  );
}
