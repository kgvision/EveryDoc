export default function MobileHeader({ query, onSearch, navItems, activeCategory, onSelectCategory }) {
  return (
    <>
      <div className="mobile-header">
        <div className="mobile-brand-row">
          <div className="mobile-logo">e</div>
          <div className="mobile-brand">Everdoc</div>
          <button type="button" className="mobile-star" aria-label="My list">★</button>
        </div>
        <div className="search-wrap">
          <input
            className="search-input"
            value={query}
            onChange={onSearch}
            placeholder="Search documentaries…"
          />
          <span className="search-icon">⌕</span>
        </div>
      </div>

      <div className="chip-scroller">
        {navItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className={'chip' + (item.key === activeCategory ? ' is-active' : '')}
            onClick={() => onSelectCategory(item.key)}
          >
            {item.name}
          </button>
        ))}
      </div>
    </>
  );
}
