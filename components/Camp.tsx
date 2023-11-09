import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-no-repeat bg-cover lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className='h-full flex flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter gap-4'>
          <div className='p-4 rounded-full bg-green-50'>
            <Image src='/folded-map.svg' alt='map' width={28} height={28} />
          </div>
          <div className='flex flex-col gap-1'>
            <h4 className='bold-18 text-white'>{title}</h4>
            <p className='regular-14 text-white '>{subtitle}</p>
          </div>
        </div>
        <div className='flexCenter gap-6'>
          <span className='flex -space-x-4 overflow-hidden'>
            {PEOPLE_URL.map((url) => (
              <Image
                key={url}
                src={url}
                alt='person'
                width={52}
                height={52}
                className='rounded-full h-10 w-10'
              />
            ))}
          </span>
          <p className='bold-16 text-white md:bold-20'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className='py-10 relative flex flex-col 2xl:max-container lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='h-[340px] flex items-center justify-start gap-8 overflow-x-auto hide-scrollbar lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage='bg-bg-img-1'
          title='Putuk Truno Camp'
          subtitle='Prigen, Pasuruan'
          peopleJoined='60+ Joined'
        />
        <CampSite
          backgroundImage='bg-bg-img-2'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='50+ Joined'
        />
      </div>
      <div className='mt-10 px-6 flexEnd lg:-mt-60 lg:mr-6'>
        <div className='w-full p-8 relative bg-green-50 rounded-3xl overflow-hidden lg:max-w-[500px] xl:max-w-[734px] xl:py-20 xl:px-16 xl:rounded-5xl'>
          <h2 className='regular-24 text-white capitalize md:regular-32 2xl:regular-64'>
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className='mt-5 regular-14 text-white xl:regular-16'>
            Starting from the anxiety of the climbers when visiting a new climbing location, the
            possibility of getting lost is very large. That's why we are here for those of you who
            want to start an adventure
          </p>
          <Image src='/quote.svg' alt='camp-2' width={186} height={219} className='camp-quote' />
        </div>
      </div>
    </section>
  );
};

export default Camp;
