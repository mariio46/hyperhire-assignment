import Link from 'next/link';

import type { TablerIconName } from '@/types/app/tabler-icon';

import { TablerIcon } from './tabler-icon';

interface FooterCardProps {
  icon: TablerIconName;
  text: string;
}

const FooterCard = ({ icon, text }: FooterCardProps) => {
  return (
    <div className="flex flex-col space-y-4 rounded-xl bg-white p-4">
      <div className="flex-1 space-y-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-[#EFF1F6] p-2 text-[#7A8FAD]">
          <TablerIcon name={icon} />
        </div>
        <h4 className="text-sm font-black text-[#343741]">{text}</h4>
      </div>
      <div className="flex items-center gap-1 text-[#5E626F]">
        <Link href="#" className="text-sm font-black">
          바로가기
        </Link>
        <TablerIcon name="IconSquareRoundedArrowRight" />
      </div>
    </div>
  );
};

export { FooterCard };
