export default function Sidebar({ navItems, activeCategory, onSelectCategory, savedLine }) {
  return (
    <aside className="sidebar">
      <div className="brand-row">
        <div className="brand-logo">e</div>
        <div className="brand-name">Everdoc</div>
      </div>

      <div className="nav-section">
        <div className="nav-label">Browse</div>
        {navItems.map((item) => {
          const isActive = item.key === activeCategory;
          return (
            <button
              key={item.key}
              type="button"
              className={'nav-item' + (isActive ? ' is-active' : '')}
              onClick={() => onSelectCategory(item.key)}
            >
              <span className="nav-dot" style={{ background: isActive ? 'var(--color-bg)' : `color-mix(in srgb, ${item.ramp} 55%, var(--color-accent))` }} />
              <span className="nav-item-name">{item.name}</span>
              <span className="nav-item-count">{item.count}</span>
            </button>
          );
        })}
      </div>

      <div className="mylist-panel">
        <div className="mylist-head">
          <div className="mylist-icon">★</div>
          <div className="mylist-title">My list</div>
        </div>
        <div className="mylist-line">{savedLine}</div>
      </div>
    </aside>
  );
}
