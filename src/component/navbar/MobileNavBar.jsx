"use client";
import {Sheet, SheetContent, SheetTrigger} from '@/component/ui/sheet'
import { MenuIcon } from "../iconsvg/Icon";
import Image from "next/image";
import Logo from '@/assets/logo.png'
import { usePathname } from "next/navigation";
import Link from "next/link";
import Lottie from "lottie-react";
import cartAnimation from "@/assets/cart-animation.json";

const MobileNav = () => {
  const pathname = usePathname()
  const links = [
      {
          title: 'Home',
          path: '/'
      },
      {
          title: 'Collections',
          path: '/collection'
      },
      {
          title: 'Hot Deals',
          path: '/hotdeals'
      },
      {
          title: 'KENS BOOTS',
          path: '/kensboots'
      },
  ]
  
  return (
    <Sheet>
<SheetTrigger className="relative h-[100%] flex items-center justify-center">
<MenuIcon className='text-bgSoft'/>
</SheetTrigger>
<SheetContent className='flex flex-col'>
  <div className="mt-10 mb-10 flex justify-center items-center">
    <Image src={Logo} alt="" width={100} />
  </div>
<nav className="flex flex-col justify-center items-center gap-8">
{links.map((link => (
            <Link href={link.path} key={link.path} className={`${link.path === pathname && 'text-bgSoft border border-bgSoft rounded-full px-2 '} capitalize font-medium hover:text-accent transition-all 3s`}>
                {link.title}
            </Link>
        )))}
         <Lottie animationData={cartAnimation} className="w-[50px] cursor-pointer" />
</nav>
</SheetContent>
    </Sheet>
  );
};

export default MobileNav;
