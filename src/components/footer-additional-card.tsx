import * as React from 'react';

import { cn } from '@/lib/utils';

const FooterAdditionalCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div className={cn('space-y-3', className)} ref={ref} {...props} />;
    },
);

const FooterAdditionalCardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return (
            <h2
                className={cn('text-[0.813rem]/[1.219rem] font-black text-[#5E626F]', className)}
                ref={ref}
                {...props}
            />
        );
    },
);

const FooterAdditionalCardSubTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => {
        return <h3 className={cn('text-xs/[1.125rem] font-black text-[#343741]', className)} ref={ref} {...props} />;
    },
);

const FooterAdditionalCardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
    return <p className={cn('text-[0.813rem]/[1.219rem] font-black text-[#5E626F]', className)} ref={ref} {...props} />;
});

export {
    FooterAdditionalCard,
    FooterAdditionalCardDescription,
    FooterAdditionalCardSubTitle,
    FooterAdditionalCardTitle,
};
