// import axios from 'axios';
import handleError from './format-error';

// const SECTIONS_BASE = '/sections';

const getSections = async ({ options }) => {
  try {
    // const { data } = await axios.get(`${SECTIONS_BASE}`);
    const data = [
      { cardId: 1, text: 'Paying for housing', to: '/' },
      { cardId: 2, text: 'Paying for my bills', to: '/' },
      {
        cardId: 3,
        text: 'Paying for essentials (Food, transport, medication)',
        to: '/',
      },
      { cardId: 4, text: 'Dealing with debts', to: '/' },
      { cardId: 5, text: 'How to maximise my income', to: '/' },
    ];
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getSections };
