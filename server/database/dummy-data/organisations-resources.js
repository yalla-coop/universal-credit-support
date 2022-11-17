import { query } from '../connect';

const createOrganisationResources = async ({
  organisationId,
  key,
  category,
  label,
  value,
}) => {
  const sql = `INSERT INTO organisations_resources (
    organisation_id,
    key,
    category,
    label,
    value
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
  ) RETURNING *`;
  const res = await query(sql, [organisationId, key, category, label, value]);
  return res.rows[0];
};

const createOrganisations = async ({ organisations }) => {
  const { organisation1 } = organisations;

  const org1Resources = [
    {
      key: 'BUDGET_PLANNER',
      category: 'BUDGET',
      label: 'Budget Planner',
      value:
        'https://www.moneyhelper.org.uk/en/everyday-money/budgeting/use-our-budget-planner.html',
    },
    {
      key: 'BENEFIT_CALCULATOR',
      category: 'BENEFIT_CALCULATOR',
      label: 'Benefit Calculator',
      value: 'https://benefits-calculator.turn2us.org.uk/',
    },
    {
      key: 'DEBT_ADVICE',
      category: 'DEBT_ADVICE',
      label: 'Debt Advice Locator',
      value:
        'https://www.moneyhelper.org.uk/en/money-troubles/dealing-with-debt/debt-advice-locator',
    },
    {
      key: 'GRANT_SEARCH',
      category: 'GRANT_SEARCH',
      label: 'Grant Search',
      value: 'https://grants-search.turn2us.org.uk/',
    },
    {
      key: 'EMPLOYMENT_SERVICES',
      category: 'EMPLOYMENT_SERVICES',
      label: 'Employment Services',
      value: 'https://jobhelp.campaign.gov.uk/',
    },
    {
      key: 'STILL_NEED_HELP',
      category: 'STILL_NEED_HELP',
      label: 'Money Helper',
      value: '0800 138 7777',
    },
    {
      key: 'MENTAL_HEALTH_1',
      category: 'MENTAL_HEALTH',
      label: 'Mental Health & Money Advice',
      value:
        'https://www.mentalhealthandmoneyadvice.org/en/how-can-we-help/advice-for-someone-whos-mental-health-is-being-affected-by-money/',
    },
    {
      key: 'MENTAL_HEALTH_2',
      category: 'MENTAL_HEALTH',
      label: 'Mind Information & Support',
      value:
        'https://www.mind.org.uk/information-support/tips-for-everyday-living/money-and-mental-health/',
    },
    {
      key: 'MENTAL_HEALTH_3',
      category: 'MENTAL_HEALTH',
      label: 'NHS Every Mind Matters',
      value: 'https://www.nhs.uk/every-mind-matters/',
    },
  ];

  await Promise.all(
    org1Resources.map((resource) => {
      return createOrganisationResources({
        key: resource.key,
        category: resource.category,
        label: resource.label,
        value: resource.value,
        organisationId: organisation1.id,
      });
    }),
  );
};

export default createOrganisations;
