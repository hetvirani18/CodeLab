import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Editor from '@monaco-editor/react';
import axiosClient from '../../utils/axiosClient';
import toast from 'react-hot-toast';

// ── Schema (same as create) ──
const problemSchema = z.object({
  title:       z.string().min(1, 'Title required'),
  description: z.string().min(1, 'Description required'),
  difficulty:  z.enum(['easy', 'medium', 'hard']),
  tags: z.array(z.enum(['array','string','linkedlist','graph','dp','tree','binary search','sorting','hashing'])).min(1, 'At least one tag required'),
  visibleTestCases: z.array(z.object({
    input:       z.string().min(1),
    output:      z.string().min(1),
    explanation: z.string().min(1),
  })).min(1),
  hiddenTestCases: z.array(z.object({
    input:  z.string().min(1),
    output: z.string().min(1),
  })).min(1),
  startCode: z.array(z.object({
    language:    z.enum(['c++','java','javascript']),
    initialCode: z.string().min(1),
  })).length(3),
  referenceSolution: z.array(z.object({
    language:     z.enum(['c++','java','javascript']),
    completeCode: z.string().min(1),
  })).length(3),
});

// ── Constants ──
const LANGS = [
  { key: 'c++',        label: 'C++',        monaco: 'cpp'        },
  { key: 'java',       label: 'Java',       monaco: 'java'       },
  { key: 'javascript', label: 'JavaScript', monaco: 'javascript' },
];
const ALL_TAGS   = ['array','string','linkedlist','graph','dp','tree','binary search','sorting','hashing'];
const DIFF_STYLES = {
  easy:   'text-green-400  bg-green-500/8   border-green-500/25',
  medium: 'text-yellow-400 bg-yellow-500/8  border-yellow-500/25',
  hard:   'text-red-400    bg-red-500/8     border-red-500/25',
};

