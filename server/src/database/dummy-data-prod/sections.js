import { query } from '../connect';

const createSections = async ({ parentSectionId, title, defaultPosition }) => {
  const sql = `INSERT INTO sections (
    parent_section_id,
    title,
    default_position
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *`;
  const res = await query(sql, [parentSectionId, title, defaultPosition]);
  return res.rows[0];
};

const addSections = async () => {
  const payingForHousing = await createSections({
    title: 'Paying for **housing**',
    defaultPosition: 1,
  });
  const payingMyBills = await createSections({
    title: 'Paying my **bills**',
    defaultPosition: 2,
  });
  const payingForEssentials = await createSections({
    title: 'Paying for **essentials** (Food, medication, transport)',
    defaultPosition: 3,
  });
  const dealingWithDebts = await createSections({
    title: 'Dealing with **debts**',
    defaultPosition: 4,
  });
  const maximisingYourIncome = await createSections({
    title: 'Maximising your **income**',
    defaultPosition: 5,
  });
  const payingForHousingPrivateTenant = await createSections({
    title: 'Private tenant',
    parentSectionId: payingForHousing.id,
    defaultPosition: 1,
  });
  const payingForHousingSocialTenant = await createSections({
    title: 'Social tenant',
    parentSectionId: payingForHousing.id,
    defaultPosition: 2,
  });
  const payingForHousingHomeowner = await createSections({
    title: 'Home owner',
    parentSectionId: payingForHousing.id,
    defaultPosition: 3,
  });
  const payingForHousingSharedOwner = await createSections({
    title: 'Shared owner',
    parentSectionId: payingForHousing.id,
    defaultPosition: 4,
  });

  return {
    payingForHousing,
    payingMyBills,
    payingForEssentials,
    dealingWithDebts,
    maximisingYourIncome,
    payingForHousingPrivateTenant,
    payingForHousingSocialTenant,
    payingForHousingHomeowner,
    payingForHousingSharedOwner,
  };
};

export default addSections;
