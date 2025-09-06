import { cn } from '@/lib/utils';

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700  shadow-sm dark:border-gray-700 w-full h-full p-2',
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
