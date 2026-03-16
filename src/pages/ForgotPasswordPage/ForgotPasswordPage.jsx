import './ForgotPasswordPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 lg:px-40 py-4 bg-white dark:bg-slate-900">
            <Link to="/" className="flex items-center gap-3 text-primary">
              <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">ReqMaster</h2>
            </Link>
          </header>
          <main className="flex flex-1 items-center justify-center p-4">
            <div className="flex flex-col w-full max-w-[480px] bg-white dark:bg-slate-900 p-8 lg:p-10 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col gap-2 mb-8">
                <div className="size-14 mb-4 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-3xl">lock_reset</span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Forgot password?</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                  No worries, we'll send you reset instructions. Enter the email address associated with your account.
                </p>
              </div>
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-normal">Email address</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                    <input className="flex w-full rounded-lg text-slate-900 dark:text-white border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-primary h-14 pl-12 pr-4 placeholder:text-slate-400 text-base font-normal transition-all outline-none" placeholder="e.g. name@company.com" required type="email"/>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-wide transition-colors shadow-lg shadow-primary/20" type="submit">
                    <span className="truncate">Send reset link</span>
                  </button>
                  <Link to="/login" className="flex w-full items-center justify-center rounded-lg h-12 px-4 bg-transparent text-slate-600 dark:text-slate-400 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-bold leading-normal transition-all group">
                    <span className="material-symbols-outlined text-lg mr-2 transition-transform group-hover:-translate-x-1">arrow_back</span>
                    <span className="truncate">Back to login</span>
                  </Link>
                </div>
              </form>
              <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                <p className="text-slate-500 text-sm">
                  Can't remember your email? <Link className="text-primary font-semibold hover:underline" to="#">Contact Support</Link>
                </p>
              </div>
            </div>
          </main>
          <footer className="p-6 text-center text-slate-400 dark:text-slate-600 text-sm">
            Â© 2024 ReqMaster. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

