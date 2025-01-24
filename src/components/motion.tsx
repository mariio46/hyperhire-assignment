'use client';

import * as React from 'react';

import { HTMLMotionProps, MotionProps, motion } from 'framer-motion';

interface MotionDivProps extends HTMLMotionProps<'div'>, MotionProps {
  //
}

const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(({ ...props }, ref) => {
  return <motion.div ref={ref} {...props} />;
});

export { MotionDiv };
