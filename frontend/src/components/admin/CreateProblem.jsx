import { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Editor from '@monaco-editor/react';
import axiosClient from '../../utils/axiosClient';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

// ── Schema ──
const problemSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  difficulty: z.enum(['easy', 'medium', 'hard']),
  tags: z.array(z.enum(['array', 'string', 'linkedlist', 'graph', 'dp', 'tree', 'binary search', 'sorting', 'hashing'])).min(1, 'At least one tag required'),
  visibleTestCases: z.array(z.object({
    input:       z.string().min(1, 'Input required'),
    output:      z.string().min(1, 'Output required'),
    explanation: z.string().min(1, 'Explanation required'),
  })).min(1),
  hiddenTestCases: z.array(z.object({
    input:  z.string().min(1, 'Input required'),
    output: z.string().min(1, 'Output required'),
  })).min(1),
  startCode: z.array(z.object({
    language:    z.enum(['c++', 'java', 'javascript']),
    initialCode: z.string().min(1, 'Initial code required'),
  })).length(3),
  referenceSolution: z.array(z.object({
    language:     z.enum(['c++', 'java', 'javascript']),
    completeCode: z.string().min(1, 'Solution required'),
  })).length(3),
});

const LANGS = [
  { key: 'c++',        label: 'C++',        monaco: 'cpp'        },
  { key: 'java',       label: 'Java',       monaco: 'java'       },
  { key: 'javascript', label: 'JavaScript', monaco: 'javascript' },
];

const TAGS = ['array', 'string', 'linkedlist', 'graph', 'dp', 'tree', 'binary search', 'sorting', 'hashing'];

const DIFF_STYLES = {
  easy:   'border-green-500/30  bg-green-500/8  text-green-400',
  medium: 'border-yellow-500/30 bg-yellow-500/8 text-yellow-400',
  hard:   'border-red-500/30    bg-red-500/8    text-red-400',
};

