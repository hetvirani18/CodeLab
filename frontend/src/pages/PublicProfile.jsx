import { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router';
import Navbar from '../components/Navbar';
import YearHeatmap from '../components/profile/YearHeatmap';
import DifficultyBreakdown from '../components/profile/DifficultyBreakdown';
import RecentSubmissions from '../components/profile/RecentSubmissions';
import PublicProfileCard from '../components/profile/PublicProfileCard';
import axiosClient from '../utils/axiosClient';

export default function PublicProfile() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError(null);

    axiosClient.get(`/user/public-profile/${id}`)
      .then(({ data: response }) => {
        if (!active) return;
        setData(response);
      })
      .catch(() => {
        if (!active) return;
        setError('Profile not found');
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => { active = false; };
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <div className="min-h-[60vh] flex items-center justify-center">
          <span className="loading loading-spinner loading-lg" style={{ color: 'var(--green)' }} />
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-base-300">
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-base-content/60">{error || 'Profile not found'}</p>
          <NavLink to="/" className="btn btn-sm border border-base-content/10">
            Back to home
          </NavLink>
        </div>
      </div>
    );
  }

  const { user, activity, difficulty, recentSubmissions } = data;

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 blur-[120px] pointer-events-none"
        style={{ background: 'rgba(0,230,118,0.04)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
            <PublicProfileCard
              user={user}
              streak={activity?.streak || 0}
              todaySolved={activity?.todaySolved}
              totalSolved={activity?.totalSolved || 0}
            />
            <DifficultyBreakdown
              easyCount={difficulty?.easy || 0}
              mediumCount={difficulty?.medium || 0}
              hardCount={difficulty?.hard || 0}
              totalSolved={activity?.totalSolved || 0}
            />
          </div>

          <div className="w-full min-w-0 flex flex-col gap-5">
            <YearHeatmap heatmap={activity?.heatmap || {}} />

            <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest mb-0.5">Recent Activity</p>
                  <p className="text-sm font-semibold">Recent Submissions</p>
                </div>
              </div>
              <RecentSubmissions items={recentSubmissions || []} loading={false} error={null} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
