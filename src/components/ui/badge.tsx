import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  cursor-default',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground shadow ',
        secondary: 'border-transparent bg-secondary text-secondary-foreground ',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow ',
        outline: 'text-foreground border-border',
        success: 'border-transparent bg-green-500 text-white ',
        destructiveOutline:
          'border-destructive border text-destructive bg-destructive/10 dark:bg-destructive/50 dark:text-destructive-foreground',
        infoOutline:
          'border-info border text-info bg-info/10 dark:bg-info/50 dark:text-info-foreground',
        warningOutline:
          'border-warning border text-warning bg-warning/10 dark:bg-warning/50 dark:text-warning-foreground',
        successOutline:
          'border-success border text-success bg-success/10 dark:bg-success/50 dark:text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
