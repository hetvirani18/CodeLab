import { Plus, Edit, Trash2, Video, Shield } from 'lucide-react';
import { NavLink, Outlet, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const ADMIN_TABS = [
  {
    id:          'create',
    label:       'Create Problem',
    description: 'Add a new coding problem',
    icon:        Plus,
    to:          '/admin/create',
    accent:      { text: 'text-green-400',  border: 'border-green-500/25',  bg: 'bg-green-500/8'  },
  },
  {
    id:          'update',
    label:       'Update Problem',
    description: 'Edit existing problems',
    icon:        Edit,
    to:          '/admin/update',
    accent:      { text: 'text-yellow-400', border: 'border-yellow-500/25', bg: 'bg-yellow-500/8' },
  },
  {
    id:          'delete',
    label:       'Delete Problem',
    description: 'Remove problems',
    icon:        Trash2,
    to:          '/admin/delete',
    accent:      { text: 'text-red-400',    border: 'border-red-500/25',    bg: 'bg-red-500/8'    },
  },
  {
    id:          'video',
    label:       'Manage Videos',
    description: 'Upload or delete editorials',
    icon:        Video,
    to:          '/admin/video',
    accent:      { text: 'text-blue-400',   border: 'border-blue-500/25',   bg: 'bg-blue-500/8'   },
  },
];

export default function Admin() {
  const { isAuthenticated, user } = useSelector((s) => s.auth);

  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">

        {/* Page header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <Shield size={16} className="text-green-400" />
            <span className="font-mono text-xs text-green-400 uppercase tracking-widest">Admin Panel</span>
          </div>
          <h1 className="text-2xl font-bold">Manage Platform</h1>
          <p className="text-base-content/40 text-sm mt-0.5">Create, edit, and manage problems and editorial videos.</p>
        </div>

        {/* Subnav */}
        <div className="flex flex-wrap items-center gap-1.5 rounded-xl border border-base-content/8 bg-base-200 p-1.5 mb-6">
          {ADMIN_TABS.map(({ id, label, icon: Icon, to, accent }) => (
            <NavLink
              key={id}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150
                 ${isActive
                   ? `${accent.bg} ${accent.text} border ${accent.border}`
                   : 'text-base-content/50 hover:text-base-content/80 hover:bg-base-content/5 border border-transparent'
                 }`
              }
            >
              <Icon size={15} />
              {label}
            </NavLink>
          ))}
        </div>

        {/* Active panel — rendered by child route */}
        <div className="rounded-xl border border-base-content/8 bg-base-200 p-5 sm:p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}