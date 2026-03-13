import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 text-primary mb-6">
              <div className="size-6 bg-primary rounded flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xs">account_tree</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold">ReqMaster</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">The modern platform for requirements engineering and software specification management.</p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined text-sm">groups</span>
              </a>
            </div>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-400">Product</h5>
            <ul className="space-y-4 text-sm">
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/features">Features</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/integrations">Integrations</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/pricing">Pricing</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/changelog">Changelog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-400">Resources</h5>
            <ul className="space-y-4 text-sm">
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/documentation">Documentation</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/guides">Guides</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/api">API Reference</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/community">Community</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-400">Company</h5>
            <ul className="space-y-4 text-sm">
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/about">About Us</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/careers">Careers</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/legal">Legal</Link></li>
              <li><Link className="text-slate-600 dark:text-slate-400 hover:text-primary" to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 ReqMaster Systems Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
            <a className="hover:text-primary" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
