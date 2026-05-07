import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import axiosClient from "../../utils/axiosClient";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { initChat, addMessage, clearMessageAnimation, setThinking, clearChat } from "../../store/chatSlice";
import { useState } from "react";
import { Bot, LoaderCircle, SendHorizontal } from "lucide-react";

// ─────────────────────────────────────────
// Typewriter hook
// ─────────────────────────────────────────
function useTypewriter(text, speed = 10, enabled = false) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone]           = useState(false);

  useEffect(() => {
    if (!enabled || !text) { setDisplayed(text || ''); setDone(true); return; }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const interval = setInterval(() => {
      const chunk = Math.max(1, Math.ceil(text.length / 100));
      i += chunk;
      if (i >= text.length) {
        setDisplayed(text);
        setDone(true);
        clearInterval(interval);
      } else {
        setDisplayed(text.slice(0, i));
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, enabled]);

  return { displayed, done };
}

// ─────────────────────────────────────────
// Copy button
// ─────────────────────────────────────────
function CopyBtn({ code }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(code).catch(() => {});
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={`flex items-center gap-1 px-2 py-0.5 rounded font-mono text-[10px] border transition-all duration-150
        ${copied
          ? 'border-green-500/30 bg-green-500/10 text-green-400'
          : 'border-white/10 bg-white/5 text-white/40 hover:text-white/70'
        }`}
    >
      {copied ? '✓ Copied' : 'Copy'}
    </button>
  );
}

// ─────────────────────────────────────────
// Markdown renderer
// ─────────────────────────────────────────
function MDContent({ content }) {
  return (
    <ReactMarkdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');
          const code  = String(children).replace(/\n$/, '');
          const lang  = match?.[1] || '';

          if (!inline && lang) {
            return (
              <div className="my-3 rounded-xl overflow-hidden border border-white/8">
                <div className="flex items-center justify-between px-4 py-2 bg-[#21262d] border-b border-white/6">
                  <span className="font-mono text-[11px] text-white/35">{lang}</span>
                  <CopyBtn code={code} />
                </div>
                <SyntaxHighlighter
                    language={lang}
                    style={oneDark}
                    showLineNumbers
                    wrapLines={false}
                    useInlineStyles={true}
                    customStyle={{
                        margin: 0,
                        padding: '14px 16px',
                        fontSize: '12.5px',
                        background: '#0d1117',
                        borderRadius: 0,
                    }}
                    codeTagProps={{
                        style: {
                        background: 'transparent',
                        fontFamily: 'JetBrains Mono, monospace',
                        }
                    }}
                    lineNumberStyle={{
                        color: 'rgba(255,255,255,0.15)',
                        fontSize: '11px',
                    }}
                    >
                    {code}
                </SyntaxHighlighter>
              </div>
            );
          }
          return (
            <code className="px-1.5 py-0.5 rounded font-mono text-xs" style={{ background: 'rgba(0,230,118,0.1)', color: '#00e676' }}>
              {children}
            </code>
          );
        },
        h1: ({ children }) => <h1 className="text-base font-bold text-base-content mt-4 mb-2">{children}</h1>,
        h2: ({ children }) => <h2 className="text-sm font-bold text-base-content mt-3 mb-1.5">{children}</h2>,
        h3: ({ children }) => <h3 className="text-sm font-semibold text-base-content/80 mt-2 mb-1">{children}</h3>,
        p:  ({ children }) => <p className="text-sm text-base-content/75 leading-relaxed mb-2 last:mb-0">{children}</p>,
        ul: ({ children }) => <ul className="my-1.5 space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="my-1.5 space-y-1 list-decimal pl-5">{children}</ol>,
        li: ({ children }) => (
          <li className="text-sm text-base-content/75 leading-relaxed flex gap-2">
            <span className="text-base-content/25 mt-1 shrink-0">·</span>
            <span>{children}</span>
          </li>
        ),
        strong: ({ children }) => <strong className="font-semibold text-base-content">{children}</strong>,
        em:     ({ children }) => <em className="italic text-base-content/60">{children}</em>,
        hr:     ()             => <hr className="border-base-content/10 my-3" />,
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-green-500/40 pl-3 my-2 text-base-content/50 text-sm italic">
            {children}
          </blockquote>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

// ─────────────────────────────────────────
// AI message
// ─────────────────────────────────────────
function AIMessage({ text, animate, onAnimationEnd, onProgress }) {
  const { displayed, done } = useTypewriter(text, 10, animate);

  useEffect(() => {
    if (animate && done) {
      onAnimationEnd?.();
    }
  }, [animate, done, onAnimationEnd]);

  useEffect(() => {
    if (animate) {
      onProgress?.();
    }
  }, [animate, displayed, onProgress]);

  return (
    <div className="flex gap-2.5 items-start">
      <div
        className="w-6 h-6 rounded-full shrink-0 flex items-center justify-center text-[10px] font-bold mt-0.5"
        style={{ background: 'rgba(0,230,118,0.15)', color: 'var(--green)', border: '1px solid rgba(0,230,118,0.2)' }}
      >
        <Bot />
      </div>
      <div className="flex-1 min-w-0">
        <MDContent content={displayed} />
        {!done && (
          <span
            className="inline-block w-0.5 h-3.25 rounded-sm ml-0.5 align-middle"
            style={{ background: 'var(--green)', animation: 'blink 0.75s step-end infinite' }}
          />
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// User message
// ─────────────────────────────────────────
function UserMessage({ text }) {
  return (
    <div className="flex justify-end">
      <div
        className="max-w-[80%] px-3.5 py-2.5 rounded-2xl rounded-br-sm text-sm text-base-content/85 leading-relaxed"
        style={{ background: 'rgba(0,230,118,0.08)', border: '1px solid rgba(0,230,118,0.15)' }}
      >
        {text}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// Thinking dots
// ─────────────────────────────────────────
function ThinkingBubble() {
  return (
    <div className="flex gap-3 items-start animate-in fade-in duration-200">
      
      {/* AI Avatar */}
      <div
        className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center"
        style={{
          background: 'rgba(0,230,118,0.12)',
          color: 'var(--green)',
          border: '1px solid rgba(0,230,118,0.2)',
        }}
      >
        <Bot size={14} />
      </div>

      {/* Bubble */}
      <div
        className="flex items-center gap-2 px-4 py-3 rounded-2xl rounded-bl-sm backdrop-blur-md"
        style={{
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        
        {/* DaisyUI Loader */}
        <span className="loading loading-dots loading-sm text-success"></span>

      </div>
    </div>
  );
}
// ─────────────────────────────────────────
// Main ChatAI
// ─────────────────────────────────────────
export default function ChatAI({ code, selectedLanguage }) {
  const dispatch   = useDispatch();
  const { problemId } = useParams();
  const { problem }   = useSelector((state) => state.problemDetail);

  const messages = useSelector((state) => state.chat.messagesByProblem[problemId] || []);
  const thinking = useSelector((state) => state.chat.thinkingByProblem[problemId] || false);

  const { register, handleSubmit, reset, watch } = useForm();
  const msgValue  = watch('message', '');
  const bottomRef = useRef(null);

  // Init chat for this problem on mount
  useEffect(() => {
    dispatch(initChat({ problemId }));
  }, [problemId, dispatch]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, thinking]);

  const onSubmit = async (data) => {
    if (!data.message?.trim()) return;

    const userMsg = { role: 'user', parts: [{ text: data.message.trim() }] };
    dispatch(addMessage({ problemId, message: userMsg }));
    reset();
    dispatch(setThinking({ problemId, thinking: true }));

    try {
      const history = [...messages, userMsg];
      const response = await axiosClient.post('/ai/chat', {
        messages:    history,
        title:       problem?.title,
        description: problem?.description,
        testCases:   problem?.visibleTestCases,
        startCode:   problem?.startCode,
        currentCode: code,
        language:    selectedLanguage,
      });
      dispatch(addMessage({
        problemId,
        message: { role: 'model', parts: [{ text: response.data.message }], animate: true },
      }));
    } catch {
      dispatch(addMessage({
        problemId,
        message: { role: 'model', parts: [{ text: 'Sorry, something went wrong. Please try again.' }], animate: false },
      }));
    } finally {
      dispatch(setThinking({ problemId, thinking: false }));
    }
  };

  const canSend = msgValue?.trim().length >= 2 && !thinking;

  return (
    <>
      {/* <style>{`
        @keyframes blink  { 50% { opacity: 0; } }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
      `}</style> */}

      {/* ── Outer card ── */}
      <div
        className="flex flex-col rounded-xl border border-base-content/8 overflow-hidden"
        style={{ height: 'calc(100vh - 220px)', minHeight: '380px', background: 'rgba(255,255,255,0.02)' }}
      >

        {/* Card header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-base-content/[0.07] shrink-0">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold"
              style={{ background: 'rgba(0,230,118,0.15)', color: 'var(--green)', border: '1px solid rgba(0,230,118,0.2)' }}
            >
              <Bot />
            </div>
            <span className="text-sm font-medium text-base-content/70">DSA Tutor</span>
          </div>

          {/* Clear chat */}
          <button
            onClick={() => dispatch(clearChat({ problemId }))}
            className="font-mono text-[10px] text-base-content transition-colors duration-150 cursor-pointer bg-transparent border border-base-content/10 hover:border-base-content rounded px-2 py-0.5"
          >
            Clear
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {messages.map((msg, i) =>
            msg.role === 'user'
              ? <UserMessage key={i} text={msg.parts[0].text} />
              : (
                <AIMessage
                  key={i}
                  text={msg.parts[0].text}
                  animate={!!msg.animate}
                  onAnimationEnd={() => dispatch(clearMessageAnimation({ problemId, index: i }))}
                  onProgress={() => bottomRef.current?.scrollIntoView({ behavior: 'auto' })}
                />
              )
          )}
          {thinking && <ThinkingBubble />}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="shrink-0 px-3 py-3 border-t border-base-content/[0.07]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              className="flex items-end gap-2 rounded-xl border px-3 py-2.5 transition-colors duration-150"
              style={{
                background:   'rgba(255,255,255,0.03)',
                borderColor:  thinking ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.09)',
              }}
            >
              <textarea
                placeholder="Ask me anything about this problem…"
                rows={1}
                disabled={thinking}
                className="flex-1 bg-transparent text-sm text-base-content/80 placeholder:text-base-content/25 resize-none outline-none leading-relaxed"
                style={{ maxHeight: '100px', overflowY: 'auto' }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(onSubmit)();
                  }
                }}
                {...register('message', { required: true, minLength: 2 })}
              />
              <button
                type="submit"
                disabled={!canSend}
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-150 disabled:opacity-30"
                style={{ background: canSend ? 'var(--green)' : 'rgba(255,255,255,0.05)' }}
                aria-label="Send"
              >
                {thinking
                  ? <LoaderCircle className='loading' />
                  : (
                    <SendHorizontal />
                  )
                }
              </button>
            </div>
            <p className="font-mono text-[10px] text-base-content/20 mt-1 text-right">
              Enter to send · Shift+Enter for new line
            </p>
          </form>
        </div>
      </div>
    </>
  );
}