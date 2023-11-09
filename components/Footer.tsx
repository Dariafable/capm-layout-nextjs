import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col gap-5'>
      <h2 className='bold-18 whitespace-nowrap'>{title}</h2>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='mb-24 flexCenter'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />
          </Link>

          <div className='flex flex-wrap gap-10 md:flex-1 sm:justify-between'>
            {FOOTER_LINKS.map((column) => (
              <FooterColumn title={column.title}>
                <ul className='flex flex-col gap-4 regular-14 text-gray-30'>
                  {column.links.map((link) => (
                    <Link href='/' key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link href='/' key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p className='whitespace-nowrap'>{link.label}:</p>
                    <p className='medium-16 whitespace-nowrap text-blue-70'>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='flex gap-4 regular-14 text-gray-30'>
                  {SOCIALS.links.map((link) => (
                    <Link href='/' key={link}>
                      <Image src={link} alt='link' width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className='border bg-gray-20' />
        <p className='w-full text-center regular-14 text-gray-30'>
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
