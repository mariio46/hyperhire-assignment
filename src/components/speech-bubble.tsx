import * as React from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const speechBubbleVariants = cva('relative inline-flex rounded-lg px-4 py-2 text-lg font-black', {
  variants: {
    variant: {
      default: 'bg-[#8BC4FF] [&>[data-slot=arrow]]:bg-[#8BC4FF] text-white',
      primary: 'bg-[#E9F7EF] [&>[data-slot=arrow]]:bg-[#E9F7EF] text-[#00C696]',
    },
    arrowPosition: {
      left: '[&>[data-slot=arrow]]:absolute [&>[data-slot=arrow]]:-bottom-3 [&>[data-slot=arrow]]:left-4 [&>[data-slot=arrow]]:size-3 [&>[data-slot=arrow]]:-translate-y-2 [&>[data-slot=arrow]]:rotate-45',
      middle:
        '[&>[data-slot=arrow]]:absolute [&>[data-slot=arrow]]:-bottom-3 [&>[data-slot=arrow]]:left-1/2 [&>[data-slot=arrow]]:size-3 [&>[data-slot=arrow]]:-translate-x-1/2 [&>[data-slot=arrow]]:-translate-y-2 [&>[data-slot=arrow]]:rotate-45',
    },
  },
  defaultVariants: {
    variant: 'default',
    arrowPosition: 'left',
  },
});

interface SpeechBubbleProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof speechBubbleVariants> {
  //
}

const SpeechBubble = React.forwardRef<HTMLDivElement, SpeechBubbleProps>(
  ({ className, variant, arrowPosition, children, ...props }, ref) => {
    return (
      <div className={cn(speechBubbleVariants({ variant, className, arrowPosition }))} ref={ref} {...props}>
        {children}
        <div data-slot="arrow" />
      </div>
    );
  },
);

export { SpeechBubble };
