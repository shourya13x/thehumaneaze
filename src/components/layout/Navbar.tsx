"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "@/components/brand/Logo";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <Logo />

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-navy/5",
                pathname === link.href
                  ? "text-teal"
                  : "text-navy/70 hover:text-navy"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-lg bg-teal px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-teal/90 hover:shadow-md lg:inline-flex"
        >
          Discuss Your HR Need
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-navy/5 lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex w-80 flex-col bg-cream p-0" showCloseButton={false}>
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Mobile header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div onClick={() => setOpen(false)}>
                <Logo />
              </div>
              <SheetClose className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-navy/5" aria-label="Close menu">
                <X className="h-5 w-5 text-navy" />
              </SheetClose>
            </div>

            {/* Mobile nav links */}
            <div className="flex flex-1 flex-col gap-1 px-4 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-teal/10 text-teal"
                      : "text-navy/70 hover:bg-navy/5 hover:text-navy"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-border p-4">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-5 py-3 text-base font-medium text-white transition-all hover:bg-teal/90"
              >
                Discuss Your HR Need
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
