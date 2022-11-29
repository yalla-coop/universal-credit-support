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
    $6
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
      primaryBgMain: { h: '215', s: '0.35', l: '0.35' },
      secondaryBgMain: { h: '22', s: '0.97', l: '0.66' },
      tertiaryBgMain: { h: '46', s: '0.15', l: '0.83' },
      quartenaryBgMain: { h: '48', s: '0.41', l: '0.93' },
      quinaryBgMain: { h: '219', s: '0.25', l: '0.14' },

      primaryTextMain: { h: '0', s: '1', l: '1' },
      secondaryTextMain: { h: '219', s: '0.25', l: '0.14' },
      tertiaryTextMain: { h: '219', s: '0.25', l: '0.14' },
      quartenaryTextMain: { h: '219', s: '0.25', l: '0.14' },
      quinaryTextMain: { h: '0', s: '1', l: '1' },
      useBlockColors: false,
    },
    status: 'APPROVED',
  };
  const admin1OrganisationData = {
    ...superAdminOrganisationData,
    organisationName: 'org1',
    typeOfOrganisation: 'A',
    uniqueSlug: 'orr1-link',
    colors: {
      primaryBgMain: { h: '215', s: '0.35', l: '0.35' },
      secondaryBgMain: { h: '22', s: '0.97', l: '0.66' },
      tertiaryBgMain: { h: '46', s: '0.15', l: '0.83' },
      quartenaryBgMain: { h: '48', s: '0.41', l: '0.93' },
      quinaryBgMain: { h: '219', s: '0.25', l: '0.14' },

      primaryTextMain: { h: '0', s: '1', l: '1' },
      secondaryTextMain: { h: '219', s: '0.25', l: '0.14' },
      tertiaryTextMain: { h: '219', s: '0.25', l: '0.14' },
      quartenaryTextMain: { h: '219', s: '0.25', l: '0.14' },
      quinaryTextMain: { h: '0', s: '1', l: '1' },
      useBlockColors: false,
    },
    status: 'APPROVED',
  };
  const HydeOrganisation = await createOrganisation(superAdminOrganisationData);
  const organisation1 = await createOrganisation(admin1OrganisationData);

  return {
    HydeOrganisation,
    organisation1,
  };
};

export default createOrganisations;
