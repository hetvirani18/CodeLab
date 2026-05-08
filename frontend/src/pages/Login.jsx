import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, NavLink } from 'react-router';
import { loginUser } from '../store/authSlice';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';
import LiveCode from '../components/LiveCode';
import {fetchUserActivity} from '../store/activitySlice';
import Logo from '../components/Logo';

const loginSchema = z.object({
  emailId: z.string().email('Invalid Email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

const EyeOff = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
  </svg>
);

const EyeOn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        toast.success("Logged in successfully");
        dispatch(fetchUserActivity());
      })
      .catch((err) => toast.error(err?.message || "Login failed"));
  };

  return (
    <div className="min-h-screen flex bg-base-300">
      <LiveCode />

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative overflow-hidden">

        {/* Logo (fixed position) */}
        <NavLink
          to="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-3xl sm:text-4xl font-mono font-bold lg:hidden z-20"
        >
          <Logo size={32} />
          code<span className='text-green-400'>Lab</span>
        </NavLink>

        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 blur-[120px] pointer-events-none"
          style={{ background: 'rgba(0,230,118,0.08)' }}
        />

        {/* Card */}
        <div className="relative z-10 w-full max-w-md">
          <div className="bg-base-200/60 backdrop-blur-xl border border-base-content/20 rounded-2xl p-8 shadow-xl">

            {/* Heading */}
            <div className="mb-10">
              <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
              <p className="text-base-content/40 text-sm">
                Log in to continue your streak.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-base-content/40 uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={`input bg-base-200 w-full text-sm border transition focus:outline-none focus:border-green-500/50
                  ${errors.emailId ? 'border-error/60' : 'border-base-content/10'}`}
                  {...register('emailId')}
                />
                {errors.emailId && (
                  <span className="text-error text-xs font-mono">
                    {errors.emailId.message}
                  </span>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-xs text-base-content/40 uppercase tracking-widest">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className={`input bg-base-200 w-full pr-10 text-sm border transition focus:outline-none focus:border-green-500/50
                    ${errors.password ? 'border-error/60' : 'border-base-content/10'}`}
                    {...register('password')}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-base-content/30 hover:text-green-400"
                  >
                    {showPassword ? <EyeOff /> : <EyeOn />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-error text-xs font-mono">
                    {errors.password.message}
                  </span>
                )}
              </div>

              {/* Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
                className="mt-2 w-full btn font-bold bg-green-400 text-base-300 border-none"
              >
                {loading ? (
                  <span className="loading loading-spinner loading-sm" />
                ) : (
                  'Login →'
                )}
              </motion.button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-base-content/10" />
              <span className="text-xs text-base-content/30">or</span>
              <div className="flex-1 h-px bg-base-content/10" />
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-base-content/40">
              Don't have an account?{' '}
              <NavLink
                to="/signup"
                className="font-semibold hover:opacity-80"
                style={{ color: 'var(--green)' }}
              >
                Sign up free
              </NavLink>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;