import { PROVIDERS } from '../data.js';

// A "watch on <service>" link. Pass `title` to deep-link into that
// service's search results for this documentary; omit it (as the hero's
// "browse all services" row does) to fall back to a generic entry point.
export default function ProviderChip({ name, variant = 'card', title }) {
  const provider = PROVIDERS[name];
  const href = title ? provider.search(title) : provider.home;
  const className =
    variant === 'hero' ? 'hero-provider' : variant === 'row' ? 'row-provider-chip' : 'provider-chip';
  const showDot = variant !== 'hero';
  return (
    <a href={href} target="_blank" rel="noopener" className={className}>
      {showDot && (
        <span
          className="provider-dot"
          style={{ background: `color-mix(in srgb, ${provider.hex} 62%, var(--color-text))` }}
        />
      )}
      {name}
    </a>
  );
}
