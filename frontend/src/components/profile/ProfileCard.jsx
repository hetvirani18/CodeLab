import AvatarUpload from './AvatarUpload';
import StreakBadge from '../StreakBadge';

export default function ProfileCard({ user, streak, todaySolved, totalSolved, onEditName, onUpdateAvatar }) {
  return (
    <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5 flex flex-col items-center text-center gap-3">
      <AvatarUpload user={user} onUpdate={onUpdateAvatar} />

      <div>
        <div className="flex items-center gap-2 justify-center">
          <h2 className="text-lg font-bold">
            {user?.firstName}{user?.lastName ? ` ${user.lastName}` : ''}
          </h2>
          <button
            onClick={onEditName}
            className="p-1 rounded-md hover:bg-base-content/8 text-base-content/30 hover:text-base-content/60 transition-colors duration-150"
            title="Edit name"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-base-content/40 mt-0.5">{user?.emailId}</p>
      </div>

      <div className="w-full h-px bg-base-content/6" />

      <div
        className="w-full rounded-xl border border-base-content/8 bg-base-200/60 p-3 flex items-center justify-between"
        style={{
          borderColor: todaySolved ? 'rgba(251,146,60,0.2)' : undefined,
        }}
      >
        <div className="text-left">
          <p className="font-mono text-[10px] text-base-content/30">day streak</p>
          <p className={`font-mono text-2xl font-bold leading-none ${todaySolved ? 'text-orange-400' : 'text-base-content/25'}`}>
            {streak}
          </p>
        </div>
        <StreakBadge streak={streak} todaySolved={todaySolved} />
      </div>

      <div className="w-full rounded-xl border border-base-content/8 bg-base-200/60 p-3 text-center">
        <p className="font-mono text-3xl font-bold" style={{ color: 'var(--green)' }}>
          {totalSolved}
        </p>
        <p className="font-mono text-[10px] text-base-content/30 mt-0.5">problems solved</p>
      </div>
    </div>
  );
}
