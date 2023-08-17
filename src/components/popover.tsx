'use client'

import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Cross1Icon } from "@radix-ui/react-icons";
import { clsx } from "clsx";

export const Popover = () => (
  <PopoverPrimitive.Root>
    <PopoverPrimitive.Trigger>Click me!</PopoverPrimitive.Trigger>
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        align="center"
        sideOffset={4}
        className={clsx(
          'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
          'z-50 w-48 rounded-lg p-4 shadow-md md:w-56',
          'bg-cloud',
          'flex justify-between',
        )}
      >
        <PopoverPrimitive.Arrow className="fill-cloud"/>
        <h3 className="text-sm font-medium text-steel">
          Title
        </h3>
        <PopoverPrimitive.Close
          className={clsx(
            "inline-flex items-center justify-center rounded-full p-1",
            "focus:outline-none focus-visible:ring focus-visible:ring-violet focus-visible:ring-opacity-75"
          )}
        >
          <Cross1Icon className="h-2 w-2 text-steel hover:text-midnight" />
        </PopoverPrimitive.Close>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  </PopoverPrimitive.Root>
);
