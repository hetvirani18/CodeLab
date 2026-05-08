import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

export default function AvatarUpload({ user, onUpdate }) {
  const fileRef = useRef(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image must be under 5 MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      setUploading(true);
      try {
        await onUpdate({ profilePic: reader.result });
        toast.success('Profile picture updated!');
      } catch {
        toast.error('Failed to update picture');
      } finally {
        setUploading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="relative w-20 h-20 shrink-0">
      <img
        src={user?.profilePic?.url || '/avatar.png'}
        alt="avatar"
        className="w-20 h-20 rounded-full object-cover border-2 border-base-content/10"
      />
      <button
        onClick={() => fileRef.current?.click()}
        disabled={uploading}
        className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-base-300 border border-base-content/20
                   flex items-center justify-center hover:bg-base-content/10 transition-colors duration-150"
        title="Change photo"
      >
        {uploading
          ? <span className="loading loading-spinner loading-xs" style={{ width: 12, height: 12 }} />
          : <svg className="w-3 h-3 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6-6 3 3-6 6H9v-3z" />
            </svg>
        }
      </button>
      <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
    </div>
  );
}
