import { useMemo, useState } from 'react';
import { CATEGORIES, FILTERS, TOTAL_TITLES, matchesFilter } from './data.js';
import Sidebar from './components/Sidebar.jsx';
import MobileHeader from './components/MobileHeader.jsx';
import Hero from './components/Hero.jsx';
import EmptyState from './components/EmptyState.jsx';
import TitleCard from './components/TitleCard.jsx';
import TitleRow from './components/TitleRow.jsx';

export default function App() {
  const [category, setCategory] = useState('All');
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [saved, setSaved] = useState({});

  const toggleSave = (title) => {
    setSaved((s) => ({ ...s, [title]: !s[title] }));
  };

  const navItems = useMemo(
    () => [
      { key: 'All', name: 'All categories', ramp: 'var(--color-text)', count: TOTAL_TITLES },
      ...CATEGORIES.map((c) => ({ key: c.name, name: c.name, ramp: c.ramp, count: c.titles.length })),
    ],
    []
  );

  const visibleCategories = useMemo(() => {
    return CATEGORIES.map((c, categoryIndex) => {
      if (category !== 'All' && category !== c.name) return null;
      const titles = c.titles.filter((t) => matchesFilter(t, filter, query));
      if (!titles.length) return null;
      return { ...c, categoryIndex, titles };
    }).filter(Boolean);
  }, [category, filter, query]);

  const savedCount = Object.values(saved).filter(Boolean).length;
  const savedLine = savedCount
    ? `${savedCount} ${savedCount === 1 ? 'title saved — tap a star to add more.' : 'titles saved across 4 services.'}`
    : 'Star anything to keep it here. Nothing saved yet.';

  const isEmpty = visibleCategories.length === 0;

  return (
    <div className="app">
      <Sidebar navItems={navItems} activeCategory={category} onSelectCategory={setCategory} savedLine={savedLine} />

      <main className="desktop-shell">
        <div className="topbar">
          <div className="topbar-row">
            <div className="search-wrap">
              <input
                className="search-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${TOTAL_TITLES} documentaries…`}
              />
              <span className="search-icon">⌕</span>
            </div>
            <div className="filters">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={'filter-btn' + (f === filter ? ' is-active' : '')}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="content">
          <Hero />

          {visibleCategories.map((c) => (
            <section className="category" key={c.name}>
              <div className="category-head">
                <span
                  className="category-dot"
                  style={{ background: `color-mix(in srgb, ${c.ramp} 55%, var(--color-accent))` }}
                />
                <h3 className="category-name">{c.name}</h3>
                <span className="category-count">
                  {c.titles.length} {c.titles.length === 1 ? 'title' : 'titles'}
                </span>
                <a href="#" className="see-all">
                  See all →
                </a>
              </div>
              <div className="grid">
                {c.titles.map((t) => (
                  <TitleCard
                    key={t.title}
                    title={t}
                    categoryIndex={c.categoryIndex}
                    saved={!!saved[t.title]}
                    onToggleSave={() => toggleSave(t.title)}
                  />
                ))}
              </div>
            </section>
          ))}

          {isEmpty && <EmptyState />}
        </div>
      </main>

      <div className="mobile-shell">
        <MobileHeader
          query={query}
          onSearch={(e) => setQuery(e.target.value)}
          navItems={navItems}
          activeCategory={category}
          onSelectCategory={setCategory}
        />

        <div className="mobile-categories">
          {visibleCategories.map((c) => (
            <div key={c.name}>
              <div className="mobile-category-head">
                <span
                  className="category-dot"
                  style={{ background: `color-mix(in srgb, ${c.ramp} 55%, var(--color-accent))` }}
                />
                <h4>{c.name}</h4>
                <span className="mobile-category-count">
                  {c.titles.length} {c.titles.length === 1 ? 'title' : 'titles'}
                </span>
              </div>
              <div className="row-list">
                {c.titles.map((t) => (
                  <TitleRow
                    key={t.title}
                    title={t}
                    categoryIndex={c.categoryIndex}
                    saved={!!saved[t.title]}
                    onToggleSave={() => toggleSave(t.title)}
                  />
                ))}
              </div>
            </div>
          ))}

          {isEmpty && <EmptyState />}
        </div>
      </div>
    </div>
  );
}
