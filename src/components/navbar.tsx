import * as React from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Button } from './button';
import { HyperhireWhiteLogo } from './hyperhire-logo';
import { Separator } from './ui/separator';

const Navbar = () => {
    return (
        <nav className="mb-9 hidden px-2.5 py-5 lg:block">
            <div className="flex items-center justify-between">
                <HyperhireWhiteLogo />

                <div className="flex items-center gap-[3.75rem]">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="hover:bg-accent/20 focus:bg-accent/20 data-[active]:bg-accent/20 data-[state=open]:bg-accent/20 bg-transparent text-base font-black text-white hover:text-white focus:text-white">
                                    채용
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[15rem] gap-1.5 p-2">
                                        <ListItem href="#" className="font-black">
                                            채용
                                        </ListItem>
                                        <ListItem href="#">해외 개발자 원격 채용</ListItem>
                                        <ListItem href="#">외국인 원격 채용 (비개발 직군)</ListItem>
                                        <Separator />
                                        <ListItem href="#">한국어 가능 외국인 채용</ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Link href="#" className="text-base font-black text-white">
                        해외 개발자 활용 서비스
                    </Link>
                </div>

                <Button className="bg-white text-base font-black text-[#4A77FF]">문의하기</Button>
            </div>
        </nav>
    );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
    ({ className, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 text-sm font-medium leading-none no-underline outline-none transition-colors',
                            className,
                        )}
                        {...props}>
                        {children}
                    </a>
                </NavigationMenuLink>
            </li>
        );
    },
);
ListItem.displayName = 'ListItem';

export { Navbar };
