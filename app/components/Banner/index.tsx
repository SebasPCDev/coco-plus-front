import Image from 'next/image';

export const Banner = () => {
  return (
    <section className="relative w-full bg-[url('/cocoproject/coco-banner.jpg')] bg-no-repeat bg-cover bg-center -z-10" aria-label="hero">
      <div className='absolute w-full h-full bg-black/60 z-0'></div>
      <div className="max-w-[1024px] relative w-full h-full py-16 px-10 md:px-10 mx-auto md:mx-70 z-10">

        <Image
          className="w-44 md:w-60"
          src="/cocoproject/logo-slogan.png"
          alt="logo"
          width={150}
          height={150}
          style={{ filter: 'invert(100%) brightness(200%)' }}
        />

        <h1 className="text-3xl md:text-6xl font-Outfit font-normal text-white mt-8">
          Connecting <span className='inline bg-gradient-to-r from-[#c0dc7f] from-10% to-[#63e8a1] to-90% text-transparent bg-clip-text'>Coworkings</span>, <br />
          Connecting <span className='inline bg-gradient-to-r from-[#c0dc7f] from-10% to-[#63e8a1] to-90% text-transparent bg-clip-text'>Companies</span><br />
          and more.</h1>

        <p className='text-2xl md:text-4xl font-Outfit font-normal text-white mt-12'>Connecting Coworkings & Companies</p>
      </div>

    </section>
  );
};

export default Banner;
