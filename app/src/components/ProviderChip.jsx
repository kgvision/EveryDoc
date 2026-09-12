import { PROVIDERS } from '../data.js';

// A "watch on <service>" link that opens the real sign-in page for that
// provider. `variant` picks the sizing that matches where it's used.
export default function ProviderChip({ name, variant = 'card' }) {
  const provider = PROVIDERS[name];
  const className =
    variant === 'hero' ? 'hero-provider' : variant === 'row' ? 'row-provider-chip' : 'provider-chip';
  const showDot = variant !== 'hero';
  return (
    <a href={provider.url} target="_blank" rel="noopener" className={className}>
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
