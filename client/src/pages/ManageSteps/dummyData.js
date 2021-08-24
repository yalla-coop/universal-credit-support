export default [
  { id: 1, stepOrder: 1, stage: 'beforeClaiming', title: 'Check eligibility' },
  { id: 2, stepOrder: 2, stage: 'claiming', title: 'Create account' },
  { id: 3, stepOrder: 3, stage: 'claiming', title: 'Make the claim' },
  { id: 4, stepOrder: 4, stage: 'claiming', title: 'Verify identity' },
  { id: 5, stepOrder: 5, stage: 'claiming', title: 'Attend interview' },
  { id: 6, stepOrder: 6, stage: 'afterClaiming', title: 'Get an advance' },
  {
    id: 1,
    stepOrder: 1,
    stage: 'afterClaiming',
    title: 'Get the first payment',
  },
];
