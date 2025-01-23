import { cn } from '@/lib/utils';
import Image from 'next/image';

import heroImage1 from '../../public/images/hero-image-1.png';

const HeroCard = ({ className }: { className?: string }) => {
    return (
        <div className={cn('flex w-80 flex-col justify-center space-y-9 rounded-xl bg-white p-9', className)}>
            <div className="flex flex-col items-center space-y-4">
                <Image src={heroImage1} alt="Hero Profile Picture" className="size-[7.5rem]" />
                <div className="text-center">
                    <h2 className="text-2xl font-black text-black">Abhishek Gupta</h2>
                    <p className="text-base font-black text-[#4A77FF]">마케팅 · 2y+</p>
                </div>
            </div>
            <div className="inline-flex flex-wrap items-center justify-center gap-1">
                <div className="inline-flex justify-center rounded-md border border-[#C1C5CF] px-3 py-1">
                    마케팅 콘텐츠 제작
                </div>
                <div className="inline-flex justify-center rounded-md border border-[#C1C5CF] px-3 py-1">
                    인스타그램 관리
                </div>
                <div className="inline-flex justify-center rounded-md border border-[#C1C5CF] px-3 py-1">
                    트위터 관리
                </div>
                <div className="inline-flex justify-center rounded-md border border-[#C1C5CF] px-3 py-1">
                    블로그 글 작성
                </div>
            </div>
        </div>
    );
};

export { HeroCard };
