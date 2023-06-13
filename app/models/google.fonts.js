import { Roboto, Hind_Madurai, Pridi } from 'next/font/google';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'optional',
});

export const madurai = Hind_Madurai({
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-madurai',
  display: 'optional',
});

export const pridi = Pridi({
  weight: ['200', '300', '400', '500', '600', '700'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-pridi',
  display: 'optional',
});
