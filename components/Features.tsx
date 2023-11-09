import { FEATURES } from '@/constants';
import Image from 'next/image';

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const FeaturesItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className='w-full flex flex-col flex-1 items-start'>
      <div className='p-4 rounded-full bg-green-50 lg:p-7'>
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className='mt-5 bold-20 capitalize lg:bold-32'>{title}</h2>
      <p className='mt-5 bg-white/80 regular-16 text-gray-30 lg:bg-none lg:mt-[30px]'>
        {description}
      </p>
    </li>
  );
};

const Features = () => {
  return (
    <section className='py-24 flexCenter flex-col bg-feature-bg bg-center bg-no-repeat overflow-hidden'>
      <div className='max-container w-full padding-container relative flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image src='/phone.png' alt='phone' width={440} height={1000} className='feature-phone' />
        </div>

        <div className='w-full flex flex-col gap-10 z-20 lg:w-[60%]'>
          <div className='relative'>
            <Image
              src='/camp.svg'
              alt='camp'
              width={50}
              height={50}
              className='absolute w-10 top-[-28px] left-[-5px] lg:w-[50px]'
            />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
          </div>
          <ul className='grid gap-10 md:grid-cols-2 lg:gap-20 lg:mg-20'>
            {FEATURES.map((feature) => (
              <FeaturesItem
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
