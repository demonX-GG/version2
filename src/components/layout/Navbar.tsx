import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ArrowRightIcon } from 'lucide-react';
import { Logo } from '../ui/Logo';

const links = [
{ label: 'Platform', href: '#solution' },
{ label: 'Monitoring', href: '#monitoring' },
{ label: 'Management', href: '#cameras' },
{ label: 'Analytics', href: '#analytics' },
{ label: 'Industries', href: '#industries' },
{ label: 'Security', href: '#security' }];


export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'}`
      }>
      
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo className="h-8 w-8" />
          <span className="font-display text-[17px] font-extrabold tracking-tight text-white">
            Secure<span className="text-electric-400">Eye</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) =>
          <li key={link.href}>
              <a
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition-colors hover:text-white">
              
                {link.label}
              </a>
            </li>
          )}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#monitoring" className="text-sm font-medium text-slate-300 transition-colors hover:text-white">
            View Dashboard
          </a>
          <a
            href="#cta"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-electric-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition-colors hover:bg-electric-400">
            
            Explore Secure Eye
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}>
          
          {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open &&
      <div className="border-t border-white/10 bg-ink-950/95 px-5 pb-6 pt-4 backdrop-blur-xl lg:hidden">
          <ul className="space-y-1">
            {links.map((link) =>
          <li key={link.href}>
                <a
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white">
              
                  {link.label}
                </a>
              </li>
          )}
          </ul>
          <a
          href="#cta"
          onClick={() => setOpen(false)}
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-electric-500 px-4 py-3 text-sm font-semibold text-white">
          
            Explore Secure Eye
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      }
    </header>);

}