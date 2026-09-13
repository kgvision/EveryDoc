import { useEffect } from 'react';
import ProviderChip from './ProviderChip.jsx';
import { posterVar } from './TitleCard.jsx';
import { initials, posterImage } from '../data.js';

export default function DetailOverlay({ categoryName, categoryIndex, title, related, saved, onToggleSave, onClose, onSelectRelated }) {
  const photo = posterImage(title.title);
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
        <div className="detail-hero" style={{ background: photo ? 'var(--color-surface)' : posterVar(categoryIndex, title.year) }}>
          {photo ? (
            <img className="detail-hero-photo" src={photo} alt="" loading="lazy" />
          ) : (
            <>
              <div className="detail-blob" />
              <div className="detail-blob2" />
            </>
          )}
          <div className="detail-scrim" />
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
                <ProviderChip key={p} name={p} variant="card" title={title.title} />
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <div className="watch-label">More in {categoryName}</div>
              <div className="related-scroll">
                {related.map((t) => {
                  const relatedPhoto = posterImage(t.title);
                  return (
                    <button type="button" key={t.title} className="related-tile" onClick={() => onSelectRelated(t)}>
                      <div className="related-poster" style={{ background: relatedPhoto ? 'var(--color-surface)' : posterVar(categoryIndex, t.year) }}>
                        {relatedPhoto ? (
                          <img className="related-poster-photo" src={relatedPhoto} alt="" loading="lazy" />
                        ) : (
                          <span className="related-initials">{initials(t.title)}</span>
                        )}
                      </div>
                      <div className="related-title">{t.title}</div>
                      <div className="related-meta">
                        {t.year} · {t.runtime}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
