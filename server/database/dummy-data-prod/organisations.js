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
}) => {
  const sql = `INSERT INTO organisations (
    organisation_name,
    type_of_organisation,
    unique_slug,
    contact_links,
    benefit_calculator_link,
    benefit_calculator_label,
    logo_id,
    colors
  ) VALUES (
    $1,
    $2,
    $3,
    $4,
    $5,
    $6,
    $7,
    $8
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
      main: '#FC6244',
      secondary: '#3B557A',
      neutral: '#1A202B',
    },
  };
  const superAdminOrganisation = await createOrganisation(
    superAdminOrganisationData,
  );

  return {
    superAdminOrganisation,
  };
};

export default createOrganisations;
