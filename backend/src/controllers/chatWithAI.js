const { GoogleGenAI } = require('@google/genai');

const chatWithAI = async (req, res) => {
  try {
    const { messages, title, description, testCases, startCode, currentCode, language } = req.body;

    const ai = new GoogleGenAI({});

    // Format start code templates clearly
    const startCodeBlock = Array.isArray(startCode)
      ? startCode
          .map((sc) => `### ${sc.language}\n\`\`\`${sc.language}\n${sc.initialCode}\n\`\`\``)
          .join('\n\n')
      : `\`\`\`\n${startCode}\n\`\`\``;

    // Format test cases clearly
    const testCaseBlock = Array.isArray(testCases)
      ? testCases
          .map((tc, i) => `Case ${i + 1}: Input: ${tc.input} → Output: ${tc.output}${tc.explanation ? ` (${tc.explanation})` : ''}`)
          .join('\n')
      : String(testCases || '');

    // User's current code (optional — only if they've written something)
    const currentCodeBlock = currentCode
      ? `\n\n## USER'S CURRENT CODE (${language || 'unknown language'}):\n\`\`\`${language || ''}\n${currentCode}\n\`\`\``
      : '';

    const systemInstruction = `
You are a concise, expert DSA tutor helping a user solve a specific coding problem on an online judge.

---

## PROBLEM:
**Title:** ${title}

**Description:**
${description}

**Visible Test Cases:**
${testCaseBlock}

**Starter Code Templates:**
${startCodeBlock}
${currentCodeBlock}

---

## YOUR RULES:

1. **Stay on topic.** Only discuss this specific problem. If asked about anything else, say: "I can only help with the current problem. What would you like help with?"

2. **Be concise.** Keep responses short and focused. No long essays. Use bullet points when listing steps.

3. **Code formatting.** Always wrap code in fenced code blocks with the correct language tag:
   \`\`\`javascript
   // your code here
   \`\`\`

4. **Hints vs Solutions.** 
   - If user asks for a hint → give a guiding question or point to the right data structure/technique. Do NOT give the full solution.
   - If user explicitly asks for the solution or says they're stuck → provide clean, commented code with complexity analysis.
   - If user shares their code → identify the bug with a clear explanation and suggest a fix.

5. **Always include complexity.** When giving a solution or approach, always mention Time and Space complexity in O() notation.

6. **Language awareness.** The user is coding in **${language || 'JavaScript'}**. Prefer examples and solutions in that language unless they ask otherwise.

7. **Tone.** Be encouraging and Socratic — ask guiding questions to help them think, don't just dump answers.

8. **Format rules for readability:**
   - Use \`##\` for section headers (not \`###\`)
   - Use \`**bold**\` only for key terms
   - Keep code blocks short — show only the relevant part, not the entire solution unless asked
   - End responses with a short follow-up question to keep the conversation going

---

## WHAT YOU CAN HELP WITH:
- Breaking down the problem approach
- Debugging the user's code
- Suggesting the right data structure
- Explaining why an approach works or fails
- Providing optimal solutions with explanations
- Complexity analysis
- Edge cases and test cases
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: messages,
      config: { systemInstruction },
    });

    res.status(200).json({ message: response.text });

  } catch (err) {
    console.error('chatWithAI error:', err);
    res.status(500).json({ message: 'Internal Server Error: ' + err.message });
  }
};
module.exports = {chatWithAI};