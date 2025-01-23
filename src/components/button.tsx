import * as React from 'react';

import { cn } from '@/lib/utils';

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ className, ...props }, ref) => {
        return <button className={cn('rounded-lg px-6 py-[0.375rem]', className)} ref={ref} {...props} />;
    },
);

export { Button };
