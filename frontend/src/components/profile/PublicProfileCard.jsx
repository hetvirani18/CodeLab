export default function PublicProfileCard({ user, streak, todaySolved, totalSolved }) {
  return (
    <div className="rounded-xl border border-base-content/8 bg-base-300/80 p-5 flex flex-col items-center text-center gap-3">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-base-content/10">
        <img
          src={user?.profilePic?.url || '/avatar.png'}
          alt="avatar"
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <h2 className="text-lg font-bold">
          {user?.firstName}{user?.lastName ? ` ${user.lastName}` : ''}
        </h2>
        <p className="text-sm text-base-content/40 mt-0.5">Public profile</p>
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
        <span className="text-orange-400 text-2xl">🔥</span>
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
