import { useState } from 'react';
import toast from 'react-hot-toast';

export default function EditNameModal({ user, onSave, onClose }) {
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!firstName.trim()) return;
    setSaving(true);
    try {
      await onSave({ firstName: firstName.trim(), lastName: lastName.trim() });
      toast.success('Profile updated!');
      onClose();
    } catch {
      toast.error('Failed to update profile');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className="relative z-10 w-full max-w-sm rounded-2xl border border-base-content/10 bg-base-200 p-6"
        style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold">Edit Profile</h3>
            <p className="text-xs text-base-content/45 mt-0.5">Update your name details</p>
          </div>
          <button
            onClick={onClose}
            className="btn btn-ghost btn-xs text-base-content/50 hover:text-base-content"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-base-content/35 uppercase tracking-widest">First Name</label>
            <input
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              placeholder="First name"
              className="input bg-base-300 w-full text-sm border border-base-content/10 focus:outline-none focus:border-green-500/50"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-mono text-[11px] text-base-content/35 uppercase tracking-widest">Last Name</label>
            <input
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              placeholder="Last name"
              className="input bg-base-300 w-full text-sm border border-base-content/10 focus:outline-none focus:border-green-500/50"
            />
          </div>
        </div>

        <div className="w-full h-px bg-base-content/6 my-5" />
        <div className="flex gap-2 mt-5">
          <button onClick={onClose} className="flex-1 btn btn-ghost border border-base-content/10 font-mono text-xs">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex-1 btn font-bold text-base-300 border-none disabled:opacity-50 bg-green-500 font-mono text-xs"
          >
            {saving ? <span className="loading loading-spinner loading-xs" /> : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
