import './PaymentCheckoutPage.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/layout/DashboardLayout';

const PaymentCheckoutPage = () => {
  const navigate = useNavigate();
  return (
    <DashboardLayout>
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
<div className="lg:col-span-7 flex flex-col gap-8">
<div>
<h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight mb-2">Payment Details</h1>
<p className="text-slate-500 dark:text-slate-400 text-base">Complete your purchase by providing your billing and payment information.</p>
</div>
<section className="flex flex-col gap-6">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">person</span>
                                Billing Information
                            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
<input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
<input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="john@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2 md:col-span-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Street Address</label>
<input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="123 Modern Ave" type="text"/>
</div>
</div>
</section>
<section className="flex flex-col gap-6">
<h3 className="text-lg font-bold flex items-center gap-2">
<span className="material-symbols-outlined text-primary">payments</span>
                                Payment Method
                            </h3>
<div className="grid grid-cols-3 gap-4">
<label className="cursor-pointer">
<input defaultChecked className="peer hidden" name="payment" type="radio"/>
<div className="flex flex-col items-center justify-center p-4 border-2 rounded-xl border-slate-200 dark:border-slate-700 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
<span className="material-symbols-outlined mb-1">credit_card</span>
<span className="text-xs font-bold">Card</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="payment" type="radio"/>
<div className="flex flex-col items-center justify-center p-4 border-2 rounded-xl border-slate-200 dark:border-slate-700 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
<span className="material-symbols-outlined mb-1">account_balance</span>
<span className="text-xs font-bold">PayPal</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer hidden" name="payment" type="radio"/>
<div className="flex flex-col items-center justify-center p-4 border-2 rounded-xl border-slate-200 dark:border-slate-700 peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
<span className="material-symbols-outlined mb-1">token</span>
<span className="text-xs font-bold">Stripe</span>
</div>
</label>
</div>
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl shadow-sm space-y-4">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Card Number</label>
<div className="relative">
<input className="w-full rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary pl-4 pr-12" placeholder="0000 0000 0000 0000" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
<span className="material-symbols-outlined text-slate-400">contactless</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">Expiry Date</label>
<input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="MM/YY" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-700 dark:text-slate-300">CVV</label>
<input className="rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="123" type="text"/>
</div>
</div>
</div>
</section>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button onClick={() => navigate('/payment-history')} className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">lock</span>
                                Pay $9.00 Now
                            </button>
<button onClick={() => navigate('/pricing')} className="flex-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold py-3 px-6 rounded-lg transition-all">
                                Cancel
                            </button>
</div>
<div className="flex flex-col items-center gap-2 pt-6">
<div className="flex items-center gap-4 text-slate-400">
<span className="material-symbols-outlined text-4xl">verified_user</span>
<div className="text-xs uppercase tracking-widest font-bold">Secure payment powered by Stripe</div>
</div>
<p className="text-[10px] text-slate-400 text-center max-w-xs">Your payment information is encrypted and never stored on our servers. 256-bit SSL encryption secured.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="sticky top-24">
<div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
<div className="p-6 border-b border-slate-100 dark:border-slate-800">
<h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold">Order Summary</h2>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center gap-4">
<div className="size-20 bg-primary/10 rounded-lg flex items-center justify-center text-primary overflow-hidden">
<div className="w-full h-full bg-cover bg-center" alt="Blue abstract icon for pro plan" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBx4L6qVC2vspQ0epryTI2lP0MFKBcZWgngsWPUmnphtPtC94ia0U4u5Jnuf10Tvj21OmrF7V3FG6qChGbvbR6UylKEQYEQ0kngcyMV7yQcCiGBYDRTezptyJHkeoZrQSkrysP8JkPNy8okGzOlwxZbaOvxcIA5oV8XfpGh_zdVMb-p9Fa57h9trPtCgtd3wmh14pl6Sg46lcOvQO_m24s0LLkwlgQbELRdpOGa32wOKCGD59Mb8Hfon-QaHu7jcUVZmY4kAAq1Lrw")`}}></div>
</div>
<div className="flex-1">
<p className="text-slate-900 dark:text-slate-100 font-bold">Pro Plan</p>
<p className="text-slate-500 text-sm">Monthly Billing</p>
</div>
<div className="text-right">
<p className="text-slate-900 dark:text-slate-100 font-bold">$9.00</p>
</div>
</div>
<div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">
<div className="flex justify-between text-sm">
<span className="text-slate-500">Subtotal</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">$9.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-slate-500">Tax</span>
<span className="text-slate-900 dark:text-slate-100 font-medium">$0.00</span>
</div>
<div className="flex justify-between text-lg font-black pt-4 border-t border-slate-100 dark:border-slate-800">
<span className="text-slate-900 dark:text-slate-100">Total</span>
<span className="text-primary">$9.00</span>
</div>
</div>
<div className="bg-background-light dark:bg-slate-800/50 p-4 rounded-lg">
<p className="text-xs text-slate-500 leading-relaxed italic">"The Pro plan unlocks advanced analytics, unlimited projects, and 24/7 priority support."</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
<span className="material-symbols-outlined">shield</span>
<span className="text-xs font-medium">30-Day Money Back Guarantee</span>
</div>
</div>
</div>
</div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentCheckoutPage;
