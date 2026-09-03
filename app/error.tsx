'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { site } from '@/data/site';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="error-page" role="alert">
      <div className="error-content">
        <div className="error-icon" aria-hidden="true">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <h1>Something went wrong</h1>
        <p>
          We apologize for the inconvenience. Our team has been notified and is working to resolve this issue.
        </p>
        <div className="error-actions">
          <button className="btn btn-primary" onClick={reset}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
              <path d="M3 3v5h5" />
            </svg>
            Try Again
          </button>
          <Link className="btn btn-secondary" href="/">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12" />
            </svg>
            Go Home
          </Link>
          <a className="btn btn-outline" href={site.whatsappHref} target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mr-2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Contact Support
          </a>
        </div>
        {process.env.NODE_ENV === 'development' && error.digest && (
          <details className="error-details">
            <summary>Error Details (Development)</summary>
            <pre>{error.message}</pre>
            <code>{error.digest}</code>
          </details>
        )}
      </div>
      <style jsx>{`
        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .error-content {
          max-width: 480px;
          text-align: center;
          padding: 2rem;
        }
        .error-icon {
          color: var(--brand);
          margin-bottom: 1.5rem;
        }
        .error-content h1 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }
        .error-content p {
          color: var(--muted);
          margin-bottom: 2rem;
        }
        .error-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .error-details {
          margin-top: 2rem;
          text-align: left;
          padding: 1rem;
          background: var(--surface-soft);
          border-radius: 8px;
          font-size: 0.875rem;
        }
        .error-details summary {
          cursor: pointer;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }
        .error-details pre {
          white-space: pre-wrap;
          word-break: break-word;
          color: #dc2626;
        }
        .error-details code {
          display: block;
          margin-top: 0.5rem;
          color: var(--muted);
        }
      `}</style>
    </div>
  );
}