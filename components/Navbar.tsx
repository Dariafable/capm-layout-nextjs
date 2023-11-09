import Image from 'next/image';
import Link from 'next/link';
import { NAV_LINKS } from '../constants/index';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='max-container padding-container py-5 relative z-30 flexBetween'>
      <Link href='/'>
        <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
      </Link>

      <ul className='hidden h-full lg:flex gap-12'>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className='pb-1.5
             text-gray-50 regular-16 hover:font-bold transition-all'
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div
        className='hidden lg:flexCenter
      '
      >
        <Button type='button' title='Login' variant='btn_dark_green' icon='user.svg' />
      </div>

      <Image
        src='/menu.svg'
        alt='menu'
        width={32}
        height={32}
        className='cursor-pointer lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
