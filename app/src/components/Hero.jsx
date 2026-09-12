import ProviderChip from './ProviderChip.jsx';
import { PROVIDERS } from '../data.js';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="hero-kicker">Everywhere, in one place</div>
        <h2 className="hero-title">Every documentary. Every service. One page.</h2>
        <p className="hero-desc">
          We don't stream anything. We tell you exactly where it lives — then take you straight to the sign-in.
        </p>
        <div className="hero-providers">
          {Object.keys(PROVIDERS).map((name) => (
            <ProviderChip key={name} name={name} variant="hero" />
          ))}
        </div>
      </div>
      <div className="hero-art">
        <div className="hero-circle-1" />
        <div className="hero-circle-2" />
        <div className="hero-circle-3" />
      </div>
    </div>
  );
}
