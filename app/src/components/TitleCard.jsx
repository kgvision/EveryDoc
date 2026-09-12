import ProviderChip from './ProviderChip.jsx';

export function posterVar(categoryIndex, year) {
  return `var(--poster-${((categoryIndex + year) % 4) + 1})`;
}

export default function TitleCard({ title, categoryIndex, saved, onToggleSave, onOpenDetail }) {
  const openDetail = () => onOpenDetail(categoryIndex, title);
  return (
    <article
      className="card"
      role="button"
      tabIndex={0}
      onClick={openDetail}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDetail();
        }
      }}
      aria-label={`Open details for ${title.title}`}
    >
      <div className="card-poster" style={{ background: posterVar(categoryIndex, title.year) }}>
        <div className="card-blob" />
        <div className="card-blob2" />
        <div className="card-scrim" />
        {title.free && <span className="free-badge on-poster">Free with ads</span>}
        <button
          type="button"
          className={'save-btn' + (saved ? ' is-saved' : '')}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSave();
          }}
          aria-label={saved ? `Remove ${title.title} from My list` : `Save ${title.title} to My list`}
          aria-pressed={saved}
        >
          {saved ? '★' : '☆'}
        </button>
        <div className="card-title-overlay">{title.title}</div>
      </div>
      <div className="card-footer">
        <div className="card-meta">
          {title.year} · {title.runtime}
        </div>
        <div className="watch-list" onClick={(e) => e.stopPropagation()}>
          {title.providers.map((p) => (
            <ProviderChip key={p} name={p} variant="card" />
          ))}
        </div>
      </div>
    </article>
  );
}
