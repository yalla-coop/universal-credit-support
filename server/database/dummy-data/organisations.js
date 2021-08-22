import { query } from '../connect';
import * as T from '../../constants';

const createOrganisation = async ({
  userId,
  organisationName,
  typeOfOrganisation,
  uniqueLink,
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
    unique_link,
    contact_links,
    benefit_calc_link,
    benefit_calc_label,
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
    uniqueLink,
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
    uniqueLink: '',
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
  const admin1OrganisationData = {
    ...superAdminOrganisationData,
    userId: data.users.admin1.id,
    organisationName: 'org1',
    typeOfOrganisation: 'A',
    uniqueLink: '/orr1-link',
    colors: {
      main: '#FC6244',
      secondary: '#3B557A',
      neutral: '#1A202B',
    },
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
