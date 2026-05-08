import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserActivity } from '../store/activitySlice';
import { fetchSolvedProblems } from '../store/problemSlice';
import { updateProfile } from '../store/authSlice';
import Navbar from '../components/Navbar';
import ProfileCard from '../components/profile/ProfileCard';
import DifficultyBreakdown from '../components/profile/DifficultyBreakdown';
import YearHeatmap from '../components/profile/YearHeatmap';
import RecentSubmissions from '../components/profile/RecentSubmissions';
import EditNameModal from '../components/profile/EditNameModal';

// ─────────────────────────────────────────
// Main Profile page
// ─────────────────────────────────────────
export default function Profile() {
  const dispatch = useDispatch();
  const { user }      = useSelector((s) => s.auth);
  const { heatmap, streak, todaySolved, totalSolved } = useSelector((s) => s.activity);
  const { solvedList } = useSelector((s) => s.problems);

  const [editOpen, setEditOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchUserActivity());
    dispatch(fetchSolvedProblems());
  }, [dispatch]);

  const handleUpdate = (data) => dispatch(updateProfile(data)).unwrap();

  const difficultyCounts = solvedList.reduce(
    (acc, problem) => {
      const diff = (problem?.difficulty || '').toLowerCase();
      if (diff === 'easy') acc.easy += 1;
      else if (diff === 'medium') acc.medium += 1;
      else if (diff === 'hard') acc.hard += 1;
      return acc;
    },
    { easy: 0, medium: 0, hard: 0 }
  );

  const easyCount = difficultyCounts.easy;
  const mediumCount = difficultyCounts.medium;
  const hardCount = difficultyCounts.hard;

  return (
    <div className="min-h-screen bg-base-300">
      <Navbar />

      {editOpen && (
        <EditNameModal
          user={user}
          onSave={handleUpdate}
          onClose={() => setEditOpen(false)}
        />
      )}

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-50 blur-[120px] pointer-events-none"
        style={{ background: 'rgba(0,230,118,0.04)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
            <ProfileCard
              user={user}
              streak={streak}
              todaySolved={todaySolved}
              totalSolved={totalSolved}
              onEditName={() => setEditOpen(true)}
              onUpdateAvatar={handleUpdate}
            />
            <DifficultyBreakdown
              easyCount={easyCount}
              mediumCount={mediumCount}
              hardCount={hardCount}
              totalSolved={totalSolved}
            />
          </div>

          <div className="w-full min-w-0 flex flex-col gap-5">
            <YearHeatmap heatmap={heatmap} />

            <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-mono text-xs text-base-content/30 uppercase tracking-widest mb-0.5">Recent Activity</p>
                  <p className="text-sm font-semibold">Recent Submissions</p>
                </div>
              </div>
              <div className="max-h-105 overflow-y-auto pr-1">
                <RecentSubmissions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}