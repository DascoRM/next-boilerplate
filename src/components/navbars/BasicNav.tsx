import { ItemMenu } from '@/types/components';
import { Button } from '@nextui-org/react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export default function BasicNav({ srcLogo }: { srcLogo: StaticImageData }) {
  const itemMenu: ItemMenu[] = [
    {
      id: 0,
      name: 'home',
      path: '/',
      icon: '',
    },
    {
      id: 0,
      name: 'about',
      path: '/',
      icon: '',
    },
  ];
  const listMenu = itemMenu.map((item: ItemMenu) => (
    <li key={item.id}>
      <Link href={item.path}>{item.name}</Link>
    </li>
  ));
  return (
    <nav className='inline-flex w-full justify-between'>
      {/* Logo */}
      <div>
        <Image
          src={srcLogo}
          width={100}
          height={100}
          alt='Picture of the author'
        />
      </div>
      <div>
        <ul className='inline-flex w-auto justify-items-center space-x-5'>
          {listMenu}
        </ul>
      </div>
      <div className='space-x-5'>
        <Button variant='bordered'>Signup</Button>
        <Button>Login</Button>
      </div>
    </nav>
  );
}
