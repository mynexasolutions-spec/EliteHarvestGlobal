import Link from 'next/link';
import { site } from '@/data/site';

export default function NotFound() {
  return (
    <div className="not-found-page" role="main">
      <div className="not-found-content">
        <div className="not-found-code" aria-hidden="true">404</div>
        <h1>Page Not Found</h1>
        <p>
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
        </p>
        <div className="not-found-actions">
          <Link className="btn btn-primary" href="/">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12" />
            </svg>
            Go Home
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Contact Us
          </Link>
          <a className="btn btn-outline" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            WhatsApp Support
          </a>
        </div>
        <div className="not-found-links">
          <p>Or explore our main sections:</p>
          <nav aria-label="Main sections">
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products & Services</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/profile">Company Profile</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <style>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .not-found-content {
          max-width: 480px;
          text-align: center;
          padding: 2rem;
        }
        .not-found-code {
          font-size: 8rem;
          font-weight: 800;
          color: var(--line);
          line-height: 1;
          margin-bottom: 1rem;
        }
        .not-found-content h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        .not-found-content p {
          color: var(--muted);
          margin-bottom: 2rem;
        }
        .not-found-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
        .not-found-links {
          border-top: 1px solid var(--line);
          padding-top: 1.5rem;
        }
        .not-found-links p {
          color: var(--muted);
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        .not-found-links ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .not-found-links a {
          color: var(--brand-dark);
          font-weight: 600;
        }
        .not-found-links a:hover {
          color: var(--brand);
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
