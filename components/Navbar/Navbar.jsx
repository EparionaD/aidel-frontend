'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import navbar from '@/components/Navbar/navbar.module.scss';
import logo from '@/public/assets/logo/logoV.png';
import { SlMenu } from 'react-icons/sl';

const Navbar = ({ pathNames }) => {
  const [menu, setMenu] = useState(false);
  const router = usePathname();
  console.log(router);

  const toogleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className={navbar.nav}>
      <div className={navbar.nav__containerLogo}>
        <Link href='/'>
          <Image src={logo} alt='Logo Aidel' priority />
        </Link>
      </div>
      <SlMenu className={navbar.nav__iconMenu} onClick={toogleMenu} />

      <div
        className={`${navbar.nav__containerLinks} ${
          menu ? navbar.nav__containerLinks_active : ''
        } ${navbar.nav__movil}`}
      >
        {pathNames.map((pathName) => (
          <Link
            href={pathName.path}
            key={pathName.path}
            className={`${navbar.nav__link} ${
              pathName.path === router ? navbar.nav__link_active : ''
            }`}
            onClick={toogleMenu}
          >
            {pathName.name}
          </Link>
        ))}
      </div>
      <div
        className={`${navbar.nav__containerLinks} ${
          menu ? navbar.nav__containerLinks_active : ''
        } ${navbar.nav__pc}`}
      >
        {pathNames.map((pathName) => (
          <Link
            href={pathName.path}
            key={pathName.path}
            className={`${navbar.nav__link} ${
              pathName.path === router ? navbar.nav__link_active : ''
            }`}
          >
            {pathName.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
