import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import axiosClient from '../../utils/axiosClient';
import toast from 'react-hot-toast';

const adminSchema = z.object({
  firstName: z.string().min(3, 'Minimum character should be 3'),
  emailId: z.string().email('Invalid Email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export default function CreateAdmin() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(adminSchema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await axiosClient.post('/user/admin/register', data);
      toast.success('Admin created successfully');
      reset();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create admin');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div>
        <p className="font-mono text-xs text-purple-400 uppercase tracking-widest mb-0.5">// admin access</p>
        <h1 className="text-xl font-bold">Create Admin</h1>
        <p className="text-sm text-base-content/35 mt-0.5">Invite a new admin with email and password.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[11px] text-base-content/40 uppercase tracking-widest">First Name</label>
          <input
            type="text"
            placeholder="Alex"
            className={`input bg-base-100 w-full text-sm border transition focus:outline-none focus:border-green-500/50 ${errors.firstName ? 'border-error/60' : 'border-base-content/10'}`}
            {...register('firstName')}
          />
          {errors.firstName && (
            <span className="text-error text-xs font-mono">{errors.firstName.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[11px] text-base-content/40 uppercase tracking-widest">Email</label>
          <input
            type="email"
            placeholder="admin@example.com"
            className={`input bg-base-100 w-full text-sm border transition focus:outline-none focus:border-green-500/50 ${errors.emailId ? 'border-error/60' : 'border-base-content/10'}`}
            {...register('emailId')}
          />
          {errors.emailId && (
            <span className="text-error text-xs font-mono">{errors.emailId.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="font-mono text-[11px] text-base-content/40 uppercase tracking-widest">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className={`input bg-base-100 w-full text-sm border transition focus:outline-none focus:border-green-500/50 ${errors.password ? 'border-error/60' : 'border-base-content/10'}`}
            {...register('password')}
          />
          {errors.password && (
            <span className="text-error text-xs font-mono">{errors.password.message}</span>
          )}
        </div>

        <div className="flex items-center gap-2 pt-2">
          <button
            type="submit"
            disabled={submitting}
            className="btn btn-sm border-none bg-green-400 text-base-300 font-bold disabled:opacity-50"
          >
            {submitting ? <span className="loading loading-spinner loading-xs" /> : 'Create admin'}
          </button>
          <span className="text-xs text-base-content/35">Admins can manage problems and videos.</span>
        </div>
      </form>
    </div>
  );
}
