import { cn } from '@/lib/utils';

const SpeechBubbleLeftArrow = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                'relative inline-block rounded-lg bg-[#8BC4FF] px-4 py-2 text-lg font-black text-white',
                className,
            )}
            {...props}>
            {children}
            <div className="absolute -bottom-3 left-4 size-3 -translate-y-2 rotate-45 bg-[#8BC4FF]"></div>
        </div>
    );
};

const SpeechBubbleMiddleArrow = ({ children, className, ...props }: React.ComponentProps<'div'>) => {
    return (
        <div
            className={cn(
                'relative inline-flex items-center rounded-lg bg-[#E9F7EF] px-4 py-2 text-lg font-black text-[#00C696]',
                className,
            )}
            {...props}>
            {children}
            <div className="absolute -bottom-3 left-1/2 size-3 -translate-x-1/2 -translate-y-2 rotate-45 bg-[#E9F7EF]"></div>
        </div>
    );
};

export { SpeechBubbleLeftArrow, SpeechBubbleMiddleArrow };
