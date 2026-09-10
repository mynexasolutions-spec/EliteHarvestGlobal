'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems, site } from '@/data/site';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === href) {
      event.preventDefault();
      scrollToTop();
      setIsOpen(false);
    }
  };

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      event.preventDefault();
      scrollToTop();
      return;
    }

    event.preventDefault();
    router.push('/');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="topbar">
        <div className="shell topbar-inner">
          <a href={site.emailHref}>{site.email}</a>
          <span className="topbar-divider" aria-hidden="true" />
          <a href={site.emailHref}>{site.salesEmail}</a>
          <span className="topbar-divider" aria-hidden="true" />
          <a href={site.primaryPhoneHref}>{site.primaryPhone}</a>
        </div>
      </div>

      <div className="shell navbar">
        <Link className="brand" href="/" aria-label={`${site.name} home`} onClick={handleLogoClick}>
          <span className="brand-logo">
            <img src="/assets/images/logo-removebg-preview.png" alt="Elite Harvest Global logo" width="88" height="88" fetchPriority="high" />
          </span>
          <span className="brand-copy">
            <strong>Elite Harvest</strong>
            <small>Global</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={`primary-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => {
            const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={isActive ? 'page' : undefined} onClick={(event) => handleNavigation(event, item.href)}>
                {item.label}
              </Link>
            );
          })}
          <Link className="nav-profile" href="/profile">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3v11m0 0 4-4m-4 4-4-4M5 19h14" />
            </svg>
            Profile
          </Link>
        </nav>
      </div>
    </header>
  );
}
