import './LandingPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingLayout from '../../components/layout/LandingLayout';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <LandingLayout>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Next-Gen Requirements Engineering
            </div>
            <h1 className="text-slate-900 dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Simplify Your <span className="text-primary">Requirements</span> Management Workflow
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
              Streamline SRS generation, track changes in real-time, and collaborate seamlessly with your engineering team on one unified platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigate('/register')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-primary text-white text-base font-bold transition-all hover:scale-105 shadow-xl shadow-primary/25">
                Start Free Trial
              </button>
              <button onClick={() => navigate('/login')} className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-base font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
                Book a Demo
              </button>
            </div>
            <div className="flex items-center gap-4 text-slate-500 text-sm">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
              </div>
              <span>Trusted by 500+ Engineering Teams</span>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-3xl"></div>
            <div
              className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden aspect-video bg-cover bg-center"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAEQZ77NR8Znr0lKKptHYslF_Fl5jTKmBMZlhV3H2p0PHSuYgcL9UNBqmk5P4VWIV1YvnmZ1EoIgkuRUdnjRiX1T7SuzjWQjFZfZnMId6lXtPzWiTBXv4kjShF_HxN8MVXxFfasTWksMh8S4tffCqu51XK9oUo5Vo9DrqNyBfZzxUBusKEFICvknyfiH-a2NjcTrYuDLzzCXnHLmUPfnl7zaMKLMGTeQvHpV2Fl-O91WUJaTj0GWAihg-8RjezeifXq8ZwquoF3fxQ')" }}
              role="img"
              aria-label="High-fidelity dashboard showing requirement traceability matrix"
            >
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white dark:bg-background-dark py-24 border-y border-slate-200 dark:border-slate-800" id="features">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center gap-4">
            <h2 className="text-primary font-bold text-sm tracking-widest uppercase">Platform Features</h2>
            <h3 className="text-slate-900 dark:text-white text-4xl font-bold">Powerful Features for Modern Teams</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Everything you need to manage complex software requirements from ideation to delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="track_changes"
              title="Requirement Tracking"
              description="Full traceability from high-level goals to low-level implementation tasks with versioning."
            />
            <FeatureCard
              icon="magic_button"
              title="AI SRS Generation"
              description="Leverage AI to generate complete, professional SRS documents from simple project outlines."
            />
            <FeatureCard
              icon="schema"
              title="Smart Diagramming"
              description="Built-in UML and flowchart tools that automatically sync with your requirement changes."
            />
            <FeatureCard
              icon="groups"
              title="Team Collaboration"
              description="Real-time editing, threaded comments, and integrated approval workflows for stakeholders."
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-slate-900 dark:text-white text-3xl font-bold mb-6">A single source of truth for your entire stack</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <h5 className="font-bold">Real-time Dashboard</h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Monitor project health and requirement coverage at a glance.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <div>
                      <h5 className="font-bold">Deep Integrations</h5>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">Connect with Jira, GitHub, Slack and Azure DevOps natively.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div
                  className="rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 bg-white aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGpqOD7s0uDnHVyIn2G2M083Fh-XaR9uKI9bxDqYzS3SbCZZ0L2MkqbU1ggZ34pPdNwXtMfMISxwrtUZW5m7GejK6Zgr12pPH8Q3DSaTn8Q6mJMdmPN-FpaZq2VYNrf3Mfisv2GZXX0j77QbWAnDdqdnDjnCAOB6hG1vflj7UYgKM54xrqgD1EmX-qlvKIqoBwsBePajaHCm1ttvbX78KEXwope9jEDRi7VRIhdc2siNhFVArbUJUcujsF9mhRH7fZnkOq1ArrOSo')" }}
                  aria-label="Screenshot of the project management dashboard with analytics"
                  role="img"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-primary font-bold text-sm tracking-widest uppercase mb-4">The Process</h2>
              <h3 className="text-slate-900 dark:text-white text-4xl font-bold">Go from Idea to Spec in Minutes</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
            <ProcessStep
              number="1"
              icon="upload_file"
              title="Import or Define"
              description="Upload existing documents or use our intuitive editor to define your high-level business goals."
            />
            <ProcessStep
              number="2"
              icon="psychology"
              title="AI Analysis"
              description="Our engine identifies conflicts, checks for consistency, and drafts technical specifications automatically."
            />
            <ProcessStep
              number="3"
              icon="sync"
              title="Export & Sync"
              description="Generate PDF/Word docs or sync your requirements as tickets directly into Jira or GitHub."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build Better Software?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">Join thousands of engineers who use ReqMaster to deliver high-quality software on time and within scope.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/register')} className="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
              Start Free 14-Day Trial
            </button>
            <button onClick={() => navigate('/login')} className="px-8 py-4 bg-primary/20 border border-white/30 text-white rounded-xl font-bold text-lg hover:bg-primary/30 transition-all">
              Contact Sales
            </button>
          </div>
          <p className="mt-8 text-sm opacity-70 italic">No credit card required â€¢ Instant setup</p>
        </div>
      </section>
    </LandingLayout>
  );
};

// Sub-components for better readability
const FeatureCard = ({ icon, title, description }) => (
  <div className="group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-all bg-background-light/50 dark:bg-slate-900/50 hover:shadow-lg">
    <span className="material-symbols-outlined text-primary mb-4 p-3 bg-primary/10 rounded-lg">{icon}</span>
    <h4 className="text-slate-900 dark:text-white text-xl font-bold mb-2">{title}</h4>
    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
  </div>
);

const ProcessStep = ({ number, icon, title, description }) => (
  <div className="flex flex-col gap-6">
    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/30">{number}</div>
    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h4>
    <p className="text-slate-600 dark:text-slate-400">{description}</p>
    <span className="material-symbols-outlined text-6xl text-slate-100 dark:text-slate-800 absolute right-4 top-0 opacity-20">{icon}</span>
  </div>
);

export default LandingPage;
