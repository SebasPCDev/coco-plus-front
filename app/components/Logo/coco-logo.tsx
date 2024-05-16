import Image from 'next/image';

export default function CocoLogo() {
  return (
    <div className="w-full">
      <Image
        src={'/cocoproject/LimaSinFondo.png'}
        alt="cocologo"
        width={200}
        height={100}
      />
    </div>
  );
}
