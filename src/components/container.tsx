import * as React from 'react';

import { cn } from '@/lib/utils';

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        return <div className={cn('mx-auto max-w-7xl', className)} ref={ref} {...props} />;
    },
);

export { Container };
