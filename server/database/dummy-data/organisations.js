import { query } from '../connect';

const createOrganisation = async ({
  organisationName,
  typeOfOrganisation,
  uniqueSlug,
  logoId,
  colors,
}) => {
  const sql = `INSERT INTO organisations (
    organisation_name,
    type_of_organisation,
    unique_slug,
    logo_id,
    colors
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5
  ) RETURNING *`;
  const res = await query(sql, [
    organisationName,
    typeOfOrganisation,
    uniqueSlug,
    logoId,
    colors,
  ]);
  return res.rows[0];
};

const createOrganisations = async () => {
  const superAdminOrganisationData = {
    organisationName: 'Hyde',
    typeOfOrganisation: 'A',
    uniqueSlug: 'hyde',
    logoId: null,
    colors: {
      main: { h: '10', s: '0.97', l: '0.63' },
      secondary: { h: '215', s: '0.35', l: '0.35' },
      neutral: { h: '219', s: '0.25', l: '0.14' },
    },
  };
  const admin1OrganisationData = {
    ...superAdminOrganisationData,
    organisationName: 'org1',
    typeOfOrganisation: 'A',
    uniqueSlug: 'orr1-link',
    colors: {
      main: { h: '10', s: '0.97', l: '0.63' },
      secondary: { h: '215', s: '0.35', l: '0.35' },
      neutral: { h: '219', s: '0.25', l: '0.14' },
    },
  };
  const HydeOrganisation = await createOrganisation(superAdminOrganisationData);
  const organisation1 = await createOrganisation(admin1OrganisationData);

  return {
    HydeOrganisation,
    organisation1,
  };
};

export default createOrganisations;
