import './ResetPasswordPage.css';
﻿import React from 'react';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col font-display">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900">
          <Link to="/" className="flex items-center gap-4 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg">
              <span className="material-symbols-outlined text-primary">shield_lock</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">ReqMaster</h2>
          </Link>
        </header>
        <main className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-8 pb-0">
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-primary/5 border border-primary/10">
                  <span className="material-symbols-outlined text-primary text-4xl">lock_reset</span>
                </div>
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-slate-900 dark:text-slate-100 text-3xl font-black leading-tight tracking-tight">Reset Password</h1>
                <p className="text-slate-500 dark:text-slate-400 text-base font-normal">Please enter your new password to regain access to your account.</p>
              </div>
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <label className="block">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 block">New Password</span>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-slate-400">lock</span>
                    <input className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 outline-none" placeholder="Enter at least 8 characters" type="password"/>
                    <button className="absolute right-3 flex items-center text-slate-400 hover:text-slate-600" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </label>
              </div>
              <div className="space-y-2">
                <label className="block">
                  <span className="text-slate-700 dark:text-slate-300 text-sm font-semibold mb-2 block">Confirm New Password</span>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-slate-400">check_circle</span>
                    <input className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-slate-400 outline-none" placeholder="Repeat your new password" type="password"/>
                    <button className="absolute right-3 flex items-center text-slate-400 hover:text-slate-600" type="button">
                      <span className="material-symbols-outlined">visibility</span>
                    </button>
                  </div>
                </label>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <h4 className="text-primary text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">info</span>
                  Password Requirements
                </h4>
                <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-green-500">check</span>
                    At least 8 characters long
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-green-500">check</span>
                    Must include a number or special character
                  </li>
                </ul>
              </div>
              <div className="pt-2">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">key</span>
                  <span>Reset Password</span>
                </button>
              </div>
              <div className="text-center">
                <Link to="/login" className="text-primary hover:underline text-sm font-medium flex items-center justify-center gap-1 group">
                  <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
                  Back to Sign In
                </Link>
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 p-4 flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 text-xs">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              Secured by Enterprise Shield Encryption
            </div>
          </div>
        </main>
        <footer className="py-8 px-6 text-center text-slate-400 dark:text-slate-500 text-sm">
          <p>Â© 2024 ReqMaster. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link className="hover:text-primary transition-colors" to="#">Privacy Policy</Link>
            <Link className="hover:text-primary transition-colors" to="#">Terms of Service</Link>
            <Link className="hover:text-primary transition-colors" to="#">Contact Support</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ResetPasswordPage;

