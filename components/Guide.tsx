import Image from 'next/image';

const Guide = () => {
  return (
    <section className='flexCenter flex-col'>
      <div className='w-full max-container padding-container pb-24'>
        <Image src='/camp.svg' alt='boat' width={50} height={50} />
        <p className='-mt-1 mb-3 regular-18 uppercase text-green-50'>WE ARE HERE FOR YOU</p>

        <div className='flex justify-between flex-wrap gap-5 lg:gap-10'>
          <h2 className='bold-40 xl:bold-64 xl:max-w-[390px]'>Guide You to Easy Path</h2>
          <p className='regular-16 text-gray-30 xl:max-w-[520px]'>
            Only with the hilink application you will no longer get lost and get lost again, because
            we already support offline maps when there is no internet connection in the field.
            Invite your friends, relatives and friends to have fun in the wilderness through the
            valley and reach the top of the mountain.
          </p>
        </div>
      </div>

      <div className='w-full max-container relative flexCenter'>
        <Image
          src='/boat.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-5xl'
        />

        <div className='py-8 pl-5 pr-7 absolute flex gap-3 bg-white rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
          <Image src='/meter.svg' alt='meter' width={16} height={158} className='w-auto h-full' />

          <div className='flexBetween flex-col'>
            <div className='w-full flex flex-col gap-2'>
              <div className='w-full flexBetween'>
                <p className='regular-16 text-gray-20'>Destination</p>
                <p className='bold-16 text-green-50'>48 min</p>
              </div>
              <p className='bold-20'>Aguas Calientes</p>
            </div>

            <div className='w-full flex flex-col gap-2'>
              <p className='regular-16 text-gray-20'>Start track</p>
              <h4 className='bold-20 whitespace-nowrap'>Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
