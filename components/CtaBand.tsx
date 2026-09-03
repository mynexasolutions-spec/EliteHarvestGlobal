import Link from 'next/link';
import { site } from '@/data/site';

export function CtaBand() {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="shell cta-band-inner">
        <div className="cta-copy">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="cta-heading">Have a product requirement in mind?</h2>
          <p>Share the product, quantity, packing preference, destination, and expected timeline.</p>
        </div>
        <div className="cta-actions" aria-label="Contact options">
          <a className="btn btn-gold" href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp us</a>
          <Link className="btn btn-ghost" href="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
