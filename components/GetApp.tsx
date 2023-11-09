import Image from 'next/image';
import Button from './Button';
const GetApp = () => {
  return (
    <section className='w-full flexCenter flex-col pb-[100px]'>
      <div className='get-app'>
        <div className='w-full flex items-start justify-center flex-col flex-1 gap-12'>
          <h1 className='bold-40 lg:bold-64 xl:max-w-[320px]'>Get for free now!</h1>
          <p className='regular-16 text-gray-10'>Available on iOS and Android</p>
          <div className='w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row'>
            <Button type='button' title='Apple store' icon='/apple.svg' variant='btn_white' full />
            <Button
              type='button'
              title='Play store'
              icon='/android.svg'
              variant='btn_dark_green_outline'
              full
            />
          </div>
        </div>
        <div className='w-full flex flex-1 items-center justify-end'>
          <Image src='/phones.png' alt='phones' width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
