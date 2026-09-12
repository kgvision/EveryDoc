export default function Sidebar({ navItems, activeCategory, onSelectCategory, savedLine, collapsed, onToggleCollapsed }) {
  return (
    <aside className={'sidebar' + (collapsed ? ' is-collapsed' : '')}>
      <div className="brand-row">
        <div className="brand-logo">e</div>
        {!collapsed && <div className="brand-name">Everdoc</div>}
        <button
          type="button"
          className="sidebar-toggle"
          onClick={onToggleCollapsed}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? '»' : '«'}
        </button>
      </div>

      <div className="nav-section">
        {!collapsed && <div className="nav-label">Browse</div>}
        {navItems.map((item) => {
          const isActive = item.key === activeCategory;
          return (
            <button
              key={item.key}
              type="button"
              className={'nav-item' + (isActive ? ' is-active' : '')}
              onClick={() => onSelectCategory(item.key)}
              title={item.name}
            >
              <span className="nav-dot" style={{ background: isActive ? 'var(--color-bg)' : `color-mix(in srgb, ${item.ramp} 55%, var(--color-accent))` }} />
              {!collapsed && (
                <>
                  <span className="nav-item-name">{item.name}</span>
                  <span className="nav-item-count">{item.count}</span>
                </>
              )}
            </button>
          );
        })}
      </div>

      <div className="mylist-panel" title={collapsed ? savedLine : undefined}>
        <div className="mylist-head">
          <div className="mylist-icon">★</div>
          {!collapsed && <div className="mylist-title">My list</div>}
        </div>
        {!collapsed && <div className="mylist-line">{savedLine}</div>}
      </div>
    </aside>
  );
}
