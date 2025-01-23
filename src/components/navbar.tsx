import Link from 'next/link';
import { Button } from './button';
import { HyperhireWhiteLogo } from './hyperhire-logo';
import { TablerIcon } from './tabler-icon';

const MobileNavbar = () => {
    return (
        <nav className="mb-9 block px-2.5 py-5 lg:hidden">
            <div className="flex items-center justify-between">
                <HyperhireWhiteLogo />
                <TablerIcon name="IconMenu2" className="stroke-white" />
            </div>
        </nav>
    );
};

const Navbar = () => {
    return (
        <nav className="mb-9 hidden px-2.5 py-5 lg:block">
            <div className="flex items-center justify-between">
                <HyperhireWhiteLogo />

                <div className="flex items-center gap-[3.75rem]">
                    <Link href="#" className="text-base font-black text-white">
                        채용
                    </Link>
                    <Link href="#" className="text-base font-black text-white">
                        해외 개발자 활용 서비스
                    </Link>
                </div>

                <Button className="bg-white text-base font-black text-[#4A77FF]">문의하기</Button>
            </div>
        </nav>
    );
};

export { MobileNavbar, Navbar };
