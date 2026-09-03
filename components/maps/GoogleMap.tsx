import { site } from '@/data/site';

type GoogleMapProps = {
  address?: string;
  height?: string;
  className?: string;
};

export function GoogleMap({ address = site.address, height = '460px', className = '' }: GoogleMapProps) {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className={`google-map-container ${className}`} style={{ height }}>
      <iframe
        title={`${site.name} location`}
        src={mapUrl}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}

export function GetDirectionsLink({ address = site.address, label = 'Get directions' }: { address?: string; label?: string }) {
  return (
    <a
      className="btn btn-outline"
      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`}
      target="_blank"
      rel="noreferrer"
    >
      {label}
    </a>
  );
}
