import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { HyperhireWhiteLogo } from './hyperhire-logo';
import { TablerIcon } from './tabler-icon';
import { Button as ShadcnButton } from './ui/button';

const MobileNavbar = () => {
    return (
        <nav className="mb-9 block px-2.5 py-5 lg:hidden">
            <div className="flex items-center justify-between">
                <HyperhireWhiteLogo />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <ShadcnButton variant="ghost" size="icon" className="[&_svg]:size-6">
                            <TablerIcon name="IconMenu2" className="stroke-white" />
                            <span className="sr-only">Toggle Dropdown Menu</span>
                        </ShadcnButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="border-0">
                        <DropdownMenuLabel>채용</DropdownMenuLabel>
                        <DropdownMenuItem>해외 개발자 원격 채용</DropdownMenuItem>
                        <DropdownMenuItem>외국인 원격 채용 (비개발 직군)</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>한국어 가능 외국인 채용</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
};

export { MobileNavbar };
