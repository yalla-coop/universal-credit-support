import axios from 'axios';
import handleError from './format-error';

const ORGS_BASE = '/organisations';

const getOrganisation = async ({ id, options }) => {
  try {
    const { data } = await axios.get(`${ORGS_BASE}/${id}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getOrganisationByUniqueSlug = async ({ uniqueSlug, options }) => {
  try {
    const { data } = await axios.get(`${ORGS_BASE}/unique-slug/${uniqueSlug}`);
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const updateOrganisation = async ({ id, body, withUserDetails, options }) => {
  try {
    const { data } = await axios.patch(`${ORGS_BASE}/${id}`, body, {
      params: { withUserDetails },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const updateOrganisationStatus = async ({
  id,
  status,
  explanation,
  options,
}) => {
  try {
    const { data } = await axios.patch(`${ORGS_BASE}/${id}/status`, {
      status,
      explanation,
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const updateOrganisationResources = async ({ id, resources, options }) => {
  try {
    const { data } = await axios.patch(`${ORGS_BASE}/${id}/resources`, {
      resources,
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

const getAwaitingApprovalOrganisations = async ({ options } = {}) => {
  try {
    const { data } = await axios.get(`${ORGS_BASE}`, {
      params: { status: 'AWAITING_APPROVAL' },
    });
    return { data };
  } catch (error) {
    const err = handleError(error, options);
    return { error: err };
  }
};

export {
  updateOrganisation,
  getOrganisation,
  getOrganisationByUniqueSlug,
  updateOrganisationResources,
  getAwaitingApprovalOrganisations,
  updateOrganisationStatus,
};
