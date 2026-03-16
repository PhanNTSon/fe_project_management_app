import './MembershipPlansPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingLayout from '../../components/layout/LandingLayout';

const MembershipPlansPage = () => {
  const navigate = useNavigate();
  const handlePlanAction = (buttonText) => {
    if (buttonText === 'Get Started') navigate('/register');
    else if (buttonText === 'Upgrade Now') navigate('/checkout');
    else navigate('/dashboard');
  };
  const plans = [
    {
      name: "Free", price: "$0", desc: "Perfect for individuals getting started with document management.",
      buttonText: "Get Started", buttonClass: "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700",
      featured: false, featuresLabel: "Included Features:",
      features: [
        { text: "Basic SRS Generation", active: true },
        { text: "1 active project", active: true },
        { text: "Community support", active: true },
        { text: "AI-powered suggestions", active: false },
      ]
    },
    {
      name: "Pro", price: "$9", desc: "Advanced features for power users and small teams.",
      buttonText: "Upgrade Now", buttonClass: "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary/90",
      featured: true, featuresLabel: "Everything in Free, plus:",
      features: [
        { text: "Unlimited projects", active: true },
        { text: "Advanced SRS templates", active: true },
        { text: "AI generation & editing", active: true },
        { text: "Export to PDF/Word/Markdown", active: true },
      ]
    },
    {
      name: "Team", price: "$29", desc: "Collaborative workspace for teams working at scale.",
      buttonText: "Contact Sales", buttonClass: "border-2 border-primary text-primary hover:bg-primary/5",
      featured: false, featuresLabel: "Everything in Pro, plus:",
      features: [
        { text: "Team collaboration tools", active: true },
        { text: "Role-based permissions", active: true },
        { text: "Priority email support", active: true },
        { text: "Custom branding options", active: true },
      ]
    }
  ];

  const faqs = [
    { q: "Can I change plans later?", a: "Yes, you can upgrade or downgrade your plan at any time from your account settings. If you upgrade, the new features will be available immediately." },
    { q: "What is your refund policy?", a: "We offer a 30-day money-back guarantee for all our paid plans. If you're not satisfied, just contact our support team." },
    { q: "Do you offer custom enterprise solutions?", a: "Yes! For teams larger than 50 members or companies requiring specific compliance features, please contact our enterprise team for a custom quote." },
  ];

  return (
    <LandingLayout>
      <div className="px-6 md:px-10 lg:px-40 py-12 md:py-20">
        <div className="mx-auto max-w-[1200px] flex flex-col items-center text-center gap-6 mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full">Membership Plans</span>
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-2xl">
            Choose the right plan for your team
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
            Unlock the full potential of your workflow with our flexible pricing options tailored for every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative flex flex-col gap-8 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow ${plan.featured ? 'border-2 border-solid border-primary bg-white dark:bg-slate-900 shadow-xl shadow-primary/10 md:scale-105 z-10' : 'border border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'}`}>
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-wide">MOST POPULAR</div>
              )}
              <div className="flex flex-col gap-4">
                <h2 className={`text-sm font-bold uppercase tracking-widest ${plan.featured ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}>{plan.name}</h2>
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-900 dark:text-white text-5xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-slate-500 dark:text-slate-400 text-base font-medium">/mo</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm">{plan.desc}</p>
              </div>
              <button onClick={() => handlePlanAction(plan.buttonText)} className={`flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-4 text-sm font-bold transition-all ${plan.buttonClass}`}>
                {plan.buttonText}
              </button>
              <div className="flex flex-col gap-4">
                <p className="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">{plan.featuresLabel}</p>
                <div className="flex flex-col gap-3">
                  {plan.features.map((f, i) => (
                    <div key={i} className={`text-sm font-normal flex gap-3 ${f.active ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 line-through'}`}>
                      <span className={`material-symbols-outlined text-[20px] ${f.active ? 'text-primary' : 'text-slate-300 dark:text-slate-700'}`}>
                        {f.active ? 'check_circle' : 'block'}
                      </span>
                      {f.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col border-y border-slate-200 dark:border-slate-800">
            {faqs.map((faq, i) => (
              <details key={i} className={`group py-4 ${i > 0 ? 'border-t border-slate-200 dark:border-slate-800' : ''}`}>
                <summary className="flex cursor-pointer items-center justify-between gap-6 py-2 list-none">
                  <p className="text-slate-900 dark:text-slate-100 text-base font-semibold">{faq.q}</p>
                  <span className="material-symbols-outlined text-slate-400 group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="overflow-hidden">
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-2 pb-2">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default MembershipPlansPage;
