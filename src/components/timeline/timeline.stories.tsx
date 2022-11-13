import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import Timeline, { Entry } from '.';
import type { TimelineStatus } from './src/components/entry';

const sampleTimeline: Array<{
  title: string;
  description?: React.ReactNode;
  status?: TimelineStatus;
  stage?: string;
  stageStatus?: TimelineStatus;
}> = [
  {
    stage: 'Pre-alpha',
    stageStatus: 'complete',
    title: 'Basic repayments calculator 👶🏻',
    description: 'Calculate monthly repayments.',
    status: 'complete',
  },
  {
    title: 'Transactions schedule 📅',
    description: 'List all loan transactions.',
    status: 'complete',
  },
  {
    title: 'Timeline chart 📉',
    description: 'Show loan balance over time.',
    status: 'complete',
  },
  {
    title: 'Repayment frequencies',
    description: 'Support weekly and fortnightly repayment frequencies.',
    status: 'complete',
  },
  {
    title: 'Daily interest 😱',
    description: `Calculate interest daily, but only charge monthly.`,
    status: 'complete',
  },
  {
    title: 'Dark mode',
    description: '🌘',
    status: 'complete',
  },
  {
    title: 'Decimal accuracy',
    description: (
      <>
        Arbitrary-precision decimal arithmetic for{' '}
        <a
          href="https://stackoverflow.com/questions/588004/is-floating-point-math-broken"
          target="_blank"
          rel="nofollow noreferrer"
        >
          dealing with floating point numbers in Javascript
        </a>
        . Basically, me make numbers more better now 🙂👍
      </>
    ),
    status: 'complete',
  },
  {
    title: 'Correct rounding methods',
    description:
      'Daily interest calculated to 5 decimal places. All transactions to 2 decimal places.',
    status: 'complete',
  },
  {
    title: 'Interest calculation methods',
    description: 'Support various methods lenders use to calculate interest.',
    status: 'complete',
  },
  {
    title: 'Weekly/fortnightly repayment calculation methods',
    description:
      'Support alternate methods lenders use to convert monthly repayments to weekly or fortnightly.',
    status: 'complete',
  },
  {
    title: 'Daily interest logs',
    description:
      'Show how much interest is accrued per day so people know what the heck is going on 🕵🏻‍♂️',
    status: 'complete',
  },
  {
    title: 'Summaries',
    description: 'Yearly and monthly totals.',
    status: 'complete',
  },
  {
    stage: 'Alpha',
    stageStatus: 'complete',
    title: 'Alpha release',
    description: '👨‍🔬',
    status: 'complete',
  },
  {
    title: 'Autosave 🕹',
    description: `Remember user's inputs from their previous session.`,
    status: 'complete',
  },
  {
    title: 'Start dates',
    description:
      'Enable users to plan for future loans, and existing borrowers to calculate from their current interest period.',
    status: 'complete',
  },
  {
    title: 'Repayment dates',
    description:
      'Enable existing borrowers to enter the date of their next repayment. Also supports new borrowers who have requested custom repayment dates.',
    status: 'complete',
  },
  {
    title: 'Full support for existing loans',
    description:
      'Allow setting a custom repayment amount, remaining months, and the amount currently paid in advance.',
    status: 'complete',
  },
  {
    title: 'Extra transactions',
    description: 'Support additional repayments, withdrawals, and fees.',
    status: 'complete',
  },
  {
    title: 'Mobile optimisation 📲',
    status: 'complete',
  },
  {
    title: 'User feedback form',
    status: 'complete',
  },
  {
    title: 'Share results 💬',
    status: 'complete',
  },
  {
    title: 'Help! 🙋‍♂️',
    description: 'Provide more guidance for users.',
    status: 'complete',
  },
  {
    title: 'Offset accounts',
    status: 'complete',
  },
  {
    title: 'Additional chart data 📉',
    description: 'Expose more data in the line chart.',
    status: 'complete',
  },
  {
    stage: 'Beta',
    stageStatus: 'complete',
    title: 'Beta release',
    description: '🥳',
    status: 'complete',
  },
  {
    title: 'Totals table',
    description: 'Summary of loan totals and transactions.',
    status: 'complete',
  },
  {
    title: 'Transaction schedule filters',
    description:
      'Allow the schedule table to be refined by a selected criteria.',
    status: 'complete',
  },
  {
    title: '🏎 Performance upgrades',
    description:
      'By running calculations in a separate thread and swapping the arithmetic library for a faster alternative, the calculator is now 3x faster.',
    status: 'complete',
  },
  {
    stage: 'Version 1.0',
    stageStatus: 'complete',
    title: 'First release',
    description: '🍾',
    status: 'complete',
  },
  {
    title: 'Chart legend',
    description:
      'Display legend for line chart including exposing additional series data by default for offset accounts.',
    status: 'complete',
  },
  {
    title: 'Failed transaction detection',
    description:
      'Detect and account for extra transactions withdrawing more than the funds available in loan redraw and offset account. They can no longer go into negative balances and error messages are displayed.',
    status: 'complete',
  },
  {
    title: 'Interest only terms ✨ NEW ✨',
    status: 'complete',
  },
  {
    title: 'End loan when fully offset ✨ NEW ✨',
    description:
      'An option to end the loan once the balance of the offset account fully offsets the remaining loan balance.',
    status: 'complete',
  },
  {
    title: 'Track property equity and LVR ✨ NEW ✨',
    description: '🏠',
    status: 'complete',
  },
  {
    title: 'Partial offsets',
    description:
      'Support offset facilities that offer a discounted rate, rather than a full offset of the loan balance.',
    status: 'in progress',
  },
  {
    title: 'Interest rate fluctuation',
    description:
      'Visualise the effects of interest rate fluctuations for new loans. (Delayed - harder than I thought)',
    status: 'incomplete',
  },
  {
    title: 'Repayment recalculations',
    description:
      'Support interest rate fluctuations for existing loans, by recalculating repayments using the original loan parameters.',
    status: 'incomplete',
  },
  {
    title: 'Fixed rates',
    status: 'incomplete',
  },
  {
    title: 'Fees',
    description: 'Full support for fees.',
    status: 'incomplete',
  },
  {
    title: 'Polishing 🧼',
    description: 'TBA: Implement changes based on user feedback.',
    status: 'incomplete',
  },
  {
    title: 'Export results',
    description: 'Generate a PDF or CSV to download calculations.',
    status: 'incomplete',
  },
  {
    title: 'Errors ⛔️',
    description:
      'Show error messages and explanations for scenarios when a loan will not be repaid in time due to user input.',
    status: 'incomplete',
  },
  {
    title: 'Split loans',
    status: 'incomplete',
  },
  {
    title: 'Secret project 🤫',
    status: 'incomplete',
  },
];

export default {
  title: 'Design System/Timeline',
  component: Timeline,
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
    <Entry
      title="Basic amortize calculator"
      groupTitle="Stage 1"
      status="complete"
    >
      A simple working, and tested amortize function and API.
    </Entry>
    <Entry title="User interface" status="in progress">
      A simple user interface including inputs and a basic repayment schedule.
    </Entry>
    <Entry title="Timeline chart">
      A chart illustrating the loan balance over time.
    </Entry>
    <Entry title="Alpha release" />
    <Entry title="Repayment frequencies" groupTitle="Stage 2">
      Support more repayment frequencies (other than monthly), including all
      transactions in schedule.
    </Entry>
    <Entry title="Advanced rate types">
      Support fixed rates and interest-only periods.
    </Entry>
  </Timeline>
);

export const Default = Template.bind({});
Default.args = {};

const TemplateRoadmap: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args}>
    {sampleTimeline.map(({ title, stage, description, status }) => (
      <Entry key={title} title={title} groupTitle={stage} status={status}>
        {description}
      </Entry>
    ))}
  </Timeline>
);

export const Roadmap = TemplateRoadmap.bind({});
Roadmap.args = {};
