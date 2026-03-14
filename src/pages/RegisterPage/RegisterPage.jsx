import './RegisterPage.css';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/authService';
import { AppContext } from '../../context/AppContext';
import { parseApiError, logApiError } from '../../api/apiErrorUtils';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { setJwt, setUser } = useContext(AppContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);

    // Basic validation
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }
    // The termsAccepted validation is removed in the new logic.

    try {
      const resp = await register({
        username,
        password,
        email
      });

      console.log(resp);
      navigate("/login");
    } catch (err) {
      logApiError(err, 'RegisterPage');
      setError(parseApiError(err));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 antialiased relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Header */}
        <header className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-6 md:px-10 py-4 bg-white dark:bg-slate-900">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <div className="size-8 flex items-center justify-center bg-primary text-white rounded-lg">
              <span className="material-symbols-outlined text-xl">assignment_turned_in</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight tracking-tight">ReqMaster</h2>
          </Link>
          <div className="hidden md:block">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex flex-1 items-center justify-center px-4 py-12">
          <div className="w-full max-w-[480px] space-y-8">
            {/* Title Section */}
            <div className="text-center space-y-2">
              <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight">Create your account</h1>
              <p className="text-slate-500 dark:text-slate-400 text-base">Join 10,000+ teams managing requirements with ease.</p>
            </div>
            
            {/* Social Signup */}
            <div className="space-y-4">
              <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3.5 text-slate-700 dark:text-slate-200 font-semibold transition-all hover:bg-slate-50 dark:hover:bg-slate-700">
                <img 
                  alt="Google Logo" 
                  className="h-5 w-5" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkaxt0kEqQQSALIb0Be2Ue9gQz1Q8KCWXrHeSJIcxdAIAWxSipWYRebPtUCwjlQCGee17z8oVxePBphkrLp39x0ESNM1Rm5riAw2OPltmst9Ci0nHss2IDIgP7TqknltRO2SNrq06uqdFSWmF8zscxlpzD3h1vGp_EuZsQYtLolbDbAeCHVAF_2FD4yKqyzoAH99UYfSQFKgAwCgveFAI0VqQ9g0Jef6Wga7Km3Z1sbIAnksMEuv_XDmdljw92s1k8lQLsR-POCcA"
                />
                Sign up with Google
              </button>
              
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
                <span className="mx-4 flex-shrink text-xs font-medium uppercase tracking-wider text-slate-400">Or continue with email</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-800"></div>
              </div>
            </div>
            
            {/* Registration Form */}
            <form className="space-y-5" onSubmit={handleRegister}>
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm font-medium border border-red-200 dark:border-red-800">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Username</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                  <input 
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-12 py-3.5 text-slate-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                    placeholder="Enter your username (3-20 chars)" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    minLength={3}
                    maxLength={20}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Email address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                  <input 
                    className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-12 py-3.5 text-slate-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                    placeholder="name@company.com" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                    <input 
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-12 py-3.5 text-slate-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                      placeholder="Min 8 chars" 
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Confirm Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">verified_user</span>
                    <input 
                      className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-12 py-3.5 text-slate-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" 
                      placeholder="Repeat password" 
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 py-2">
                <input 
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer" 
                  id="terms" 
                  type="checkbox" 
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required 
                />
                <label className="text-sm text-slate-500 dark:text-slate-400" htmlFor="terms">
                    I agree to the <Link className="text-primary hover:underline" to="#">Terms of Service</Link> and <Link className="text-primary hover:underline" to="#">Privacy Policy</Link>.
                </label>
              </div>
              
              <button 
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 rounded-xl bg-primary py-4 text-center font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
            
            <div className="md:hidden text-center">
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-semibold hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
            
            {/* Footer */}
            <footer className="pt-8 text-center">
              <div className="flex justify-center gap-6 text-xs font-medium text-slate-400 uppercase tracking-widest">
                <Link className="hover:text-primary transition-colors" to="#">Help Center</Link>
                <Link className="hover:text-primary transition-colors" to="/srs-editor">Documentation</Link>
                <Link className="hover:text-primary transition-colors" to="/pricing">Pricing</Link>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default RegisterPage;

