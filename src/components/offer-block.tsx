import * as React from 'react';

import { cn } from '@/lib/utils';

const OfferBlock = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div className={cn('border-t border-t-white p-2', className)} ref={ref} {...props} />;
    },
);

const OfferBlockTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h3 className={cn('text-lg font-black text-white', className)} ref={ref} {...props} />;
    },
);

const OfferBlockDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className, ...props }, ref) => {
        return <p className={cn('text-base font-black text-white/80', className)} ref={ref} {...props} />;
    },
);

export { OfferBlock, OfferBlockDescription, OfferBlockTitle };
