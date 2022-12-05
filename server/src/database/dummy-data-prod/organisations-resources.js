import { query } from '../connect';
import * as T from '../../constants';

const createOrganisationResources = async ({
  organisationId,
  key,
  category,
  label,
  url,
}) => {
  const sql = `INSERT INTO organisations_resources (
    organisation_id,
    key,
    category,
    label,
    url
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
  ) RETURNING *`;
  const res = await query(sql, [organisationId, key, category, label, url]);
  return res.rows[0];
};

const createOrganisations = async () => {
  const resources = [
    {
      key: 'BUDGET_PLANNER',
      category: 'BUDGET',
      label: 'Budget Planner',
      url: 'https://www.moneyhelper.org.uk/en/everyday-money/budgeting/use-our-budget-planner.html',
    },
    {
      key: 'BENEFIT_CALCULATOR',
      category: 'BENEFIT_CALCULATOR',
      label: 'Benefit Calculator',
      url: 'https://benefits-calculator.turn2us.org.uk/',
    },
    {
      key: 'DEBT_ADVICE',
      category: 'DEBT_ADVICE',
      label: 'Debt Advice',
      url: 'https://www.moneyhelper.org.uk/en/money-troubles/dealing-with-debt/debt-advice-locator',
    },
    {
      key: 'GRANT_SEARCH',
      category: 'GRANT_SEARCH',
      label: 'Grant Search',
      url: 'https://grants-search.turn2us.org.uk/',
    },
    {
      key: 'EMPLOYMENT_SERVICES',
      category: 'EMPLOYMENT_SERVICES',
      label: 'Employment Services',
      url: 'https://jobhelp.campaign.gov.uk/',
    },
  ];

  await Promise.all(
    resources.map((resource) => {
      return createOrganisationResources({
        organisationId: T.HYDE_ORGANISATION_ID,
        key: resource.key,
        category: resource.category,
        label: resource.label,
        url: resource.url,
      });
    }),
  );
};

export default createOrganisations;
