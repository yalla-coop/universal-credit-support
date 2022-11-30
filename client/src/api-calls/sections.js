import axios from 'axios';
import handleError from './format-error';

const SECTIONS_BASE = '/sections';

const getSections = async ({ options, uniqueSlug, lng, forPublic }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}`, {
      params: { uniqueSlug, forPublic, lng },
    });

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const createSectionWithTopics = async ({ options, body }) => {
  try {
    const { data } = await axios.post(`${SECTIONS_BASE}`, body);

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};
const updateSectionWithTopics = async ({ options, body, id }) => {
  try {
    const { data } = await axios.patch(`${SECTIONS_BASE}/${id}`, body);

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getSectionById = async ({ options, id, forPublic, lng }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}/${id}`, {
      params: { forPublic, lng },
    });

    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getSubSections = async ({ options, id, forPublic, lng }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}/sub-sections`, {
      params: { id, forPublic, lng },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getTopics = async ({ options, sectionId, lng, forPublic }) => {
  try {
    const { data } = await axios.get(`${SECTIONS_BASE}/${sectionId}/topics`, {
      params: { lng, forPublic },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export {
  getSections,
  getSectionById,
  getTopics,
  getSubSections,
  createSectionWithTopics,
  updateSectionWithTopics,
};
