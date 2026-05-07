import { useState } from 'react';
import { useParams, NavLink, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import axiosClient from '../../utils/axiosClient';
import toast from 'react-hot-toast';

const fmt = {
  size: (bytes) => {
    if (!bytes) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
  },
  duration: (s) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  },
  date: (d) => new Date(d).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
};

export default function VideoUpload() {
  const { problemId } = useParams();
  const navigate = useNavigate();

  const [uploading,       setUploading]       = useState(false);
  const [progress,        setProgress]        = useState(0);
  const [uploadedVideo,   setUploadedVideo]   = useState(null);
  const [dragOver,        setDragOver]        = useState(false);

  const { register, handleSubmit, watch, formState: { errors }, reset, setError, clearErrors, setValue } = useForm();

  const selectedFile = watch('videoFile')?.[0];

  const onSubmit = async (data) => {
    const file = data.videoFile[0];
    setUploading(true);
    setProgress(0);
    clearErrors();

    try {
      // Step 1 — get Cloudinary signature
      const { data: sigData } = await axiosClient.get(`/video/create/${problemId}`);
      const { signature, timestamp, public_id, api_key, upload_url } = sigData;

      // Step 2 — upload to Cloudinary
      const formData = new FormData();
      formData.append('file', file);
      formData.append('signature', signature);
      formData.append('timestamp', timestamp);
      formData.append('public_id', public_id);
      formData.append('api_key', api_key);

      const { data: cloudData } = await axios.post(upload_url, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (e) => setProgress(Math.round((e.loaded * 100) / e.total)),
      });

      // Step 3 — save metadata
      const { data: meta } = await axiosClient.post('/video/save', {
        problemId,
        cloudinaryPublicId: cloudData.public_id,
        secureUrl:          cloudData.secure_url,
        duration:           cloudData.duration,
      });

      setUploadedVideo(meta.videoSolution);
      toast.success('Video uploaded successfully!');
      reset();
    } catch (err) {
      const msg = err.response?.data?.message || 'Upload failed. Please try again.';
      setError('root', { type: 'manual', message: msg });
      toast.error(msg);
    } finally {
      setUploading(false);
      setProgress(0);
    }
  };

  // Drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      const dt = new DataTransfer();
      dt.items.add(file);
      setValue('videoFile', dt.files, { shouldValidate: true });
    }
  };

  return (
    <div className="flex flex-col gap-5">

      {/* Header with back */}
      <div className="flex items-center gap-3">
        <NavLink
          to="/admin/video"
          className="p-2 rounded-lg border border-base-content/8 hover:bg-base-content/5 text-base-content/40 hover:text-base-content/70 transition-colors duration-150"
          aria-label="Back"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </NavLink>
        <div>
          <p className="font-mono text-xs text-blue-400 uppercase tracking-widest">// editorial upload</p>
          <h1 className="text-xl font-bold">Upload Video</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

        {/* Drop zone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`relative rounded-xl border-2 border-dashed transition-all duration-150 cursor-pointer
            ${dragOver
              ? 'border-blue-500/50 bg-blue-500/5'
              : selectedFile
              ? 'border-green-500/35 bg-green-500/4'
              : 'border-base-content/10 hover:border-base-content/20 hover:bg-base-content/2'
            }`}
          onClick={() => document.getElementById('video-file-input').click()}
        >
          <input
            id="video-file-input"
            type="file"
            accept="video/*"
            className="hidden"
            disabled={uploading}
            {...register('videoFile', {
              required: 'Please select a video file',
              validate: {
                isVideo: (files) => !files?.[0] || files[0].type.startsWith('video/') || 'Please select a valid video file',
                fileSize: (files) => !files?.[0] || files[0].size <= 500 * 1024 * 1024 || 'File must be under 500 MB',
              },
            })}
          />

          <div className="flex flex-col items-center justify-center py-12 px-6 text-center pointer-events-none">
            {selectedFile ? (
              <>
                <div className="text-4xl mb-3">🎬</div>
                <p className="font-semibold text-base-content/80 text-sm mb-1">{selectedFile.name}</p>
                <p className="font-mono text-xs text-base-content/35">{fmt.size(selectedFile.size)}</p>
                <p className="font-mono text-[11px] text-green-400 mt-2">✓ Ready to upload</p>
              </>
            ) : (
              <>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}
                >
                  <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-base-content/60 mb-1">Drop your video here</p>
                <p className="text-xs text-base-content/30">or click to browse · MP4, MOV, AVI · Max 500 MB</p>
              </>
            )}
          </div>
        </div>

        {errors.videoFile && (
          <p className="text-red-400 text-xs font-mono">{errors.videoFile.message}</p>
        )}

        {/* Upload progress */}
        {uploading && (
          <div className="rounded-xl border border-base-content/8 bg-base-200 p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-base-content/50">Uploading to Cloudinary…</span>
              <span className="font-mono text-xs text-blue-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-base-300 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{
                  width: `${progress}%`,
                  background: 'linear-gradient(90deg, #3b82f6, #60a5fa)',
                }}
              />
            </div>
            <p className="font-mono text-[10px] text-base-content/25 mt-2">
              Please don't close this tab until the upload completes.
            </p>
          </div>
        )}

        {/* Root error */}
        {errors.root && (
          <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3">
            <p className="text-red-400 text-sm">{errors.root.message}</p>
          </div>
        )}

        {/* Success card */}
        {uploadedVideo && (
          <div
            className="rounded-xl border border-green-500/20 bg-green-500/5 p-5"
            style={{ boxShadow: '0 0 20px rgba(0,230,118,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✅</span>
              <span className="font-semibold text-green-400">Upload Successful!</span>
            </div>
            <div className="flex gap-6 font-mono text-xs text-base-content/40">
              <span>Duration: <span className="text-base-content/60">{fmt.duration(uploadedVideo.duration)}</span></span>
              <span>Uploaded: <span className="text-base-content/60">{fmt.date(uploadedVideo.uploadedAt)}</span></span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3 pt-1">
          <NavLink
            to="/admin/video"
            className="btn btn-ghost border border-base-content/10 font-mono text-sm"
          >
            ← Back
          </NavLink>
          <button
            type="submit"
            disabled={uploading || !selectedFile}
            className="flex-1 btn font-bold text-white border-none disabled:opacity-40 transition-all duration-150"
            style={{ background: '#3b82f6' }}
            onMouseEnter={e => !uploading && (e.currentTarget.style.boxShadow = '0 0 22px rgba(59,130,246,0.35)')}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {uploading
              ? <><span className="loading loading-spinner loading-sm" /> Uploading {progress}%</>
              : 'Upload Video →'
            }
          </button>
        </div>
      </form>
    </div>
  );
}