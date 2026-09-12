import { useEffect } from 'react';
import ProviderChip from './ProviderChip.jsx';
import { posterVar } from './TitleCard.jsx';
import { initials } from '../data.js';

export default function DetailOverlay({ categoryName, categoryIndex, title, related, saved, onToggleSave, onClose, onSelectRelated }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="detail-backdrop" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={title.title}>
        <div className="detail-hero" style={{ background: posterVar(categoryIndex, title.year) }}>
          <div className="detail-blob" />
          <div className="detail-blob2" />
          <button type="button" className="detail-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <button
            type="button"
            className={'detail-save' + (saved ? ' is-saved' : '')}
            onClick={onToggleSave}
            aria-label={saved ? `Remove ${title.title} from My list` : `Save ${title.title} to My list`}
            aria-pressed={saved}
          >
            {saved ? '★' : '☆'}
          </button>
          <div className="detail-category">{categoryName}</div>
          <h2 className="detail-title">{title.title}</h2>
        </div>

        <div className="detail-body">
          <div className="detail-meta-row">
            <span className="detail-meta">
              {title.year} · {title.runtime}
            </span>
            {title.free && <span className="free-badge">Free with ads</span>}
          </div>

          <p className="detail-synopsis">{title.synopsis}</p>

          <div>
            <div className="watch-label">Watch on</div>
            <div className="watch-list watch-list-detail">
              {title.providers.map((p) => (
                <ProviderChip key={p} name={p} variant="card" />
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <div className="watch-label">More in {categoryName}</div>
              <div className="related-scroll">
                {related.map((t) => (
                  <button type="button" key={t.title} className="related-tile" onClick={() => onSelectRelated(t)}>
                    <div className="related-poster" style={{ background: posterVar(categoryIndex, t.year) }}>
                      <span className="related-initials">{initials(t.title)}</span>
                    </div>
                    <div className="related-title">{t.title}</div>
                    <div className="related-meta">
                      {t.year} · {t.runtime}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
