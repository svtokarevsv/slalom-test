/**
 * Hook: complete-phase
 * Generates a prompt to complete a phase/milestone of the Habit Tracker MVP
 * 
 * @param {Object} params - Hook parameters
 * @param {string} params.phase - The phase/milestone number (e.g., "1", "1.5", "2")
 * @returns {string} Prompt text for completing the phase
 */
module.exports = function({ phase }) {
  if (!phase) {
    return "Error: Please provide a phase number (e.g., '1', '1.5', '2').";
  }

  const phaseMap = {
    "1": "Milestone 1: Project Setup & Data Layer",
    "1.5": "Milestone 1.5: Optimize Streak Calculation & Caching",
    "2": "Milestone 2: Core UI Components",
    "3": "Milestone 3: Add Habit Functionality",
    "4": "Milestone 4: Complete Habit Functionality",
    "5": "Milestone 5: Streak Calculation & Display",
    "6": "Milestone 6: Styling & Mobile Responsiveness"
  };

  const nextPhaseMap = {
    "1": "1.5",
    "1.5": "2",
    "2": "3",
    "3": "4",
    "4": "5",
    "5": "6",
    "6": null
  };

  const phaseName = phaseMap[phase] || `Milestone ${phase}`;
  const nextPhase = nextPhaseMap[phase];
  const nextPhaseName = nextPhase ? phaseMap[nextPhase] : null;

  // Generate commit message suggestion based on phase
  const commitMessages = {
    "1": "feat: complete project setup and data layer\n\n- Initialize React + TypeScript project with Vite\n- Define TypeScript interfaces\n- Implement localStorage utilities with error handling",
    "1.5": "perf: optimize streak calculation and caching\n\n- Extract streak calculation to pure utility function\n- Add memoization to prevent unnecessary recalculations\n- Improve testability of streak logic",
    "2": "feat: implement core UI components\n\n- Build basic component structure\n- Render habits from state\n- Display habit names and completion status",
    "3": "feat: add habit functionality\n\n- Create form component with validation\n- Handle form submission\n- Persist habits to localStorage",
    "4": "feat: implement habit completion toggle\n\n- Add toggle handler for completion\n- Update completedDates array\n- Prevent duplicate completions",
    "5": "feat: add streak calculation and display\n\n- Implement streak calculation logic\n- Create visual streak component\n- Integrate into habit cards",
    "6": "style: add mobile responsive design\n\n- Mobile-first CSS approach\n- Responsive layout using flexbox\n- Touch-friendly interactions"
  };

  const commitMessage = commitMessages[phase] || `feat: complete ${phaseName}`;

  let prompt = `## Complete ${phaseName}

Please complete the following steps:

### 1. Run Tests

First, verify that all tests pass:

\`\`\`bash
cd homework2
npm test
# or if no test script exists, run TypeScript type checking:
npx tsc --noEmit
\`\`\`

### 2. Mark Tasks as Complete

Update the plan file \`.cursor/plans/habit-tracker-mvp.plan.md\` to mark all tasks for **${phaseName}** as complete:

- Find the section for "${phaseName}"
- Add ✅ checkmarks to all task items in that milestone
- Update the milestone header to include ✅ if not already present

### 3. Suggested Git Commit Message

\`\`\`
${commitMessage}
\`\`\`

### 4. Next Steps

`;

  if (nextPhase && nextPhaseName) {
    prompt += `Would you like to proceed to **${nextPhaseName}**?`;
  } else {
    prompt += `This was the final milestone! The MVP is complete.`;
  }

  return prompt;
};

