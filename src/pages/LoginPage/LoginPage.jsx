import './LoginPage.css';
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from "../../api/authService";
import { setAuthToken } from "../../api/axiosClient";
import { AppContext } from "../../context/AppContext";

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { setJwt, setUser } = useContext(AppContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    
    try {
      const respData = await login({ username, password });
      
      if (respData && respData.accessToken) {
        setJwt(respData.accessToken);
        setAuthToken(respData.accessToken);
        setUser({
          username: respData.username,
          fullName: respData.fullName,
          email: respData.email
        });
        navigate("/dashboard");
      } else {
        setError('Login failed. No token received.');
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.message || "Login failed");
      } else if (err.request) {
        setError("Server not responding");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-slate-200 dark:border-slate-800">
        
        {/* Left Side: Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* Header/Logo */}
          <div className="flex items-center gap-3 mb-10">
            <Link to="/" className="bg-primary p-2 rounded-lg cursor-pointer hover:bg-primary/90 transition-colors">
              <svg className="size-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
              </svg>
            </Link>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">ReqMaster</h1>
          </div>
          
          {/* Welcome Text */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Welcome back</h2>
            <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in.</p>
          </div>
          
          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mb-6 font-medium">
            <img 
              alt="Google Logo" 
              className="w-5 h-5" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGR8BIjCyCcgqkTVwvZBH1wVLi44Qdfdd3UfTuyV0cTVeZLP3eCLydNGXvuayyfsvjvQfkj_ZtPCMQD_Mvfqyq0ehi05JzE2Xw4E_ptQdzMVTJQmcjQ8GZKlUjEqdyFHHrgnrx5CWfC9tHmsCdGkviZlDYrCqml-Sc9TZ_lct2ToFTDk25c5Q4zSySMlURH-X-TBrtgC6wCUATQCAhGHXZ2LcKexm4T8qyPBhSOuLZlXDAl_0fgKaf1lLiYum4A6d58VjavOgz_Gs"
            />
            Sign in with Google
          </button>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or continue with</span>
            </div>
          </div>
          
          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm font-medium border border-red-200 dark:border-red-800">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Username</label>
              <input 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                placeholder="Enter your username" 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">Password</label>
              <div className="relative">
                <input 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-slate-400" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" type="button">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary cursor-pointer" type="checkbox"/>
                <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200">Remember me</span>
              </label>
              <Link className="text-sm font-semibold text-primary hover:underline" to="/forgot-password">Forgot password?</Link>
            </div>
            <button 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" 
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  Sign In
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </>
              )}
            </button>
          </form>
          
          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account? <Link to="/register" className="font-semibold text-primary hover:underline">Sign up</Link>
          </p>
        </div>
        
        {/* Right Side: Decorative/Branding */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-primary relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          ></div>
          
          <div className="relative z-10">
            <div className="size-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
              <span className="material-symbols-outlined text-white text-3xl">verified_user</span>
            </div>
            <h3 className="text-4xl font-bold text-white mb-4 leading-tight">Master Your Product Requirements</h3>
            <p className="text-primary-100 text-white/80 text-lg">Centralize your workflow, track changes in real-time, and ensure your team stays aligned from concept to launch.</p>
          </div>
          
          <div className="relative z-10">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <div className="flex gap-1 mb-2 text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={`star-${i}`} className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-white font-medium italic mb-4">"ReqMaster has transformed how our engineering and product teams collaborate. It's the source of truth we needed."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img 
                    alt="Testimonial User" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfjAOsDXjkAFkVjLFwM64_OAZFoa1bCGX3YjeZ9Jh4IGWaRSzddDcg5bqDEP6dQHMmSC0eJZ4_4Q8a6L9-BfWmp33etHPPkzjAvTrXyh6GNig8E828qjYkE1I6gu1ZY2z5sUwyQfZnjxChQN36p_e48Gf7O96WdExXVHTR49JElsOE6SiIg2Ysr_XV9fgMldRu9aCRIDLkDVGnhb2jr40oQiTZ08p1eQS5DrQzBGodXwqyJpAP6B9v0WpnUrQ0soyLLM67cFkdO8Y"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">Sarah Jenkins</p>
                  <p className="text-white/60 text-xs uppercase tracking-wider">Product Lead @ TechFlow</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Absolute positioned abstract shapes */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#0d40a6]/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

