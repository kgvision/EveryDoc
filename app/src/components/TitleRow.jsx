import ProviderChip from './ProviderChip.jsx';
import { initials } from '../data.js';
import { posterVar } from './TitleCard.jsx';

export default function TitleRow({ title, categoryIndex, saved, onToggleSave, onOpenDetail }) {
  const openDetail = () => onOpenDetail(categoryIndex, title);
  return (
    <article
      className="row-card"
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
      <div className="row-poster" style={{ background: posterVar(categoryIndex, title.year) }}>
        <div className="row-blob" />
        <span className="row-initials">{initials(title.title)}</span>
      </div>
      <div className="row-content">
        <div className="row-title-line">
          <div className="row-title">{title.title}</div>
          <button
            type="button"
            className={'row-save' + (saved ? ' is-saved' : '')}
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave();
            }}
            aria-label={saved ? `Remove ${title.title} from My list` : `Save ${title.title} to My list`}
            aria-pressed={saved}
          >
            {saved ? '★' : '☆'}
          </button>
        </div>
        <div className="row-meta">
          {title.year} · {title.runtime}
        </div>
        <div className="row-providers" onClick={(e) => e.stopPropagation()}>
          {title.providers.map((p) => (
            <ProviderChip key={p} name={p} variant="row" title={title.title} />
          ))}
          {title.free && <span className="row-free-badge">FREE</span>}
        </div>
      </div>
    </article>
  );
}
