import axios from 'axios';
import handleError from './format-error';

const SECTIONS_BASE = '/sections';

const getSections = async ({ options, uniqueSlug, forPublic }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}`, {
      params: { uniqueSlug, forPublic },
    });

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getSectionById = async ({ options, id }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}/${id}`);

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getSubSections = async ({ options, id, forPublic }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}/sub-sections`, {
      params: { id, forPublic },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getTopics = async ({ options, sectionId }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}/${sectionId}/topics`);

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export { getSections, getSectionById, getTopics, getSubSections };
