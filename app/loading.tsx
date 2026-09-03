export default function Loading() {
  return (
    <div className="loading-skeleton" role="status" aria-label="Loading page content">
      <div className="skeleton-header">
        <div className="skeleton-logo" />
        <div className="skeleton-nav">
          <div className="skeleton-nav-item" />
          <div className="skeleton-nav-item" />
          <div className="skeleton-nav-item" />
          <div className="skeleton-nav-item" />
          <div className="skeleton-nav-item" />
        </div>
      </div>
      <div className="skeleton-hero" />
      <div className="skeleton-section">
        <div className="skeleton-heading" />
        <div className="skeleton-grid">
          <div className="skeleton-card" />
          <div className="skeleton-card" />
          <div className="skeleton-card" />
          <div className="skeleton-card" />
        </div>
      </div>
      <div className="skeleton-section">
        <div className="skeleton-heading" />
        <div className="skeleton-grid">
          <div className="skeleton-card" />
          <div className="skeleton-card" />
          <div className="skeleton-card" />
        </div>
      </div>
      <style>{`
        .loading-skeleton {
          min-height: 100vh;
        }
        .skeleton-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--line);
        }
        .skeleton-logo {
          width: 62px;
          height: 46px;
          border-radius: 8px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .skeleton-nav {
          display: flex;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .skeleton-nav-item {
          width: 80px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .skeleton-hero {
          height: 50vh;
          min-height: 300px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .skeleton-section {
          padding: 3rem 1.5rem;
        }
        .skeleton-heading {
          width: 40%;
          height: 2.5rem;
          border-radius: 8px;
          margin-bottom: 2rem;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .skeleton-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .skeleton-card {
          height: 300px;
          border-radius: 8px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
