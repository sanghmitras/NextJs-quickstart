'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/lib/utils';

const Tabs = TabsPrimitive.Root;

const variant = {
  default: {
    trigger:
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm hover:text-foreground',
    list: 'inline-flex h-10 items-center justify-center  bg-muted p-1 text-muted-foreground overflow-x-auto',
  },
  underline: {
    trigger:
      'inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm rounded-none text-muted-foreground  ring-offset-background transition-all   font-medium data-[state=active]:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary hover:text-foreground',
    list: 'inline-flex h-10 items-center justify-center flex-1 overflow-x-auto',
  },
  curvy: {
    trigger:
      'inline-flex items-center  justify-center whitespace-nowrap px-4 py-1 text-sm rounded-none  ring-offset-background transition-all text-gray-500  font-medium data-[state=active]:text-gray-900 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:rounded-xl data-[state=active]:shadow-sm h-9 hover:text-foreground',
    list: 'inline-flex h-11 border border-border shadow-sm items-center justify-center flex-1 dark:bg-muted bg-gray-100  rounded-2xl flex flex-1 justify-between px-2 overflow-x-auto',
  },
};

// Create context to share variant between TabsList and TabsTrigger
const TabsContext = React.createContext<{
  variant: keyof typeof variant;
}>({
  variant: 'default',
});

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    variant?: keyof typeof variant;
  }
>(({ className, variant: tabVariant = 'default', ...props }, ref) => (
  <TabsContext.Provider value={{ variant: tabVariant }}>
    <TabsPrimitive.List
      ref={ref}
      className={cn(variant[tabVariant].list, className)}
      {...props}
    />
  </TabsContext.Provider>
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  // Get variant from context
  const { variant: contextVariant } = React.useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(variant[contextVariant].trigger, className)}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
