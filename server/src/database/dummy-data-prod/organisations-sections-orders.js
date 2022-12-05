import { query } from '../connect';

const createOrganisationsSectionsOrders = async ({
  sectionId,
  organisationId,
  position,
  hidden,
}) => {
  const sql = `INSERT INTO organisations_sections_orders (
    section_id,
    organisation_id,
    position,
    hidden
  ) VALUES (
    $1,
    $2,
    $3,
    $4
  ) RETURNING *`;
  const res = await query(sql, [sectionId, organisationId, position, hidden]);
  return res.rows[0];
};

const createOrganisationsOrders = async ({ sections, organisations }) => {
  const {
    payingForHousing,
    payingMyBills,
    payingForEssentials,
    dealingWithDebts,
    maximisingYourIncome,
    payingForHousingPrivateTenant,
    payingForHousingSocialTenant,
    payingForHousingHomeowner,
    payingForHousingSharedOwner,
  } = sections;
  const { HydeOrganisation } = organisations;

  const HydeSectionsOrders = [
    // main sections
    {
      sectionId: payingForHousing.id,
      organisationId: HydeOrganisation.id,
      position: 1,
      hidden: false,
    },
    {
      sectionId: payingMyBills.id,
      organisationId: HydeOrganisation.id,
      position: 2,
      hidden: false,
    },
    {
      sectionId: payingForEssentials.id,
      organisationId: HydeOrganisation.id,
      position: 3,
      hidden: false,
    },
    {
      sectionId: dealingWithDebts.id,
      organisationId: HydeOrganisation.id,
      position: 4,
      hidden: false,
    },
    {
      sectionId: maximisingYourIncome.id,
      organisationId: HydeOrganisation.id,
      position: 5,
      hidden: false,
    },
    // sub sections
    {
      sectionId: payingForHousingPrivateTenant.id,
      organisationId: HydeOrganisation.id,
      position: 1,
      hidden: false,
    },
    {
      sectionId: payingForHousingSocialTenant.id,
      organisationId: HydeOrganisation.id,
      position: 2,
      hidden: false,
    },
    {
      sectionId: payingForHousingHomeowner.id,
      organisationId: HydeOrganisation.id,
      position: 3,
      hidden: false,
    },
    {
      sectionId: payingForHousingSharedOwner.id,
      organisationId: HydeOrganisation.id,
      position: 4,
      hidden: false,
    },
  ];

  await Promise.all(
    HydeSectionsOrders.map((e) => createOrganisationsSectionsOrders(e)),
  );
};

export default createOrganisationsOrders;
