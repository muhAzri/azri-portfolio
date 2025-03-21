"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { mainNavItems } from "@/config/navigation";

interface MobileNavProps {
  show: boolean;
  onClose: () => void;
}

export function MobileNav({ show, onClose }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(show);

  React.useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="left" className="pr-0">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => {
            setOpen(false);
            onClose();
          }}
        >
          <Icons.logo className="mr-2 h-8 w-8" />
          <span className="font-bold">{siteConfig.name.split(" ")[0]}</span>
        </Link>
        <div className="mt-8 flex flex-col space-y-4">
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent",
                pathname === item.href && "bg-accent"
              )}
              onClick={() => {
                setOpen(false);
                onClose();
              }}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mt-auto flex flex-col space-y-4 pt-4">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent"
            onClick={() => {
              setOpen(false);
              onClose();
            }}
          >
            <Icons.download className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
