import { query } from '../connect';
import * as T from '../../constants';

const createOrganisation = async ({
  userId,
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
    user_id,
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
    $8,
    $9
  ) RETURNING *`;
  const res = await query(sql, [
    userId,
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

const createOrganisations = async (data) => {
  const superAdminOrganisationData = {
    userId: data.users.superAdmin.id,
    organisationName: 'Hyde',
    typeOfOrganisation: 'A',
    uniqueSlug: '',
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
