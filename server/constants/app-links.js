import config from '../config';

const { appUrl } = config.common;

const appLinks = {
  // GENERAL
  LOGIN: `${appUrl}/login`,
  SET_PASSWORD: `${appUrl}/reset-password/:token`,
};

const mentalHealthLinks = [
  {
    label: 'Mental Health & Money Advice',
    link: 'https://www.mentalhealthandmoneyadvice.org/en/how-can-we-help/advice-for-someone-whos-mental-health-is-being-affected-by-money/',
  },
  {
    label: 'Money Saving Expert Mental Health Guide',
    link: 'https://www.moneysavingexpert.com/credit-cards/mental-health-guide/',
  },
  {
    label: 'Mind Information & Support',
    link: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/money-and-mental-health/',
  },
  {
    label: 'NHS Every Mind Matters',
    link: 'https://www.nhs.uk/every-mind-matters/',
  },
];

export { appLinks, mentalHealthLinks };
