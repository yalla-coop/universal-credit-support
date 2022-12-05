import { query } from '../connect';

const createOrganisation = async ({
  organisationName,
  typeOfOrganisation,
  uniqueSlug,
  logoId,
  colors,
  status,
}) => {
  const sql = `INSERT INTO organisations (
    organisation_name,
    type_of_organisation,
    unique_slug,
    logo_id,
    colors,
    status
   ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7
  ) RETURNING *`;
  const res = await query(sql, [
    organisationName,
    typeOfOrganisation,
    uniqueSlug,
    logoId,
    colors,
    status,
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
      mainHeaderBgColor: null,
      section1BgColor: { h: '215', s: '0.35', l: '0.35' },
      section2BgColor: { h: '22', s: '0.97', l: '0.66' },
      section3BgColor: { h: '46', s: '0.15', l: '0.83' },
      section4BgColor: { h: '48', s: '0.41', l: '0.93' },
      section5BgColor: { h: '219', s: '0.25', l: '0.14' },

      section1TextColor: { h: '0', s: '1', l: '1' },
      section2TextColor: { h: '219', s: '0.25', l: '0.14' },
      section3TextColor: { h: '219', s: '0.25', l: '0.14' },
      section4TextColor: { h: '219', s: '0.25', l: '0.14' },
      section5TextColor: { h: '0', s: '1', l: '1' },
    },
    status: 'APPROVED',
  };
  const HydeOrganisation = await createOrganisation(superAdminOrganisationData);

  return {
    HydeOrganisation,
  };
};

export default createOrganisations;
