import React from 'react';
import { Plus, Edit, Trash2, Video } from 'lucide-react';
import { NavLink, useLocation } from 'react-router';
import Navbar from '../components/Navbar';
import CreateProblem from '../components/CreateProblem';
import UpdateProblem from '../components/UpdateProblem';
import DeleteProblem from '../components/DeleteProblem';
import AdminVideo from '../components/AdminVideo';

function Admin() {
  const location = useLocation();
  const activeId = location.pathname.split('/')[2] || 'create';

  const adminOptions = [
    {
      id: 'create',
      title: 'Create Problem',
      description: 'Add a new coding problem to the platform',
      icon: Plus,
      color: 'btn-success',
      bgColor: 'bg-success/10',
      route: '/admin/create'
    },
    {
      id: 'update',
      title: 'Update Problem',
      description: 'Edit existing problems and their details',
      icon: Edit,
      color: 'btn-warning',
      bgColor: 'bg-warning/10',
      route: '/admin/update'
    },
    {
      id: 'delete',
      title: 'Delete Problem',
      description: 'Remove problems from the platform',
      icon: Trash2,
      color: 'btn-error',
      bgColor: 'bg-error/10',
      route: '/admin/delete'
    },
    {
      id: 'video',
      title: 'Video Problem',
      description: 'Uploade or Delete videos',
      icon: Video,
      color: 'btn-success',
      bgColor: 'bg-success/10',
      route: '/admin/video'
    }
  ];

  const ActivePanel =
    activeId === 'update' ? UpdateProblem :
    activeId === 'delete' ? DeleteProblem :
    activeId === 'video'  ? AdminVideo :
    CreateProblem;

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Sub navbar */}
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-base-content/10 bg-base-100 p-2 mb-6">
            {adminOptions.map((option) => {
              const IconComponent = option.icon;
              const isActive = activeId === option.id;
              return (
                <NavLink
                  key={option.id}
                  to={option.route}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-150
                    ${isActive
                      ? 'bg-green-500/10 text-green-400 border border-green-500/25'
                      : 'text-base-content/60 hover:text-base-content/90 hover:bg-base-200'
                    }`}
                >
                  <IconComponent size={16} />
                  {option.title}
                </NavLink>
              );
            })}
          </div>

          <div className="rounded-xl border border-base-content/10 bg-base-100 p-4">
            <ActivePanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;