import { SERVICES } from '@/utils/constants';
import Image from 'next/image';

export const Service: React.FC = () => {
  return (
    <section
      id="Service"
      className="max-w-[1024px] mx-auto w-full"
      aria-label="service"
    >
      <h2 className="text-[#161c2c] text-4xl font-bold text-center mt-40">
        Como reservar
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-20 text-center">
        {SERVICES.map((service) => (
          <article key={service.id} className='max-w-[300px]'>

            <div className="flex justify-center items-center">
              <div className='bg-[#f4faf7] rounded-full'>
                <Image
                  className='w-24 h-24 p-6'
                  src={service.src}
                  alt="1"
                  width={50}
                  height={50}
                />
              </div>
            </div>

            <h3 className="font-bold py-6 text-xl text-[#161c2c]" >
              {service.title}
            </h3>

            <p className="leading-6">
              {service.paragraph}
            </p>
          </article>
        ))}

      </div>
    </section>
  );
};

export default Service;
