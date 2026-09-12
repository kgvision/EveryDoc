import ProviderChip from './ProviderChip.jsx';
import { initials } from '../data.js';

export function posterVar(categoryIndex, year) {
  return `var(--poster-${((categoryIndex + year) % 4) + 1})`;
}

export default function TitleCard({ title, categoryIndex, saved, onToggleSave }) {
  return (
    <article className="card">
      <div className="card-poster" style={{ background: posterVar(categoryIndex, title.year) }}>
        <div className="card-blob" />
        <div className="card-blob2" />
        <div className="card-title-text">{title.title}</div>
        <div className="card-badges">
          {title.free && <span className="free-badge">Free with ads</span>}
        </div>
        <button
          type="button"
          className={'save-btn' + (saved ? ' is-saved' : '')}
          onClick={onToggleSave}
          aria-label={saved ? `Remove ${title.title} from My list` : `Save ${title.title} to My list`}
          aria-pressed={saved}
          title={initials(title.title)}
        >
          {saved ? '★' : '☆'}
        </button>
      </div>
      <div className="card-body">
        <div className="card-meta">
          {title.year} · {title.runtime}
        </div>
        <p className="card-synopsis">{title.synopsis}</p>
        <div className="card-watch">
          <div className="watch-label">Watch on</div>
          <div className="watch-list">
            {title.providers.map((p) => (
              <ProviderChip key={p} name={p} variant="card" />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
