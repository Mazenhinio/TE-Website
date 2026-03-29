import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white/50 border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 lg:gap-20">
        
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="transition-transform hover:scale-105 mb-8 block">
            <img
              src="/images/Total engage logo neon.png"
              alt="Total Engage"
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed max-w-[200px]">
            The high-performance engagement platform for modern properties. Built for MENA.
          </p>
        </div>

        {/* Platform */}
        <div>
          <h3 className="text-white font-display font-bold mb-8 uppercase text-xs tracking-widest">Platform</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link className="hover:text-electric transition-colors" to="/">Home</Link></li>
            <li><Link className="hover:text-electric transition-colors" to="/contact">Schedule Demo</Link></li>
          </ul>
        </div>

        {/* Solutions 1 */}
        <div>
          <h3 className="text-white font-display font-bold mb-8 uppercase text-xs tracking-widest">Revenue</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link className="hover:text-electric transition-colors" to="/food-beverage">Food & Beverage</Link></li>
            <li><Link className="hover:text-electric transition-colors" to="/rooms-suites">Rooms & Suites</Link></li>
            <li><Link className="hover:text-electric transition-colors" to="/wellness-spa">Wellness & Spa</Link></li>
            <li><Link className="hover:text-electric transition-colors" to="/weddings-events">Weddings & Events</Link></li>
          </ul>
        </div>

        {/* Solutions 2 */}
        <div>
          <h3 className="text-white font-display font-bold mb-8 uppercase text-xs tracking-widest">Operations</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link className="hover:text-electric transition-colors" to="/kids-club">Kids Club</Link></li>
            <li><Link className="hover:text-electric transition-colors" to="/loyalty-retention">Loyalty & Retention</Link></li>
            <li><Link className="hover:text-electric transition-colors" to="/reviews-reputation">Reviews & Reputation</Link></li>
          </ul>
        </div>

        {/* Policy */}
        <div>
          <h3 className="text-white font-display font-bold mb-8 uppercase text-xs tracking-widest">Corporate</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li><Link className="hover:text-electric transition-colors" to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest opacity-30 font-bold">
        <span>©Total Engage 2025. Tech Tactics LLC. All Rights Reserved.</span>
      </div>
    </footer>
  );
}