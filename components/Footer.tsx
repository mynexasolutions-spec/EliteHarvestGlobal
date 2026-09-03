import Image from 'next/image';
import Link from 'next/link';
import { navItems, productCategories, site } from '@/data/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Link className="footer-brand" href="/" aria-label={`${site.name} home`}>
            <Image src="/assets/images/logo.jpeg" alt="Elite Harvest Global logo" width={58} height={58} />
            <span>Elite Harvest <b>Global</b></span>
          </Link>
          <p>Helping commercial buyers explore agriculture, food, and trade requirements with a direct, practical approach.</p>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column">
          <h2>Categories</h2>
          <ul>
            {productCategories.slice(0, 4).map((product) => (
              <li key={product.title}><Link href="/products">{product.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer-column footer-contact">
          <h2>Get in touch</h2>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.primaryPhoneHref}>{site.primaryPhone}</a>
          <a href={site.secondaryPhoneHref}>{site.secondaryPhone}</a>
          <a href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp enquiry</a>
          <p>{site.address}</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Copyright {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