// ─────────────────────────────────────────
// Section wrapper
// ─────────────────────────────────────────
function Section({ title, subtitle, children, action }) {
  return (
    <div className="rounded-xl border border-base-content/8 bg-base-100 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-base-content/7">
        <div>
          <h2 className="text-sm font-semibold text-base-content">{title}</h2>
          {subtitle && <p className="text-xs text-base-content/35 mt-0.5">{subtitle}</p>}
        </div>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// ─────────────────────────────────────────
// Field
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

// ─────────────────────────────────────────
// Monaco code section with language tabs
// ─────────────────────────────────────────
function CodeSection({ title, subtitle, fieldPrefix, register, setValue, watch, errors }) {
  const [activeLang, setActiveLang] = useState(0);
  const fieldKey = fieldPrefix === 'startCode' ? 'initialCode' : 'completeCode';

  return (
    <Section title={title} subtitle={subtitle}>
      {/* Language tabs */}
      <div className="flex items-center gap-1 mb-3 bg-base-200 rounded-lg p-1 w-fit border border-base-content/7">
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

      {/* Editor */}
      {LANGS.map((lang, i) => (
        <div
          key={lang.key}
          className={`rounded-xl overflow-hidden border border-base-content/8 ${activeLang !== i ? 'hidden' : ''}`}
          style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
        >
          {/* Editor title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-base-300 border-b border-base-content/7">
            <span className="w-3 h-3 rounded-full bg-error opacity-60" />
            <span className="w-3 h-3 rounded-full bg-warning opacity-60" />
            <span className="w-3 h-3 rounded-full bg-success opacity-60" />
            <span className="font-mono text-xs text-base-content/30 ml-2">
              {fieldPrefix === 'startCode' ? 'starter' : 'solution'}.{lang.key === 'c++' ? 'cpp' : lang.key === 'javascript' ? 'js' : 'java'}
            </span>
          </div>
          <Editor
            height="350px"
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
// Main CreateProblem
// ─────────────────────────────────────────
export default function CreateProblem() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const { register, control, handleSubmit, setValue, watch, formState: { errors } } = useForm({
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

  const toggleTag = (tag) => {
    const next = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(next);
    setValue('tags', next, { shouldValidate: true });
  };

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await axiosClient.post('/problem/create', data);
      toast.success('Problem created successfully!');
      navigate('/admin/create');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create problem');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">

      {/* Page title */}
      <div>
        <p className="font-mono text-xs text-green-400 uppercase tracking-widest mb-0.5">// new problem</p>
        <h1 className="text-xl font-bold">Create Problem</h1>
        <p className="text-sm text-base-content/35 mt-0.5">Fill in all sections to publish a new problem.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">

        {/* ── Basic Info ── */}
        <Section title="Basic Information" subtitle="Title, description, difficulty and tags">
          <div className="flex flex-col gap-4">

            {/* Title */}
            <Field label="Title" required error={errors.title?.message}>
              <input
                {...register('title')}
                placeholder="e.g. Two Sum"
                className={`input bg-base-200 w-full text-sm border transition-colors duration-150
                  focus:outline-none focus:border-green-500/50
                  ${errors.title ? 'border-red-500/50' : 'border-base-content/10'}`}
              />
            </Field>

            {/* Description */}
            <Field label="Description" required error={errors.description?.message}>
              <textarea
                {...register('description')}
                rows={5}
                placeholder="Describe the problem clearly. Include constraints and expected behavior."
                className={`textarea bg-base-200 w-full text-sm border leading-relaxed transition-colors duration-150
                  focus:outline-none focus:border-green-500/50 resize-none
                  ${errors.description ? 'border-red-500/50' : 'border-base-content/10'}`}
              />
            </Field>

            {/* Difficulty */}
            <Field label="Difficulty" required error={errors.difficulty?.message}>
              <div className="flex gap-2">
                {(['easy', 'medium', 'hard']).map((d) => {
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

            {/* Tags */}
            <Field label="Tags" required error={errors.tags?.message}>
              <div className="flex flex-wrap gap-2">
                {TAGS.map((tag) => {
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

        {/* ── Visible Test Cases ── */}
        <Section
          title="Visible Test Cases"
          subtitle="Shown to users as examples"
          action={
            <button
              type="button"
              onClick={() => appendVisible({ input: '', output: '', explanation: '' })}
              className="btn btn-sm border border-green-500/30 bg-green-500/8 text-green-400 hover:bg-green-500/15 font-mono text-xs"
            >
              + Add Case
            </button>
          }
        >
          {visibleFields.length === 0 ? (
            <p className="text-center text-base-content/25 font-mono text-xs py-6">
              No visible cases yet — click "+ Add Case"
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {visibleFields.map((field, index) => (
                <div key={field.id} className="rounded-xl border border-base-content/8 bg-base-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-base-content/40">Case {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeVisible(index)}
                      className="font-mono text-[11px] text-red-400/60 hover:text-red-400 transition-colors duration-150"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Input" error={errors.visibleTestCases?.[index]?.input?.message}>
                      <input
                        {...register(`visibleTestCases.${index}.input`)}
                        placeholder="e.g. [2,7,11,15], 9"
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-green-500/40"
                      />
                    </Field>
                    <Field label="Output" error={errors.visibleTestCases?.[index]?.output?.message}>
                      <input
                        {...register(`visibleTestCases.${index}.output`)}
                        placeholder="e.g. [0,1]"
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-green-500/40"
                      />
                    </Field>
                  </div>
                  <div className="mt-3">
                    <Field label="Explanation" error={errors.visibleTestCases?.[index]?.explanation?.message}>
                      <input
                        {...register(`visibleTestCases.${index}.explanation`)}
                        placeholder="Explain why the output is correct"
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-green-500/40"
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* ── Hidden Test Cases ── */}
        <Section
          title="Hidden Test Cases"
          subtitle="Used for judging — not shown to users"
          action={
            <button
              type="button"
              onClick={() => appendHidden({ input: '', output: '' })}
              className="btn btn-sm border border-base-content/1 bg-base-content/5 text-base-content/60 hover:text-base-content/80 font-mono text-xs"
            >
              + Add Case
            </button>
          }
        >
          {hiddenFields.length === 0 ? (
            <p className="text-center text-base-content/25 font-mono text-xs py-6">
              No hidden cases yet — click "+ Add Case"
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {hiddenFields.map((field, index) => (
                <div key={field.id} className="rounded-xl border border-base-content/8 bg-base-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-base-content/40">Case {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeHidden(index)}
                      className="font-mono text-[11px] text-red-400/60 hover:text-red-400 transition-colors duration-150"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="Input" error={errors.hiddenTestCases?.[index]?.input?.message}>
                      <input
                        {...register(`hiddenTestCases.${index}.input`)}
                        placeholder="Input"
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-green-500/40"
                      />
                    </Field>
                    <Field label="Output" error={errors.hiddenTestCases?.[index]?.output?.message}>
                      <input
                        {...register(`hiddenTestCases.${index}.output`)}
                        placeholder="Expected output"
                        className="input input-sm bg-base-300 w-full text-xs border border-base-content/8 focus:outline-none focus:border-green-500/40"
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* ── Starter Code ── */}
        <CodeSection
          title="Starter Code"
          subtitle="The template shown to users when they open the problem"
          fieldPrefix="startCode"
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />

        {/* ── Reference Solution ── */}
        <CodeSection
          title="Reference Solution"
          subtitle="The correct solution — used internally and for editorials"
          fieldPrefix="referenceSolution"
          register={register}
          setValue={setValue}
          watch={watch}
          errors={errors}
        />

        {/* ── Submit ── */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full btn font-bold text-base-300 border-none disabled:opacity-50 transition-all duration-150 bg-green-500 hover:bg-green-600"
          onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 22px rgba(0,230,118,0.35)'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
        >
          {submitting
            ? <><span className="loading loading-spinner loading-sm" /> Creating…</>
            : 'Create Problem →'
          }
        </button>

      </form>
    </div>
  );
}