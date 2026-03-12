import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-cream-muted border-t border-[rgba(222,255,0,0.2)] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-electric text-2xl font-display font-bold mb-4">Total Engage</h2>
          <p className="text-sm">Built for Hospitality in MENA.</p>
        </div>
        <div>
          <h3 className="text-cream text-lg mb-4">Platform</h3>
          <ul className="space-y-2 text-sm"><Link className="block hover:text-electric" to="/features">Features</Link><Link className="block hover:text-electric" to="/integrations">Integrations</Link></ul>
        </div>
        <div>
          <h3 className="text-cream text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm"><Link className="block hover:text-electric" to="/about">About</Link><Link className="block hover:text-electric" to="/case-studies">Case Studies</Link><Link className="block hover:text-electric" to="/security">Security</Link></ul>
        </div>
      </div>
      <div className="mt-12 text-center text-sm border-t border-[rgba(255,255,255,0.05)] pt-6">
        © 2025 Total Engage. All rights reserved.
      </div>
    </footer>
  );
}