// ─────────────────────────────────────────
// Shared UI atoms
// ─────────────────────────────────────────
function Field({ label, error, children, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[11px] text-base-content/40 uppercase tracking-widest">
        {label}{required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {children}
      {error && <span className="text-red-400 text-xs font-mono">{error}</span>}
    </div>
  );
}

function Section({ title, subtitle, children, action }) {
  return (
    <div className="rounded-xl border border-base-content/8 bg-base-100 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-base-content/7">
        <div>
          <h2 className="text-sm font-semibold">{title}</h2>
          {subtitle && <p className="text-xs text-base-content/35 mt-0.5">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────
// Monaco code section with language tabs
// ─────────────────────────────────────────
function CodeSection({ title, subtitle, fieldPrefix, setValue, watch, errors }) {
  const [activeLang, setActiveLang] = useState(0);
  const fieldKey = fieldPrefix === 'startCode' ? 'initialCode' : 'completeCode';

  return (
    <Section title={title} subtitle={subtitle}>
      <div className="flex items-center gap-1 mb-3 bg-base-200 rounded-lg p-1 w-fit border border-base-content/[0.07]">
        {LANGS.map((lang, i) => (
          <button
            key={lang.key}
            type="button"
            onClick={() => setActiveLang(i)}
            className={`px-3 py-1.5 rounded-md font-mono text-xs border transition-colors duration-150
              ${activeLang === i
                ? 'bg-base-300 text-green-400 border-green-500/25'
                : 'border-transparent text-base-content/40 hover:text-base-content/70'
              }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {LANGS.map((lang, i) => (
        <div
          key={lang.key}
          className={`rounded-xl overflow-hidden border border-base-content/8 ${activeLang !== i ? 'hidden' : ''}`}
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
        >
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-base-300 border-b border-base-content/7">
            <span className="w-3 h-3 rounded-full bg-error opacity-60" />
            <span className="w-3 h-3 rounded-full bg-warning opacity-60" />
            <span className="w-3 h-3 rounded-full bg-success opacity-60" />
            <span className="font-mono text-xs text-base-content/30 ml-2">
              {fieldPrefix === 'startCode' ? 'starter' : 'solution'}.{lang.key === 'c++' ? 'cpp' : lang.key === 'javascript' ? 'js' : 'java'}
            </span>
          </div>
          <Editor
            height="220px"
            language={lang.monaco}
            value={watch(`${fieldPrefix}.${i}.${fieldKey}`) || ''}
            onChange={(val) => setValue(`${fieldPrefix}.${i}.${fieldKey}`, val || '', { shouldValidate: true })}
            theme="vs-dark"
            options={{
              fontSize: 13,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              lineNumbers: 'on',
              lineNumbersMinChars: 3,
              glyphMargin: false,
              folding: false,
              padding: { top: 10 },
              scrollbar: { verticalScrollbarSize: 4 },
            }}
          />
        </div>
      ))}

      {errors?.[fieldPrefix]?.[activeLang]?.[fieldKey] && (
        <p className="text-red-400 text-xs font-mono mt-2">
          {errors[fieldPrefix][activeLang][fieldKey].message}
        </p>
      )}
    </Section>
  );
}

// ─────────────────────────────────────────
// Update form (routed)
// ─────────────────────────────────────────
export default function UpdateProblemForm() {
  const { problemId } = useParams();
  const navigate = useNavigate();
  const [fetching,    setFetching]    = useState(true);
  const [submitting,  setSubmitting]  = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const { register, control, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm({
    resolver: zodResolver(problemSchema),
    defaultValues: {
      difficulty: 'easy',
      tags: [],
      startCode: [
        { language: 'c++',        initialCode: '' },
        { language: 'java',       initialCode: '' },
        { language: 'javascript', initialCode: '' },
      ],
      referenceSolution: [
        { language: 'c++',        completeCode: '' },
        { language: 'java',       completeCode: '' },
        { language: 'javascript', completeCode: '' },
      ],
    },
  });

  const { fields: visibleFields, append: appendVisible, remove: removeVisible } = useFieldArray({ control, name: 'visibleTestCases' });
  const { fields: hiddenFields,  append: appendHidden,  remove: removeHidden  } = useFieldArray({ control, name: 'hiddenTestCases'  });

  useEffect(() => {
    if (!problemId) {
      navigate('/admin/update', { replace: true });
    }
  }, [navigate, problemId]);

  // Load problem data
  useEffect(() => {
    if (!problemId) return;

    const load = async () => {
      try {
        const { data } = await axiosClient.get(`/problem/problem-by-id-admin/${problemId}`);

        // Normalise startCode & referenceSolution to match LANGS order
        const normaliseCode = (arr, field) =>
          LANGS.map((lang) => ({
            language:  lang.key,
            [field]: arr?.find((s) => s.language === lang.key)?.[field] || '',
          }));

        const tags = data.tags || [];
        setSelectedTags(tags);

        reset({
          title:       data.title,
          description: data.description,
          difficulty:  data.difficulty,
          tags,
          visibleTestCases: data.visibleTestCases || [],
          hiddenTestCases:  data.hiddenTestCases  || [],
          startCode:         normaliseCode(data.startCode,         'initialCode'),
          referenceSolution: normaliseCode(data.referenceSolution, 'completeCode'),
        });
      } catch {
        toast.error('Failed to load problem');
        navigate('/admin/update');
      } finally {
        setFetching(false);
      }
    };
    load();
  }, [navigate, problemId, reset]);

  const toggleTag = (tag) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(next);
    setValue('tags', next, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await axiosClient.put(`/problem/update/${problemId}`, data);
      toast.success('Problem updated successfully!');
    } catch (err) {
      console.error('[UpdateProblemForm] submit failed', err);
      toast.error(err.response?.data?.message || 'Update failed');
    } finally {
      setSubmitting(false);
    }
  };

  const onSubmitError = (formErrors) => {
    toast.error('Please fix validation errors and try again');
  };

  if (!problemId) {
    return null;
  }

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24 gap-3">
        <span className="loading loading-spinner loading-md" style={{ color: 'var(--green)' }} />
        <span className="font-mono text-sm text-base-content/35">Loading problem…</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/admin/update')}
          className="p-2 rounded-lg border border-base-content/8 hover:bg-base-content/5 text-base-content/40 hover:text-base-content/70 transition-colors duration-150"
          aria-label="Back"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div>
          <p className="font-mono text-xs text-yellow-400 uppercase tracking-widest">// editing</p>
          <h1 className="text-xl font-bold">{watch('title') || 'Update Problem'}</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onSubmitError)} className="flex flex-col gap-5">

        {/* Basic Info */}
        <Section title="Basic Information">
          <div className="flex flex-col gap-4">
            <Field label="Title" required error={errors.title?.message}>
              <input
                {...register('title')}
                className={`input bg-base-200 w-full text-sm border transition-colors duration-150
                  focus:outline-none focus:border-yellow-500/50
                  ${errors.title ? 'border-red-500/50' : 'border-base-content/10'}`}
              />
            </Field>

            <Field label="Description" required error={errors.description?.message}>
              <textarea
                {...register('description')}
                rows={5}
                className={`textarea bg-base-200 w-full text-sm border leading-relaxed transition-colors duration-150
                  focus:outline-none focus:border-yellow-500/50 resize-none
                  ${errors.description ? 'border-red-500/50' : 'border-base-content/10'}`}
              />
            </Field>

            <Field label="Difficulty" required error={errors.difficulty?.message}>
              <div className="flex gap-2">
                {['easy','medium','hard'].map((d) => {
                  const active = watch('difficulty') === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setValue('difficulty', d, { shouldValidate: true })}
                      className={`px-4 py-1.5 rounded-lg font-mono text-xs border capitalize transition-colors duration-150
                        ${active ? DIFF_STYLES[d] : 'border-base-content/8 text-base-content/35 hover:text-base-content/60'}`}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field label="Tags" required error={errors.tags?.message}>
              <div className="flex flex-wrap gap-2">
                {ALL_TAGS.map((tag) => {
                  const active = selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-md font-mono text-xs border capitalize transition-colors duration-150
                        ${active
                          ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                          : 'border-base-content/8 text-base-content/35 hover:text-base-content/60'
                        }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </Field>
          </div>
        </Section>

        {/* Visible Test Cases */}
        <Section
          title="Visible Test Cases"
          subtitle="Shown to users as examples"
          action={
            <button
              type="button"
              onClick={() => appendVisible({ input: '', output: '', explanation: '' })}
              className="btn btn-sm border border-green-500/30 bg-green-500/8 text-green-400 hover:bg-green-500/15 font-mono text-xs"
            >
              + Add
            </button>
          }
        >
          {visibleFields.length === 0 ? (
            <p className="text-center text-base-content/25 font-mono text-xs py-4">No cases — click "+ Add"</p>
          ) : (
            <div className="flex flex-col gap-3">
              {visibleFields.map((field, index) => (
                <div key={field.id} className="rounded-xl border border-base-content/8 bg-base-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-base-content/40">Case {index + 1}</span>
                    <button type="button" onClick={() => removeVisible(index)}
                      className="font-mono text-[11px] text-red-400/60 hover:text-red-400 transition-colors duration-150">
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <Field label="Input">
                      <input {...register(`visibleTestCases.${index}.input`)}
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-yellow-500/40" />
                    </Field>
                    <Field label="Output">
                      <input {...register(`visibleTestCases.${index}.output`)}
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-yellow-500/40" />
                    </Field>
                  </div>
                  <Field label="Explanation">
                    <input {...register(`visibleTestCases.${index}.explanation`)}
                      className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-yellow-500/40" />
                  </Field>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Hidden Test Cases */}
        <Section
          title="Hidden Test Cases"
          subtitle="Used for judging only"
          action={
            <button type="button" onClick={() => appendHidden({ input: '', output: '' })}
              className="btn btn-sm border border-base-content/10 bg-base-content/5 text-base-content/60 hover:text-base-content/80 font-mono text-xs">
              + Add
            </button>
          }
        >
          {hiddenFields.length === 0 ? (
            <p className="text-center text-base-content/25 font-mono text-xs py-4">No cases — click "+ Add"</p>
          ) : (
            <div className="flex flex-col gap-3">
              {hiddenFields.map((field, index) => (
                <div key={field.id} className="rounded-xl border border-base-content/8 bg-base-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-base-content/40">Case {index + 1}</span>
                    <button type="button" onClick={() => removeHidden(index)}
                      className="font-mono text-[11px] text-red-400/60 hover:text-red-400 transition-colors duration-150">
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Input">
                      <input {...register(`hiddenTestCases.${index}.input`)}
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-yellow-500/40" />
                    </Field>
                    <Field label="Output">
                      <input {...register(`hiddenTestCases.${index}.output`)}
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-yellow-500/40" />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* Code sections */}
        <CodeSection
          title="Starter Code"
          subtitle="Template shown to users"
          fieldPrefix="startCode"
          setValue={setValue}
          watch={watch}
          errors={errors}
        />
        <CodeSection
          title="Reference Solution"
          subtitle="Correct solution used internally"
          fieldPrefix="referenceSolution"
          setValue={setValue}
          watch={watch}
          errors={errors}
        />

        {/* Submit */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => navigate('/admin/update')}
            className="btn btn-ghost border border-base-content/10 font-mono text-sm"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="flex-1 btn font-bold text-base-300 border-none disabled:opacity-50 transition-all duration-150"
            style={{ background: '#f59e0b' }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 22px rgba(245,158,11,0.35)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            {submitting
              ? <><span className="loading loading-spinner loading-sm" /> Updating…</>
              : 'Update Problem →'
            }
          </button>
        </div>
      </form>
    </div>
  );
}
