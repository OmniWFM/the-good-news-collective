import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold font-display mb-4">The Good News <span className="gradient-text">Collective</span></h3>
            <p className="text-slate-400 leading-relaxed max-w-sm">Making Jesus known through the digital mission field. We believe the Good News is for everyone, everywhere.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Ministries', 'Blog', 'Contact'].map((item) => (
                <li key={item}><Link href={'/' + item.toLowerCase().replace('home', '')} className="text-slate-400 hover:text-amber-400 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              {['Give', 'Pray', 'Share', 'Volunteer'].map((item) => (
                <li key={item}><Link href={'/' + item.toLowerCase()} className="text-slate-400 hover:text-amber-400 transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">&#169; {new Date().getFullYear()} The Good News Collective. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Built with love by <a href="https://treasureadvertising.com" className="hover:text-amber-400" target="_blank">rel="noopener">Treasure Advertising</a></p>
        </div>
      </div>
    </footer>
  );
}