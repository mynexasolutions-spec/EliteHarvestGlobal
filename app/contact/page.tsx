import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { GetDirectionsLink, GoogleMap } from '@/components/maps';
import { BreadcrumbStructuredData } from '@/components/seo';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Elite Harvest Global for product enquiries, trade requirements, WhatsApp support, call support, and directions.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbStructuredData items={[{ name: 'Home', url: '/' }, { name: 'Contact Us', url: '/contact' }]} />
      <section className="page-banner page-banner-contact" aria-labelledby="contact-heading">
        <div className="shell">
          <p className="eyebrow">Contact us</p>
          <h1 id="contact-heading">Let’s discuss your requirement.</h1>
          <p>Send the product, quantity, packing preference, destination, and timeline for a more useful conversation.</p>
        </div>
      </section>
      <section className="section-space contact-page-section">
        <div className="shell contact-page-grid">
          <aside className="contact-aside">
            <p className="eyebrow">Direct contact</p>
            <h2>Speak with the team.</h2>
            <div className="contact-methods">
              <a href={`mailto:${site.email}`}><span>Email</span>{site.email}</a>
              <a href={site.primaryPhoneHref}><span>Phone</span>{site.primaryPhone}</a>
              <a href={site.secondaryPhoneHref}><span>Alternate phone</span>{site.secondaryPhone}</a>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer"><span>WhatsApp</span>Start an enquiry</a>
            </div>
            <div className="contact-aside-actions">
              <a className="btn btn-primary" href={site.whatsappHref} target="_blank" rel="noreferrer">WhatsApp us</a>
              <a className="btn btn-outline" href={site.primaryPhoneHref}>Call now</a>
            </div>
          </aside>
          <div className="contact-form-panel">
            <p className="eyebrow">Send an enquiry</p>
            <h2>Tell us what you need.</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="contact-map-section">
        <div className="shell map-heading"><div><p className="eyebrow">Location</p><h2>Find Elite Harvest Global.</h2><p>{site.address}</p></div><GetDirectionsLink /></div>
        <GoogleMap />
      </section>
    </>
  );
}
