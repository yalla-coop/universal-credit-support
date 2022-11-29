import { query } from '../connect';
import * as T from '../../constants';

const createOrganisation = async ({
  organisationName,
  typeOfOrganisation,
  uniqueSlug,
  contactLinks,
  benefitCalcLink,
  benefitCalcLabel,
  logoId,
  colors,
  status,
}) => {
  const sql = `INSERT INTO organisations (
    organisation_name,
    type_of_organisation,
    unique_slug,
    contact_links,
    benefit_calculator_link,
    benefit_calculator_label,
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
    $7,
    $8,
    $9
  ) RETURNING *`;
  const res = await query(sql, [
    organisationName,
    typeOfOrganisation,
    uniqueSlug,
    contactLinks,
    benefitCalcLink,
    benefitCalcLabel,
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
    contactLinks: [
      {
        type: T.contactLinksTypes.PHONE,
        availability: 'Monday to Friday (9am to 5pm)',
        description: '',
        link: '',
      },
    ],
    benefitCalcLink: '',
    benefitCalcLabel: '',
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
  const superAdminOrganisation = await createOrganisation(
    superAdminOrganisationData,
  );
  const admin1Organisation = await createOrganisation(admin1OrganisationData);

  return {
    superAdminOrganisation,
    admin1Organisation,
  };
};

export default createOrganisations;
